/* All weighed goods use the same contained transparent pouch and tying step. */
(function(root,factory){const api=factory(root);if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryBag=api;})(typeof globalThis!=='undefined'?globalThis:this,function(root){
  'use strict';
  const SAFE=Object.freeze({left:.20,top:.43,width:.60,height:.50});
  let serial=0;
  const BODY={tied:'M50 22 C39 28 17 28 10 37 C5 49 8 72 7 86 Q6 94 20 95 Q50 98 80 95 Q94 94 93 86 C92 70 96 48 90 37 C83 28 61 28 50 22Z',open:'M30 12 C35 9 40 13 45 10 C50 8 54 13 59 10 Q66 9 70 12 C67 18 72 25 86 31 C96 42 94 72 94 85 Q96 94 80 96 Q50 98 20 95 Q5 94 7 85 C6 68 5 43 12 34 Q29 27 30 20Z'};
  function fillCount(productId,grams){if(!grams)return 0;if(['banana','cabbage','horse-meat','goat-meat','pork-tenderloin','chocolate-box','curd-candy'].includes(productId))return 1;return Math.min(4,Math.max(1,Math.ceil(grams/250)));}
  function cells(count){const columns=count>1?2:1,rows=Math.max(1,Math.ceil(count/columns));return Array.from({length:count},(_,i)=>({left:SAFE.left+(i%columns)*SAFE.width/columns,top:SAFE.top+Math.floor(i/columns)*SAFE.height/rows,width:SAFE.width/columns,height:SAFE.height/rows}));}
  function stage({hasBag,grams,answerOK,tied}){return !hasBag?'bag':!grams?'fill':!answerOK?'spell':!tied?'tie':'ready';}
  const canStore=state=>stage(state)==='ready';
  function pouch({art='',productId='',grams=0,tied=false,extra=''}){
    const state=tied?'tied':'open',asset=root.FastAssets?.bags?.[state]||root.GroceryBagAssets?.[state],count=fillCount(productId,grams),columns=count>1?2:1,uid=`pouch-volume-${++serial}`,path=BODY[state];
    const back=`<svg class="pouch-back" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="${uid}"><stop stop-color="#738d81" stop-opacity=".21"/><stop offset=".17" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-color="#e8efec" stop-opacity=".025"/><stop offset=".8" stop-color="#fff" stop-opacity=".15"/><stop offset="1" stop-color="#6f897b" stop-opacity=".22"/></linearGradient></defs><path d="${path}" fill="url(#${uid})"/></svg>`;
    const contour=`<svg class="pouch-contour" viewBox="0 0 100 100" aria-hidden="true"><path d="${path}" fill="none" stroke="#778d80" stroke-opacity=".58" stroke-width=".65"/><path d="M10 84 Q23 90 50 91 Q77 91 91 85 M13 39 Q16 58 12 80 M87 39 Q84 59 89 81" fill="none" stroke="#8b9c8e" stroke-opacity=".32" stroke-width=".5"/><path d="M14 84 Q28 92 49 93 Q72 94 87 86" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width=".7"/></svg>`;
    return `<span class="produce-pouch ${extra}" data-bag-state="${state}">${back}<span class="pouch-food" style="grid-template-columns:repeat(${columns},minmax(0,1fr));grid-template-rows:repeat(${Math.max(1,Math.ceil(count/columns))},minmax(0,1fr))" aria-hidden="true">${Array.from({length:count},()=>`<span class="pouch-food-cell">${art}</span>`).join('')}</span><span class="pouch-film" aria-hidden="true"></span>${asset?`<img class="pouch-overlay" src="${asset.path}" alt="" draggable="false">`:''}${contour}</span>`;
  }
  return {SAFE,fillCount,cells,stage,canStore,pouch};
});
