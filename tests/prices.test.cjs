'use strict';
const assert=require('node:assert/strict'),crypto=require('node:crypto');
const G=require('../dist/game-core.js'),P=require('../dist/prices.js'),F=require('../dist/fulfilment.js');
let checks=0;const ok=(value,message)=>{checks++;assert.ok(value,message);};
const legacy=G.PRODUCTS.filter(p=>!p.basicAssortment).flatMap(p=>[1,p.pack,125,1000,2500].map(amount=>[p.id,amount,F.refundValue(p.id,amount)]));
ok(crypto.createHash('sha256').update(JSON.stringify(legacy)).digest('hex')==='39f6d70a24ba9b0fb16afd8fffd5653c3c1d05ca4ecb28f88f3ef53e5650f749','All pre-existing102-product refund and fine rates remain identical');
ok(Object.keys(P.OFFERS).length===6,'Six products take turns in the promotion cycle');
const order=G.createCampaign([50,50,50,50])[0],lots=G.createInventory(order);
for(const [id,offer] of Object.entries(P.OFFERS)){
 P.setDay(P.PROMOTION_CYCLE.indexOf(id)+1);
 const product=G.BY_ID[id],lot=lots.find(l=>l.productId===id),q=P.quote(lot);
 ok(product.basicAssortment&&!G.ORDER_PRODUCTS.some(p=>p.id===id),'Promotions do not reinterpret a recorded order or its saved claim');
 ok(Number.isSafeInteger(offer.price)&&offer.price>0&&offer.price<offer.regular,'Sale and regular prices are valid integer tugriks');
 ok(q.amount===product.pack&&q.price===offer.price&&q.regular===offer.regular,'Price is for this exact photographed package');
 ok(q.percent===Math.round((offer.regular-offer.price)/offer.regular*100),'Badge percentage agrees with the actual price reduction');
 ok(F.refundValue(id,product.pack)===offer.price&&F.refundValue(id,product.pack*2)===offer.price*2,'One or two refunded packs use the advertised sale price');
 for(const russian of [false,true]){const html=P.html(lot,russian);ok(html.includes('<del')&&html.includes(P.money(offer.regular))&&html.includes(P.money(offer.price)),'Card contains crossed-out regular and current price');ok(html.includes(russian?'Скидка':'Хямдрал'),'Price headings follow the selected interface language');ok(!/202\d[.-]\d\d/.test(html),'Offers do not reveal expiry dates');}
}
const cycle=new Set();
for(let day=1;day<=36;day++){
 P.setDay(day);const offer=P.offerForDay();
 ok(offer.productId!==P.offerForDay(day+1).productId,'Consecutive days always feature different products, including the cycle boundary');
 if(day<=6)cycle.add(offer.productId);
 const saleLots=lots.filter(l=>P.quote(l)?.sale),ids=new Set(saleLots.map(l=>l.productId));
 ok(ids.size===1&&ids.has(offer.productId),'Only the product of this game day has discounted shelf lots');
 for(const [id,price] of Object.entries(P.OFFERS)){
  const lot=lots.find(l=>l.productId===id),q=P.quote(lot);
  ok(q.price===(id===offer.productId?price.price:price.regular),'Every other offer product returns to its regular price');
  ok(P.html(lot,true).includes('<del')===q.sale,'The crossed-out price disappears when its promotion ends');
 }
 ok(P.value(offer.productId,G.BY_ID[offer.productId].pack,false,day)===offer.price,'Explicit day quotes agree with shelf prices');
}
ok(cycle.size===6,'No product repeats within the six-day cycle');
for(const bad of [-1,0,.5,NaN,Infinity,Number.MAX_SAFE_INTEGER+1,'2'])ok(P.setDay(bad)===1,'Invalid saved game days fall back to day one');
P.setDay(1);
for(const id of ['red-apple','garlic','goat-meat']){
 const lot=lots.find(l=>l.productId===id&&G.isBulk(l)),q=P.quote(lot);ok(q.bulk&&q.amount===1000,'Loose goods quote the rate per kilogram, never per gram');ok(q.price===F.refundValue(id,1000),'Weighed rate and refund calculation share one source');ok(P.html(lot,true).includes('Цена за 1 кг'),'Weight-price basis is explicit');
}
const milk=lots.find(l=>l.productId==='milk'),plain=P.html(milk,true);
ok(!plain.includes('<del')&&!plain.includes('sale-percent'),'Normal goods have one price, without a fake reduction');
ok(P.money(7299)==='7,299 ₮','Store prices use grouped digits and the tugrik sign');
for(const n of [-1,NaN,Infinity,.5])ok(P.value('paprika',n)===0,'Malformed refund quantities are rejected');
ok(P.quote({productId:'unknown'})===null&&P.value('unknown',1)===0,'Unknown products cannot invent a price');
console.log(`PASS:${checks} exact pack prices, discounts, kilogram rates, bilingual labels and preserved old refund checks.`);
