import * as THREE from 'three';
const inverse=new THREE.Matrix4(),localRay=new THREE.Ray(),intersection=new THREE.Vector3();
// Visibility is intentionally ignored: the carrier stays out of the way while
// the same tag is aimed at, instead of flashing on and off on alternate frames.
export function carrierOccludesRay(ray,group,bounds){
  if(!group||!bounds||bounds.isEmpty())return false;
  group.updateWorldMatrix(true,false);
  inverse.copy(group.matrixWorld).invert();
  localRay.copy(ray).applyMatrix4(inverse);
  return localRay.intersectBox(bounds,intersection)!==null;
}
