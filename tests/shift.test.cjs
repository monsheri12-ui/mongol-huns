'use strict';
const assert=require('node:assert/strict'),G=require('../dist/game-core.js'),S=require('../dist/play-session.js');
let checks=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);};
for(const counts of [[5,5,5,5],[5,9,17,50],[50,50,50,50]]){
  const orders=G.createCampaign(counts),bests=orders.map(()=>0),seen=new Set();let previousLevel=0;
  while(true){const next=S.next(orders,bests,{scope:'all'});if(next<0)break;assert.ok(!seen.has(orders[next].id));assert.ok(orders[next].levelIndex>=previousLevel);previousLevel=orders[next].levelIndex;seen.add(orders[next].id);bests[next]=3;checks+=2;}
  eq(seen.size,counts.reduce((a,b)=>a+b),'Full shift visits every configured order once');eq(S.progress(orders,bests,{scope:'all'}).done,orders.length,'All four stages finish');
  for(let level=0;level<4;level++){
    const clean=orders.map(()=>0),indexes=S.indexes(orders,{scope:'level',level});
    eq(indexes.length,counts[level],'Single level uses its own order count');
    for(const index of indexes){eq(S.next(orders,clean,{scope:'level',level}),index,'Single-level sequence never leaks to another level');clean[index]=2;}
    eq(S.next(orders,clean,{scope:'level',level}),-1,'Level completion has a real boundary');
  }
  const draftIndex=orders.findIndex(o=>o.levelIndex===2);
  eq(S.start(orders,orders.map(()=>0),{scope:'all'},draftIndex,true),draftIndex,'An existing collected cart resumes without resetting');
  eq(S.start(orders,orders.map(()=>0),{scope:'level',level:1},draftIndex,true),orders.findIndex(o=>o.levelIndex===1),'Explicit single-level choice selects that level');
}
eq(S.normalize({scope:'invalid',level:-1}),{scope:'all',level:0},'Malformed stored scope is safe');
const existing={'campaign:1':3,'campaign:2':2,'classic:101':1,'bad':3,'campaign:3':-2};
let market=S.normalizeMarket(undefined,existing);
eq(market,{day:1,completed:{'campaign:1':3,'campaign:2':2,'classic:101':1},closed:false,totalCompleted:3,scheduleSeed:0,orderNumbers:{},previousStarts:{},previousCustomer:'',previousStartCustomer:'',lastCustomer:''},'Existing valid results migrate into the first day without changing bests');
const original=JSON.stringify(existing),orders=G.createCampaign([5,5,5,5]),all={scope:'all'};
eq(S.nextDay(market),market,'An unfinished shift cannot change the day');
eq(S.closeDay(market,orders,'campaign',all).closed,false,'An unfinished full shift remains the same day');
for(let i=0;i<5;i++)market=S.recordCompletion(market,`campaign:${orders[i].id}`,3);
eq(market.totalCompleted,6,'Migrated and newly fulfilled orders are counted once');
eq(S.closeDay(market,orders,'campaign',all).closed,false,'Finishing level one inside a full shift does not end the day');
eq(S.closeDay(market,orders,'campaign',{scope:'level',level:0},true).closed,false,'Pending complaints block day completion');
market=S.closeDay(market,orders,'campaign',{scope:'level',level:0});
eq(market.closed,true,'A complete single-level shift ends the day');
eq(S.normalizeMarket(JSON.parse(JSON.stringify(market))),market,'Reload and pause preserve both the day and the completion boundary');
const total=market.totalCompleted,previous=market;
market=S.nextDay(market);
eq(market.day,2,'Starting after a finished shift advances exactly one day');
eq(market.completed,{},'The new day has its own unfulfilled order list');
eq(market.totalCompleted,total,'All-time fulfilled count survives a day change');
eq(S.nextDay(market),market,'Repeated start clicks cannot skip multiple days');
eq(JSON.stringify(existing),original,'Historical best stars are never modified by day operations');
eq(previous.completed['campaign:1'],3,'Prior day state is immutable');
for(const order of orders)market=S.recordCompletion(market,`campaign:${order.id}`,2);
market=S.closeDay(market,orders,'campaign',all);
eq(market.closed,true,'Completing all four stages ends a full-shift day');
eq(market.totalCompleted,total+orders.length,'Replaying the next day continues the overall count');
const repeat=S.recordCompletion(market,`campaign:${orders[0].id}`,3);
eq(repeat.totalCompleted,market.totalCompleted,'A manual replay of a fulfilled order does not double count');
eq(repeat.completed[`campaign:${orders[0].id}`],3,'A replay can improve this day’s stars');
eq(S.normalizeMarket({day:-5,completed:{},totalCompleted:-9}).day,1,'Invalid saved day is normalized');
for(const counts of [[5,5,5,5],[50,50,50,50]])for(const scope of [all,...[0,1,2,3].map(level=>({scope:'level',level}))]){
 const list=G.createCampaign(counts);let day=S.normalizeMarket();
 const route=S.indexes(list,scope);
 for(let i=0;i<route.length;i++){
  day=S.recordCompletion(day,`campaign:${list[route[i]].id}`,3);
  day=S.closeDay(day,list,'campaign',scope);
  eq(day.closed,i===route.length-1,'Every supported shift ends only on its final selected order');
 }
 eq(S.nextDay(day).day,2,'Every supported completed shift permits a new day');
}
for(const counts of [[5,5,5,5],[17,18,33,34],[49,50,16,32]])for(const scope of [all,...[0,1,2,3].map(level=>({scope:'level',level}))])for(const seed of [1,17,20261111]){
 const list=G.createCampaign(counts),unchanged=JSON.stringify(list);let state=S.normalizeMarket(undefined,{},seed),previousFirst=null,previousLast=null;
 for(let day=1;day<=4;day++){
  const route=S.indexes(list,scope,state),first=list[route[0]],last=list[route.at(-1)];
  eq(new Set(route).size,route.length,'A randomized day never repeats an order');
  eq([...route].sort((a,b)=>a-b),S.indexes(list,scope),'Random scheduling uses the exact selected catalogue');
  eq(S.indexes(list,scope,S.normalizeMarket(JSON.parse(JSON.stringify(state)),{},123456)),route,'Reload preserves the saved random schedule instead of rerolling');
  if(previousFirst){eq(first.id!==previousFirst.id,true,'The next day starts with a different order');eq(first.customer!==previousFirst.customer,true,'The next day starts with a different name');eq(first.customer!==previousLast.customer,true,'The next day does not begin with the last served client');}
  eq(S.start(list,S.dayBests(state,list,'campaign'),scope,route[1],true,state),route[1],'A partly collected randomized order resumes in place');
  for(const index of route)state=S.recordCompletion(state,`campaign:${list[index].id}`,3,list[index].customer);
  eq(S.indexes(list,scope,state),route,'Finishing orders cannot reshuffle the remaining day');
  state=S.closeDay(state,list,'campaign',scope);eq(state.closed,true,'Random shifts retain the same completion boundary');
  state=S.nextDay(state,list,'campaign',scope);previousFirst=first;previousLast=last;
 }
 eq(JSON.stringify(list),unchanged,'Random scheduling never edits a spoken order, customer, amount or signature');
}
for(const count of [5,50]){
 const list=G.createCampaign([count,count,count,count]),firsts=new Set();
 for(let seed=1;seed<=64;seed++){const fresh=S.normalizeMarket(undefined,{},seed);firsts.add(list[S.next(list,[],all,fresh)].id);}
 eq(firsts.size>=Math.min(4,count),true,'Fresh games choose varied first orders instead of a fixed first customer');
}
let numbering=S.normalizeMarket(undefined,{},52),firstOriginal=orders[3],secondOriginal=orders[1];
const firstBefore=JSON.stringify(firstOriginal),preview=S.numberOrder(numbering,'campaign',firstOriginal,0,false);
eq(preview.order.number,1,'A random catalogue order previews as the first visible order');
eq(preview.market.orderNumbers,{},'Browsing difficulties before starting does not consume order numbers');
let numbered=S.numberOrder(numbering,'campaign',firstOriginal);numbering=numbered.market;
eq(numbered.order.number,1,'The first received order is001 regardless of the audio catalogue ID');
eq(G.orderSignature(numbered.order),G.orderSignature(firstOriginal),'Renumbering keeps its exact spoken signature');
eq(G.createInventory(numbered.order),G.createInventory(firstOriginal),'Renumbering leaves every saved product lot unchanged');
eq(JSON.stringify(firstOriginal),firstBefore,'Renumbering never mutates the original corpus');
eq(S.numberOrder(numbering,'campaign',secondOriginal).order.number,2,'The next received order is002');
eq(S.numberOrder(S.normalizeMarket(JSON.parse(JSON.stringify(numbering))),'campaign',firstOriginal).order.number,1,'Pause and reload preserve the assigned number');
eq(S.numberOrder(numbering,'campaign',firstOriginal).market,numbering,'Reopening a received order does not increment the counter');
const reset=S.nextDay({...numbering,closed:true},orders,'campaign',all);
eq(S.numberOrder(reset,'campaign',secondOriginal).order.number,1,'A new game day starts numbering from001');
let migratedNumber=S.numberOrder(S.normalizeMarket(),'campaign',firstOriginal,20);
eq(migratedNumber.order.number,20,'An already labelled old saved order keeps its number');
eq(S.numberOrder(migratedNumber.market,'campaign',secondOriginal).order.number,21,'The next order follows the migrated number');
console.log(`PASS: ${checks} daily shifts, random first customers, unchanged spoken orders, sequence, boundaries and resume checks.`);
