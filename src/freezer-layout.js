import {rowShuffle} from './shelf-shuffle.js';
import * as THREE from 'three';
import {createProductModel,fitModelInside} from './product-presentation.js';
import {shelfFamilies} from './shelf-stock.js';
export function chestLayout(lots,seed=0,shelf='chest'){
 const families=rowShuffle(shelfFamilies(lots),4,seed,shelf);if(!families.length)return {bins:[],labels:[]};
 if(families.length>8)throw Error('A freezer chest has eight physical compartments');
 const bins=Array.from({length:8},(_,i)=>({family:families[i%families.length],x:(i%4-1.5)*.78,z:i<4?.29:-.29,y:.815}));
 const columns=Math.min(4,families.length),width=families.length<=2?1.20:.70;
 const labels=families.map((family,i)=>({family,width,x:((i%columns)-(columns-1)/2)*(families.length<=2?1.56:.78),y:families.length>4?(i<4?.66:.29):.47,z:.69}));
 return {bins,labels};
}
export function createFreezerPack(product,lot,texture,onChange=()=>{}){
 const group=new THREE.Group(),flat=new THREE.Group();flat.rotation.x=-Math.PI/2;group.add(flat);let model;
 const fit=()=>{if(model)fitModelInside(group,.67,.105,.48,false);onChange();};
 model=createProductModel(product,lot,texture,.68,fit);flat.add(model.group);fit();return {group,front:model.front};
}
export function produceSlots(lots,spacing){
 const count=Math.max(9,lots.length),columns=3,rows=Math.ceil(count/columns);
 return Array.from({length:count},(_,i)=>({lot:lots[i%lots.length],x:(i%columns-1)*spacing*.28,z:-.14+Math.floor(i/columns)*Math.min(.19,.45/Math.max(1,rows-1)),width:spacing*.25,height:.24,depth:.15}));
}
