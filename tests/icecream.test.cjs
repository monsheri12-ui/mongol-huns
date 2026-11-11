'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const G=require('../dist/game-core.js'),R=require('../dist/ru-hints.js'),F=require('../dist/fulfilment.js');
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);},eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);};
const sources=JSON.parse(fs.readFileSync(path.join(__dirname,'../dist/assets/product-sources.json'),'utf8')).products;
eq(G.ICECREAM_VARIANTS.length,6,'Six additional real ice-cream packages are available');
eq(new Set(G.ICECREAM_VARIANTS.map(v=>v.photoKey)).size,6,'Every package has its own photograph');
for(const variant of G.ICECREAM_VARIANTS){
 const source=sources.find(x=>x.id===variant.photoKey);
 ok(source&&fs.existsSync(path.join(__dirname,'../dist',source.path)),'Manufacturer photo is bundled');
 eq(source.actual_pack.amount,variant.pack,'Declared gram weight matches the selected package');
 eq(source.actual_pack.unit,'g','Ice-cream quantities use grams');
 ok(source.source_page.startsWith('https://suu.mn/brands/'),'Provenance points to the manufacturer');
 ok(R.name({productId:'icecream',variantId:variant.id}).length>10,'Variant has a readable Russian hint');
}
const order={id:99001,day:G.DAY,levelIndex:2,lines:[{productId:'icecream',amount:360}]};
const inventory=G.createInventory(order),family=inventory.find(l=>l.variantId==='icecream-amore-family-chocolate'),bar=inventory.find(l=>l.variantId==='icecream-amore-caramel');
ok(family&&bar,'Both package formats are on the freezer shelf');
eq(G.photoKey(family),'icecream-amore-family-chocolate','Family-tub photo stays bound to its label');
ok(G.lotName(family).includes('гэр бүлийн'),'Family tub has a distinct Mongolian name');
eq(family.pack,300,'Family tub contains 300 g');eq(bar.pack,60,'Single bar contains 60 g');
const cart={[family.id]:1,[bar.id]:1};
ok(G.validateOrder(order,inventory,cart).ok,'300 g and 60 g correctly fulfil 360 g');
ok(F.lineProgress(order,inventory,cart)[0].complete,'Mixed packages receive one completed checklist mark');
ok(!G.validateOrder({...order,lines:[{productId:'icecream',amount:120}]},inventory,{[family.id]:1}).ok,'A 300 g tub cannot masquerade as 120 g');
eq(G.sanitizeCart(cart,G.createInventory(order)),cart,'Chosen flavour and quantity survive save restoration');
for(const o of G.createCampaign([50,50,50,50])){
 const inv=G.createInventory(o);eq(new Set(inv.filter(l=>l.productId==='icecream'&&!l.hidden).map(l=>G.photoKey(l))).size,7,'Every current order stocks seven ice-cream appearances');
}
console.log(`PASS: ${checks} real ice-cream package, gram-weight, mixing, stock, translation and save checks.`);
