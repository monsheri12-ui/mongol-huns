/* One promotion per saved game day. A new day follows a completed shift. */
(function(root,factory){const G=typeof module==='object'&&module.exports?require('./game-core.js'):root.GroceryGame;const api=factory(G);if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryPrices=api;})(typeof globalThis!=='undefined'?globalThis:this,function(G){
  'use strict';
  // Regular prices use the exact photographed packs in the primary catalogue.
  // These game promotions are not a live advertisement for the retailer.
  const OFFERS={
    'canned-corn':{regular:7299,price:5839},
    'canned-red-beans':{regular:3518,price:2814},
    'rolled-oats':{regular:2958,price:2514},
    paprika:{regular:1278,price:1086},
    mozzarella:{regular:19580,price:15664},
    'canned-coffee':{regular:3548,price:2836}
  };
  const PACK_PRICES={'frozen-corn':13900,'frozen-mixed':6900,'frozen-mushrooms':7900,'frozen-spinach':6900,'frozen-green-beans':6350};
  const PROMOTION_CYCLE=['rolled-oats','paprika','mozzarella','canned-corn','canned-red-beans','canned-coffee'];
  const normalizeDay=day=>Number.isSafeInteger(day)&&day>=1?day:1;
  let activeDay=1,activeSeed=0;
  function setDay(day,seed=activeSeed){activeDay=normalizeDay(day);activeSeed=Number.isSafeInteger(seed)&&seed>=0?seed>>>0:0;return activeDay;}
  function offerForDay(day=activeDay,seed=activeSeed){
    const d=normalizeDay(day);let roll=(Math.imul((seed>>>0)^d,1597334677)+3812015801)>>>0;roll^=roll>>>16;roll>>>=0;
    // Zero preserves old advertised prices for archived rate calculations.
    if(seed&&roll%100>=60)return {day:d,productId:null,available:false};
    const productId=PROMOTION_CYCLE[(d-1+((seed>>>0)%PROMOTION_CYCLE.length))%PROMOTION_CYCLE.length];return {day:d,productId,available:true,...OFFERS[productId]};
  }
  const money=value=>`${Math.round(value).toLocaleString('en-US')} ₮`;
  function baseValue(product,amount){
    const p=typeof product==='string'?G.BY_ID[product]:product;if(!p||!Number.isSafeInteger(amount)||amount<=0)return 0;
    const perKg={produce:5000,meat:24000,frozen:19000,ready:18000,sweets:22000,dairy:15000,pantry:6000,canned:12000};
    if(p.measure==='weight')return Math.round(amount*(perKg[p.category]||8000)/1000);
    if(p.measure==='volume')return Math.round(amount*(p.id==='milk'?4800:p.category==='alcohol'?9000:4000)/1000);
    return Math.round(amount*(p.id==='eggs'?800:2400));
  }
  function value(productId,amount,regular=false,day=activeDay){
    const p=G.BY_ID[productId];if(!p||!Number.isSafeInteger(amount)||amount<=0)return 0;
    const offer=OFFERS[productId],sale=!regular&&offerForDay(day).productId===productId;
    return offer?Math.round(amount*(sale?offer.price:offer.regular)/p.pack):PACK_PRICES[productId]?Math.round(amount*PACK_PRICES[productId]/p.pack):baseValue(p,amount);
  }
  function quote(lot,day=activeDay){
    const p=G.BY_ID[lot?.productId];if(!p)return null;
    const bulk=G.isBulk(lot),amount=bulk?1000:lot.pack||p.pack,regular=value(p.id,amount,true,day),price=value(p.id,amount,false,day),sale=price<regular;
    return {productId:p.id,amount,bulk,regular,price,sale,percent:sale?Math.round((regular-price)/regular*100):0};
  }
  function html(lot,russian=false,day=activeDay){
    const q=quote(lot,day);if(!q)return '';
    const basis=q.bulk?(russian?'Цена за 1 кг':'1 кг-ын үнэ'):(russian?'Цена за упаковку':'Нэг савлагааны үнэ');
    return `<section class="store-price ${q.sale?'is-sale':''}" data-learning><div class="store-price-heading"><span>${q.sale?(russian?'Скидка':'Хямдрал'):basis}</span>${q.sale?`<b class="sale-percent">−${q.percent}%</b>`:''}</div><div class="store-price-amounts">${q.sale?`<del aria-label="${russian?'Старая цена':'Хуучин үнэ'}">${money(q.regular)}</del>`:''}<strong aria-label="${russian?'Цена':'Үнэ'}">${money(q.price)}</strong></div>${q.sale?`<small>${basis}</small>`:''}</section>`;
  }
  return {OFFERS,PROMOTION_CYCLE,normalizeDay,setDay,offerForDay,money,baseValue,value,quote,html};
});
