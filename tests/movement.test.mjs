import assert from 'node:assert/strict';
import {poseFree,movePose,turnPose,rectangleOverlap,carrierRectangle} from '../src/world-movement.js';
import {createEggCarton,fitModelInside} from '../src/product-presentation.js';
import * as THREE from 'three';
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
const table={x0:4.5,x1:8.5,z0:10,z1:11.6},obstacles=[table];
for(const kind of ['', 'basket','cart']){
 const start={x:6.5,z:6,yaw:Math.PI};let p=movePose(start,0,12,kind,obstacles);
 ok(poseFree(p.x,p.z,p.yaw,kind,obstacles),'A long held key never tunnels through the table');
 ok(p.z<10,'Player remains in front of table');
 if(kind)ok(!rectangleOverlap(carrierRectangle(p.x,p.z,p.yaw,kind),table),'Visible carrier cannot pass through table');
 const stopped=movePose(p,0,2,kind,obstacles);ok(Math.abs(stopped.z-p.z)<.07,'Another forward press remains blocked');
 let turning={x:6.5,z:8.35,yaw:Math.PI};for(let i=0;i<200;i++){turning=turnPose(turning,.04,kind,obstacles);ok(poseFree(turning.x,turning.z,turning.yaw,kind,obstacles),'Every intermediate turn remains outside furniture');}
 ok(turning.yaw>Math.PI+7.9,'Both walking and carrier modes can turn all the way around');
 const retreat=movePose(p,0,-1,kind,obstacles);ok(retreat.z<p.z-.95,'Can reverse away from table');
 const wall=movePose({x:0,z:0,yaw:Math.PI/2},-100,0,kind,[]);ok(poseFree(wall.x,wall.z,wall.yaw,kind,[]),'Room walls block long movements too');
}
for(let i=0;i<300;i++){const yaw=i*Math.PI/150,kind=i%2?'basket':'cart',p={x:6.5,z:8.1,yaw};const next=movePose(p,Math.sin(i)*.1,Math.cos(i)*.1,kind,obstacles);ok(poseFree(next.x,next.z,next.yaw,kind,obstacles),'Diagonal approaches remain collision safe');}
const eggs=createEggCarton({id:'eggs-test',pack:6},.8,false),eggShapes=[];
eggs.group.traverse(o=>{if(o.geometry?.type==='SphereGeometry')eggShapes.push(o);});
ok(eggShapes.length===0,'The shelf shows a closed carton rather than exposed shells');
ok(eggs.lid&&eggs.group.children.includes(eggs.lid),'Carton has a physical opaque lid');
ok(eggs.lid.position.y>eggs.front.position.y,'The lid closes the tray from above');
ok(eggs.group.rotation.x===0&&eggs.group.rotation.z===0,'The closed carton rests level');
const bounds=new THREE.Box3().setFromObject(eggs.group);ok(bounds.min.y>=0,'Carton rests above the shelf, not through it');
const first=createEggCarton({id:'a',pack:6},.6,false).group,second=createEggCarton({id:'b',pack:6},.6,false).group,parent=new THREE.Group();parent.position.set(6.5,.9,10.8);parent.rotation.y=Math.PI;parent.scale.set(.78,1,.9);parent.add(second);
fitModelInside(first,.18,.4,.15);fitModelInside(second,.18,.4,.15);
ok(first.scale.equals(second.scale),'Product size is independent of basket/world position');
ok(first.position.distanceTo(second.position)<1e-8,'Product stays in its local slot after the cart moves or turns');
parent.position.set(-12,2,-9);fitModelInside(second,.18,.4,.15);ok(first.position.distanceTo(second.position)<1e-8,'Repeated fitting does not drift out of the bag');
console.log(`PASS: ${checks} movement, turning, carrier collision, wall and egg-layout checks.`);
