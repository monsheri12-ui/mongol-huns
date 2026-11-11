import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createRequire} from 'node:module';
import {createProductModel,createStockFacing,fitModelInside} from '../src/product-presentation.js';
const require=createRequire(import.meta.url),G=require('../dist/game-core.js');
const photos=require('../dist/assets/product-sources.json').products;
globalThis.window={GroceryGame:G,ProductPhotos:Object.fromEntries(photos.map(r=>[r.id,r]))};
let checks=0;const ok=(v,message)=>{checks++;assert.ok(v,message);};
const inventory=G.createInventory(G.createCampaign([50,50,50,50])[50]);
const meatAndFrozen=G.PRODUCTS.filter(p=>p.id!=='eggs');
const outline=[[-.5,-.5],[0,-.5],[.5,-.5],[.5,0],[.5,.5],[0,.5],[-.5,.5],[-.5,0]];
for(const product of meatAndFrozen){
 const lot=inventory.find(l=>l.productId===product.id),record=photos.find(r=>r.id===product.id);
 ok(!!lot&&!!record,`${product.id} has a real stocked photograph`);
 const crop=record.render_crop,dims=record.source_size||[record.width||1,record.height||1];
 const cropWidth=Array.isArray(crop)?crop[2]-crop[0]:crop?.width||1,cropHeight=Array.isArray(crop)?crop[3]-crop[1]:crop?.height||1;
 const sourceAspect=dims[0]*cropWidth/(dims[1]*cropHeight);
 for(const aspect of [sourceAspect,.08,8])for(const facing of [false,true]){
  const width=facing?1.02:.46,height=facing?.63:.69,depth=facing?.40:.34;
  const texture=new THREE.Texture();texture.userData.callbacks=[];let model;
  const bounds=()=>{if(model)fitModelInside(model.group,width,height,depth,false);};
  model=facing?createStockFacing(lot,texture,width,false,bounds):createProductModel(product,lot,texture,width,bounds);bounds();
  const verify=stage=>{
   model.group.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model.group),epsilon=1e-5;
   ok(box.min.x>=-width/2-epsilon&&box.max.x<=width/2+epsilon,`${product.id}: ${stage} package stays inside shelf width`);
   ok(box.min.y>=-epsilon&&box.max.y<=height+epsilon,`${product.id}: ${stage} package stays below the next tier`);
   ok(box.min.z>=-depth/2-epsilon&&box.max.z<=depth/2+epsilon,`${product.id}: ${stage} tray and repeated stock stay inside shelf depth`);
   ok(model.group.scale.x<=1+epsilon,'Small packs are never inflated to fill the shelf');
  };
  verify('pending photo');
  const presentation={aspect,outline,sideColor:new THREE.Color('#9b775a')};texture.userData.presentation=presentation;
  texture.userData.callbacks.forEach(callback=>callback(presentation));verify('loaded photo');
  if(!facing)ok(Math.abs(model.front.scale.x/model.front.scale.y-aspect)<1e-6,'The complete product photograph keeps its proportions');
  const geometries=new Set(),materials=new Set();model.group.traverse(m=>{if(m.isMesh){geometries.add(m.geometry);const all=Array.isArray(m.material)?m.material:[m.material];all.forEach(v=>materials.add(v));if(m.isInstancedMesh)m.dispose();}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());texture.dispose();
 }
}
console.log(`PASS:${checks} all store product and repeated-stock bounds checks, before and after photo loading.`);
