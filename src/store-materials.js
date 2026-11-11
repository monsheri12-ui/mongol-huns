import * as THREE from 'three';

function rng(seed = 8) { let value = seed; return () => { value = Math.imul(value, 1664525) + 1013904223 | 0; return (value >>> 0) / 4294967296; }; }
function makeTexture(canvas, repeatX = 1, repeatY = 1) {
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(repeatX, repeatY); texture.anisotropy = 8; return texture;
}
export function timberMaterial({ floor = false } = {}) {
  const c = document.createElement('canvas'); c.width = c.height = floor ? 1024 : 512;
  const ctx = c.getContext('2d'); const w=c.width,h=c.height, random=rng(floor?17:42);
  const grain = ctx.createImageData(w,h); const boardH = h/(floor?8:4);
  const shades=Array.from({length:floor?8:4},()=>random()*12-6);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const board=Math.floor(y/boardH), v=(y%boardH)/boardH;
    const wave=Math.sin((v*92 + Math.sin(x*.009+board)*.8))*1.7 + Math.sin(v*330 + Math.sin(x*.015)*2.5)*1.2;
    const pores=(random()-.5)*3.5, border=y%boardH<2?-23:0, light=shades[board]+wave+pores+border;
    const k=(y*w+x)*4; grain.data[k]=204+light; grain.data[k+1]=176+light*.85; grain.data[k+2]=132+light*.65;grain.data[k+3]=255;
  }
  ctx.putImageData(grain,0,0);
  for(let row=0;row<(floor?8:4);row++){
    const start=Math.round((row*271+90)%w), y=row*boardH;
    ctx.fillStyle='rgba(61,40,20,.18)';ctx.fillRect(start,y,2,boardH);
    if(row%3===1){const knotX=(row*197+241)%w,knotY=y+boardH*.58;ctx.save();ctx.translate(knotX,knotY);ctx.scale(2.8,.55);for(let ring=3;ring<22;ring+=3){ctx.strokeStyle=`rgba(68,40,20,${.14-ring*.003})`;ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(0,0,ring,ring*.65,0,0,Math.PI*2);ctx.stroke();}ctx.restore();}
  }
  const map=makeTexture(c,floor?11:1,floor?9:1);
  const bump=map.clone();bump.colorSpace=THREE.NoColorSpace;
  return new THREE.MeshStandardMaterial({ map, bumpMap:bump,bumpScale:floor?.009:.004,roughness:floor?.58:.68,color:floor?'#eddcc6':'#f6dfc4' });
}
export function plasterMaterial() {
  const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d'),d=ctx.createImageData(128,128),random=rng(44);
  for(let i=0;i<d.data.length;i+=4){const n=239+(random()-.5)*13;d.data[i]=n;d.data[i+1]=n-5;d.data[i+2]=n-13;d.data[i+3]=255;}ctx.putImageData(d,0,0);
  const map=makeTexture(c,8,4),bump=map.clone();bump.colorSpace=THREE.NoColorSpace;return new THREE.MeshStandardMaterial({map,color:'#ddd4bc',bumpMap:bump,bumpScale:.018,roughness:.94});
}
export function roundedBox(width,height,depth,material,radius=.035) {
  const r=Math.min(radius,width/4,height/4,depth/4),shape=new THREE.Shape();
  const x=-width/2,y=-height/2;
  shape.moveTo(x+r,y);shape.lineTo(x+width-r,y);shape.quadraticCurveTo(x+width,y,x+width,y+r);shape.lineTo(x+width,y+height-r);shape.quadraticCurveTo(x+width,y+height,x+width-r,y+height);shape.lineTo(x+r,y+height);shape.quadraticCurveTo(x,y+height,x,y+height-r);shape.lineTo(x,y+r);shape.quadraticCurveTo(x,y,x+r,y);
  const geometry=new THREE.ExtrudeGeometry(shape,{depth:Math.max(.001,depth-2*r),bevelEnabled:true,bevelSize:r*.65,bevelThickness:r,bevelSegments:2,steps:1,curveSegments:5});geometry.translate(0,0,-depth/2+r);const uv=geometry.attributes.uv,positions=geometry.attributes.position;for(let i=0;i<uv.count;i++){uv.setXY(i,(positions.getX(i)+width/2)/width,(positions.getY(i)+height/2)/height);}
  const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;return mesh;
}
export function floorShadow(width,depth,opacity=.18) {
  const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d');const gradient=ctx.createRadialGradient(32,32,5,32,32,32);gradient.addColorStop(0,`rgba(27,25,17,${opacity})`);gradient.addColorStop(.62,`rgba(27,25,17,${opacity*.7})`);gradient.addColorStop(1,'rgba(27,25,17,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,depth),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false,toneMapped:false}));mesh.rotation.x=-Math.PI/2;mesh.position.y=.012;return mesh;
}
