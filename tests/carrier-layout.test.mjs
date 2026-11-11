import assert from 'node:assert/strict';
import * as THREE from 'three';
import {carrierLayout} from '../src/carrier-layout.js';
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
for(const [width,height] of [[320,640],[390,844],[625,827],[768,1024],[900,1200]])for(const kind of ['cart','basket'])for(const count of [1,2,3,5,12]){
 const layout=carrierLayout(kind,width,height,count),camera=new THREE.PerspectiveCamera(63,width/height,.08,90);camera.position.y=1.64;camera.rotation.x=kind==='cart'?-.25:-.18;camera.updateMatrixWorld(true);
 for(const slot of layout.slots){
  ok(Math.abs(slot.x)+slot.width/2<=.302,'Products fit inside the actual basket side walls');
  ok(Math.abs(slot.z)+slot.depth/2<=.205,'Products fit inside the tapered basket floor');
  const far=-(kind==='cart'?1.15:1)-slot.z-slot.depth/2*.9;
  const point=new THREE.Vector3(slot.x*.78,layout.baseY+slot.y+slot.height,far).project(camera),top=(1-point.y)*height/2;
  ok(top>=height*.64,'Milk and other tall goods stay below the portrait receipt area');
 }
}
console.log(`PASS: ${checks} carrier bounds and portrait foreground-clearance checks.`);
