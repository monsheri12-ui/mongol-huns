'use strict';
const assert=require('node:assert/strict'),G=require('../dist/game-core.js'),T=require('../dist/text-orders.js'),S=require('../dist/play-session.js'),D=require('../dist/order-rotation.js');
let checks=0;const ok=(value,message)=>{checks++;assert.ok(value,message);},eq=(a,b,message)=>{checks++;assert.deepEqual(a,b,message);};
for(const mode of ['campaign','text']){
 const full=mode==='text'?T.createCampaign(G,[50,50,50,50]):G.createCampaign([50,50,50,50]),original=JSON.stringify(full);
 for(const count of [5,17,50])for(let level=0;level<4;level++){
  const counts=[count,count,count,count],firsts=new Set();let state=D.normalize(),last=null;
  for(let run=0;run<50;run++){
   state=D.plan(state,full,counts,mode,run+137);
   const orders=D.select(full,counts,state,mode),selected=S.indexes(orders,{scope:'level',level},S.normalizeMarket(undefined,{},run+1),mode),first=orders[selected[0]];
   eq(orders.length,count*4,'Every shift keeps exactly the selected count on all four levels');
   eq(new Set(orders.map(o=>o.id)).size,orders.length,'A shift never repeats an order');
   ok(!firsts.has(first.id),'New games receive each of the fifty orders before repeating');firsts.add(first.id);
   if(last&&firsts.size<49)ok(first.customer!==last.customer,'A fresh order also changes the customer when an unused alternative exists');
   eq(S.start(orders,orders.map(()=>0),{scope:'level',level},selected[2],true,S.normalizeMarket(),mode),selected[2],'Continue preserves the exact order instead of advancing the deck');
   for(const o of orders){const source=full.find(item=>item.id===o.id);eq(G.orderSignature(o),G.orderSignature(source),'Names, products, amounts and recording signatures remain paired');}
   state=D.received(state,mode,first);last=first;
   eq(D.normalize(JSON.parse(JSON.stringify(state))),state,'The deck and received history survive a full save/reload');
  }
  eq(firsts.size,50,'All fifty orders are available even when the shift length is five');
  state=D.plan(state,full,counts,mode,10001);const next=D.select(full,counts,state,mode).find(o=>o.levelIndex===level);
  ok(next.id!==last.id,'The next cycle does not immediately repeat its last order');
 }
 eq(JSON.stringify(full),original,'Rotation never mutates the recorded or written corpus');
 const old=D.select(full,[5,5,5,5],D.normalize(),mode);
 eq(old.map(o=>o.id),full.filter(o=>o.levelNumber<=5).map(o=>o.id),'An old saved session retains its original order identities');
 const seeded=D.normalize(null,[mode+':'+full[0].id,'garbage']);ok(seeded.history[mode].includes(full[0].id),'Received old orders migrate into history without clearing progress');
 eq(D.normalize({history:{[mode]:{}},selections:{[mode]:'broken'}}).history[mode],[],'Malformed history cannot break launch');
}
console.log(`PASS: ${checks} fresh-game rotation, all-level uniqueness, save/resume and unchanged speech checks.`);
// Fresh written games draw new product-and-quantity combinations, not only new IDs.
let generatedState=D.normalize(),seenText=new Set();
for(let generation=1;generation<=45;generation++){
 const result=T.createFreshCampaign(G,[50,50,50,50],generation*137,generation,generatedState.textSignatures);
 const restored=T.createGeneratedCampaign(G,[50,50,50,50],result.seed,generation);
 eq(restored,result.orders,'Saved generator seed restores the exact products, amounts, clients and lot identities');
 for(const order of result.orders){const signature=G.orderSignature(order);ok(!generatedState.textSignatures.includes(signature),'New text combinations exclude all recent received orders');ok(Number.isSafeInteger(order.id)&&order.id>=1000000,'New written identities cannot overwrite the old catalogue');}
 for(const order of result.orders)generatedState=D.received(generatedState,'text',order,G.orderSignature(order));
 eq(generatedState.textSignatures.length,Math.min(generation*200,8192),'Actual received content has a bounded saved history');
 if(generation<=10)for(const level of [0,1,2,3]){
  const order=result.orders.find(o=>o.levelIndex===level),inventory=T.createInventory(G,order),cart={};
  for(const line of order.lines){let left=line.amount;for(const lot of inventory.filter(l=>l.productId===line.productId&&!l.hidden&&!G.isUnfit(l)&&(!line.variantId||l.variantId===line.variantId)).sort((a,b)=>b.pack-a.pack)){const n=Math.min(lot.stock,Math.floor(left/lot.pack));if(n){cart[lot.id]=n;left-=n*lot.pack;}}eq(left,0,'Generated orders at every difficulty can be collected from real shelf stock');}
  ok(G.validateOrder(order,inventory,cart).ok,'Generated written order passes the actual quantity and freshness validator');
 }
}
console.log(`PASS: ${checks} total checks including 9,000 fresh generated written orders.`);
