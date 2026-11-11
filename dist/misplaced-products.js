/* A misplaced pack occupies a spare facing, never a new rack or an overlap. */
(function(root,factory){const G=typeof module==='object'&&module.exports?require('./game-core.js'):root.GroceryGame;const api=factory(G);if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryMisplaced=api;})(typeof globalThis!=='undefined'?globalThis:this,function(G){
  'use strict';
  const DRY=['bread','pantry','canned','drinks','sweets'];
  function add(inventory,order,seed){
    const n=(Math.imul((seed>>>0)^order.id,1664525)+1013904223)>>>0;
    if(n%100>=48||order.legacy||order.classic)return inventory;
    const counts=Object.fromEntries(DRY.map(category=>[category,new Set(inventory.filter(l=>!l.hidden&&G.BY_ID[l.productId].category===category).map(l=>l.variantId||l.productId)).size]));
    const candidates=inventory.filter(l=>!l.hidden&&!G.isBulk(l)&&!G.isUnfit(l,order.day)&&DRY.includes(G.BY_ID[l.productId].category)&&!['chilled','frozen'].includes(G.BY_ID[l.productId].storage));
    if(!candidates.length)return inventory;const original=candidates[(n>>>8)%candidates.length],correct=G.BY_ID[original.productId].category;
    const destinations=DRY.filter(c=>c!==correct&&counts[c]<(c==='pantry'?42:21));if(!destinations.length)return inventory;
    const displayDepartment=destinations[(n>>>16)%destinations.length];
    return [...inventory,{...original,id:`o${order.id}-misplaced-${original.productId}`,stock:1,batch:original.batch+'-R',misplaced:true,displayDepartment,correctDepartment:correct}];
  }
  function normalize(input,inventory){const ids=new Set(inventory.filter(l=>l.misplaced).map(l=>l.id)),returned=[...new Set((Array.isArray(input?.returned)?input.returned:[]).filter(id=>ids.has(id)))].slice(0,8);return {carrying:ids.has(input?.carrying)&&!returned.includes(input.carrying)?input.carrying:null,returned,placed:Object.fromEntries(Object.entries(input?.placed||{}).filter(([id,category])=>ids.has(id)&&DRY.includes(category)))};}
  const department=(lot,state)=>lot.misplaced&&!state.returned.includes(lot.id)?state.placed[lot.id]||lot.displayDepartment:null;
  const canReturn=(lot,state,department)=>!!lot?.misplaced&&state.carrying===lot.id&&!state.returned.includes(lot.id)&&department===lot.correctDepartment;
  function canPlace(lot,state,department,inventory){if(!lot||state.carrying!==lot.id||!DRY.includes(department))return false;if(department===lot.correctDepartment)return true;const families=new Set(inventory.filter(l=>!l.hidden&&l.id!==lot.id&&(l.misplaced?(state.placed[l.id]||l.displayDepartment):G.BY_ID[l.productId].category)===department).map(l=>l.variantId||l.productId));return families.size<(department==='pantry'?42:21);}
  return {add,normalize,department,canReturn,canPlace,DRY};
});
