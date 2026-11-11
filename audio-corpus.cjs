'use strict';

// Audio text only. No network, TTS calls, pitch changes, or main-checkout writes.
const VOICES = Object.freeze({ female: 'chimege:khulan', male: 'chimege:chingun' });
// These assignments define fictional customers; they do not infer real people's gender.
const CUSTOMER_VOICES = Object.freeze({
  'Номин': VOICES.female, 'Ану': VOICES.female, 'Бат': VOICES.male,
  'Саруул': VOICES.male, 'Энхжин': VOICES.female, 'Тэмүүлэн': VOICES.male,
  'Хулан': VOICES.female, 'Дөлгөөн': VOICES.male, 'Мөнх': VOICES.male,
  'Марал': VOICES.female, 'Билгүүн': VOICES.male, 'Солонго': VOICES.female,
  'Оюун': VOICES.female, 'Болд': VOICES.male, 'Ариун': VOICES.male, 'Туул': VOICES.female
});
const NOTICE_MN = 'Энэхүү дуу оруулгыг автоматаар үүсгэсэн бөгөөд дуудлагыг зөвхөн ойролцоогоор илэрхийлнэ. Зөв дуудлагыг монгол хэлээр төрөлхөөсөө ярьдаг хүнээс лавлана уу.';
const NOTICE_RU = 'Озвучка сгенерирована и передаёт произношение лишь приблизительно. Пожалуйста, уточняйте точное произношение у носителя монгольского языка.';
const ONES = ['', 'нэг', 'хоёр', 'гурван', 'дөрвөн', 'таван', 'зургаан', 'долоон', 'найман', 'есөн'];
const TENS = ['', 'арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерэн'];
const TEMPLATES = Object.freeze([
  { greeting: 'Сайн байна уу?', closing: 'Баярлалаа.' },
  { greeting: 'Сайн уу?', closing: 'Бэлтгэж өгнө үү. Баярлалаа.' },
  { greeting: 'Сайн байна уу? Хүнс захиалъя.', closing: 'Баярлалаа.' },
  { greeting: 'Сайн байна уу?', closing: 'Жагсаалтын дагуу бэлтгэж өгнө үү.' },
  { greeting: 'Сайн уу? Хүнс захиалъя.', closing: 'Бүх барааг шалгаарай. Баярлалаа.' },
  { greeting: 'Сайн байна уу?', closing: 'Хугацааг нь шалгаарай. Баярлалаа.' }
]);

