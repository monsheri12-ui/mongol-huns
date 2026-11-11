/* Pure game rules. All amounts use integer millilitres, grams, or pieces. */
(function (root, factory) {
  const api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.GroceryGame = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';
  const DAY = '2026-11-09';
  const CATEGORIES = [
    { id: 'all', name: 'Бүгд', icon: 'grid' },
    { id: 'dairy', name: 'Сүү, өндөг', icon: 'milk' },
    { id: 'bread', name: 'Талх', icon: 'bread' },
    { id: 'produce', name: 'Жимс, ногоо', icon: 'apple' },
    { id: 'pantry', name: 'Хүнс, цай', icon: 'jar' },
    { id: 'cold', name: 'Ус, зайрмаг', icon: 'snow' },
    { id: 'meat', name: 'Мах, загас', icon: 'snow' },
    { id: 'frozen', name: 'Хөлдөөсөн хүнс', icon: 'snow' },
    { id: 'canned', name: 'Лаазалсан хүнс, соус', icon: 'jar' },
    { id: 'ready', name: 'Бэлэн хоол', icon: 'bag' },
    { id: 'drinks', name: 'Ундаа, жүүс', icon: 'milk' },
    { id: 'sweets', name: 'Амттан', icon: 'bread' },
    { id: 'alcohol', name: 'Согтууруулах ундаа', icon: 'milk' },
    { id: 'household', name: 'Ахуйн бараа', icon: 'grid' }
  ];
  const BASE_PRODUCTS = [
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
  // MARKET_PRODUCTS_START
  const EXTRA_PRODUCTS = [
  {
    "id": "chicken-thigh",
    "name": "Тахианы гуя",
    "category": "meat",
    "measure": "weight",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "tray",
    "hasExpiry": true
  },
  {
    "id": "chicken-fillet",
    "name": "Тахианы гуяны цул мах",
    "category": "meat",
    "measure": "weight",
    "pack": 750,
    "alternate": 750,
    "shelfKind": "tray",
    "hasExpiry": true
  },
  {
    "id": "tilapia",
    "name": "Тилапиа загас",
    "category": "meat",
    "measure": "weight",
    "pack": 800,
    "alternate": 800,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "smoked-sausage",
    "name": "Утсан хиам",
    "category": "meat",
    "measure": "weight",
    "pack": 450,
    "alternate": 450,
    "shelfKind": "sausage",
    "hasExpiry": true
  },
  {
    "id": "dried-meat",
    "name": "Борц",
    "category": "meat",
    "measure": "weight",
    "pack": 150,
    "alternate": 150,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "smoked-salmon",
    "name": "Давсалсан яргай загас",
    "category": "meat",
    "measure": "weight",
    "pack": 300,
    "alternate": 300,
    "shelfKind": "flat",
    "hasExpiry": true
  },
  {
    "id": "frozen-fish",
    "name": "Загасны савханцар",
    "category": "frozen",
    "measure": "weight",
    "pack": 405,
    "alternate": 405,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "crab-sticks",
    "name": "Хавчны амттай сурими",
    "category": "frozen",
    "measure": "weight",
    "pack": 150,
    "alternate": 150,
    "shelfKind": "flat",
    "hasExpiry": true
  },
  {
    "id": "shrimp",
    "name": "Сам хорхой",
    "category": "frozen",
    "measure": "weight",
    "pack": 250,
    "alternate": 250,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "buuz",
    "name": "Бууз",
    "category": "frozen",
    "measure": "weight",
    "pack": 900,
    "alternate": 900,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "bansh",
    "name": "Банш",
    "category": "frozen",
    "measure": "weight",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "canned-tuna",
    "name": "Лаазалсан туна загас",
    "category": "canned",
    "measure": "weight",
    "pack": 185,
    "alternate": 185,
    "shelfKind": "can",
    "hasExpiry": true
  },
  {
    "id": "pickled-cucumber",
    "name": "Даршилсан өргөст хэмх",
    "category": "canned",
    "measure": "pieces",
    "pack": 1,
    "alternate": 1,
    "shelfKind": "jar",
    "hasExpiry": true
  },
  {
    "id": "beet-salad",
    "name": "Хүрэн манжингийн салат",
    "category": "canned",
    "measure": "weight",
    "pack": 520,
    "alternate": 520,
    "shelfKind": "jar",
    "hasExpiry": true
  },
  {
    "id": "liver-pate",
    "name": "Элэгний нухаш",
    "category": "canned",
    "measure": "weight",
    "pack": 100,
    "alternate": 100,
    "shelfKind": "can",
    "hasExpiry": true
  },
  {
    "id": "mushroom-lecho",
    "name": "Мөөгтэй лечо",
    "category": "canned",
    "measure": "weight",
    "pack": 580,
    "alternate": 580,
    "shelfKind": "jar",
    "hasExpiry": true
  },
  {
    "id": "condensed-milk",
    "name": "Өтгөрүүлсэн сүү",
    "category": "canned",
    "measure": "weight",
    "pack": 280,
    "alternate": 280,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "blueberry-jam",
    "name": "Нэрсний чанамал",
    "category": "canned",
    "measure": "weight",
    "pack": 620,
    "alternate": 620,
    "shelfKind": "jar",
    "hasExpiry": true
  },
  {
    "id": "soy-sauce",
    "name": "Шар буурцгийн соус",
    "category": "canned",
    "measure": "weight",
    "pack": 200,
    "alternate": 200,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "mayonnaise",
    "name": "Майонез",
    "category": "canned",
    "measure": "weight",
    "pack": 250,
    "alternate": 250,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "ketchup",
    "name": "Кетчуп",
    "category": "canned",
    "measure": "weight",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "black-pepper",
    "name": "Нунтаг хар перец",
    "category": "pantry",
    "measure": "weight",
    "pack": 50,
    "alternate": 50,
    "shelfKind": "packet",
    "hasExpiry": true
  },
  {
    "id": "bay-leaf",
    "name": "Лаврын навч",
    "category": "pantry",
    "measure": "weight",
    "pack": 20,
    "alternate": 20,
    "shelfKind": "packet",
    "hasExpiry": true
  },
  {
    "id": "buckwheat",
    "name": "Гурвалжин будаа",
    "category": "pantry",
    "measure": "weight",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "green-tea",
    "name": "Ногоон цай",
    "category": "pantry",
    "measure": "pieces",
    "pack": 1,
    "alternate": 1,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "instant-coffee",
    "name": "Уусдаг кофе",
    "category": "pantry",
    "measure": "weight",
    "pack": 95,
    "alternate": 95,
    "shelfKind": "jar",
    "hasExpiry": true
  },
  {
    "id": "milk-tea",
    "name": "Говийн хийцтэй цай",
    "category": "pantry",
    "measure": "weight",
    "pack": 98,
    "alternate": 98,
    "shelfKind": "tub",
    "hasExpiry": true
  },
  {
    "id": "instant-noodles",
    "name": "Бэлэн гоймон",
    "category": "ready",
    "measure": "weight",
    "pack": 120,
    "alternate": 120,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "noodle-cup",
    "name": "Аягатай бэлэн гоймон",
    "category": "ready",
    "measure": "weight",
    "pack": 90,
    "alternate": 90,
    "shelfKind": "tub",
    "hasExpiry": true
  },
  {
    "id": "mantuu",
    "name": "Мини мантуу",
    "category": "ready",
    "measure": "weight",
    "pack": 400,
    "alternate": 400,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "bone-broth",
    "name": "Үхрийн булууны шөл",
    "category": "ready",
    "measure": "weight",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "potato-mash",
    "name": "Төмсний нухаш",
    "category": "ready",
    "measure": "weight",
    "pack": 345,
    "alternate": 345,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "vegan-steak",
    "name": "Веган стейк",
    "category": "ready",
    "measure": "weight",
    "pack": 200,
    "alternate": 200,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "vegan-soup",
    "name": "Шөлөндөө цагаан хоол",
    "category": "ready",
    "measure": "weight",
    "pack": 200,
    "alternate": 200,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "tteokbokki",
    "name": "Соустай догбуги",
    "category": "ready",
    "measure": "weight",
    "pack": 450,
    "alternate": 450,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "frozen-pizza",
    "name": "Бяслагтай пицца",
    "category": "ready",
    "measure": "weight",
    "pack": 325,
    "alternate": 325,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "cola",
    "name": "Кола",
    "category": "drinks",
    "measure": "volume",
    "pack": 2000,
    "alternate": 2000,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "fruit-juice",
    "name": "Олон жимсний жүүс",
    "category": "drinks",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "iced-tea",
    "name": "Зөгийн бал, лийртэй цай",
    "category": "drinks",
    "measure": "volume",
    "pack": 1200,
    "alternate": 1200,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "sparkling-water",
    "name": "Гүзээлзгэний амттай оргилуун ус",
    "category": "drinks",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "sour-cream",
    "name": "Зөөхий",
    "category": "dairy",
    "measure": "weight",
    "pack": 350,
    "alternate": 350,
    "shelfKind": "tub",
    "hasExpiry": true
  },
  {
    "id": "airag",
    "name": "Айраг",
    "category": "dairy",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "curd-drink",
    "name": "Аарцны ундаа",
    "category": "dairy",
    "measure": "volume",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "carton",
    "hasExpiry": true
  },
  {
    "id": "dried-curd",
    "name": "Хатаасан аарц",
    "category": "dairy",
    "measure": "weight",
    "pack": 29,
    "alternate": 29,
    "shelfKind": "packet",
    "hasExpiry": true
  },
  {
    "id": "lactose-free-milk",
    "name": "Лактозгүй сүү",
    "category": "dairy",
    "measure": "volume",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "carton",
    "hasExpiry": true
  },
  {
    "id": "milk-biscuits",
    "name": "Сүүтэй жигнэмэг",
    "category": "sweets",
    "measure": "weight",
    "pack": 444,
    "alternate": 444,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "rice-chips",
    "name": "Далайн байцаатай чипс",
    "category": "sweets",
    "measure": "weight",
    "pack": 95,
    "alternate": 95,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "chocolate-wafer",
    "name": "Шоколадтай өрмөнцөр",
    "category": "sweets",
    "measure": "weight",
    "pack": 50,
    "alternate": 50,
    "shelfKind": "packet",
    "hasExpiry": true
  },
  {
    "id": "choco-pie",
    "name": "Шоколадтай зөөлөн жигнэмэг",
    "category": "sweets",
    "measure": "pieces",
    "pack": 12,
    "alternate": 12,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "waffles",
    "name": "Шоколадтай вафли",
    "category": "sweets",
    "measure": "weight",
    "pack": 150,
    "alternate": 150,
    "shelfKind": "packet",
    "hasExpiry": true
  },
  {
    "id": "chocolate-box",
    "name": "Шоколадны цуглуулга",
    "category": "sweets",
    "measure": "weight",
    "pack": 250,
    "alternate": 250,
    "shelfKind": "box",
    "hasExpiry": true
  },
  {
    "id": "curd-candy",
    "name": "Аарцан үрэл",
    "category": "sweets",
    "measure": "weight",
    "pack": 85,
    "alternate": 85,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "milk-chocolate",
    "name": "Сүүтэй шоколад",
    "category": "sweets",
    "measure": "weight",
    "pack": 90,
    "alternate": 90,
    "shelfKind": "flat",
    "hasExpiry": true
  },
  {
    "id": "beer-sengur",
    "name": "Сэнгүр пиво",
    "category": "alcohol",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "can",
    "hasExpiry": true
  },
  {
    "id": "beer-altangovi",
    "name": "Алтанговь шар айраг",
    "category": "alcohol",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "can",
    "hasExpiry": true
  },
  {
    "id": "beer-borgio",
    "name": "Боргио шар айраг",
    "category": "alcohol",
    "measure": "volume",
    "pack": 500,
    "alternate": 500,
    "shelfKind": "can",
    "hasExpiry": true
  },
  {
    "id": "red-wine",
    "name": "Улаан дарс",
    "category": "alcohol",
    "measure": "volume",
    "pack": 750,
    "alternate": 750,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "white-wine",
    "name": "Цагаан дарс",
    "category": "alcohol",
    "measure": "volume",
    "pack": 750,
    "alternate": 750,
    "shelfKind": "bottle",
    "hasExpiry": true
  },
  {
    "id": "dish-soap",
    "name": "Аяга таваг угаагч шингэн",
    "category": "household",
    "measure": "volume",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "pump",
    "hasExpiry": true
  },
  {
    "id": "sponges",
    "name": "Аяга таваг угаах порлон",
    "category": "household",
    "measure": "pieces",
    "pack": 4,
    "alternate": 4,
    "shelfKind": "bag",
    "hasExpiry": false
  },
  {
    "id": "napkins",
    "name": "Хуурай салфетка",
    "category": "household",
    "measure": "pieces",
    "pack": 100,
    "alternate": 100,
    "shelfKind": "bag",
    "hasExpiry": false
  },
  {
    "id": "laundry-soap",
    "name": "Эдийн саван",
    "category": "household",
    "measure": "pieces",
    "pack": 1,
    "alternate": 1,
    "shelfKind": "bar",
    "hasExpiry": true
  },
  {
    "id": "garbage-bags",
    "name": "Хогны уут",
    "category": "household",
    "measure": "pieces",
    "pack": 30,
    "alternate": 30,
    "shelfKind": "roll",
    "hasExpiry": false
  },
  {
    "id": "paper-towels",
    "name": "Гал тогооны арчуур",
    "category": "household",
    "measure": "pieces",
    "pack": 63,
    "alternate": 63,
    "shelfKind": "roll",
    "hasExpiry": false
  },
  {
    "id": "beef",
    "name": "Үхрийн мах",
    "category": "meat",
    "measure": "weight",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "bag",
    "hasExpiry": true
  },
  {
    "id": "mutton",
    "name": "Хонины мах",
    "category": "meat",
    "measure": "weight",
    "pack": 1000,
    "alternate": 1000,
    "shelfKind": "bag",
    "hasExpiry": true
  }
];
  const ORDER_PRODUCTS = [...BASE_PRODUCTS, ...EXTRA_PRODUCTS];
  const SUPPLEMENTAL_PRODUCTS = [{"id":"energy-redbull","name":"Red Bull энергийн ундаа","category":"drinks","measure":"volume","pack":250,"alternate":250,"storage":"ambient","soldByWeight":false},{"id":"energy-monster","name":"Monster энергийн ундаа","category":"drinks","measure":"volume","pack":500,"alternate":500,"storage":"ambient","soldByWeight":false},{"id":"energy-target-zero","name":"Target Zero чихэргүй энергийн ундаа","category":"drinks","measure":"volume","pack":450,"alternate":450,"storage":"ambient","soldByWeight":false},{"id":"horse-meat","name":"Адууны цул мах","category":"meat","measure":"weight","pack":1000,"alternate":1000,"storage":"frozen","soldByWeight":true},{"id":"goat-meat","name":"Ямааны цул мах","category":"meat","measure":"weight","pack":1000,"alternate":1000,"storage":"frozen","soldByWeight":true},{"id":"pork-tenderloin","name":"Гахайн гол мах","category":"meat","measure":"weight","pack":1000,"alternate":1000,"storage":"frozen","soldByWeight":true},{"id":"fish-flounder","name":"Хөлдөөсөн кажами загас","category":"frozen","measure":"weight","pack":900,"alternate":900,"storage":"frozen","soldByWeight":false},{"id":"fish-mackerel","name":"Хөлдөөсөн макрель загас","category":"frozen","measure":"weight","pack":900,"alternate":900,"storage":"frozen","soldByWeight":false},{"id":"fish-saury","name":"Хөлдөөсөн сайра загас","category":"frozen","measure":"weight","pack":900,"alternate":900,"storage":"frozen","soldByWeight":false},{"id":"turkey-whole","name":"Бүхэл цацагт хяруулын мах","category":"meat","measure":"weight","pack":5200,"alternate":5200,"storage":"frozen","soldByWeight":false},{"id":"duck-smoked","name":"Ясгүй утсан нугасны мах","category":"meat","measure":"weight","pack":450,"alternate":450,"storage":"frozen","soldByWeight":false}];
  const BASIC_ASSORTMENT = root.GroceryAssortment || (typeof module==='object'&&module.exports?require('./basic-assortment.js'):{products:[]});
  SUPPLEMENTAL_PRODUCTS.push(...BASIC_ASSORTMENT.products);
  const PRODUCTS = [...ORDER_PRODUCTS, ...SUPPLEMENTAL_PRODUCTS];
  // MARKET_PRODUCTS_END
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
  const ICECREAM_VARIANTS = [{"id": "icecream-amore-caramel", "productId": "icecream", "name": "Amore иристэй зайрмаг", "photoKey": "icecream-amore-caramel", "pack": 60}, {"id": "icecream-amore-blueberry", "productId": "icecream", "name": "Amore нэрстэй зайрмаг", "photoKey": "icecream-amore-blueberry", "pack": 60}, {"id": "icecream-amore-chocolate", "productId": "icecream", "name": "Amore шоколадан бүрхүүлтэй зайрмаг", "photoKey": "icecream-amore-chocolate", "pack": 60}, {"id": "icecream-amore-family-cream", "productId": "icecream", "name": "Amore цөцгийтэй гэр бүлийн зайрмаг", "photoKey": "icecream-amore-family-cream", "pack": 300}, {"id": "icecream-amore-family-chocolate", "productId": "icecream", "name": "Amore шоколадтай гэр бүлийн зайрмаг", "photoKey": "icecream-amore-family-chocolate", "pack": 300}, {"id": "icecream-amore-family-strawberry", "productId": "icecream", "name": "Amore гүзээлзгэнэтэй гэр бүлийн зайрмаг", "photoKey": "icecream-amore-family-strawberry", "pack": 300}];
  const ICECREAM_BY_ID = Object.fromEntries(ICECREAM_VARIANTS.map(v=>[v.id,v]));
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
  function lotName(lot) { return BREAD_BY_ID[lot?.variantId]?.name || ICECREAM_BY_ID[lot?.variantId]?.name || BY_ID[lot?.productId]?.name || ''; }
  function photoKey(lot) {
    if (lot?.visualKey) return lot.visualKey;
    if (BY_ID[lot?.productId]?.basicAssortment) return lot.productId;
    if (['red-apple', 'orange'].includes(lot?.productId)) return `${lot.productId}-net`;
    if (BY_ID[lot?.productId]?.category === 'produce') return `${lot.productId}-fresh`;
    if (BREAD_BY_ID[lot?.variantId]) return BREAD_BY_ID[lot.variantId].photoKey;
    if (ICECREAM_BY_ID[lot?.variantId]) return ICECREAM_BY_ID[lot.variantId].photoKey;
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
          chosen = categories.map(category => pick(ORDER_PRODUCTS.filter(p => p.category === category)));
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
          chosen.push(...mix(ORDER_PRODUCTS.filter(p => !chosen.some(c => c.id === p.id) && (levelIndex !== 1 || p.hasExpiry !== false))).slice(0, count - chosen.length));
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
  function createClassicCampaign(counts = [5, 5, 5, 5], pool = root.ClassicOrderPool || []) {
    counts = normalizeCounts(counts);
    return pool.filter(o => o.levelNumber <= counts[o.levelIndex]).map((o, i) => ({ ...o, classic: true, levelCount: counts[o.levelIndex], campaignIndex: i, number: i + 1, lines: o.lines.map(l => ({ ...l })), ...(o.preference ? { preference: { ...o.preference } } : {}) }));
  }
  const ORDERS = createCampaign();
  function formatAmount(productOrId, amount) {
    const p = typeof productOrId === 'string' ? BY_ID[productOrId] : productOrId;
    if (!p || !Number.isFinite(amount)) return '';
    if (p.measure === 'pieces') return `${amount} ширхэг`;
    if (p.measure === 'volume') return amount >= 1000 ? `${Number((amount / 1000).toFixed(3))} л` : `${amount} мл`;
    return amount >= 1000 ? `${Number((amount / 1000).toFixed(3))} кг` : `${amount} г`;
  }
  function dateLabel(date) { return date ? date.replaceAll('-', '.') : '—'; }
  function addDays(day, offset) {
    const date = new Date(`${day}T12:00:00Z`);
    date.setUTCDate(date.getUTCDate() + offset);
    return date.toISOString().slice(0, 10);
  }
  // A use-by date includes the printed day. Only an earlier date is expired.
  function isExpired(lot, day = DAY) { return !!lot.expires && lot.expires < day; }
  function isBulk(lot) { return lot?.retail === 'loose'; }
  function isSpoiled(lot) { return isBulk(lot) && lot.condition === 'spoiled'; }
  function isDamaged(lot) { return lot.productId==='eggs' && lot.condition==='damaged'; }
  function isUnfit(lot, day = DAY) { return isExpired(lot, day) || isSpoiled(lot) || isDamaged(lot); }
  function lotUnit(lot) { return isBulk(lot) ? 'Жинлэж авна' : formatAmount(lot.productId, lot.pack); }
  function packageQuantity(lot, quantity) { return isBulk(lot) ? (quantity > 0 ? 1 : 0) : quantity; }
  function weighPortion(lot, grams) {
    if (!isBulk(lot) || !Number.isSafeInteger(grams) || grams < 0) return 0;
    return Math.min(grams, lot.stock);
  }
  function adjustPortion(lot, grams, delta) {
    if (!Number.isSafeInteger(delta)) return weighPortion(lot, grams);
    return weighPortion(lot, Math.max(0, weighPortion(lot, grams) + delta));
  }
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
    const stockProducts = order.legacy || order.classic ? BASE_PRODUCTS : ORDER_PRODUCTS;
    const breadChoice = productId => BREAD_VARIANTS.find(v => v.productId === productId);
    function make(productId, pack, expiryOffset, requiredAmount = 0, variantId, hidden = false) {
      const expires = BY_ID[productId].hasExpiry === false ? null : addDays(order.day, expiryOffset);
      const nominalManufactured = expires ? addDays(expires, -(BY_ID[productId].category === 'produce' ? 8 : 21)) : null;
      const manufactured = nominalManufactured && !order.legacy && !order.classic && nominalManufactured > order.day ? order.day : nominalManufactured;
      const lot = {
        id: `o${order.id}-l${++serial}`, productId, pack,
        manufactured,
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
        if (p.hasExpiry !== false) make(productId, p.pack, -1 - (i % 3), amount, variantId);
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
    const distractors = [...new Set([...similar, ...shuffle(stockProducts.filter(p => !required.has(p.id)).map(p => p.id), order.id * 71)])];
    distractors.forEach((id, i) => {
      const old = i === 2;
      make(id, BY_ID[id].pack, levelIndex === 0 && !order.legacy ? 7 + i : old ? -2 : 7 + i, 0, undefined, order.legacy && levelIndex === 0 && old);
    });
    // Append missing bread SKUs after the original stock so legacy lot IDs stay stable.
    BREAD_VARIANTS.forEach((variant, i) => {
      if (lots.some(lot => lot.variantId === variant.id)) return;
      make(variant.productId, 1, 6 + i, 0, variant.id);
    });
    // Archived campaigns retain every original lot ID; new departments append stock.
    if (order.legacy || order.classic) EXTRA_PRODUCTS.forEach((p, i) => make(p.id, p.pack, 7 + i));
    // New gram-based lots append without reinterpreting any saved package ID.
    // A cart quantity for these lots is an integer mass in grams (pack = 1 g).
    ORDER_PRODUCTS.filter(p => p.category === 'produce' || ['chocolate-box', 'curd-candy'].includes(p.id)).forEach(p => {
      const produce = p.category === 'produce';
      for (const condition of ['fresh', 'spoiled']) {
        const bad = condition === 'spoiled';
        lots.push({
          id: `o${order.id}-bulk-${p.id}-${condition}`, productId: p.id, pack: 1,
          stock: 10000, retail: 'loose', condition: produce ? condition : undefined,
          visualKey: `${p.id}-${produce ? condition : 'bulk'}`,
          manufactured: produce ? null : addDays(order.day, -15),
          expires: produce ? null : addDays(order.day, bad ? -2 : 12),
          batch: `W${order.id}-${p.id}-${bad ? 2 : 1}`,
          ...(levelIndex === 0 && bad ? { hidden: true } : {})
        });
      }
    });
    // Optional flavours and family tubs append after every existing saved lot.
    ICECREAM_VARIANTS.forEach((variant,i)=>{
      const requested=order.lines.filter(l=>l.productId==='icecream').reduce((sum,l)=>sum+l.amount,0);
      lots.push({id:`o${order.id}-${variant.id}`,productId:'icecream',variantId:variant.id,visualKey:variant.photoKey,pack:variant.pack,stock:Math.max(3,Math.ceil(requested/variant.pack)+1),manufactured:addDays(order.day,-6),expires:addDays(order.day,8+i),batch:`I${order.id}-${i+1}`});
    });
    // New retail stock never enters the already recorded 200-order speech pool.
    SUPPLEMENTAL_PRODUCTS.forEach((p,i)=>{
      const added=p.basicAssortment,looseProduce=p.soldByWeight&&p.category==='produce';
      const life=p.shelfLifeDays||(p.storage==='frozen'?180:p.storage==='chilled'?10:p.category==='bread'?7:p.category==='canned'?730:180);
      const dated=p.hasExpiry!==false&&!looseProduce;
      const manufactured=added?(dated?addDays(order.day,-2):null):addDays(order.day,-8);
      const expires=added?(dated?addDays(manufactured,life):null):addDays(order.day,15+i);
      lots.push({id:`o${order.id}-shelf-${p.id}`,productId:p.id,pack:p.soldByWeight?1:p.pack,stock:p.soldByWeight?10000:5,...(p.soldByWeight?{retail:'loose',...(added?{condition:'fresh'}:{})}:{}),storage:p.storage,manufactured,expires,batch:`S${order.id}-${i+1}`});
    });
    // A sealed egg carton looks the same outside. Open it to check the shells.
    lots.push({id:`o${order.id}-eggs-damaged`,productId:'eggs',pack:6,stock:3,condition:'damaged',manufactured:addDays(order.day,-2),expires:addDays(order.day,8),batch:`E${order.id}-C`,...(levelIndex===0?{hidden:true}:{})});
    // Beginners can encounter one bad pack, or none anywhere in the shop.
    // Keep it deterministic for a saved shift so reloading cannot reroll it.
    if(levelIndex===0&&!order.legacy&&!order.classic){
      let roll=(Math.imul((order.qualitySeed>>>0)^order.id,1597334677)+3812015801)>>>0;roll^=roll>>>16;roll>>>=0;
      if(roll%100<30){
        const requested=new Set((order.qualityLines||order.lines).map(l=>l.productId));
        const dated=lots.filter(l=>!l.hidden&&l.expires&&!isUnfit(l,order.day)&&requested.has(l.productId));
        const bad=lots.filter(l=>l.hidden&&(isSpoiled(l)||isDamaged(l)));
        if((roll>>>8)%3===0&&dated.length){const source=dated[(roll>>>16)%dated.length];lots.push({...source,id:`o${order.id}-beginner-expired-${source.productId}`,stock:2,manufactured:addDays(order.day,-22),expires:addDays(order.day,-1),batch:source.batch+'-B'});}
        else if(bad.length){const relevant=bad.filter(l=>requested.has(l.productId)),choices=relevant.length?relevant:bad;delete choices[(roll>>>16)%choices.length].hidden;}
      }
    }
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
    const expired = [], spoiled = [], damaged = [], wrongVariants = [];
    const expected = Object.fromEntries(order.lines.map(line => [line.productId, line]));
    let packageCount = 0;
    inventory.forEach(lot => {
      const qty = safeCart[lot.id] || 0;
      if (!qty) return;
      const amount = qty * lot.pack;
      totals[lot.productId] = (totals[lot.productId] || 0) + amount;
      packageCount += packageQuantity(lot, qty);
      const line = expected[lot.productId];
      if (line?.variantId && lot.variantId !== line.variantId) {
        wrongVariants.push({ lotId: lot.id, productId: lot.productId, variantId: lot.variantId || null, expectedVariantId: line.variantId, amount, quantity: qty, name: lotName(lot), expectedName: lotName(line) });
      } else matchingTotals[lot.productId] = (matchingTotals[lot.productId] || 0) + amount;
      if (isExpired(lot, order.day)) expired.push({ lotId: lot.id, productId: lot.productId, expires: lot.expires, quantity: qty, variantId: lot.variantId });
      if (isSpoiled(lot)) spoiled.push({ lotId: lot.id, productId: lot.productId, amount });
      if (isDamaged(lot)) damaged.push({ lotId: lot.id, productId: lot.productId, amount });
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
    return { ok: !missing.length && !excess.length && !unexpected.length && !expired.length && !spoiled.length && !damaged.length && !wrongVariants.length, missing, excess, unexpected, expired, spoiled, damaged, wrongVariants, totals, matchingTotals, packageCount };
  }
  function starsForAttempts(attempts) { return attempts <= 1 ? 3 : attempts === 2 ? 2 : 1; }
  return { DAY, CATEGORIES, PRODUCTS, ORDER_PRODUCTS, BASE_PRODUCTS, EXTRA_PRODUCTS, SUPPLEMENTAL_PRODUCTS, BY_ID, ORDERS, LEGACY_ORDERS, DEFAULT_SEED, LEVELS, BREAD_VARIANTS, BREAD_BY_ID, ICECREAM_VARIANTS, ICECREAM_BY_ID, normalizeCounts, createCampaign, createClassicCampaign, orderSignature, levelForOrder, lotName, photoKey, formatAmount, dateLabel, addDays, isExpired, isBulk, isSpoiled, isDamaged, isUnfit, lotUnit, packageQuantity, weighPortion, adjustPortion, shuffle, createInventory, sanitizeCart, validateOrder, starsForAttempts };
});
