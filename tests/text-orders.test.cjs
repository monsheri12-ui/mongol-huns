'use strict';
const assert=require('node:assert/strict'),crypto=require('node:crypto'),G=require('../dist/game-core.js'),T=require('../dist/text-orders.js'),S=require('../dist/play-session.js'),R=require('../dist/ru-hints.js');
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);},hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
const audio=G.createCampaign([50,50,50,50]),oldHash=hash(audio);
for(const seed of [1,17,20261109,654321]){
 const all=T.createCampaign(G,[50,50,50,50],seed),small=T.createCampaign(G,[5,5,5,5],seed),seen=new Set(all.flatMap(o=>o.lines.map(l=>l.productId)));
 ok(all.length===200&&small.length===20,'Written mode retains five to fifty orders on each of four levels');
 ok(new Set(all.map(G.orderSignature)).size===200,'All expanded written orders have unique product-and-quantity signatures');
 ok(G.PRODUCTS.every(p=>seen.has(p.id)),'The full written corpus includes every store product, including all new goods');
 for(const o of all){
  ok(o.textOnly&&o.lines.some(l=>G.SUPPLEMENTAL_PRODUCTS.some(p=>p.id===l.productId)),'Every written order includes new stock and is marked as text-only');
  ok(o.lines.every(l=>R.name(l)&&G.BY_ID[l.productId]&&Number.isInteger(l.amount)&&l.amount>0),'Every written line has a valid product, quantity and Russian hint');
  ok(o.levelIndex!==0||o.lines.length===3&&o.lines.every(l=>l.amount===G.BY_ID[l.productId].pack),'The first level starts with three clear single-package quantities');
  if(o.levelIndex===1)ok(o.lines.every(l=>G.BY_ID[l.productId].hasExpiry!==false&&!(G.BY_ID[l.productId].category==='produce'&&G.BY_ID[l.productId].soldByWeight)),'Expiry tasks use products with actual label dates');
  const inventory=T.createInventory(G,o),cart={};
  for(const line of o.lines){let left=line.amount;for(const lot of inventory.filter(l=>l.productId===line.productId&&!l.hidden&&!G.isUnfit(l)&&(!line.variantId||l.variantId===line.variantId)).sort((a,b)=>b.pack-a.pack)){const n=Math.min(lot.stock,Math.floor(left/lot.pack));if(n){cart[lot.id]=n;left-=n*lot.pack;}}ok(left===0,'Every text order can be fulfilled from its physical shelf stock');}
  ok(G.validateOrder(o,inventory,cart).ok,'Exact quantities and customer preferences pass the real fulfilment validator');
  if(o.levelIndex>=1)for(const l of o.lines.filter(l=>!G.ORDER_PRODUCTS.some(p=>p.id===l.productId)&&G.BY_ID[l.productId].hasExpiry!==false&&!(G.BY_ID[l.productId].category==='produce'&&G.BY_ID[l.productId].soldByWeight)))ok(inventory.some(v=>v.productId===l.productId&&G.isExpired(v)),'New dated foods have a distinct expired batch to inspect');
 }
 for(const o of small)ok(G.orderSignature(o)===G.orderSignature(all.find(v=>v.id===o.id)),'Changing order count does not rewrite an existing written assignment');
 let market=S.normalizeMarket({completed:{'campaign:1':3,'text:1001':2},orderNumbers:{'campaign:1':1,'text:1001':2},previousStarts:{'text:0':{id:1001,customer:'Номин'}}});
 ok(market.completed['text:1001']===2&&market.completed['campaign:1']===3,'Written and voice progress coexist in the same profile without replacing each other');
 ok(market.orderNumbers['text:1001']===2&&market.previousStarts['text:0'].customer==='Номин','Written numbering and day-to-day customer exclusions survive reload');
}
ok(hash(G.createCampaign([50,50,50,50]))===oldHash&&oldHash==='04481c7060b56299815c572f3944d7a615d9be845fd8c98e98d8aa68d5ae89c2','All original recorded orders remain unchanged');
console.log(`PASS:${checks} expanded written-order coverage, uniqueness, solvability, dates and separate-progress checks.`);
