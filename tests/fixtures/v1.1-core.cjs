/* Pure game rules. All amounts use integer millilitres, grams, or pieces. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.GroceryGame = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAY = '2026-11-09';
  const CATEGORIES = [
    { id: 'all', name: 'Бүгд', icon: 'grid' },
    { id: 'dairy', name: 'Сүү, өндөг', icon: 'milk' },
    { id: 'bread', name: 'Талх', icon: 'bread' },
    { id: 'produce', name: 'Жимс, ногоо', icon: 'apple' },
    { id: 'pantry', name: 'Хүнс', icon: 'jar' },
    { id: 'cold', name: 'Ус, зайрмаг', icon: 'snow' }
  ];
  const PRODUCTS = [
    ['milk', 'Сүү', 'dairy', 'volume', 1000, 500],
    ['yogurt', 'Тараг', 'dairy', 'weight', 500, 500],
    ['butter', 'Цөцгийн тос', 'dairy', 'weight', 200, 100],
    ['cheese', 'Бяслаг', 'dairy', 'weight', 200, 400],
    ['eggs', 'Өндөг', 'dairy', 'pieces', 6, 6],
    ['white-bread', 'Цагаан талх', 'bread', 'pieces', 1, 1],
    ['brown-bread', 'Хар талх', 'bread', 'pieces', 1, 1],
    ['flour', 'Гурил', 'pantry', 'weight', 1000, 2000],
    ['rice', 'Будаа', 'pantry', 'weight', 1000, 500],
    ['sugar', 'Элсэн чихэр', 'pantry', 'weight', 1000, 500],
    ['salt', 'Давс', 'pantry', 'weight', 1000, 500],
    ['pasta', 'Гоймон', 'pantry', 'weight', 500, 1000],
    ['oil', 'Ургамлын тос', 'pantry', 'volume', 1000, 500],
    ['water', 'Ус', 'cold', 'volume', 1000, 2000],
    ['red-apple', 'Улаан алим', 'produce', 'weight', 1000, 500],
    ['green-apple', 'Ногоон алим', 'produce', 'weight', 500, 1000],
    ['banana', 'Гадил', 'produce', 'weight', 1000, 500],
    ['orange', 'Жүрж', 'produce', 'weight', 1000, 500],
    ['carrot', 'Лууван', 'produce', 'weight', 1000, 500],
    ['potato', 'Төмс', 'produce', 'weight', 1000, 2000],
    ['tomato', 'Улаан лооль', 'produce', 'weight', 1000, 500],
    ['cucumber', 'Өргөст хэмх', 'produce', 'weight', 1000, 500],
    ['onion', 'Сонгино', 'produce', 'weight', 1000, 500],
    ['cabbage', 'Байцаа', 'produce', 'weight', 1000, 2000],
    ['icecream', 'Зайрмаг', 'cold', 'weight', 60, 60]
  ].map(([id, name, category, measure, pack, alternate]) => ({ id, name, category, measure, pack, alternate: ['milk', 'yogurt', 'eggs', 'green-apple', 'red-apple', 'banana', 'orange', 'carrot', 'tomato', 'cucumber', 'onion', 'cabbage'].includes(id) ? alternate : pack }));
  const BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
  const ORDER_DATA = [
    ['Номин', 'Өглөөний цай', 'Өглөөний цайны хүнсээ захиалъя.', [['milk', 1000], ['white-bread', 1], ['eggs', 6]]],
    ['Ану', 'Жимсний сагс', 'Жимс, тараг авъя.', [['red-apple', 1000], ['banana', 1000], ['yogurt', 1000]]],
    ['Бат', 'Ногооны захиалга', 'Шөл хийх ногоо хэрэгтэй байна.', [['potato', 2000], ['carrot', 1000], ['onion', 1000], ['cabbage', 1000]]],
    ['Саруул', 'Өдрийн хоол', 'Өдрийн хоолны хүнсээ авъя.', [['rice', 1000], ['tomato', 1000], ['cucumber', 1000], ['water', 2000]]],
    ['Энхжин', 'Хоёр литр сүү', 'Хоёр литр сүү авахаа мартуузай.', [['milk', 2000], ['butter', 200], ['brown-bread', 1], ['cheese', 200]]],
    ['Тэмүүлэн', 'Жигнэмэг хийх өдөр', 'Өнөөдөр жигнэмэг хийнэ.', [['flour', 2000], ['sugar', 1000], ['eggs', 12], ['butter', 400]]],
    ['Хулан', 'Оройн хоол', 'Орой гоймон хийж иднэ.', [['pasta', 1000], ['tomato', 1000], ['oil', 1000], ['salt', 1000]]],
    ['Дөлгөөн', 'Ногоон алим', 'Ногоон алим авъя.', [['green-apple', 1000], ['orange', 1000], ['banana', 1000], ['water', 1000], ['yogurt', 500]]],
    ['Мөнх', 'Амралтын өдрийн хүнс', 'Гэр бүлээрээ хоол хийнэ.', [['rice', 2000], ['potato', 2000], ['onion', 1000], ['milk', 2000], ['eggs', 6]]],
    ['Марал', 'Зочид ирнэ', 'Өнөөдөр манайд зочид ирнэ.', [['white-bread', 2], ['cheese', 400], ['cucumber', 1000], ['red-apple', 1000], ['icecream', 120]]],
    ['Билгүүн', 'Долоо хоногийн хүнс', 'Жагсаалтын дагуу бэлтгэж өгнө үү.', [['milk', 3000], ['brown-bread', 2], ['eggs', 12], ['rice', 2000], ['carrot', 1000], ['oil', 1000]]],
    ['Солонго', 'Сүүлийн захиалга', 'Бүх барааны тоо, хэмжээг сайн шалгаарай.', [['green-apple', 1500], ['milk', 2000], ['flour', 1000], ['butter', 400], ['cucumber', 1000], ['icecream', 240]]]
  ];
  const LEGACY_ORDERS = ORDER_DATA.map(([customer, title, message, lines], index) => ({
    id: index + 1, customer, title, message, day: DAY, legacy: true,
    lines: lines.map(([productId, amount]) => ({ productId, amount }))
  }));


  const DEFAULT_SEED = 20261109;
  const LEVELS = [
    { id: 'learn', name: 'Танилцах', hint: 'Гурван бүтээгдэхүүн сонгож, нэрийг нь сураарай.' },
    { id: 'expiry', name: 'Хугацаа шалгах', hint: 'Ижил барааны шошгыг уншиж, хугацааг нь шалгаарай.' },
    { id: 'quantity', name: 'Тоо хэмжээ', hint: 'Хэд хэдэн савлагаанаас хэрэгтэй хэмжээгээ бүрдүүлээрэй.' },
    { id: 'preferences', name: 'Тусгай хүсэлт', hint: 'Захиалагчийн хүссэн төрөл, маркийг сонгоорой.' }
  ];
  const BREAD_VARIANTS = [
    { id: 'bread-atar', productId: 'white-bread', name: 'Атар талх', brand: 'Атар', photoKey: 'white-bread', netWeight: 600 },
    { id: 'bread-tabita', productId: 'white-bread', name: 'Табита талх', brand: 'Табита', photoKey: 'bread-tabita', netWeight: 400 },
    { id: 'bread-rye', productId: 'brown-bread', name: 'Өгөөж хөх тарианы талх', brand: 'Өгөөж', photoKey: 'brown-bread', netWeight: 500 },
    { id: 'bread-chekh', productId: 'brown-bread', name: 'Зууван чех талх', brand: 'Зууван чех', photoKey: 'bread-chekh', netWeight: 600 },
    { id: 'bread-misheel', productId: 'brown-bread', name: 'Мишээл талх', brand: 'Мишээл', photoKey: 'bread-misheel', netWeight: 600 },
    { id: 'bread-tamir', productId: 'brown-bread', name: 'Тамир талх', brand: 'Тамир', photoKey: 'bread-tamir', netWeight: 300 }
  ];
  const BREAD_BY_ID = Object.fromEntries(BREAD_VARIANTS.map(v => [v.id, v]));
  const CUSTOMERS = ['Номин', 'Ану', 'Бат', 'Саруул', 'Энхжин', 'Тэмүүлэн', 'Хулан', 'Дөлгөөн', 'Мөнх', 'Марал', 'Билгүүн', 'Солонго', 'Оюун', 'Болд', 'Ариун', 'Туул'];
  const MASTER_CACHE = new Map();
  function normalizeCounts(value = [5, 5, 5, 5]) {
    return LEVELS.map((_, i) => {
      const number = Number(Array.isArray(value) ? value[i] : value);
      return Number.isFinite(number) ? Math.max(5, Math.min(50, Math.round(number))) : 5;
    });
  }
  function normalizeSeed(seed = DEFAULT_SEED) { return Number.isFinite(Number(seed)) ? Number(seed) >>> 0 : DEFAULT_SEED; }
  function random(seed) {
    let state = seed >>> 0;
    return function () {
      state += 0x6D2B79F5;
      let t = state;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  // Fulfilment semantics, not customer names, titles, dates, or order numbers.
  function orderSignature(order) {
    return order.lines.map(line => `${line.productId}:${line.amount}:${line.variantId || ''}`).sort().join('|');
  }
  function levelForOrder(order) {
    if (Number.isInteger(order.levelIndex) && order.levelIndex >= 0 && order.levelIndex < 4) return order.levelIndex;
    return order.id <= 2 ? 0 : order.id <= 5 ? 1 : order.id <= 9 ? 2 : 3;
  }
  function lotName(lot) { return BREAD_BY_ID[lot?.variantId]?.name || BY_ID[lot?.productId]?.name || ''; }
  function photoKey(lot) {
    if (BREAD_BY_ID[lot?.variantId]) return BREAD_BY_ID[lot.variantId].photoKey;
    if (lot?.productId === 'milk' && lot.pack === 500) return 'milk-500';
    return lot?.productId || '';
  }
  function createMaster(seed) {
    const rng = random(seed);
    const pick = list => list[Math.floor(rng() * list.length)];
    const mix = list => {
      const out = list.slice();
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1)); [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    };
    const master = [];
    const signatures = new Set();
    for (let levelIndex = 0; levelIndex < 4; levelIndex++) {
      const level = [];
      for (let attempt = 0; level.length < 50; attempt++) {
        if (attempt > 20000) throw new Error('Unable to construct a unique campaign');
        const ordinal = level.length;
        let chosen = [];
        let preference = null;
        if (levelIndex === 0 && ordinal === 0) chosen = ['milk', 'white-bread', 'eggs'].map(id => BY_ID[id]);
        else if (levelIndex === 0 && ordinal === 1) chosen = ['red-apple', 'banana', 'yogurt'].map(id => BY_ID[id]);
        else if (levelIndex === 0) {
          const categories = mix(CATEGORIES.filter(c => c.id !== 'all').map(c => c.id)).slice(0, 3);
          chosen = categories.map(category => pick(PRODUCTS.filter(p => p.category === category)));
        } else {
          const count = levelIndex === 1 ? 3 + Math.floor(rng() * 2) : levelIndex === 2 ? 4 + Math.floor(rng() * 2) : 4 + Math.floor(rng() * 3);
          if (levelIndex === 3) {
            const preferenceKind = ordinal % 4;
            if (preferenceKind < 2) {
              const productId = preferenceKind === 0 ? 'green-apple' : 'red-apple';
              preference = { kind: 'color', productId, text: `${BY_ID[productId].name} авъя.` };
              chosen = [BY_ID[productId]];
            } else {
              const candidates = BREAD_VARIANTS.filter(v => v.productId === (preferenceKind === 2 ? 'white-bread' : 'brown-bread'));
              const variant = candidates[Math.floor(ordinal / 4) % candidates.length];
              preference = { kind: 'brand', productId: variant.productId, variantId: variant.id, text: `${variant.name} авъя.` };
              chosen = [BY_ID[variant.productId]];
            }
          }
          chosen.push(...mix(PRODUCTS.filter(p => !chosen.some(c => c.id === p.id))).slice(0, count - chosen.length));
        }
        const lines = chosen.map((p, i) => {
          const multiple = levelIndex <= 1 ? 1 : levelIndex === 2 ? 2 + Math.floor(rng() * 2) : 1 + Math.floor(rng() * 3);
          const line = { productId: p.id, amount: p.pack * multiple };
          if (i === 0 && preference?.variantId) line.variantId = preference.variantId;
          return line;
        });
        const signature = orderSignature({ lines });
        if (signatures.has(signature)) continue;
        signatures.add(signature);
        const customer = CUSTOMERS[(ordinal + levelIndex * 3 + seed % CUSTOMERS.length) % CUSTOMERS.length];
        const messages = levelIndex === 0
          ? ['Гурван бүтээгдэхүүн авъя.', 'Жагсаалтын дагуу бэлтгэж өгнө үү.', 'Өдөр тутмын хүнсээ захиалъя.']
          : levelIndex === 1 ? ['Барааны хугацааг сайн шалгаарай.', 'Хугацаа нь дуусаагүй бүтээгдэхүүн аваарай.']
          : ['Жагсаалтын тоо, хэмжээг анхаараарай.', 'Бүх бүтээгдэхүүнийг бүрэн бэлтгэж өгнө үү.'];
        const order = {
          id: levelIndex * 100 + ordinal + 1,
          levelIndex, level: levelIndex + 1, stageId: LEVELS[levelIndex].id,
          levelOrderIndex: ordinal, levelNumber: ordinal + 1,
          customer, title: LEVELS[levelIndex].name,
          message: preference?.text || messages[ordinal % messages.length],
          day: DAY, lines, signature
        };
        if (preference) order.preference = preference;
        level.push(order);
      }
      master.push(level);
    }
    return master;
  }
  function createCampaign(counts = [5, 5, 5, 5], seed = DEFAULT_SEED) {
    counts = normalizeCounts(counts); seed = normalizeSeed(seed);
    if (!MASTER_CACHE.has(seed)) MASTER_CACHE.set(seed, createMaster(seed));
    const master = MASTER_CACHE.get(seed);
    const result = [];
    master.forEach((level, index) => {
      level.slice(0, counts[index]).forEach(order => {
        const copy = { ...order, levelCount: counts[index], campaignIndex: result.length, number: result.length + 1, lines: order.lines.map(line => ({ ...line })) };
        if (order.preference) copy.preference = { ...order.preference };
        result.push(copy);
      });
    });
    return result;
  }
  const ORDERS = createCampaign();
  function formatAmount(productOrId, amount) {
    const p = typeof productOrId === 'string' ? BY_ID[productOrId] : productOrId;
    if (!p || !Number.isFinite(amount)) return '';
    if (p.measure === 'pieces') return `${amount} ширхэг`;
    if (p.measure === 'volume') return amount >= 1000 ? `${Number((amount / 1000).toFixed(2))} л` : `${amount} мл`;
    return amount >= 1000 ? `${Number((amount / 1000).toFixed(2))} кг` : `${amount} г`;
  }
  function dateLabel(date) { return date.replaceAll('-', '.'); }
  function addDays(day, offset) {
    const date = new Date(`${day}T12:00:00Z`);
    date.setUTCDate(date.getUTCDate() + offset);
    return date.toISOString().slice(0, 10);
  }
  // A use-by date includes the printed day. Only an earlier date is expired.
  function isExpired(lot, day = DAY) { return lot.expires < day; }
  function shuffle(array, seed) {
    const out = array.slice();
    let state = seed >>> 0;
    for (let i = out.length - 1; i > 0; i--) {
      state = (Math.imul(1664525, state) + 1013904223) >>> 0;
      const j = state % (i + 1);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function createInventory(order) {
    const lots = [];
    let serial = 0;
    const levelIndex = levelForOrder(order);
    const breadChoice = productId => BREAD_VARIANTS.find(v => v.productId === productId);
    function make(productId, pack, expiryOffset, requiredAmount = 0, variantId, hidden = false) {
      const expires = addDays(order.day, expiryOffset);
      const lot = {
        id: `o${order.id}-l${++serial}`, productId, pack,
        manufactured: addDays(expires, -(BY_ID[productId].category === 'produce' ? 8 : 21)),
        expires, stock: Math.max(3, Math.ceil(requiredAmount / pack) + 1),
        batch: `${String(order.id).padStart(2, '0')}${String((serial * 37 + order.id * 11) % 100).padStart(2, '0')}`
      };
      if (BY_ID[productId].category === 'bread') lot.variantId = variantId || breadChoice(productId).id;
      if (hidden) lot.hidden = true;
      lots.push(lot);
    }
    order.lines.forEach(({ productId, amount, variantId }, i) => {
      const p = BY_ID[productId];
      if (order.legacy) {
        // Keep original serial ordering and dates: old saved carts still resolve.
        make(productId, p.pack, -1 - (i % 3), amount, variantId, levelIndex === 0);
        make(productId, p.pack, 4 + (i % 4), amount, variantId);
        if (order.id > 3) make(productId, p.alternate, 8 + (i % 5), amount, variantId, levelIndex < 2 && p.alternate !== p.pack);
      } else if (levelIndex === 0) {
        make(productId, p.pack, 4 + (i % 4), amount, variantId);
      } else {
        make(productId, p.pack, -1 - (i % 3), amount, variantId);
        make(productId, p.pack, 4 + (i % 4), amount, variantId);
        if (levelIndex >= 2 && p.alternate !== p.pack) make(productId, p.alternate, 8 + (i % 5), amount, variantId);
      }
    });
    const required = new Set(order.lines.map(l => l.productId));
    const similar = [];
    if (required.has('green-apple')) similar.push('red-apple');
    if (required.has('red-apple')) similar.push('green-apple');
    if (required.has('white-bread')) similar.push('brown-bread');
    if (required.has('brown-bread')) similar.push('white-bread');
    const distractors = [...new Set([...similar, ...shuffle(PRODUCTS.filter(p => !required.has(p.id)).map(p => p.id), order.id * 71)])];
    distractors.forEach((id, i) => {
      const old = i === 2;
      make(id, BY_ID[id].pack, levelIndex === 0 && !order.legacy ? 7 + i : old ? -2 : 7 + i, 0, undefined, order.legacy && levelIndex === 0 && old);
    });
    // Append missing bread SKUs after the original stock so legacy lot IDs stay stable.
    BREAD_VARIANTS.forEach((variant, i) => {
      if (lots.some(lot => lot.variantId === variant.id)) return;
      make(variant.productId, 1, 6 + i, 0, variant.id);
    });
    return shuffle(lots, order.id * 998 + 42);
  }
  function sanitizeCart(cart, inventory) {
    if (!cart || typeof cart !== 'object' || Array.isArray(cart)) return {};
    const result = {};
    inventory.forEach(lot => {
      const qty = cart[lot.id];
      if (Number.isInteger(qty) && qty > 0) result[lot.id] = Math.min(qty, lot.stock);
    });
    return result;
  }
  function validateOrder(order, inventory, cart) {
    const safeCart = sanitizeCart(cart, inventory);
    const totals = {}, matchingTotals = {};
    const expired = [], wrongVariants = [];
    const expected = Object.fromEntries(order.lines.map(line => [line.productId, line]));
    let packageCount = 0;
    inventory.forEach(lot => {
      const qty = safeCart[lot.id] || 0;
      if (!qty) return;
      const amount = qty * lot.pack;
      totals[lot.productId] = (totals[lot.productId] || 0) + amount;
      packageCount += qty;
      const line = expected[lot.productId];
      if (line?.variantId && lot.variantId !== line.variantId) {
        wrongVariants.push({ lotId: lot.id, productId: lot.productId, variantId: lot.variantId || null, expectedVariantId: line.variantId, amount, quantity: qty, name: lotName(lot), expectedName: lotName(line) });
      } else matchingTotals[lot.productId] = (matchingTotals[lot.productId] || 0) + amount;
      if (isExpired(lot, order.day)) expired.push({ lotId: lot.id, productId: lot.productId, expires: lot.expires, quantity: qty, variantId: lot.variantId });
    });
    const missing = [], excess = [], unexpected = [];
    order.lines.forEach(line => {
      const actual = matchingTotals[line.productId] || 0;
      const detail = line.variantId ? { variantId: line.variantId } : {};
      if (actual < line.amount) missing.push({ productId: line.productId, amount: line.amount - actual, ...detail });
      if (actual > line.amount) excess.push({ productId: line.productId, amount: actual - line.amount, ...detail });
    });
    Object.entries(totals).forEach(([productId, amount]) => {
      if (!(productId in expected)) unexpected.push({ productId, amount });
    });
    return { ok: !missing.length && !excess.length && !unexpected.length && !expired.length && !wrongVariants.length, missing, excess, unexpected, expired, wrongVariants, totals, matchingTotals, packageCount };
  }
  function starsForAttempts(attempts) { return attempts <= 1 ? 3 : attempts === 2 ? 2 : 1; }
  return { DAY, CATEGORIES, PRODUCTS, BY_ID, ORDERS, LEGACY_ORDERS, DEFAULT_SEED, LEVELS, BREAD_VARIANTS, BREAD_BY_ID, normalizeCounts, createCampaign, orderSignature, levelForOrder, lotName, photoKey, formatAmount, dateLabel, addDays, isExpired, shuffle, createInventory, sanitizeCart, validateOrder, starsForAttempts };
});
