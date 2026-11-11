const assert = require('node:assert/strict');
const api = require('../dist/game-core.js');
const G = { ...api, ORDERS: api.LEGACY_ORDERS };
let assertions = 0;
function check(condition, message) { assertions++; assert.ok(condition, message); }

check(G.PRODUCTS.length === 202 && G.BASE_PRODUCTS.length === 25, '202 supermarket products, including 25 original products');
check(G.ORDERS.length === 12, '12 orders');
check(new Set(G.PRODUCTS.map(p => p.id)).size === G.PRODUCTS.length, 'Unique product ids');
check(new Set(G.ORDERS.flatMap(o => o.lines.map(l => l.productId))).size === 25, 'All original 25 products occur in the archived orders');

// Solve using bounded integer packs, rather than trusting a matching fixture.
function solve(inventory, productId, target, allowExpired = false) {
  const lots = inventory.filter(l => l.productId === productId && (allowExpired || !G.isUnfit(l)));
  function visit(index, left, result) {
    if (!left) return result;
    if (index >= lots.length) return null;
    const lot = lots[index];
    for (let qty = Math.min(lot.stock, Math.floor(left / lot.pack)); qty >= 0; qty--) {
      const next = { ...result };
      if (qty) next[lot.id] = qty;
      const found = visit(index + 1, left - qty * lot.pack, next);
      if (found) return found;
    }
    return null;
  }
  return visit(0, target, {});
}
for (const order of G.ORDERS) {
  const inventory = G.createInventory(order);
  check(new Set(inventory.map(l => l.id)).size === inventory.length, `Unique lots in order ${order.id}`);
  check(JSON.stringify(inventory) === JSON.stringify(G.createInventory(order)), 'Stable shelf for progress restoration');
  const cart = {};
  for (const line of order.lines) {
    const solution = solve(inventory, line.productId, line.amount);
    check(solution !== null, `Order ${order.id}: ${line.productId} is solvable with fresh stock`);
    Object.assign(cart, solution);
    check(inventory.some(l => l.productId === line.productId && G.isExpired(l)), 'Expiry choice exists for every required product');
  }
  const result = G.validateOrder(order, inventory, cart);
  check(result.ok, `Order ${order.id} accepts exact fresh contents`);
  check(result.packageCount > 0, 'Package count computed');
  const empty = G.validateOrder(order, inventory, {});
  check(!empty.ok && empty.missing.length === order.lines.length, 'Empty bag rejects with missing products');
  const removed = { ...cart };
  const first = Object.keys(removed)[0];
  if (--removed[first] === 0) delete removed[first];
  check(G.validateOrder(order, inventory, removed).missing.length > 0, 'Missing package rejected');
  const bad = { ...cart };
  const requested = order.lines[0].productId;
  const old = inventory.find(l => l.productId === requested && G.isExpired(l));
  bad[old.id] = 1;
  const rejected = G.validateOrder(order, inventory, bad);
  check(!rejected.ok && rejected.expired.some(e => e.lotId === old.id), 'Expired products rejected');
  const extra = inventory.find(l => !order.lines.some(x => x.productId === l.productId));
  const extras = G.validateOrder(order, inventory, { ...cart, [extra.id]: 1 });
  check(!extras.ok && extras.unexpected.length === 1, 'Unexpected product rejected');
  check(inventory.every(l => !l.expires || l.manufactured < l.expires), 'Manufacturing precedes expiry');
  const hostile = G.sanitizeCart({ ...cart, [inventory[0].id]: 999999, notALot: 42 }, inventory);
  check(hostile[inventory[0].id] === inventory[0].stock && !hostile.notALot, 'Restored stock bounded and unknown ids discarded');
}

check(!G.isExpired({ expires: G.DAY }), 'Use-by day itself is valid');
check(G.isExpired({ expires: G.addDays(G.DAY, -1) }), 'Yesterday is expired');
check(!G.isExpired({ expires: G.addDays(G.DAY, 1) }), 'Tomorrow is valid');
check(G.addDays('2026-12-31', 1) === '2027-01-01', 'Calendar rollover');
check(G.addDays('2028-02-28', 1) === '2028-02-29', 'Leap day');
check(G.formatAmount('milk', 500) === '500 мл', 'Millilitre display');
check(G.formatAmount('milk', 2000) === '2 л', 'Litre display');
check(G.formatAmount('green-apple', 1500) === '1.5 кг', 'Fractional mass display');
check(G.formatAmount('eggs', 10) === '10 ширхэг', 'Piece display');
check([1, 2, 3, 100].map(G.starsForAttempts).join() === '3,2,1,1', 'Stars follow attempts');

// Combining small packs counts towards the requested total.
const milkOrder = { day: G.DAY, lines: [{ productId: 'milk', amount: 1000 }] };
const milkLots = [{ id: 'half', productId: 'milk', pack: 500, stock: 3, expires: '2026-11-12' }];
check(G.validateOrder(milkOrder, milkLots, { half: 2 }).ok, 'Two 500 ml packs satisfy one litre');
check(!G.validateOrder(milkOrder, milkLots, { half: 1 }).ok, 'One 500 ml pack is not one litre');
check(G.validateOrder(milkOrder, milkLots, { half: 3 }).excess.length === 1, 'Excess amount rejected');
check(Object.keys(G.sanitizeCart({ half: -1 }, milkLots)).length === 0, 'Negative quantities discarded');
check(Object.keys(G.sanitizeCart({ half: 1.5 }, milkLots)).length === 0, 'Fractional packages discarded');
console.log(`PASS: ${assertions} meaningful rule checks across all 12 orders.`);
