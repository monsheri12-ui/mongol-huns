import {rowShuffle} from './shelf-shuffle.js';
import * as THREE from 'three';
import {createProductModel,fitModelInside} from './product-presentation.js';
import {shelfFamilies} from './shelf-stock.js';

export function icecreamBins(lots,seed=0){
  const families=rowShuffle(shelfFamilies(lots),4,seed,'icecream');if(!families.length)return [];
  return Array.from({length:8},(_,i)=>({family:families[i%families.length],x:.1275+(i%4)*.615,z:i<4?.43:-.10,y:i<4?.86:1.04,row:i<4?0:1,column:i%4}));
}
export function createIcecreamFacing(product,lot,texture,onChange=()=>{},bounds={width:.51,height:.31,depth:.43}){
  const group=new THREE.Group(),lean=new THREE.Group();lean.rotation.x=-.92;group.add(lean);
  const fit=()=>{if(lean.children.length)fitModelInside(group,bounds.width,bounds.height,bounds.depth,false);onChange();};
  const model=createProductModel(product,lot,texture,.64,fit);lean.add(model.group);fit();
  return {group,front:model.front};
}
