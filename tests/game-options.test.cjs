'use strict';
const assert=require('node:assert/strict');
const G=require('../dist/game-core.js'),T=require('../dist/timed-orders.js'),A=require('../dist/achievements.js'),Account=require('../dist/account.js'),Reviews=require('../dist/customer-reviews.js'),Layout=require('../dist/store-layout.js'),M=require('../dist/misplaced-products.js'),Prices=require('../dist/prices.js');
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);},eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);};
const orders=G.createCampaign([50,50,50,50]),order=orders[0];
for(let levelIndex=0;levelIndex<4;levelIndex++){
 const o={...order,levelIndex},normal=T.create(o,'timer','run-a'),challenge=T.create(o,'challenge','run-a');
 ok(normal.limitMs>challenge.limitMs&&challenge.limitMs>0,'Every level offers a strictly faster fixed challenge');
 eq(T.limit(o,'off'),0,'Untimed level has no hidden duration');
 const tampered={...normal,limitMs:1,elapsedMs:1234,started:true};
 const restored=T.normalize(JSON.parse(JSON.stringify(tampered)),o,'timer','run-b');
 eq(restored.limitMs,normal.limitMs,'A saved or tampered duration is replaced with the game-assigned limit');eq(restored.elapsedMs,1234,'Reload preserves elapsed active play');
 eq(T.advance(normal,1000),normal,'Preparing bags before starting does not consume time');
 const running=T.advance(T.start(normal),3000),finished=T.finish(running);
 eq(T.outcome(running).onTime,false,'An unfinished order cannot earn a timer reward');ok(T.outcome(finished).onTime,'A finished in-time order qualifies');
 eq(T.advance(finished,4000),finished,'A finished order cannot continue consuming time');
 eq(T.outcome(T.finish(T.advance(T.start(normal),normal.limitMs))).onTime,false,'Reaching the exact limit counts as late');
 eq(T.outcome(T.finish(T.start(T.create(o,'off')))).timed,false,'Untimed play never becomes a timed result');
 eq(T.normalize({...normal,elapsedMs:Infinity},o,'timer').elapsedMs,0,'Malformed elapsed values cannot poison the clock');
}
let timing=A.normalize();
const timeEvent=(key,detail={})=>{timing=A.record(timing,{type:'timed',key,day:1,orderKey:key,timed:true,timingMode:'timer',elapsedMs:1000,limitMs:10000,stars:3,clean:true,...detail},1).state;};
timeEvent('untimed',{timed:false,timingMode:'off'});timeEvent('late',{elapsedMs:10000});timeEvent('incorrect',{clean:false,stars:1});
eq(timing.counters.timedOrders,0,'Untimed, late and incorrect orders never increment timer achievements');
timeEvent('correct');eq(timing.counters.timedOrders,1,'A clean in-time order counts');
timeEvent('replay',{orderKey:'correct',timingMode:'challenge'});eq(timing.counters.timedOrders,1,'Changing mode cannot farm the same completed order');eq(timing.counters.challenges,0,'Replaying a normal timed order as challenge does not award challenge credit');
timeEvent('late-streak',{elapsedMs:20000});eq(timing.counters.timedStreak,0,'A late delivery resets the timed streak');
timeEvent('challenge',{timingMode:'challenge'});eq(timing.counters.challenges,1,'A distinct clean challenge counts');
timeEvent('bad-streak',{clean:false});eq(timing.counters.timedStreak,0,'A wrong delivery resets the timed streak');
let account=Account.normalize();const money=(key,kind,amount,reason='salary')=>{const before=JSON.stringify(account),r=Account.record(account,{key,kind,amount,reason,number:1,day:1,customer:'Ану'});eq(JSON.stringify(account),before,'Ledger recording is immutable');account=r.state;return r.added;};
ok(money('first-disorder','fine',1500,'disorder'),'A disorder fine is recorded');eq(Account.summary(account).balance,-1500,'Fines can make the account negative before any wages');
ok(money('salary-1','pay',1000),'The completed order earns wages');eq(Account.summary(account).balance,-500,'Wages offset a negative balance');
ok(!money('salary-1','pay',1000),'Duplicate completion does not pay twice');
money('quality-1','fine',1000,'quality');money('missing-1','fine',12000,'missing');
eq(Account.summary(account),{balance:-13500,earned:1000,fines:14500,largestFine:12000,paid:1},'Wages, fines and biggest fine remain distinct');eq(Account.normalize(JSON.parse(JSON.stringify(account))),account,'Ledger survives save/reload');
for(const malformed of [{key:'bad',kind:'pay',amount:-1},{key:'bad',kind:'pay',amount:NaN},{key:'bad',kind:'credit',amount:1},{key:'bad',kind:'pay',amount:1.5}])ok(!Account.record(account,malformed).added,'Malformed money cannot enter the account');
const many=Array.from({length:2005},(_,i)=>({key:'archived-'+i,kind:i%2?'pay':'fine',amount:1000,reason:i%2?'salary':'quality'}));const archived=Account.normalize({entries:many});
eq(archived.entries.length,2000,'Long history is bounded');eq(Account.summary(archived).balance,-1000,'Archiving retains the entire financial balance');eq(Account.summary(archived).earned,1002000,'Archiving retains lifetime earnings');eq(Account.summary(archived).fines,1003000,'Archiving retains lifetime fines');ok(!Account.record(archived,many[0]).added,'An archived entry cannot be paid or fined twice');
let hasPositive=false,hasNegative=false,hasNone=false;
for(let seed=1;seed<=200;seed++){
 const positive=Reviews.finish(null,{key:'order-1',seed,order}),negative=Reviews.finish(null,{key:'order-1',seed,order,reason:'missing'});
 eq(positive,Reviews.finish(null,{key:'order-1',seed,order}),'Review outcome is stable for a saved shift');eq(Boolean(positive.review),Boolean(negative.review),'Correctness changes review type rather than inventing a second chance');
 if(!positive.review){hasNone=true;eq(Reviews.finish(JSON.parse(JSON.stringify(positive.state)),{key:'order-1',seed:seed+1,order}).review,null,'A no-review outcome cannot reroll on reload');continue;}
 hasPositive=true;hasNegative=true;eq(positive.review.type,'positive','A correct order produces a positive review');eq(negative.review.type,'negative','A missing item produces a negative review');ok(positive.review.mn&&positive.review.ru&&negative.review.mn&&negative.review.ru,'Both SMS types contain Mongolian and Russian text');eq(Reviews.finish(positive.state,{key:'order-1',seed,order}).review,null,'A completed order cannot send another review');
 const read=Reviews.read(positive.state);ok(read.reviews.every(r=>r.read),'Reading SMS clears its unread state');eq(Reviews.read(read),read,'Read receipts survive repeated opening');
}
ok(hasPositive&&hasNegative&&hasNone,'Reviews can be positive, negative, or absent');
for(const reason of ['expired','damaged','spoiled']){const r=Array.from({length:20},(_,i)=>Reviews.finish(null,{key:'reason-'+reason,seed:i+1,order,reason})).find(v=>v.review).review;eq([r.mn,r.ru],Reviews.NEGATIVE[reason],'Quality reviews describe the actual delivered error');}
for(const seed of [1,2,17,100]){
 let s=Layout.normalize(),since=0,last=s.index,changed=0;
 for(let i=0;i<20;i++){since++;const before=JSON.stringify(s),next=Layout.next(s,seed+i);eq(JSON.stringify(s),before,'Generating the next layout is immutable');eq(Layout.normalize(JSON.parse(JSON.stringify(next))),next,'Reload/resume normalizes without advancing layout cadence');if(next.index!==last){ok(since===3||since===4,'Store layout changes only after three or four new starts');changed++;since=0;last=next.index;}s=next;}
 ok(changed>=5,'Layout keeps rotating across many shifts');
}
const base=Object.fromEntries(['meat','dairy','bread','pantry','canned','produce','ready','drinks'].map((id,i)=>[id,{x:id==='produce'?-6:id==='ready'?6:i,z:0,to:[id==='produce'?-6:id==='ready'?6:i,1],type:id==='meat'?'cold':'rack'}]));
for(let index=0;index<4;index++){const before=JSON.stringify(base),zones=Layout.arrange(base,{index});eq(JSON.stringify(base),before,'Layout generation does not mutate base fixtures');eq(new Set(Layout.BACK[index].map(id=>zones[id].x)).size,5,'Back rack slots stay distinct');for(const id of Object.keys(zones)){eq(zones[id].x,zones[id].to[0],'Rack destination follows its actual physical position');eq(zones[id].type,base[id].type,'Cold storage stays with its department');}}
let misplacedCase;
for(let seed=1;seed<=200&&!misplacedCase;seed++){const inventory=G.createInventory({...order,qualitySeed:seed}),added=M.add(inventory,order,seed),lot=added.find(l=>l.misplaced);if(lot)misplacedCase={inventory:added,lot,seed};}
ok(misplacedCase,'Some saved shifts include a misplaced item');
const {inventory,lot,seed}=misplacedCase,state=M.normalize(null,inventory),held=M.normalize({carrying:lot.id},inventory);
ok(!M.canReturn(lot,state,lot.correctDepartment),'Merely seeing the product cannot count as returning it');ok(!M.canReturn(lot,held,lot.displayDepartment),'Carrying the item at the wrong rack gives no return credit');ok(M.canPlace(lot,held,lot.displayDepartment,inventory),'A wrong physical placement is allowed for the disorder penalty');ok(M.canReturn(lot,held,lot.correctDepartment),'Carrying the item to its correct department can complete the return');
eq(M.department(lot,state),lot.displayDepartment,'Misplaced item appears on its actual wrong rack');
const wrong=M.normalize({...held,carrying:null,placed:{[lot.id]:'pantry'}},inventory);eq(M.department(lot,wrong),'pantry','A wrong placement is restored on that shelf after reload');
const returned=M.normalize({...held,returned:[lot.id]},inventory);eq(returned.carrying,null,'Returned item cannot remain in the player’s hands');eq(M.department(lot,returned),null,'A returned item resumes its product category');
eq(M.normalize({carrying:'fake',returned:['fake'],placed:{fake:'bread'}},inventory),state,'Malformed carried and placed IDs are discarded');
eq(M.add(inventory.filter(l=>!l.misplaced),{...order,legacy:true},seed).some(l=>l.misplaced),false,'Archived games do not receive new physical side quests');
let badLevels=0,freshLevels=0,seededSales=0,noSales=0;
for(let qualitySeed=1;qualitySeed<=100;qualitySeed++){
 const o={...order,qualitySeed},lots=G.createInventory(o),bad=lots.filter(l=>!l.hidden&&G.isUnfit(l,o.day));
 if(bad.length)badLevels++;else freshLevels++;
 ok(bad.length<=1,'Level one has at most one random poor-quality lot');eq(lots,G.createInventory(o),'Quality does not reroll within the saved shift');
 for(const line of o.lines)ok(lots.some(l=>!l.hidden&&l.productId===line.productId&&!G.isUnfit(l,o.day)&&l.pack*l.stock>=line.amount),'Every requested first-level item still has enough fresh stock');
 Prices.setDay(1,qualitySeed);const offer=Prices.offerForDay();eq(Prices.offerForDay(),offer,'Saved sale day is stable');const discounted=lots.filter(l=>Prices.quote(l)?.sale);
 if(offer.available){seededSales++;ok(discounted.length>0,'A sale day has actual discounted shelf lots');const html=Prices.html(discounted[0],true);ok(html.includes('<del')&&html.includes('sale-percent'),'Sale labels include old price, new price and percentage');}
 else {noSales++;eq(discounted.length,0,'A non-sale day has no fake discounted tags');}
}
ok(badLevels>0&&freshLevels>0,'Level one can have poor stock or be entirely fresh');ok(seededSales>0&&noSales>0,'New game days can have discounts or no discounts');Prices.setDay(1,0);
console.log(`PASS: ${checks} fixed timer, no false timer awards, financial ledger, random SMS feedback, layout cadence, physical returns and beginner quality/sale checks.`);
