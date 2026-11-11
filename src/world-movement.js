// Geometry used by walking, turning and automatic routes. Units are metres.
export const BODY_RADIUS=.32;
export const CARRIERS={cart:{offset:1.15,center:1.07,halfWidth:.36,halfDepth:.39},basket:{offset:1,center:1,halfWidth:.35,halfDepth:.32}};
export const ROOM_BOUNDS={x0:-15.5,x1:15.5,z0:-12.5,z1:12.5};
const EPS=1e-6;
export function circleFree(x,z,r,obstacles,bounds=ROOM_BOUNDS){if(x<bounds.x0+r||x>bounds.x1-r||z<bounds.z0+r||z>bounds.z1-r)return false;return !obstacles.some(b=>{const dx=x-Math.max(b.x0,Math.min(x,b.x1)),dz=z-Math.max(b.z0,Math.min(z,b.z1));return dx*dx+dz*dz<r*r-EPS;});}
export function rectangleOverlap(a,b){
  const dx=a.x-(b.x0+b.x1)/2,dz=a.z-(b.z0+b.z1)/2,ex=(b.x1-b.x0)/2,ez=(b.z1-b.z0)/2;
  const ux=Math.cos(a.yaw),uz=-Math.sin(a.yaw),vx=-Math.sin(a.yaw),vz=-Math.cos(a.yaw);
  return Math.abs(dx)<ex+Math.abs(ux)*a.hw+Math.abs(vx)*a.hd-EPS&&Math.abs(dz)<ez+Math.abs(uz)*a.hw+Math.abs(vz)*a.hd-EPS&&Math.abs(dx*ux+dz*uz)<a.hw+ex*Math.abs(ux)+ez*Math.abs(uz)-EPS&&Math.abs(dx*vx+dz*vz)<a.hd+ex*Math.abs(vx)+ez*Math.abs(vz)-EPS;
}
export function carrierRectangle(x,z,yaw,kind){const c=CARRIERS[kind];return c?{x:x-Math.sin(yaw)*c.center,z:z-Math.cos(yaw)*c.center,yaw,hw:c.halfWidth,hd:c.halfDepth}:null;}
export function poseFree(x,z,yaw,kind,obstacles,bounds=ROOM_BOUNDS){
  if(![x,z,yaw].every(Number.isFinite))return false;
  if(x<bounds.x0+BODY_RADIUS||x>bounds.x1-BODY_RADIUS||z<bounds.z0+BODY_RADIUS||z>bounds.z1-BODY_RADIUS)return false;
  const bodyBlocked=obstacles.some(b=>{const dx=x-Math.max(b.x0,Math.min(x,b.x1)),dz=z-Math.max(b.z0,Math.min(z,b.z1));return dx*dx+dz*dz<BODY_RADIUS*BODY_RADIUS-EPS;});
  if(bodyBlocked)return false;
  const carrier=carrierRectangle(x,z,yaw,kind);if(!carrier)return true;
  const ex=Math.abs(Math.cos(yaw))*carrier.hw+Math.abs(Math.sin(yaw))*carrier.hd,ez=Math.abs(Math.sin(yaw))*carrier.hw+Math.abs(Math.cos(yaw))*carrier.hd;
  if(carrier.x-ex<bounds.x0||carrier.x+ex>bounds.x1||carrier.z-ez<bounds.z0||carrier.z+ez>bounds.z1)return false;
  return !obstacles.some(b=>rectangleOverlap(carrier,b));
}
export function movePose(pose,dx,dz,kind,obstacles,bounds=ROOM_BOUNDS){
  const p={...pose},steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.06));
  for(let i=0;i<steps;i++){const x=p.x+dx/steps,z=p.z+dz/steps;if(poseFree(x,p.z,p.yaw,kind,obstacles,bounds))p.x=x;if(poseFree(p.x,z,p.yaw,kind,obstacles,bounds))p.z=z;}
  return p;
}
export function turnPose(pose,angle,kind,obstacles,bounds=ROOM_BOUNDS){
  let p={...pose};const steps=Math.max(1,Math.ceil(Math.abs(angle)/.035));
  for(let i=0;i<steps;i++){
    const next={...p,yaw:p.yaw+angle/steps};if(poseFree(next.x,next.z,next.yaw,kind,obstacles,bounds)){p=next;continue;}
    // Make a little room while turning close to a table; never swing the cart
    // through it and never disable keyboard turning for the entire journey.
    let found=false;
    for(const distance of [.04,.08,.12]){for(const direction of [p.yaw+Math.PI,p.yaw-Math.PI/2,p.yaw+Math.PI/2,p.yaw]){const x=p.x-Math.sin(direction)*distance,z=p.z-Math.cos(direction)*distance;const retreat=movePose(p,x-p.x,z-p.z,kind,obstacles,bounds);if(Math.hypot(retreat.x-x,retreat.z-z)>.001)continue;if(poseFree(x,z,next.yaw,kind,obstacles,bounds)){p={x,z,yaw:next.yaw};found=true;break;}}if(found)break;}
    if(!found)break;
  }
  return p;
}
