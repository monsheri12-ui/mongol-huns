// Physical shelf capacity is measured in product families, not duplicate lots.
// All lots remain selectable, and each family retains its own shelf positions.
export function departmentFor(product){
  if(['buuz','bansh'].includes(product.id))return 'frozen-dumplings';
  if(product.id==='mini-khuushuur')return 'frozen-bakery';
  if(product.department==='frozen-vegetables'||['frozen-broccoli','frozen-peas','frozen-fries'].includes(product.id))return 'frozen-vegetables';
  if(product.storage==='frozen')return product.category==='meat'?'frozen-meat':'frozen';
  if(product.id==='tilapia')return 'frozen';
  return product.category;
}
export const SEAFOOD=['fish-flounder','shrimp','fish-mackerel','fish-saury','tilapia','frozen-fish','crab-sticks'];
export function sortFrozenFamilies(families){return [...families].sort((a,b)=>{const x=SEAFOOD.indexOf(a.key),y=SEAFOOD.indexOf(b.key);return (x<0?99:x)-(y<0?99:y)||a.key.localeCompare(b.key);});}
export function isDoubleSidedShelf(id){return ['produce','ready','pantry-2'].includes(id);}
export function shelfSides(id,zone){
  const front={x:zone.x,z:zone.z,rotation:zone.rotation};
  return isDoubleSidedShelf(id)?[front,{x:zone.x-Math.sin(zone.rotation)*.56,z:zone.z-Math.cos(zone.rotation)*.56,rotation:zone.rotation+Math.PI}]:[front];
}
export function rackFootprint(id,zone){
  const horizontal=Math.abs(Math.sin(zone.rotation))<.5;
  if(!isDoubleSidedShelf(id))return {x0:zone.x-(horizontal?zone.width/2+.15:.57),x1:zone.x+(horizontal?zone.width/2+.15:.57),z0:zone.z-(horizontal?.53:zone.width/2+.15),z1:zone.z+(horizontal?.63:zone.width/2+.15)};
  const center=id==='ready'?-.28:-.265,halfDepth=id==='ready'?1.06:.945;
  const centerX=zone.x+Math.sin(zone.rotation)*center,centerZ=zone.z+Math.cos(zone.rotation)*center;
  return {x0:centerX-(horizontal?zone.width/2+.15:halfDepth),x1:centerX+(horizontal?zone.width/2+.15:halfDepth),z0:centerZ-(horizontal?halfDepth:zone.width/2+.15),z1:centerZ+(horizontal?halfDepth:zone.width/2+.15)};
}
export function shelfFamilies(lots){
  const groups=new Map();for(const lot of lots){const key=lot.variantId||lot.productId;if(!groups.has(key))groups.set(key,{key,lots:[]});groups.get(key).lots.push(lot);}
  return [...groups.values()].sort((a,b)=>a.key.localeCompare(b.key)).map(family=>({...family,lots:family.lots.sort((a,b)=>a.pack-b.pack||a.batch.localeCompare(b.batch))}));
}
export function shelfPages(lots,width){
  const capacity=Math.max(1,Math.floor((width-.35)/.62))*3,families=shelfFamilies(lots),pages=[];
  for(let start=0;start<families.length;start+=capacity){const page=families.slice(start,start+capacity),columns=Math.min(Math.floor(capacity/3),Math.max(5,Math.ceil(page.length/3)));pages.push({families:page,columns,spacing:(width-.35)/columns});}
  return pages;
}
