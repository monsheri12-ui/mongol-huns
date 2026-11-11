import assert from 'node:assert/strict';
import {loadProductTexture,updateProductTextureImage} from '../src/product-presentation.js';
import * as THREE from 'three';
import {createDetailBudget} from '../src/texture-detail-budget.js';
let checks=0;const check=(v,m)=>{checks++;assert.ok(v,m);};
const flush=()=>new Promise(resolve=>setImmediate(resolve));
const previous={window:globalThis.window,Image:globalThis.Image,now:Date.now},requests=[];
class TestImage{
  set src(path){this.path=path;if(path.startsWith('preview:')){this.width=this.height=40;queueMicrotask(()=>this.onload?.());}else if(path)requests.push(this);}
  get src(){return this.path;}
}
const fast=id=>({aspect:1,outline:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],sideColor:[.4,.4,.4],placeholder:'preview:'+id,small:'low:'+id,large:'high:'+id});
const finish=(path,ok=true)=>{const image=requests.find(image=>image.path===path&&image.onload);assert.ok(image,'Expected pending image '+path);image.width=image.height=path.startsWith('high:')?640:320;ok?image.onload():image.onerror();};
try{
  globalThis.window={innerWidth:320,FastAssets:{products:{a:fast('a'),b:fast('b'),c:fast('c')}},dispatchEvent(){}};
  globalThis.Image=TestImage;
  let ready=0;const a=loadProductTexture({id:'a'},()=>ready++);await flush();
  check(a.image.width===40,'The first frame is available without waiting for a photograph');
  a.userData.requestDetail();await flush();finish('high:a');await flush();
  check(a.image.width===640&&a.userData.quality==='detail','Approaching a shelf upgrades a mobile texture to sharp 640 px');
  finish('low:a');await flush();
  check(a.image.width===640,'A late low-resolution result never overwrites the sharp texture');
  check(ready===1,'The base readiness callback is counted once rather than once per quality tier');
  a.userData.requestDetail();await flush();check(requests.filter(i=>i.path==='high:a').length===1,'A ready detail texture is reused');
  const b=loadProductTexture({id:'b'},()=>{});await flush();finish('low:b');await flush();b.userData.requestDetail();await flush();finish('high:b',false);await flush();
  check(b.image.width===320,'A detail error leaves the usable shelf image in place');
  const now=Date.now();Date.now=()=>now+5000;b.userData.requestDetail();await flush();finish('high:b');await flush();
  check(b.image.width===640,'A failed detail request can recover instead of remaining permanently cached as failed');
  const c=loadProductTexture({id:'c'},()=>{});await flush();finish('low:c',false);await flush();c.userData.requestDetail();await flush();finish('high:c');await flush();
  check(c.image.width===640,'A failed base request cannot strand a nearby product on its 40 px placeholder');
  const removed=[],budget=createDetailBudget(2);budget.focus(['visible']);budget.touch('visible',()=>removed.push('visible'));budget.touch('old',()=>removed.push('old'));budget.touch('new',()=>removed.push('new'));
  check(budget.size()===2&&removed.join(',')==='old','The detail budget evicts a distant image and preserves the visible shelf');
  const gpu=new THREE.Texture({width:40,height:40}),material=new THREE.MeshBasicMaterial({map:gpu});let reallocations=0;gpu.addEventListener('dispose',()=>reallocations++);
  updateProductTextureImage(gpu,{width:640,height:480});check(reallocations===1,'Upgrading the placeholder releases immutable GPU storage before uploading a larger image');
  check(material.map===gpu&&gpu.image.width===640,'Existing shelf materials retain their texture reference and the sharp image');
  updateProductTextureImage(gpu,{width:640,height:480});check(reallocations===1,'Updating equal-sized images does not reallocate GPU storage');
  updateProductTextureImage(gpu,{width:320,height:240});check(reallocations===2,'A budget downgrade also allocates storage with the correct dimensions');
}finally{globalThis.window=previous.window;globalThis.Image=previous.Image;Date.now=previous.now;}
console.log(`PASS: ${checks} sharp texture, late response, failure recovery and memory budget checks.`);
