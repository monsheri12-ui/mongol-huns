/* Persistent 3/4-new-game cadence; resume and reload do not advance it. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryLayout=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const normalize=input=>({version:1,index:Number.isInteger(input?.index)&&input.index>=0&&input.index<4?input.index:0,starts:Number.isInteger(input?.starts)&&input.starts>=0&&input.starts<4?input.starts:0,after:input?.after===4?4:3,generation:Number.isSafeInteger(input?.generation)&&input.generation>=0?input.generation:0});
  function next(input,seed){const s=normalize(input),starts=s.starts+1;if(starts<s.after)return {...s,starts};const n=(seed>>>0)||1;return {version:1,index:(s.index+1+n%3)%4,starts:0,after:3+(n%2),generation:s.generation+1};}
  const BACK=[['meat','dairy','bread','pantry','canned'],['bread','canned','dairy','meat','pantry'],['pantry','bread','meat','canned','dairy'],['canned','pantry','dairy','bread','meat']];
  function arrange(base,input){const state=normalize(input),zones=Object.fromEntries(Object.entries(base).map(([id,z])=>[id,{...z,to:z.to?[...z.to]:undefined}]));BACK[state.index].forEach((id,i)=>{if(zones[id]){zones[id].x=-12+i*6;zones[id].to[0]=zones[id].x;}});if(state.index%2)for(const id of ['produce','ready']){zones[id].x=-zones[id].x;zones[id].to[0]=zones[id].x;}return zones;}
  return {normalize,next,arrange,BACK};
});
