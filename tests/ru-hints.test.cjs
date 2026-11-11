const assert=require('node:assert/strict');
const G=require('../dist/game-core.js'),R=require('../dist/ru-hints.js');
assert.equal(Object.keys(R.NAMES).length,G.PRODUCTS.length);
for(const p of G.PRODUCTS)assert.ok(R.name(p.id),`Russian name for ${p.id}`);
for(const b of G.BREAD_VARIANTS)assert.ok(R.name({productId:b.productId,variantId:b.id}).includes('«'));
assert.equal(R.amount(G.BY_ID['frozen-fish'],1215),'1,215 кг');
assert.equal(R.amount(G.BY_ID.milk,1500),'1,5 л');
assert.equal(R.amount(G.BY_ID.eggs,12),'12 шт.');
assert.equal(R.name('smoked-salmon'),'Слабосолёный лосось');
assert.equal(R.name('vegan-soup'),'Растительная добавка для супа');
for(const order of G.createCampaign([50,50,50,50])){
 const text=R.orderText(G,order);assert.ok(!/undefined|null/.test(text));
 for(const line of order.lines)assert.ok(text.includes(R.name(line)+' — '+R.amount(G.BY_ID[line.productId],line.amount)));
 if(order.preference)assert.ok(text.includes(R.preference(order)));
}
assert.equal(G.formatAmount('frozen-fish',1215),'1.215 кг');
assert.equal(G.formatAmount('milk-biscuits',1332),'1.332 кг');
console.log(`PASS Russian names: ${G.PRODUCTS.length} products, six bread brands, all 200 orders, exact quantities and preferences`);
