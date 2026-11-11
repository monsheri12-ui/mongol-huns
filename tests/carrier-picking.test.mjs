import assert from 'node:assert/strict';
import * as THREE from 'three';
import {carrierOccludesRay} from '../src/carrier-picking.js';
const bounds=new THREE.Box3(new THREE.Vector3(-.45,-.6,-.4),new THREE.Vector3(.45,.78,.5));
let checks=0;const check=(v,m)=>{checks++;assert.ok(v,m);};
for(const yaw of [0,Math.PI/2,Math.PI,-Math.PI/2]){
  const group=new THREE.Group();group.position.set(2,.6,-3);group.rotation.y=yaw;group.scale.set(.78,1,.9);
  const target=new THREE.Vector3(0,.4,0);group.localToWorld(target);
  const origin=new THREE.Vector3(2,1.6,0),ray=new THREE.Ray(origin,target.clone().sub(origin).normalize());
  check(carrierOccludesRay(ray,group,bounds),'A ray through the carried basket clears its view');
  group.visible=false;check(carrierOccludesRay(ray,group,bounds),'The same pointer keeps a hidden carrier stable');
  check(!carrierOccludesRay(new THREE.Ray(origin,new THREE.Vector3(0,1,0)),group,bounds),'A tag outside the carrier envelope leaves the carrier visible');
  check(group.visible===false&&group.position.y===.6,'The test never changes transport geometry or collision placement');
}
check(!carrierOccludesRay(new THREE.Ray(),null,bounds),'No carrier requires no view adjustment');
check(!carrierOccludesRay(new THREE.Ray(),new THREE.Group(),new THREE.Box3()),'An empty envelope is ignored');
console.log(`PASS: ${checks} carrier occlusion, stability and unchanged placement checks.`);
