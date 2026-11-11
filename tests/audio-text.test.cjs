'use strict';
const assert = require('node:assert/strict');
const audio = require('../audio-corpus.cjs');
const G = require('../dist/game-core.js');
let checks = 0;
const same = (actual, expected, message) => { checks++; assert.deepEqual(actual, expected, message); };
const ok = (condition, message) => { checks++; assert.ok(condition, message); };
const throws = (fn, expression, message) => { checks++; assert.throws(fn, expression, message); };
const numberCases = new Map([
 [1,'нэг'],[2,'хоёр'],[3,'гурван'],[4,'дөрвөн'],[5,'таван'],[6,'зургаан'],[7,'долоон'],[8,'найман'],[9,'есөн'],
 [10,'арван'],[12,'арван хоёр'],[18,'арван найман'],[20,'хорин'],[30,'гучин'],[40,'дөчин'],[50,'тавин'],[60,'жаран'],[70,'далан'],[80,'наян'],[90,'ерэн'],
 [100,'зуун'],[120,'зуун хорин'],[180,'зуун наян'],[200,'хоёр зуун'],[250,'хоёр зуун тавин'],[300,'гурван зуун'],[330,'гурван зуун гучин'],
 [400,'дөрвөн зуун'],[500,'таван зуун'],[600,'зургаан зуун'],[750,'долоон зуун тавин'],[990,'есөн зуун ерэн']
]);
for(const [n, words] of numberCases) same(audio.numberWords(n), words, `Attributive ${n}`);
const amountCases = [
 ['pieces',1,'нэг ширхэг'], ['pieces',6,'зургаан ширхэг'], ['pieces',12,'арван хоёр ширхэг'], ['pieces',18,'арван найман ширхэг'],
 ['weight',60,'жаран грамм'], ['weight',120,'зуун хорин грамм'], ['weight',180,'зуун наян грамм'], ['weight',100,'зуун грамм'],
 ['weight',200,'хоёр зуун грамм'], ['weight',250,'хоёр зуун тавин грамм'], ['weight',400,'дөрвөн зуун грамм'], ['weight',600,'зургаан зуун грамм'],
 ['weight',1000,'нэг килограмм'], ['weight',1500,'нэг килограмм таван зуун грамм'], ['weight',3000,'гурван килограмм'],
 ['volume',330,'гурван зуун гучин миллилитр'], ['volume',500,'таван зуун миллилитр'], ['volume',750,'долоон зуун тавин миллилитр'],
 ['volume',1000,'нэг литр'], ['volume',1500,'нэг литр таван зуун миллилитр'], ['volume',2250,'хоёр литр хоёр зуун тавин миллилитр']
];
for(const [measure, amount, words] of amountCases) same(audio.spokenAmount({measure}, amount),words,`${amount} ${measure}`);
for(const bad of [0,-1,1.5,NaN,Infinity]) throws(()=>audio.spokenAmount({measure:'weight'},bad),/invalid amount/,'Bad amounts cannot silently reach speech');
throws(()=>audio.spokenAmount({measure:'unknown'},10),/unsupported measure/);
const full = G.createCampaign([50,50,50,50]);
const snapshot=JSON.stringify(full);
const corpus=audio(G, full);
same(corpus.length,200,'All 200 orders');
same(JSON.stringify(full),snapshot,'Input campaign not mutated');
same(new Set(corpus.map(r=>r.text)).size,200,'All messages have distinct full contents');
same(new Set(corpus.map(r=>r.signature)).size,200,'All source signatures preserved');
same(new Set(corpus.map(r=>r.voice)).size,2,'Exactly the two requested native voices');
const voicesByCustomer=new Map();
for(let i=0;i<corpus.length;i++){
 const r=corpus[i], order=full[i];
 ok(audio.validateRecord(G,order,r),'Each record audited');
 ok(!/\p{N}/u.test(r.text),'No numerical digits anywhere in speech text');
 same(r.segments.filter(s=>s.kind==='line').length,order.lines.length,'No missing or invented items');
 if(voicesByCustomer.has(r.customer))same(r.voice,voicesByCustomer.get(r.customer),'Voice stays with the fictional character');
 voicesByCustomer.set(r.customer,r.voice);
 const pieces=r.segments.filter(s=>s.kind==='line'&&s.measure==='pieces');
 for(const line of pieces)ok(line.quantityText.endsWith(' ширхэг'),'Piece classifier included');
 if(order.levelIndex===3){
  const p=r.segments.find(s=>s.kind==='preference');
  ok(p,'Every advanced request spoken');
  same(p.productId,order.preference.productId,'Preference names an ordered item');
  if(order.preference.kind==='brand')same(p.variantId,order.preference.variantId,'Exact requested bread brand spoken');
 }
}
same(audio(G,full),corpus,'Repeated build deterministic');
throws(()=>audio(G,full.slice(0,199)),/expected 200/,'Never silently omit an order');
const duplicate=full.slice();duplicate[1]={...duplicate[0]};
throws(()=>audio(G,duplicate),/duplicate order ids/);
const repeated=full.slice();repeated[1]={...repeated[0],id:9999};
throws(()=>audio(G,repeated),/repeated order contents/);
const changed=JSON.parse(JSON.stringify(corpus[0]));changed.segments.find(s=>s.kind==='line').amount++;
throws(()=>audio.validateRecord(G,full[0],changed),/line .* changed/,'Changed quantities detected');
const missing=JSON.parse(JSON.stringify(corpus[0]));missing.segments=missing.segments.filter((s,i)=>i!==2);
throws(()=>audio.validateRecord(G,full[0],missing),/missing or extra/,'Missing spoken item detected');
const badText=JSON.parse(JSON.stringify(corpus[0]));badText.text+=' Нэг литр сүү.';
throws(()=>audio.validateRecord(G,full[0],badText),/spoken text changed/,'Invented text detected');
const preferenceOrder=full.find(o=>o.preference?.kind==='brand');
const preferenceRecord=audio.makeRecord(G,preferenceOrder);
const badPreference=JSON.parse(JSON.stringify(preferenceRecord));badPreference.segments.find(s=>s.kind==='preference').text='Өөр талх аваарай.';
throws(()=>audio.validateRecord(G,preferenceOrder,badPreference),/segments changed/,'Changed brand request detected');
const simpleG={
 BY_ID:{beer:{id:'beer',name:'Шар айраг',measure:'volume'},wine:{id:'wine',name:'Дарс',measure:'volume'},fish:{id:'fish',name:'Загас',measure:'weight'},buuz:{id:'buuz',name:'Бууз',measure:'pieces'},candy:{id:'candy',name:'Чихэр',measure:'weight'}},
 lotName(line){return this.BY_ID[line.productId].name;}
};
const testOrder={id:'extended-catalog',customer:'Болд',levelIndex:2,lines:[{productId:'beer',amount:330},{productId:'wine',amount:750},{productId:'fish',amount:250},{productId:'buuz',amount:12},{productId:'candy',amount:100}]};
const extended=audio.makeRecord(simpleG,testOrder);
same(extended.lineTexts,[
 'гурван зуун гучин миллилитр Шар айраг','долоон зуун тавин миллилитр Дарс','хоёр зуун тавин грамм Загас','арван хоёр ширхэг Бууз','зуун грамм Чихэр'
],'Expanded catalogue types remain exact');
ok(audio.validateRecord(simpleG,testOrder,extended),'Extended catalogue audited');
const namedDigits={...simpleG,lotName:()=> 'Шар айраг 330 мл'};
throws(()=>audio.makeRecord(namedDigits,testOrder),/product name contains a numeral/,'Numeric names must be curated rather than guessed');
const noPref={...testOrder,levelIndex:3};
throws(()=>audio.makeRecord(simpleG,noPref),/missing its preference/);
console.log(`PASS: ${checks} checks; 200 exact spoken orders; ${voicesByCustomer.size} fictional customers mapped to two approved voices.`);
