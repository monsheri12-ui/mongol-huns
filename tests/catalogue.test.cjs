'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const G=require('../dist/game-core.js'),F=require('../dist/fulfilment.js'),R=require('../dist/ru-hints.js');
const records=require('../dist/assets/product-sources.json').products;
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
ok(G.ORDER_PRODUCTS.length===91,'The recorded order pool is unchanged');
ok(G.SUPPLEMENTAL_PRODUCTS.length===111&&G.PRODUCTS.length===202,'Supplemental retail stock is distinct from the speech pool');
for(const product of G.SUPPLEMENTAL_PRODUCTS){
 const record=records.find(r=>r.id===product.id);ok(record&&R.name(product.id),'Every new product has a real photo and Russian translation');
 ok(record.actual_pack.amount===product.pack,'Displayed package or weighing reference matches source');
 const bytes=fs.readFileSync(path.join(__dirname,'../dist',record.path));ok(crypto.createHash('sha256').update(bytes).digest('hex')===record.sha256,'Original product photograph is intact');
}
for(const order of G.createCampaign([50,50,50,50])){
 ok(order.lines.every(l=>G.ORDER_PRODUCTS.some(p=>p.id===l.productId)),'No recorded order silently changes to a new product');
 const inventory=G.createInventory(order);
 for(const product of G.SUPPLEMENTAL_PRODUCTS){const lot=inventory.find(l=>l.productId===product.id);ok(lot&&!lot.hidden&&!G.isUnfit(lot),'Supplemental goods are visibly stocked and fresh');ok(lot.id.startsWith(`o${order.id}-shelf-`),'New stock has no reused legacy serial ID');}
}
const order=G.createCampaign()[0],inventory=G.createInventory(order);
for(const product of G.SUPPLEMENTAL_PRODUCTS.filter(p=>p.soldByWeight)){
 const lot=inventory.find(l=>l.productId===product.id),request={...order,lines:[{productId:product.id,amount:1250}]};
 ok(G.isBulk(lot)&&lot.pack===1,'Bulk retail products use grams');
 ok(product.category==='produce'?!lot.expires:!!lot.expires,'Loose produce has no expiry stamp; weighed meat retains label dates');
 ok(G.validateOrder(request,inventory,{[lot.id]:1250}).ok,'A weighed meat portion has exact net mass');
 ok(F.scalePlan(request,inventory,{},lot,1000).remaining===250,'Meat uses the same clear weighing goal as produce and candy');
}
console.log(`PASS: ${checks} retail source, photo, append-only stock and frozen speech-pool checks.`);
