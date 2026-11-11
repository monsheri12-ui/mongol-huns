import * as THREE from 'three';
// A small coated-wire hand basket with actual thickness and an open floor.
export function createShoppingBasket(){
  const group=new THREE.Group(),material=new THREE.MeshStandardMaterial({color:'#426b56',roughness:.42,metalness:.14});material.userData.owned=true;
  const segments=[],line=(a,b,r=.009)=>segments.push([a,b,r]),top=.32;
  for(const y of [.025,.10,.18,.25,top]){const t=y/top,x=.34+t*.08,z=.23+t*.07;line([-x,y,-z],[x,y,-z],y===top?.016:.008);line([-x,y,z],[x,y,z],y===top?.016:.008);line([-x,y,-z],[-x,y,z],y===top?.016:.008);line([x,y,-z],[x,y,z],y===top?.016:.008);}
  for(let x=-.32;x<=.33;x+=.08)for(const z of [-1,1])line([x,.025,z*.235],[x*1.2,top,z*.3],.008);
  for(let z=-.2;z<=.21;z+=.08)for(const x of [-1,1])line([x*.34,.025,z],[x*.42,top,z*1.3],.008);
  for(let x=-.31;x<=.32;x+=.08)line([x,.025,-.23],[x,.025,.23],.007);
  for(let z=-.2;z<=.21;z+=.08)line([-.34,.025,z],[.34,.025,z],.007);
  line([-.42,top,0],[-.29,.55,0],.014);line([-.29,.55,0],[.29,.55,0],.019);line([.29,.55,0],[.42,top,0],.014);
  const geometry=new THREE.CylinderGeometry(1,1,1,8);geometry.userData.owned=true;
  const mesh=new THREE.InstancedMesh(geometry,material,segments.length),dummy=new THREE.Object3D(),direction=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
  segments.forEach(([a,b,r],i)=>{const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b);dummy.position.copy(start).add(end).multiplyScalar(.5);const length=direction.subVectors(end,start).length();dummy.quaternion.setFromUnitVectors(up,direction.normalize());dummy.scale.set(r,length,r);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
  mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);
  const contents=new THREE.Group();group.add(contents);return {group,contents};
}
