'use strict';
const assert = require('node:assert/strict');
const G = require('../dist/game-core.js');
const BASELINE = require('./legacy-baseline.json');
let checks = 0;
const ok = (value, message) => { checks++; assert.ok(value, message); };
const same = (a, b, message) => { checks++; assert.deepEqual(a, b, message); };
function solveLine(order, inventory, line) {
  const lots = inventory.filter(lot => lot.productId === line.productId && !lot.hidden && !G.isUnfit(lot, order.day) && (!line.variantId || lot.variantId === line.variantId));
  function search(index, left, cart) {
    if (!left) return cart;
    if (index >= lots.length) return null;
    const lot = lots[index];
    for (let qty = Math.min(lot.stock, Math.floor(left / lot.pack)); qty >= 0; qty--) {
      const result = { ...cart }; if (qty) result[lot.id] = qty;
      const found = search(index + 1, left - qty * lot.pack, result); if (found) return found;
    }
    return null;
  }
  return search(0, line.amount, {});
}
function solveOrder(order, inventory) {
  const cart = {};
  for (const line of order.lines) {
    const partial = solveLine(order, inventory, line);
    ok(partial, `Solvable ${order.id}: ${line.productId}/${line.variantId || ''}`);
    Object.assign(cart, partial);
  }
  return cart;
}
same(G.normalizeCounts(), [5,5,5,5], 'Default counts');
same(G.normalizeCounts([0, 6.8, 51, '12']), [5,7,50,12], 'Bounded integer counts');
ok(G.ORDERS.length === 20, 'Default 20 orders');
ok(G.BASE_PRODUCTS.length === 25, '25 original products preserved');
ok(G.PRODUCTS.length === 202 && G.ORDER_PRODUCTS.length === 91, 'Expanded supermarket keeps the original speech pool');
const represented = new Set(G.createCampaign([50,50,50,50]).flatMap(o => o.lines.map(l => l.productId)));
ok(G.ORDER_PRODUCTS.every(p => represented.has(p.id)) && represented.size === G.ORDER_PRODUCTS.length, 'Every product in the recorded pool is used; extra retail stock does not rewrite audio');
ok(G.BREAD_VARIANTS.length === 6, 'Six actual bread SKUs');
for (const seed of [G.DEFAULT_SEED, 0, 1, 123456, 4294967295]) {
  const full = G.createCampaign([50,50,50,50], seed);
  ok(full.length === 200, 'All four levels have 50 orders');
  ok(new Set(full.map(o => o.id)).size === 200, 'Unique IDs');
  ok(new Set(full.map(G.orderSignature)).size === 200, 'No repeated fulfilment semantics anywhere');
  same(full, G.createCampaign([50,50,50,50], seed), 'Deterministic generation');
  for (const order of full) {
    ok(order.lines.length >= 3 && order.lines.length <= 6, 'Appropriate line count');
    ok(new Set(order.lines.map(l => l.productId)).size === order.lines.length, 'No duplicate product lines');
    if (order.levelIndex === 0) {
      ok(order.lines.length === 3 && order.lines.every(l => l.amount === G.BY_ID[l.productId].pack), 'Beginner: three products, one base pack');
      const appleCount = order.lines.filter(l => l.productId.endsWith('-apple')).length;
      ok(appleCount < 2, 'Beginner apples are visually distinct');
    }
    if (order.levelIndex === 1) ok(order.lines.every(l => l.amount === G.BY_ID[l.productId].pack), 'Expiry level uses a single base pack');
    if (order.levelIndex === 2) ok(order.lines.every(l => l.amount > G.BY_ID[l.productId].pack), 'Quantity level needs multiple base packs');
    if (order.levelIndex === 3) {
      ok(order.preference?.kind === 'color' || order.preference?.kind === 'brand', 'Every advanced order contains an actual preference');
      if (order.preference.kind === 'brand') ok(order.lines.some(l => l.variantId === order.preference.variantId), 'Requested brand is a validation constraint');
      else ok(order.lines.some(l => l.productId === order.preference.productId), 'Requested apple color is an actual product constraint');
    }
    const inventory = G.createInventory(order);
    ok(new Set(inventory.map(l => l.id)).size === inventory.length, 'Unique lot IDs');
    ok(inventory.every(l=>!l.manufactured||l.manufactured<=order.day), 'New stock cannot be manufactured after the shopping day');
    ok(new Set(inventory.filter(l=>G.BREAD_BY_ID[l.variantId]).map(l=>l.variantId)).size === 6, 'Every bread SKU is stocked');
    if (order.levelIndex === 0) ok(inventory.filter(l => !l.hidden).every(l => !G.isExpired(l, order.day)), 'Beginner shelf uses only fresh batches');
    if (order.levelIndex >= 1) for (const line of order.lines.filter(l => G.BY_ID[l.productId].hasExpiry !== false)) {
      const alternatives = inventory.filter(l => l.productId === line.productId && l.pack === G.BY_ID[line.productId].pack && (!line.variantId || line.variantId === l.variantId));
      ok(alternatives.some(l => G.isExpired(l, order.day)) && alternatives.some(l => !G.isExpired(l, order.day)), 'A same-product expiry choice exists');
    }
    const cart = solveOrder(order, inventory);
    ok(G.validateOrder(order, inventory, cart).ok, 'Correct fresh contents accepted');
    const expired = inventory.find(l => !l.hidden && G.isExpired(l, order.day));
    if (expired) ok(!G.validateOrder(order, inventory, { ...cart, [expired.id]: 1 }).ok, 'Expired stock rejected');
    const extra = inventory.find(l => !order.lines.some(line => line.productId === l.productId) && !G.isExpired(l, order.day));
    ok(!G.validateOrder(order, inventory, { ...cart, [extra.id]: 1 }).ok, 'Unexpected product rejected');
  }
  const small = G.createCampaign([5,6,7,8], seed);
  for (const order of small) {
    const other = full.find(o => o.id === order.id);
    same(order.lines, other.lines, 'Expanding counts keeps previous order contents');
    ok(order.signature === other.signature, 'Expanding counts keeps signatures');
  }
}
const mutable = G.createCampaign(); mutable[0].lines[0].amount = 98765;
ok(G.createCampaign()[0].lines[0].amount !== 98765, 'Caller mutations cannot damage cached master');
ok(G.createCampaign([50,50,50,50], 9).some((o,i) => o.signature !== G.createCampaign([50,50,50,50],10)[i].signature), 'Different seeds actually change orders');
for (const legacy of G.LEGACY_ORDERS) {
  const baseline = BASELINE.find(row => row.order.id === legacy.id);
  const old = baseline.order;
  same(legacy.lines, old.lines, 'Legacy order content preserved');
  const before = baseline.inventory, after = G.createInventory(legacy);
  const fields = ['id','productId','pack','manufactured','expires','stock','batch'];
  for (const lot of before) {
    const match = after.find(l => l.id === lot.id);
    ok(match, 'Legacy lot ID exists');
    same(Object.fromEntries(fields.map(k => [k,lot[k]])), Object.fromEntries(fields.map(k => [k,match[k]])), 'Saved legacy cart still points to same product, quantity and dates');
  }
  ok(G.validateOrder(legacy,after,solveOrder(legacy,after)).ok, 'Legacy orders remain solvable');
}
const branded = G.createCampaign([50,50,50,50]).find(o => o.lines.some(l => l.variantId));
const inventory = G.createInventory(branded);
const exactCart = solveOrder(branded,inventory);
const brandedLine = branded.lines.find(l => l.variantId);
const chosen = inventory.find(l => exactCart[l.id] && l.productId === brandedLine.productId);
const wrong = inventory.find(l => l.productId === brandedLine.productId && l.variantId !== brandedLine.variantId && !G.isExpired(l,branded.day));
const wrongCart = {...exactCart}; delete wrongCart[chosen.id]; wrongCart[wrong.id] = brandedLine.amount;
const wrongResult = G.validateOrder(branded,inventory,wrongCart);
ok(!wrongResult.ok && wrongResult.wrongVariants.length > 0 && wrongResult.missing.length > 0, 'Wrong brand rejected and correct brand shortage explained');
const genericOrder = {...branded,lines:branded.lines.map(l => {const n={...l};delete n.variantId;return n;})};
ok(G.validateOrder(genericOrder,inventory,wrongCart).ok, 'Any matching bread brand accepted for generic bread order');
ok(G.photoKey({productId:'milk',pack:500})==='milk-500', 'Actual milk half-litre photo');
ok(G.photoKey({productId:'white-bread',variantId:'bread-atar',pack:1})==='white-bread', 'Existing Atar photo reused');
ok(G.photoKey({productId:'brown-bread',variantId:'bread-misheel',pack:1})==='bread-misheel', 'Correct new bread photo key');
console.log(`PASS: ${checks} checks; 1,000 generated orders solved across 5 seeds; all legacy lots preserved.`);
