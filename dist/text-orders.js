/* Expanded written orders have their own saved progress; recorded speech stays intact. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryTextOrders=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const CUSTOMERS=['Номин','Ану','Бат','Саруул','Энхжин','Тэмүүлэн','Хулан','Дөлгөөн','Мөнх','Марал','Билгүүн','Солонго','Оюун','Болд','Ариун','Туул'];
 function createCampaign(G,counts=[5,5,5,5],seed=G.DEFAULT_SEED){
  let state=Number(seed)>>>0;const random=()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/4294967296);
  const queues=[G.shuffle(G.SUPPLEMENTAL_PRODUCTS,seed^371),G.shuffle(G.PRODUCTS,seed^871)],cursors=[0,0],signatures=new Set(),master=[];
  function take(queue,chosen,eligible){const list=queues[queue];for(let n=0;n<list.length;n++){const p=list[cursors[queue]++%list.length];if(eligible(p)&&!chosen.some(v=>v.id===p.id))return p;}throw Error('No eligible text-order product');}
  for(let level=0;level<4;level++)for(let ordinal=0;ordinal<50;ordinal++){
   const eligible=p=>level!==1||p.hasExpiry!==false&&!(p.category==='produce'&&p.soldByWeight);
   let order;
   for(let attempt=0;attempt<1000;attempt++){
    const chosen=[],count=level===0?3:level===1?3+Math.floor(random()*2):4+Math.floor(random()*(level===3?3:2));let preference;
    if(level===3){
     if(ordinal%2===0){const p=G.BY_ID[ordinal%4===0?'green-apple':'red-apple'];chosen.push(p);preference={kind:'color',productId:p.id,text:p.name+' авъя.'};}
     else {const v=G.BREAD_VARIANTS[Math.floor(ordinal/2)%G.BREAD_VARIANTS.length];chosen.push(G.BY_ID[v.productId]);preference={kind:'brand',productId:v.productId,variantId:v.id,text:v.name+' авъя.'};}
    }
    const newCount=level===3?1:2;for(let n=0;n<newCount;n++)chosen.push(take(0,chosen,eligible));
    while(chosen.length<count)chosen.push(take(1,chosen,eligible));
    const lines=chosen.map((p,i)=>({productId:p.id,amount:p.pack*(level<2?1:2+Math.floor(random()*2)),...(i===0&&preference?.variantId?{variantId:preference.variantId}:{})}));
    const signature=G.orderSignature({lines});if(signatures.has(signature))continue;signatures.add(signature);
    order={id:1001+level*100+ordinal,levelIndex:level,level:level+1,stageId:G.LEVELS[level].id,levelOrderIndex:ordinal,levelNumber:ordinal+1,customer:CUSTOMERS[(ordinal+level*3+(seed>>>0)%CUSTOMERS.length)%CUSTOMERS.length],title:G.LEVELS[level].name,message:preference?.text||(level===1?'Барааны хугацааг сайн шалгаарай.':'Жагсаалтын дагуу бэлтгэж өгнө үү.'),day:G.DAY,lines,signature,textOnly:true,...(preference?{preference}:{})};break;
   }
   if(!order)throw Error('Unable to construct unique written orders');master.push(order);
  }
  const normalized=G.normalizeCounts(counts);
  return master.filter(o=>o.levelNumber<=normalized[o.levelIndex]).map((o,i)=>({...o,lines:o.lines.map(l=>({...l})),number:i+1,campaignIndex:i,levelCount:normalized[o.levelIndex]}));
 }
 function createInventory(G,order){
  const recorded=new Set(G.ORDER_PRODUCTS.map(p=>p.id)),inventory=G.createInventory({...order,lines:order.lines.filter(l=>recorded.has(l.productId))});
  for(const line of order.lines.filter(l=>!recorded.has(l.productId))){
   const lot=inventory.find(l=>l.productId===line.productId);if(!lot)throw Error('Unstocked written-order product');
   lot.stock=Math.max(lot.stock,Math.ceil(line.amount/lot.pack)+1);
   if(order.levelIndex>=1&&lot.expires){inventory.push({...lot,id:lot.id+'-expired',manufactured:G.addDays(order.day,-30),expires:G.addDays(order.day,-2),stock:Math.max(3,lot.stock),batch:lot.batch+'E'});}
  }
  return inventory;
 }
 function createGeneratedCampaign(G,counts,seed,generation){
  return createCampaign(G,counts,seed).map(order=>({...order,id:1000000+generation*1000+order.levelIndex*100+order.levelOrderIndex+1}));
 }
 function createFreshCampaign(G,counts,seed,generation,history=[]){
  const seen=new Set(history);let candidateSeed=seed>>>0;
  for(let attempt=0;attempt<256;attempt++){
   const orders=createGeneratedCampaign(G,counts,candidateSeed,generation);
   if(orders.every(o=>!seen.has(G.orderSignature(o))))return {seed:candidateSeed,orders};
   candidateSeed=(Math.imul(candidateSeed,1664525)+1013904223)>>>0;
  }
  throw new Error('Unable to generate a fresh written order deck');
 }
 return {createCampaign,createGeneratedCampaign,createFreshCampaign,createInventory};
});
