/* A saved deck of real orders: new games rotate, resuming keeps the same deck. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryOrderRotation=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const modes=['campaign','text'];
 const cleanIds=input=>Array.isArray(input)?[...new Set(input.filter(n=>Number.isSafeInteger(n)&&n>0))].slice(-400):[];
 function normalize(input={},receivedKeys=[]){
  input=input&&typeof input==='object'?input:{};
  const state={history:{},selections:{},last:{},textGeneration:Number.isSafeInteger(input.textGeneration)&&input.textGeneration>=0&&input.textGeneration<1000000000?input.textGeneration:0,textSeed:Number.isSafeInteger(input.textSeed)&&input.textSeed>=0&&input.textSeed<=0xffffffff?input.textSeed:null,textSignatures:Array.isArray(input.textSignatures)?[...new Set(input.textSignatures.filter(s=>typeof s==='string'&&s.length<1500))].slice(-8192):[]};
  state.lastReceived=Number.isSafeInteger(input.lastReceived?.id)&&typeof input.lastReceived?.customer==='string'?{id:input.lastReceived.id,customer:input.lastReceived.customer.slice(0,100)}:null;
  for(const mode of modes){
   state.history[mode]=cleanIds([...cleanIds(input.history?.[mode]),...receivedKeys.filter(key=>typeof key==='string'&&key.startsWith(mode+':')).map(key=>Number(key.split(':')[1]))]);
   state.selections[mode]=cleanIds(input.selections?.[mode]);
   const last=input.last?.[mode];state.last[mode]=Number.isSafeInteger(last?.id)&&typeof last?.customer==='string'?{id:last.id,customer:last.customer.slice(0,100)}:null;
  }
  return state;
 }
 function received(state,mode,order,signature){
  if(!modes.includes(mode)||!order)return state;
  const list=state.history[mode]||[];
  const textSignatures=mode==='text'&&typeof signature==='string'&&!state.textSignatures.includes(signature)?[...state.textSignatures,signature].slice(-8192):state.textSignatures;
  return {...state,textSignatures,lastReceived:{id:order.id,customer:order.customer},history:{...state.history,[mode]:list.includes(order.id)?list:[...list,order.id]},last:{...state.last,[mode]:{id:order.id,customer:order.customer}}};
 }
 function plan(state,full,counts,mode,seed){
  if(!modes.includes(mode))return state;
  let random=seed>>>0;const shuffle=list=>{const result=[...list];for(let i=result.length-1;i>0;i--){random=(Math.imul(random,1664525)+1013904223)>>>0;const j=random%(i+1);[result[i],result[j]]=[result[j],result[i]];}return result;};
  let history=[...(state.history[mode]||[])];const selected=[],last=state.lastReceived||state.last[mode];
  for(let level=0;level<4;level++){
   const group=full.filter(o=>o.levelIndex===level),ids=new Set(group.map(o=>o.id));
   let seen=new Set(history),unused=group.filter(o=>!seen.has(o.id));
   // A finite corpus starts a new cycle only after every order on this level was received.
   if(!unused.length){history=history.filter(id=>!ids.has(id));seen=new Set(history);unused=group;}
   const fresh=shuffle(unused),old=shuffle(group.filter(o=>seen.has(o.id)));
   let first=fresh.findIndex(o=>o.id!==last?.id&&o.customer!==last?.customer);
   if(first<0)first=fresh.findIndex(o=>o.id!==last?.id);
   if(first>0)[fresh[0],fresh[first]]=[fresh[first],fresh[0]];
   selected.push(...[...fresh,...old].slice(0,counts[level]).map(o=>o.id));
  }
  return {...state,history:{...state.history,[mode]:history},selections:{...state.selections,[mode]:selected}};
 }
 function select(full,counts,state,mode){
  const byId=new Map(full.map(o=>[o.id,o])),saved=state.selections[mode]||[];
  const valid=saved.length===counts.reduce((sum,n)=>sum+n,0)&&[0,1,2,3].every(level=>saved.filter(id=>byId.get(id)?.levelIndex===level).length===counts[level]);
  const orders=valid?saved.map(id=>byId.get(id)):full.filter(o=>o.levelNumber<=counts[o.levelIndex]);
  return orders.map((o,i)=>({...o,number:i+1,campaignIndex:i,levelCount:counts[o.levelIndex],...(valid?{rotationIndex:i}:{})}));
 }
 return {normalize,received,plan,select};
});
