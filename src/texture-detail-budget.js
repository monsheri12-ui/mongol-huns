// Keep nearby packaging sharp without retaining full-size GPU textures for
// every aisle the player has ever visited.
export function createDetailBudget(limit=20){
  const entries=new Map();let protectedIds=new Set();
  function trim(){while(entries.size>limit){const key=[...entries.keys()].find(id=>!protectedIds.has(id));if(key===undefined)break;const release=entries.get(key);entries.delete(key);release();}}
  return {focus(ids){protectedIds=new Set(ids);trim();},touch(id,release){entries.delete(id);entries.set(id,release);trim();},size:()=>entries.size};
}