function fail(message) { throw new Error('Audio corpus: ' + message); }
function hash(text) {
  let h = 2166136261;
  for (const ch of String(text).normalize('NFC')) {
    h ^= ch.codePointAt(0); h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function cleanName(value, label) {
  if (typeof value !== 'string' || !value.trim()) fail(`${label} must be a non-empty string`);
  const name = value.normalize('NFC').replace(/\s+/gu, ' ').trim();
  if (/[\p{Cc}\p{Cf}]/u.test(name)) fail(`${label} contains control characters`);
  return name;
}
function voiceForCustomer(customer) {
  const name = cleanName(customer, 'customer');
  return CUSTOMER_VOICES[name] || (hash(name) % 2 ? VOICES.female : VOICES.male);
}
// Attributive forms for a following measure/classifier: гурван, арван, зуун.
// A standalone one is нэг; a final one inside a compound is нэгэн.
function underHundred(n, compound = false) {
  if (n < 10) return n === 1 && compound ? 'нэгэн' : ONES[n];
  const tens = Math.floor(n / 10), units = n % 10;
  return units ? `${TENS[tens]} ${underHundred(units, true)}` : TENS[tens];
}
function underThousand(n, compound = false) {
  if (n < 100) return underHundred(n, compound);
  const hundreds = Math.floor(n / 100), rest = n % 100;
  const prefix = hundreds === 1 ? 'зуун' : `${ONES[hundreds]} зуун`;
  return rest ? `${prefix} ${underHundred(rest, true)}` : prefix;
}
function numberWords(n) {
  if (!Number.isSafeInteger(n) || n < 1 || n > 9999999) fail(`unsupported positive integer ${n}`);
  if (n < 1000) return underThousand(n);
  if (n < 1000000) {
    const thousands = Math.floor(n / 1000), rest = n % 1000;
    const prefix = thousands === 1 ? (rest ? 'мянга' : 'мянган') : `${underThousand(thousands)} ${rest ? 'мянга' : 'мянган'}`;
    return rest ? `${prefix} ${underThousand(rest, true)}` : prefix;
  }
  const millions = Math.floor(n / 1000000), rest = n % 1000000;
  const prefix = `${ONES[millions]} сая`;
  return rest ? `${prefix} ${numberWords(rest)}` : prefix;
}
function spokenAmount(product, amount) {
  if (!product || typeof product !== 'object') fail('missing product for an amount');
  if (!Number.isSafeInteger(amount) || amount <= 0) fail(`invalid amount for ${product.id || product.name}: ${amount}`);
  if (product.measure === 'pieces') return `${numberWords(amount)} ширхэг`;
  const units = product.measure === 'weight' ? ['килограмм', 'грамм']
    : product.measure === 'volume' ? ['литр', 'миллилитр'] : null;
  if (!units) fail(`unsupported measure ${product.measure} for ${product.id || product.name}`);
  const major = Math.floor(amount / 1000), minor = amount % 1000;
  const parts = [];
  if (major) parts.push(`${numberWords(major)} ${units[0]}`);
  if (minor) parts.push(`${numberWords(minor)} ${units[1]}`);
  return parts.join(' ');
}
function localSignature(order) {
  return order.lines.map(line => `${line.productId}:${line.amount}:${line.variantId || ''}`).sort().join('|');
}
function levelOf(G, order) {
  const index = Number.isInteger(order.levelIndex) ? order.levelIndex : G.levelForOrder?.(order);
  if (!Number.isInteger(index) || index < 0 || index > 3) fail(`invalid level for order ${order.id}`);
  return index;
}
function resolveName(G, line) {
  const product = G.BY_ID[line.productId];
  if (!product) fail(`unknown product ${line.productId}`);
  if (line.variantId) {
    const variant = G.BREAD_BY_ID?.[line.variantId] || G.BREAD_VARIANTS?.find(v => v.id === line.variantId);
    if (!variant || variant.productId !== line.productId) fail(`invalid brand ${line.variantId} for ${line.productId}`);
  }
  const name = cleanName(G.lotName(line), `name for ${line.productId}`);
  // A numeric brand/size needs an explicit curated spoken name in the catalogue.
  // Refuse instead of asking the speech engine to guess what a digit means.
  if (/\p{N}/u.test(name)) fail(`product name contains a numeral; provide a number-free spoken name through G.lotName: ${name}`);
  return name;
}
function preferenceSegment(G, order, levelIndex) {
  const preference = order.preference;
  if (!preference) {
    if (levelIndex === 3) fail(`advanced order ${order.id} is missing its preference`);
    return null;
  }
  const line = order.lines.find(line => line.productId === preference.productId && (!preference.variantId || line.variantId === preference.variantId));
  if (!line) fail(`preference does not match any order line in ${order.id}`);
  if (preference.kind === 'brand') {
    if (!preference.variantId || line.variantId !== preference.variantId) fail(`brand preference is not an actual constraint in ${order.id}`);
  } else if (preference.kind === 'color') {
    if (!['red-apple', 'green-apple'].includes(line.productId)) fail(`unsupported color preference in ${order.id}`);
  } else fail(`unsupported preference kind ${preference.kind} in ${order.id}`);
  const name = resolveName(G, line);
  return { kind: 'preference', preferenceKind: preference.kind, productId: line.productId, variantId: line.variantId || null, name, text: `${name} аваарай.` };
}
function makeRecord(G, order) {
  if (!G || typeof G.lotName !== 'function' || !G.BY_ID) fail('G must provide BY_ID and lotName');
  if (!order || !Array.isArray(order.lines) || !order.lines.length) fail('an order must contain lines');
  if (!(typeof order.id === 'string' || Number.isSafeInteger(order.id))) fail('invalid order id');
  if (new Set(order.lines.map(l => l.productId)).size !== order.lines.length) fail(`duplicate product lines in ${order.id}`);
  const signature = typeof G.orderSignature === 'function' ? G.orderSignature(order) : localSignature(order);
  if (typeof signature !== 'string' || !signature) fail(`missing signature in ${order.id}`);
  if (order.signature && order.signature !== signature) fail(`stale signature in ${order.id}`);
  const customer = cleanName(order.customer, 'customer');
  const voice = voiceForCustomer(customer);
  const levelIndex = levelOf(G, order);
  const templateIndex = hash(signature) % TEMPLATES.length;
  const template = TEMPLATES[templateIndex];
  const lineSegments = order.lines.map(line => {
    const product = G.BY_ID[line.productId];
    const name = resolveName(G, line);
    const quantityText = spokenAmount(product, line.amount);
    return { kind: 'line', productId: line.productId, variantId: line.variantId || null, amount: line.amount, measure: product.measure, name, quantityText, text: `${quantityText} ${name}` };
  });
  const preference = preferenceSegment(G, order, levelIndex);
  const segments = [
    { kind: 'greeting', text: template.greeting },
    { kind: 'intro', text: 'Миний захиалга:' },
    ...lineSegments,
    ...(preference ? [preference] : []),
    { kind: 'closing', text: template.closing }
  ];
  const lineTexts = lineSegments.map(segment => segment.text);
  const text = `${template.greeting} Миний захиалга: ${lineTexts.join(', ')}. ${preference ? preference.text + ' ' : ''}${template.closing}`;
  if (/\p{N}/u.test(text)) fail(`a numeral remains in spoken text for ${order.id}`);
  return { id: order.id, signature, customer, levelIndex, voice, templateIndex, text, lineTexts, segments };
}
function validateRecord(G, order, record) {
  if (record.id !== order.id) fail('record id changed');
  const signature = typeof G.orderSignature === 'function' ? G.orderSignature(order) : localSignature(order);
  if (record.signature !== signature) fail(`signature mismatch for ${order.id}`);
  if (record.customer !== cleanName(order.customer, 'customer')) fail(`customer changed in ${order.id}`);
  if (record.voice !== voiceForCustomer(order.customer)) fail(`voice changed for customer ${order.customer}`);
  const lines = record.segments.filter(segment => segment.kind === 'line');
  if (lines.length !== order.lines.length || record.lineTexts.length !== order.lines.length) fail(`missing or extra spoken items in ${order.id}`);
  lines.forEach((segment, i) => {
    const source = order.lines[i];
    if (segment.productId !== source.productId || segment.variantId !== (source.variantId || null) || segment.amount !== source.amount) fail(`line ${i} changed in ${order.id}`);
    const expectedName = resolveName(G, source);
    if (segment.name !== expectedName || segment.text !== record.lineTexts[i]) fail(`name or spoken line changed in ${order.id}`);
    if (segment.text !== `${spokenAmount(G.BY_ID[source.productId], source.amount)} ${expectedName}`) fail(`quantity changed in ${order.id}`);
  });
  const expected = makeRecord(G, order);
  if (record.text !== expected.text) fail(`spoken text changed in ${order.id}`);
  if (JSON.stringify(record.segments) !== JSON.stringify(expected.segments)) fail(`segments changed in ${order.id}`);
  if (/\p{N}/u.test(record.text)) fail(`digits remain in ${order.id}`);
  return true;
}
function buildAudioCorpus(G, fullCampaign200, options = {}) {
  const expectedCount = options.expectedCount === undefined ? 200 : options.expectedCount;
  if (!Array.isArray(fullCampaign200) || fullCampaign200.length !== expectedCount) fail(`expected ${expectedCount} orders`);
  if (new Set(fullCampaign200.map(o => String(o.id))).size !== fullCampaign200.length) fail('duplicate order ids');
  const signatures = fullCampaign200.map(order => typeof G.orderSignature === 'function' ? G.orderSignature(order) : localSignature(order));
  if (new Set(signatures).size !== signatures.length) fail('repeated order contents');
  const corpus = fullCampaign200.map(order => makeRecord(G, order));
  corpus.forEach((record, i) => validateRecord(G, fullCampaign200[i], record));
  if (new Set(corpus.map(record => record.text)).size !== corpus.length) fail('repeated spoken messages');
  return corpus;
}
module.exports = buildAudioCorpus;
Object.assign(module.exports, { buildAudioCorpus, makeRecord, validateRecord, numberWords, spokenAmount, voiceForCustomer, VOICES, CUSTOMER_VOICES, TEMPLATES, NOTICE_MN, NOTICE_RU });
