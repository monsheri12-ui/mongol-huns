/* Browser-local game earnings. Negative balances are deliberately allowed. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryAccount=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const PAY=1000,QUALITY_FINE=1000,DISORDER_FINE=1500;
  const integer=(v,fallback=0)=>Number.isSafeInteger(v)?v:fallback;
  function normalize(input){
    const seen=new Set(),entries=[];
    for(const row of Array.isArray(input?.entries)?input.entries:[]){
      if(!row||typeof row.key!=='string'||!/^[a-z0-9:-]{1,160}$/.test(row.key)||seen.has(row.key)||!['pay','fine'].includes(row.kind)||!Number.isSafeInteger(row.amount)||row.amount<=0)continue;
      seen.add(row.key);entries.push({key:row.key,kind:row.kind,amount:Math.min(10000000,row.amount),reason:['salary','missing','quality','disorder'].includes(row.reason)?row.reason:'salary',number:Math.max(1,integer(row.number,1)),day:Math.max(1,integer(row.day,1)),customer:typeof row.customer==='string'?row.customer.slice(0,80):''});
    }
    const overflow=Math.max(0,entries.length-2000),old=entries.slice(0,overflow),opening=integer(input?.opening)+old.reduce((n,r)=>n+(r.kind==='pay'?r.amount:-r.amount),0);
    return {version:1,opening,entries:entries.slice(overflow),earnedBefore:Math.max(0,integer(input?.earnedBefore))+old.filter(r=>r.kind==='pay').reduce((n,r)=>n+r.amount,0),fineBefore:Math.max(0,integer(input?.fineBefore))+old.filter(r=>r.kind==='fine').reduce((n,r)=>n+r.amount,0),largestBefore:Math.max(0,integer(input?.largestBefore),...old.filter(r=>r.kind==='fine').map(r=>r.amount)),seen:[...new Set([...(Array.isArray(input?.seen)?input.seen:[]).filter(k=>typeof k==='string'&&/^[a-z0-9:-]{1,160}$/.test(k)),...entries.map(r=>r.key)])].slice(-5000)};
  }
  function summary(input){const s=normalize(input);return {balance:s.opening+s.entries.reduce((n,r)=>n+(r.kind==='pay'?r.amount:-r.amount),0),earned:s.earnedBefore+s.entries.filter(r=>r.kind==='pay').reduce((n,r)=>n+r.amount,0),fines:s.fineBefore+s.entries.filter(r=>r.kind==='fine').reduce((n,r)=>n+r.amount,0),largestFine:Math.max(s.largestBefore,...s.entries.filter(r=>r.kind==='fine').map(r=>r.amount)),paid:s.entries.filter(r=>r.kind==='pay').length};}
  function record(input,entry){const state=normalize(input);if(state.seen.includes(entry?.key))return {state,added:false};const next=normalize({...state,entries:[...state.entries,entry]});return {state:next,added:next.seen.includes(entry?.key)};}
  return {PAY,QUALITY_FINE,DISORDER_FINE,normalize,summary,record};
});
