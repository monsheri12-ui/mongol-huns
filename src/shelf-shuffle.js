// Permute complete product/price families only within one physical shelf row.
// A saved shift seed makes a resumed order and subsequent orders stay stable.
export function rowShuffle(items,columns,seed=0,shelf=''){
  if(!Number.isSafeInteger(seed)||seed<=0)return [...items];
  let hash=2166136261;for(const c of shelf)hash=Math.imul(hash^c.charCodeAt(0),16777619)>>>0;
  let state=(seed^hash)>>>0;const random=()=>{state=(state+0x6D2B79F5)>>>0;let n=state;n=Math.imul(n^(n>>>15),n|1);n^=n+Math.imul(n^(n>>>7),n|61);return ((n^(n>>>14))>>>0)/4294967296;};
  const result=[...items],width=Math.max(1,Math.floor(columns)||1);
  for(let offset=0;offset<result.length;offset+=width){const end=Math.min(offset+width,result.length);for(let i=end-1;i>offset;i--){const j=offset+Math.floor(random()*(i-offset+1));[result[i],result[j]]=[result[j],result[i]];}}
  return result;
}
