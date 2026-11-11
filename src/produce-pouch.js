import * as THREE from 'three';

// Low-poly film volume keeps a produce bag from becoming a flat card when the
// player looks down into the trolley. No transmission render pass is needed.
export function createProducePouch(texture,width,height,depth){
  const group=new THREE.Group();group.name='transparent-produce-pouch';
  const owned=resource=>{resource.userData.owned=true;return resource;};
  const levels=[[.06,.33,.25],[.13,.46,.40],[.35,.46,.46],[.59,.43,.40],[.70,.32,.28],[.78,.045,.055]];
  const sides=16,vertices=[],indices=[];
  levels.forEach(([y,rx,rz])=>{for(let i=0;i<sides;i++){const angle=i/sides*Math.PI*2;vertices.push(Math.cos(angle)*rx*width,y*height,Math.sin(angle)*rz*depth);}});
  for(let j=0;j<levels.length-1;j++)for(let i=0;i<sides;i++){const a=j*sides+i,b=j*sides+(i+1)%sides,c=a+sides,d=b+sides;indices.push(a,c,b,b,c,d);}
  const shell=owned(new THREE.BufferGeometry());shell.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));shell.setIndex(indices);shell.computeVertexNormals();
  const sideMaterial=owned(new THREE.MeshStandardMaterial({color:'#9eb5aa',roughness:.32,metalness:0,transparent:true,opacity:.09,depthWrite:false,side:THREE.DoubleSide,forceSinglePass:true}));
  const body=new THREE.Mesh(shell,sideMaterial);body.renderOrder=2;group.add(body);
  const front=owned(new THREE.PlaneGeometry(width,height,10,10)),position=front.attributes.position;
  for(let i=0;i<position.count;i++){const x=position.getX(i)/(width*.5),y=position.getY(i)/(height*.5);position.setZ(i,depth*(.37+.10*Math.max(0,1-x*x)*Math.max(0,1-y*y)));}
  front.computeVertexNormals();
  const filmMaterial=owned(new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.015,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,opacity:.88,forceSinglePass:true}));
  const film=new THREE.Mesh(front,filmMaterial);film.position.y=height/2;film.renderOrder=3;group.add(film);
  const edgePoints=[[0,.78],[-.32,.71],[-.44,.63],[-.46,.20],[-.43,.08],[0,.045],[.43,.08],[.46,.20],[.44,.63],[.32,.71]].map(([x,y])=>new THREE.Vector3(x*width,y*height,depth*.475));
  const outline=owned(new THREE.BufferGeometry().setFromPoints(new THREE.CatmullRomCurve3(edgePoints,true,'centripetal').getPoints(64)));
  const edgeMaterial=owned(new THREE.LineBasicMaterial({color:'#71897b',transparent:true,opacity:.55,depthWrite:false}));
  const edge=new THREE.Line(outline,edgeMaterial);edge.renderOrder=4;group.add(edge);
  return group;
}
