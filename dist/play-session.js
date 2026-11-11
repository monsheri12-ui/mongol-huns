/* A shift can span all four levels or stay on one selected level. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryShift=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const normalize=input=>({scope:input?.scope==='level'?'level':'all',level:Math.max(0,Math.min(3,Number.isInteger(input?.level)?input.level:0))});
  const levelOf=order=>Number.isInteger(order.levelIndex)?order.levelIndex:Math.max(0,(order.level||1)-1);
  // Only the sequence changes. Original names, quantities and recordings stay together.
  function indexes(orders,settings,market,mode='campaign'){
    const s=normalize(settings),selected=orders.map((o,i)=>({o,i})).filter(({o})=>s.scope==='all'||levelOf(o)===s.level).map(({i})=>i);
    if(selected.every(i=>Number.isInteger(orders[i].rotationIndex))||!market||market.day===1&&!market.scheduleSeed)return selected;
    const groups=new Map();for(const i of selected){const level=levelOf(orders[i]);if(!groups.has(level))groups.set(level,[]);groups.get(level).push(i);}
    return [...groups].flatMap(([level,list])=>{
      let state=((market.scheduleSeed||0)^Math.imul(market.day,0x9e3779b1)^Math.imul(level+1,0x85ebca6b)^([...mode].reduce((n,c)=>Math.imul(n,31)+c.charCodeAt(0),0)))>>>0;
      const route=[...list];
      for(let i=route.length-1;i>0;i--){state=(Math.imul(state,1664525)+1013904223)>>>0;const j=state%(i+1);[route[i],route[j]]=[route[j],route[i]];}
      const previous=market.previousStarts?.[`${mode}:${level}`],excluded=new Set([previous?.customer,market.previousStartCustomer,market.previousCustomer].filter(Boolean));
      let first=route.findIndex(i=>orders[i].id!==previous?.id&&!excluded.has(orders[i].customer));
      if(first<0)first=route.findIndex(i=>orders[i].id!==previous?.id);
      return first>0?[...route.slice(first),...route.slice(0,first)]:route;
    });
  }
  function progress(orders,bests,settings){const selected=indexes(orders,settings);return {done:selected.filter(i=>bests[i]>0).length,total:selected.length,levels:[0,1,2,3].map(level=>{const group=orders.map((o,i)=>({o,i})).filter(({o})=>levelOf(o)===level);return {level,done:group.filter(({i})=>bests[i]>0).length,total:group.length};})};}
  function next(orders,bests,settings,market,mode='campaign'){return indexes(orders,settings,market,mode).find(i=>!bests[i])??-1;}
  function start(orders,bests,settings,currentIndex,preserveDraft=false,market,mode='campaign'){const selected=indexes(orders,settings,market,mode);if(preserveDraft&&selected.includes(currentIndex))return currentIndex;return next(orders,bests,settings,market,mode);}
  const validKey=key=>/^(campaign|text|classic|legacy):\d+$/.test(key);
  function normalizeMarket(input,legacyBests={},freshSeed=0){
    const hasState=!!input&&typeof input==='object'&&!Array.isArray(input);
    const raw=hasState?input.completed:legacyBests;
    const completed=Object.fromEntries(Object.entries(raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{}).filter(([key,n])=>validKey(key)&&Number.isInteger(n)&&n>=1&&n<=3));
    const minimum=Object.keys(completed).length;
    const cleanName=value=>typeof value==='string'?value.slice(0,100):'';
    const previousStarts=Object.fromEntries(Object.entries(input?.previousStarts&&typeof input.previousStarts==='object'?input.previousStarts:{}).filter(([key,o])=>/^(campaign|text|classic|legacy):[0-3]$/.test(key)&&Number.isSafeInteger(o?.id)&&o.id>0).map(([key,o])=>[key,{id:o.id,customer:cleanName(o.customer)}]));
    const orderNumbers=Object.fromEntries(Object.entries(input?.orderNumbers&&typeof input.orderNumbers==='object'?input.orderNumbers:{}).filter(([key,n])=>validKey(key)&&Number.isSafeInteger(n)&&n>0&&n<=999999));
    return {day:Number.isSafeInteger(input?.day)&&input.day>=1?input.day:1,completed,closed:hasState&&input.closed===true,totalCompleted:Number.isSafeInteger(input?.totalCompleted)&&input.totalCompleted>=minimum?input.totalCompleted:minimum,scheduleSeed:Number.isSafeInteger(input?.scheduleSeed)&&input.scheduleSeed>=0&&input.scheduleSeed<=0xffffffff?input.scheduleSeed:freshSeed>>>0,orderNumbers,previousStarts,previousCustomer:cleanName(input?.previousCustomer),previousStartCustomer:cleanName(input?.previousStartCustomer),lastCustomer:cleanName(input?.lastCustomer)};
  }
  function numberOrder(market,mode,original,oldNumber=0,receive=true){
    const key=`${mode}:${original.id}`,saved=market.orderNumbers[key];
    const number=saved||(Number.isSafeInteger(oldNumber)&&oldNumber>0&&oldNumber<=999999?oldNumber:Math.max(0,...Object.values(market.orderNumbers))+1);
    return {market:receive&&!saved?{...market,orderNumbers:{...market.orderNumbers,[key]:number}}:market,order:{...original,number}};
  }
  function dayBests(market,orders,mode){return orders.map(o=>market.completed[`${mode}:${o.id}`]||0);}
  function recordCompletion(market,key,stars,customer){
    if(!validKey(key)||!Number.isInteger(stars)||stars<1||stars>3)return market;
    return {...market,totalCompleted:market.totalCompleted+(market.completed[key]?0:1),completed:{...market.completed,[key]:Math.max(stars,market.completed[key]||0)},lastCustomer:typeof customer==='string'?customer.slice(0,100):market.lastCustomer};
  }
  function closeDay(market,orders,mode,settings,pending=false){
    if(market.closed||pending||!indexes(orders,settings).length||next(orders,dayBests(market,orders,mode),settings,market,mode)>=0)return market;
    return {...market,closed:true};
  }
  function nextDay(market,orders=[],mode='campaign',settings={scope:'all'}){
    if(!market.closed||market.day>=Number.MAX_SAFE_INTEGER)return market;
    const previousStarts={...market.previousStarts};
    for(const level of [0,1,2,3]){const first=indexes(orders,{scope:'level',level},market,mode)[0];if(first!==undefined)previousStarts[`${mode}:${level}`]={id:orders[first].id,customer:orders[first].customer};}
    const first=indexes(orders,settings,market,mode)[0];
    return {...market,day:market.day+1,completed:{},orderNumbers:{},closed:false,previousStarts,previousCustomer:market.lastCustomer,previousStartCustomer:first!==undefined?orders[first].customer:market.previousStartCustomer};
  }
  return {normalize,indexes,progress,next,start,levelOf,normalizeMarket,numberOrder,dayBests,recordCompletion,closeDay,nextDay};
});
