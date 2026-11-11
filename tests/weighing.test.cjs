'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const G = require('../dist/game-core.js');
let checks = 0;
const check = (value, message) => { checks++; assert.ok(value, message); };
const order = G.createCampaign([50,50,50,50]).find(o => o.levelIndex === 1);
const inventory = G.createInventory(order);
const produce = G.ORDER_PRODUCTS.filter(p => p.category === 'produce');
// The recorded exercises provide both visual states. Newly sourced retail
// produce adds fresh weighed stock; it does not invent a spoiled source photo.
for (const product of produce) {
  const fresh=inventory.find(l=>l.productId===product.id&&G.isBulk(l)&&!G.isUnfit(l));
  const bad=inventory.find(l=>l.productId===product.id&&G.isSpoiled(l));
  check(fresh && bad,`${product.id}: visually fresh and spoiled loose choices`);
  check(!fresh.expires&&!bad.expires&&!fresh.manufactured&&!bad.manufactured,'Loose produce has no fabricated label date');
  check(G.photoKey(fresh)!==G.photoKey(bad),'Fresh and spoiled have different visual assets');
  const target={day:G.DAY,lines:[{productId:product.id,amount:1000}]};
  check(G.validateOrder(target,inventory,{[fresh.id]:1000}).ok,'Exact weighed fresh mass accepted');
  const spoiled=G.validateOrder(target,inventory,{[bad.id]:1000});
  check(!spoiled.ok&&spoiled.spoiled.length===1&&spoiled.expired.length===0,'Visible rot rejected separately from expiry');
  check(!spoiled.missing.length&&!spoiled.excess.length,'Correct weight cannot excuse visible spoilage');
  check(G.validateOrder(target,inventory,{[fresh.id]:950}).missing[0].amount===50,'Weighed shortage is grams');
  check(G.validateOrder(target,inventory,{[fresh.id]:1250}).excess[0].amount===250,'Weighed excess is grams');
  check(G.validateOrder(target,inventory,{[fresh.id]:1000}).packageCount===1,'One weighed portion is one bag, not 1000 packages');
  const packed=inventory.find(l=>l.productId===product.id&&!G.isBulk(l)&&!G.isUnfit(l)&&l.pack===1000);
  if(packed) check(G.validateOrder(target,inventory,{[packed.id]:1}).ok,'Existing packaged produce keeps its mass');
}
const apple=inventory.find(l=>G.isBulk(l)&&l.productId==='red-apple'&&!G.isUnfit(l));
let grams=0;
for(let i=0;i<3;i++)grams=G.adjustPortion(apple,grams,500);
check(grams===1500,'Add portions to scale');
grams=G.adjustPortion(apple,grams,-500);
check(grams===1000,'Remove excess without changing batch');
check(G.adjustPortion(apple,25,-50)===0,'Removing cannot create negative mass');
check(G.adjustPortion(apple,9900,500)===apple.stock,'Cannot weigh more than stock');
check(G.weighPortion(apple,Infinity)===0&&G.weighPortion(apple,1.25)===0,'Malformed/fractional grams rejected');
check(G.weighPortion(inventory.find(l=>!G.isBulk(l)),500)===0,'Packaged goods cannot be reinterpreted as gram stock');
const saved=G.sanitizeCart(JSON.parse(JSON.stringify({[apple.id]:1000,unknown:900})),G.createInventory(order));
check(saved[apple.id]===1000&&!saved.unknown,'Weighed quantity survives JSON save and deterministic inventory restore');
const packedApple=inventory.find(l=>l.productId==='red-apple'&&!G.isBulk(l)&&l.pack===1000&&!G.isUnfit(l));
check(G.validateOrder({day:G.DAY,lines:[{productId:'red-apple',amount:1500}]},inventory,{[packedApple.id]:1,[apple.id]:500}).ok,'Packaged and weighed amounts combine exactly');
for(const productId of ['chocolate-box','curd-candy']){
 const fresh=inventory.find(l=>G.isBulk(l)&&l.productId===productId&&!G.isExpired(l));
 const expired=inventory.find(l=>G.isBulk(l)&&l.productId===productId&&G.isExpired(l));
 const target={day:G.DAY,lines:[{productId,amount:85}]};
 check(G.validateOrder(target,inventory,{[fresh.id]:85}).ok,'Candy can be weighed to exact 85 g');
 check(G.validateOrder(target,inventory,{[expired.id]:85}).expired.length===1,'Loose candy still requires its bin label date');
 check(G.adjustPortion(fresh,G.adjustPortion(fresh,100,-10),-5)===85,'Candy controls can remove a small excess');
}
const beginner=G.createInventory(G.createCampaign()[1]);
check(beginner.filter(l=>!l.hidden&&G.isBulk(l)).every(l=>!G.isUnfit(l)),'First level keeps the beginner fresh-stock rule');
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(require.resolve('../dist/produce-assets.js'),'utf8'),sandbox);
const photos=sandbox.window.ProducePhotos;
vm.runInNewContext(fs.readFileSync(require.resolve('../dist/photos.js'),'utf8'),sandbox);
check(Object.keys(photos).length===24,'Atlas contains twenty produce states, two candies and two nets');
for(const lot of inventory.filter(G.isBulk))check(!!(photos[G.photoKey(lot)]||sandbox.window.ProductPhotos[G.photoKey(lot)]),'Every loose lot resolves to a matching produce or retail photograph');
for(const record of Object.values(photos)){
 const [x0,y0,x1,y1]=record.render_crop;
 check(x0>=0&&y0>=0&&x1<=1&&y1<=1&&x0<x1&&y0<y1,'Sprite crop stays inside atlas');
}
console.log(`PASS: ${checks} weighing, visual freshness, candy, stock and save-restoration checks.`);
