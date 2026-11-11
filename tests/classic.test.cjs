const assert=require('node:assert/strict');
const G=require('../dist/game-core.js');
const previous=require('./fixtures/v1.1-core.cjs');
const pool=require('./classic-order-pool.json');
const full=G.createClassicCampaign([50,50,50,50],pool);
assert.equal(full.length,200);
let lots=0;
for (const order of full) {
 const original=previous.createCampaign([50,50,50,50]).find(o=>o.id===order.id);
 assert.deepEqual(order.lines,original.lines);
 assert.equal(G.orderSignature(order),previous.orderSignature(original));
 const before=previous.createInventory(original),after=G.createInventory(order);
 for(const lot of before){const match=after.find(l=>l.id===lot.id);assert.deepEqual(match,lot);lots++;}
 for(const p of G.EXTRA_PRODUCTS) assert.ok(after.some(l=>l.productId===p.id));
}
const small=G.createClassicCampaign([5,7,13,50],pool);
assert.equal(small.length,75);
for(const order of small) assert.deepEqual(order.lines,full.find(o=>o.id===order.id).lines);
const noDate=G.createInventory(G.createCampaign([50,50,50,50]).find(o=>o.lines.some(l=>G.BY_ID[l.productId].hasExpiry===false))).filter(l=>G.BY_ID[l.productId].hasExpiry===false);
assert.ok(noDate.length);assert.ok(noDate.every(l=>l.expires===null&&!G.isExpired(l)));
console.log(`PASS archived campaign: all 200 orders and ${lots} saved lot identities preserved; new stock appended; non-expiring goods have no invented date`);
