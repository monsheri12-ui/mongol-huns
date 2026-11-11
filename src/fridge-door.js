import * as THREE from 'three';
// Sliding glass stays inside the cabinet footprint, clear of shoppers and carts.
export function createSlidingDoor(width,height,direction=1){
  const group=new THREE.Group(),glass=new THREE.MeshPhysicalMaterial({color:'#d6ebe5',transparent:true,opacity:.075,depthWrite:false,roughness:.08,clearcoat:1,side:THREE.DoubleSide});
  const frame=new THREE.MeshStandardMaterial({color:'#6e8b80',roughness:.3,metalness:.55}),metal=new THREE.MeshStandardMaterial({color:'#c8d9d0',roughness:.23,metalness:.75});
  const pane=new THREE.Mesh(new THREE.PlaneGeometry(width-.035,height-.035),glass);group.add(pane);
  function box(w,h,d,x,y,z,material){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);group.add(mesh);return mesh;}
  for(const side of [-1,1]){box(.045,height,.055,side*width/2,0,.02,frame);box(width,.045,.055,0,side*height/2,.02,frame);}
  const gripX=width/2-.035,gripY=height/2-.25;
  const handle=box(.022,.27,.028,gripX,gripY,.09,metal);
  for(const dy of [-.12,.12])box(.024,.022,.085,gripX,gripY+dy,.045,metal);
  let amount=0,target=0;const closed=new THREE.Vector3();
  function setClosedPosition(x,y,z,rotation=0){closed.set(x,y,z);group.position.copy(closed);group.rotation.y=rotation;}
  function tick(dt,reducedMotion=false){if(Math.abs(amount-target)<.001)return false;amount=reducedMotion?target:amount+Math.sign(target-amount)*Math.min(Math.abs(target-amount),dt*3.5);group.position.x=closed.x+direction*width*.88*amount;return true;}
  return {group,pane,handle,closed,setClosedPosition,tick,toggle(){target=target?0:1;},open(){target=1;},get isOpen(){return amount>.97;},get opening(){return target===1;}};
}
