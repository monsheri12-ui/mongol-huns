/* Store work: preparation, written weights and after-delivery service. */
(function(root,factory){
  const G=typeof module==='object'&&module.exports?require('./game-core.js'):root.GroceryGame;
  const P=typeof module==='object'&&module.exports?require('./prices.js'):root.GroceryPrices;
  const api=factory(G,P);if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryFulfilment=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(G,P){
  'use strict';
  const ONES=['','нэг','хоёр','гурван','дөрвөн','таван','зургаан','долоон','найман','есөн'];
  const TENS=['','арван','хорин','гучин','дөчин','тавин','жаран','далан','наян','ерэн'];
  function underHundred(n,compound=false){if(n<10)return n===1&&compound?'нэгэн':ONES[n];return n%10?`${TENS[Math.floor(n/10)]} ${underHundred(n%10,true)}`:TENS[Math.floor(n/10)];}
  function underThousand(n,compound=false){if(n<100)return underHundred(n,compound);const h=Math.floor(n/100),rest=n%100,prefix=h===1?'зуун':`${ONES[h]} зуун`;return rest?`${prefix} ${underHundred(rest,true)}`:prefix;}
  // Same attributive forms as the checked 200-order speech corpus.
  function numberWords(n){if(!Number.isSafeInteger(n)||n<1||n>999999)return '';if(n<1000)return underThousand(n);const k=Math.floor(n/1000),rest=n%1000,prefix=k===1?(rest?'мянга':'мянган'):`${underThousand(k)} ${rest?'мянга':'мянган'}`;return rest?`${prefix} ${underThousand(rest,true)}`:prefix;}
  function weightWords(grams){if(!Number.isSafeInteger(grams)||grams<0||grams>10000)return '';if(!grams)return 'тэг килограмм';const kg=Math.floor(grams/1000),g=grams%1000;return [kg?`${numberWords(kg)} килограмм`:'',g?`${numberWords(g)} грамм`:''].filter(Boolean).join(' ');}
  function normalizeWords(value){return String(value||'').normalize('NFC').toLowerCase().replace(/[.,!?;:–—-]/g,' ').replace(/\s+/g,' ').trim().replace(/\bkg\b/g,'килограмм').replace(/килограм(?!м)/g,'килограмм');}
  function weightAnswerMatches(grams,value){if(/\d/.test(String(value)))return false;const answer=normalizeWords(value),expected=weightWords(grams);if(!expected)return false;if(grams===0)return answer==='тэг килограмм'||answer==='тэг грамм';const choices=[expected,`${numberWords(grams)} грамм`,expected.replace(/(^|килограмм )зуун/g,'$1нэг зуун')];if(grams===500)choices.push('хагас килограмм');return choices.some(v=>normalizeWords(v)===answer);}
  const orderNumber=order=>order.number||order.id;
  const expectedUnits=order=>order.lines.reduce((sum,l)=>sum+Math.ceil(l.amount/G.BY_ID[l.productId].pack),0);
  const requiredBags=order=>Math.max(1,Math.ceil(expectedUnits(order)/6));
  const transportFor=order=>expectedUnits(order)>6?'cart':'basket';
  function sanitizePrep(order,input={}){return {bags:Number.isInteger(input.bags)?Math.max(0,Math.min(requiredBags(order),input.bags)):0,number:typeof input.number==='string'?input.number.slice(0,40):'',customer:typeof input.customer==='string'?input.customer.slice(0,100):'',transport:['cart','basket'].includes(input.transport)?input.transport:''};}
  function parseOrderLabel(value){const match=String(value??'').normalize('NFKC').trim().match(/^(?:(?:заказ|захиалга)\s*:?\s*)?(?:no\.?|#)?\s*(\d{1,6})$/iu);return match&&Number(match[1])>0?Number(match[1]):null;}
  function labelMatches(order,prep={}){const customer=String(prep.customer||'');return parseOrderLabel(prep.number)===orderNumber(order)&&customer.normalize('NFC').trim().toLowerCase()===order.customer.normalize('NFC').trim().toLowerCase();}
  function prepared(order,prep={}){return prep.bags>=requiredBags(order)&&labelMatches(order,prep)&&prep.transport===transportFor(order);}
  function sanitizeInspections(input,inventory){const valid=new Set(inventory.filter(l=>l.expires).map(l=>l.id));return Object.fromEntries(Object.entries(input&&typeof input==='object'?input:{}).filter(([id,value])=>valid.has(id)&&value===true));}
  function sanitizeEggInspections(input,inventory){const valid=new Set(inventory.filter(l=>l.productId==='eggs').map(l=>l.id));return Object.fromEntries(Object.entries(input&&typeof input==='object'?input:{}).filter(([id,value])=>valid.has(id)&&value===true));}
  function sanitizeDisposals(input,inventory,day=G.DAY){
    const result={};
    for(const lot of inventory){const n=input?.[lot.id];if(!lot.hidden&&G.isUnfit(lot,day)&&Number.isSafeInteger(n)&&n>0)result[lot.id]=Math.min(lot.stock,n);}
    return result;
  }
  function disposalReview(lot,day=G.DAY,inspections={},eggInspections={}){
    if(!lot||lot.hidden)return {canDiscard:false,reason:'unavailable'};
    if(G.isSpoiled(lot))return {canDiscard:true,reason:'spoiled'};
    if(inspections[lot.id]&&G.isExpired(lot,day))return {canDiscard:true,reason:'expired'};
    if(eggInspections[lot.id]&&G.isDamaged(lot))return {canDiscard:true,reason:'damaged'};
    if(lot.expires&&!inspections[lot.id])return {canDiscard:false,reason:'inspect-date'};
    if(lot.productId==='eggs'&&!eggInspections[lot.id])return {canDiscard:false,reason:'inspect-eggs'};
    return {canDiscard:false,reason:'fresh'};
  }
  function stockAfterDisposals(lot,disposals={},reserved={}){return Math.max(0,lot.stock-(disposals[lot.id]||0)-(reserved[lot.id]||0));}
  function discardLot(lot,{day=G.DAY,source='shelf',amount=1,cart={},disposals={},reserved={},inspections={},eggInspections={}}={}){
    const review=disposalReview(lot,day,inspections,eggInspections);
    const fail=reason=>({ok:false,reason,amount:0,cart,disposals});
    if(!review.canDiscard)return fail(review.reason);
    if(!Number.isSafeInteger(amount)||amount<=0)return fail('amount');
    const owned=stockAfterDisposals(lot,disposals,reserved),inCart=Math.min(owned,cart[lot.id]||0);
    const limit=source==='cart'?inCart:source==='shelf'?owned-inCart:0;
    if(amount>limit)return fail('stock');
    const nextCart={...cart},nextDisposals={...disposals,[lot.id]:(disposals[lot.id]||0)+amount};
    if(source==='cart'){if(inCart>amount)nextCart[lot.id]=inCart-amount;else delete nextCart[lot.id];}
    return {ok:true,reason:review.reason,amount,cart:nextCart,disposals:nextDisposals};
  }
  function scalePlan(order,inventory,cart,lot,grams){
    const line=order.lines.find(l=>l.productId===lot.productId&&(!l.variantId||l.variantId===lot.variantId));
    const safe=G.sanitizeCart(cart,inventory),other=inventory.reduce((sum,l)=>sum+(l.id!==lot.id&&l.productId===lot.productId&&(!line?.variantId||l.variantId===line.variantId)?(safe[l.id]||0)*l.pack:0),0);
    const required=line?.amount||0,target=Math.max(0,required-other);
    return {requested:!!line,required,collected:other+(safe[lot.id]||0)*lot.pack,other,target,remaining:Math.max(0,target-grams),excess:Math.max(0,grams-target)};
  }
  function packingCheck(order,inventory,cart,inspections={},eggInspections={}){
    const truth=G.validateOrder(order,inventory,cart);
    const expired=truth.expired.filter(e=>inspections[e.lotId]);
    const unverified=inventory.filter(l=>cart[l.id]&&l.expires&&!inspections[l.id]).map(l=>({lotId:l.id,productId:l.productId}));
    const damaged=(truth.damaged||[]).filter(e=>eggInspections[e.lotId]);
    const uncheckedEggs=inventory.filter(l=>cart[l.id]&&l.productId==='eggs'&&!eggInspections[l.id]).map(l=>({lotId:l.id,productId:l.productId}));
    const ok=!truth.missing.length&&!truth.excess.length&&!truth.unexpected.length&&!truth.wrongVariants.length&&!truth.spoiled.length&&!expired.length&&!damaged.length;
    return {...truth,ok,expired,unverified,damaged,uncheckedEggs};
  }
  function refundValue(productId,amount){
    return P.value(productId,amount);
  }
  function complaintsFor(order,inventory,cart){
    const truth=G.validateOrder(order,inventory,cart),items=new Map();
    const add=(e,reason,amount)=>{const old=items.get(e.productId);if(old){old.amount+=amount;if(reason==='spoiled')old.reason=reason;}else items.set(e.productId,{id:`${order.id}:${e.productId}`,productId:e.productId,amount,reason,status:'open',attempts:0});};
    truth.expired.forEach(e=>add(e,'expired',e.quantity*inventory.find(l=>l.id===e.lotId).pack));
    truth.spoiled.forEach(e=>add(e,'spoiled',e.amount));
    (truth.damaged||[]).forEach(e=>add(e,'damaged',e.amount));
    return [...items.values()].map(c=>({...c,refund:refundValue(c.productId,c.amount)}));
  }
  function emptyService(){return {complaints:[],originalCart:{},sentCart:{},activeId:null,hadComplaint:false};}
  function sanitizeService(input,order,inventory){
    const result=emptyService();if(!input||typeof input!=='object')return result;
    const lines=new Map(order.lines.map(l=>[l.productId,l]));const seen=new Set();
    for(const c of Array.isArray(input.complaints)?input.complaints:[]){if(!lines.has(c.productId)||seen.has(c.productId)||!Number.isInteger(c.amount)||c.amount<1||c.amount>lines.get(c.productId).amount)continue;seen.add(c.productId);result.complaints.push({id:`${order.id}:${c.productId}`,productId:c.productId,amount:c.amount,reason:['spoiled','damaged'].includes(c.reason)?c.reason:'expired',status:['open','collecting','replaced','refunded'].includes(c.status)?c.status:'open',attempts:Number.isInteger(c.attempts)?Math.max(0,Math.min(999,c.attempts)):0,refund:refundValue(c.productId,c.amount)});}
    result.originalCart=G.sanitizeCart(input.originalCart,inventory);result.sentCart=G.sanitizeCart(input.sentCart,inventory);
    result.activeId=result.complaints.find(c=>c.id===input.activeId&&c.status==='collecting')?.id||null;
    result.complaints.forEach(c=>{if(c.status==='collecting'&&c.id!==result.activeId)c.status='open';});
    result.hadComplaint=result.complaints.length>0||input.hadComplaint===true;return result;
  }
  const hasPending=service=>service.complaints.some(c=>c.status==='open'||c.status==='collecting');
  function beginReplacement(service,id){const c=service.complaints.find(c=>c.id===id);if(service.activeId&&service.activeId!==id||!c||!['open','collecting'].includes(c.status))return service;return {...service,activeId:id,complaints:service.complaints.map(c=>({...c,status:c.id===id?'collecting':c.status}))};}
  function refundComplaint(service,id){const c=service.complaints.find(c=>c.id===id);if(!c||!['open','collecting'].includes(c.status))return service;return {...service,activeId:service.activeId===id?null:service.activeId,complaints:service.complaints.map(c=>({...c,status:c.id===id?'refunded':c.status}))};}
  function finishReplacement(service,id,cart,ok){const c=service.complaints.find(c=>c.id===id&&c.status==='collecting');if(!c)return service;const sentCart={...service.sentCart};Object.entries(cart).forEach(([id,n])=>{sentCart[id]=(sentCart[id]||0)+n;});return {...service,sentCart,activeId:null,complaints:service.complaints.map(c=>({...c,status:c.id===id?(ok?'replaced':'open'):c.status,attempts:c.attempts+(c.id===id?1:0)}))};}
  const refundTotal=service=>service.complaints.filter(c=>c.status==='refunded').reduce((sum,c)=>sum+c.refund,0);
  function replacementOrder(order,service){const c=service.complaints.find(c=>c.id===service.activeId);if(!c)return order;const original=order.lines.find(l=>l.productId===c.productId);return {...order,replacement:true,preference:order.preference?.productId===c.productId||original.variantId?order.preference:undefined,lines:[{...original,amount:c.amount}],message:'Муудсан барааг шинэ бараагаар солиорой.'};}
  function lineProgress(order,inventory,cart){const safe=G.sanitizeCart(cart,inventory);return order.lines.map(line=>{const collected=inventory.reduce((sum,l)=>sum+(l.productId===line.productId&&(!line.variantId||line.variantId===l.variantId)?(safe[l.id]||0)*l.pack:0),0);return {...line,collected,complete:collected>=line.amount};});}
  function deliveryReview(order,inventory,cart,inspections={},allowShortage=true,eggInspections={}){const result=packingCheck(order,inventory,cart,inspections,eggInspections);const canSend=!result.excess.length&&!result.unexpected.length&&!result.wrongVariants.length&&!result.spoiled.length&&!result.expired.length&&!result.damaged.length&&(allowShortage||!result.missing.length);const fine=canSend?result.missing.reduce((s,l)=>s+refundValue(l.productId,l.amount),0):0;return {...result,canSend,fine};}
  function sanitizePacking(stage,review){return review.canSend&&['packed','sealed'].includes(stage)?stage:'collecting';}
  function sanitizeFine(input,order){if(!input||typeof input!=='object')return {amount:0,missing:[],recorded:false};const missing=[];for(const line of order.lines){const e=Array.isArray(input.missing)&&input.missing.find(e=>e.productId===line.productId);if(e&&Number.isInteger(e.amount)&&e.amount>0&&e.amount<=line.amount)missing.push({...line,amount:e.amount});}return {amount:missing.reduce((s,l)=>s+refundValue(l.productId,l.amount),0),missing,recorded:input.recorded===true};}
  function initStats(input,drafts={}){const clean=n=>Number.isSafeInteger(n)&&n>=0?Math.min(n,1e12):0;if(input&&typeof input==='object')return {fines:clean(input.fines),fineAmount:clean(input.fineAmount),refunds:clean(input.refunds),refundAmount:clean(input.refundAmount)};const refunds=Object.values(drafts).flatMap(d=>d?.service?.complaints||[]).filter(c=>c.status==='refunded');return {fines:0,fineAmount:0,refunds:refunds.length,refundAmount:refunds.reduce((s,c)=>s+refundValue(c.productId,c.amount),0)};}
  const runStars=(attempts,service,fine=0)=>Math.min(fine>0?1:3,service.hadComplaint?2:3,G.starsForAttempts(attempts));
  return {numberWords,weightWords,weightAnswerMatches,orderNumber,expectedUnits,requiredBags,transportFor,sanitizePrep,labelMatches,prepared,sanitizeInspections,sanitizeEggInspections,sanitizeDisposals,disposalReview,stockAfterDisposals,discardLot,scalePlan,packingCheck,refundValue,complaintsFor,emptyService,sanitizeService,hasPending,beginReplacement,refundComplaint,finishReplacement,refundTotal,replacementOrder,runStars,lineProgress,deliveryReview,sanitizePacking,sanitizeFine,initStats};
});
