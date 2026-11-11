import { roundedBox } from './store-materials.js';
import * as THREE from 'three';
import {queuedImage,assetQueue} from './asset-queue.js';
import {createDetailBudget} from './texture-detail-budget.js';
const detailBudget=createDetailBudget(20);
export function focusProductDetails(ids){detailBudget.focus(ids);}
export function updateProductTextureImage(texture,image){
  const previous=texture.image,width=im=>im?.naturalWidth||im?.width||0,height=im=>im?.naturalHeight||im?.height||0;
  // WebGL uses immutable texture storage. Replacing a 40 px placeholder with
  // a larger image needs a fresh GPU allocation, not just a version increment.
  if(previous&&(width(previous)!==width(image)||height(previous)!==height(image)))texture.dispose();
  texture.image=image;texture.needsUpdate=true;
}

export function photoRecord(lot) {
  const generated = window.ProducePhotos?.[window.GroceryGame.photoKey(lot)];
  if (generated) return generated;
  const photos = window.ProductPhotos || {};
  return photos[lot.variantId] || photos[`${lot.productId}-${lot.pack}`] || photos[lot.productId];
}

// The source photographs stay intact. Background masking and cropping are
// presentation operations on the GPU texture, also usable in the offline build.
export function loadProductTexture(record, onReady) {
  const texture = new THREE.Texture();
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.userData.callbacks = [];
  const fast=window.FastAssets?.products?.[record.id];
  if(fast){
    // Geometry is fitted immediately from the same baked alpha contour. A
    // delayed photograph can no longer leave an oversized rectangular product.
    texture.userData.presentation={aspect:fast.aspect,outline:fast.outline,sideColor:new THREE.Color().fromArray(fast.sideColor)};
    let full=false,detailReady=false,detailPending=false,lowImage=null,detailAttempt=0,lastFailure=-Infinity,detailKey='';const preview=new Image();
    preview.onload=()=>{if(!full){updateProductTextureImage(texture,preview);window.dispatchEvent(new Event('grocery:texturepreview'));}};
    preview.src=fast.placeholder;
    const changed=()=>{window.dispatchEvent(new Event('grocery:texturepreview'));};
    const releaseDetail=()=>{detailReady=false;updateProductTextureImage(texture,lowImage||preview);texture.userData.quality=lowImage?'shelf':'preview';assetQueue.forget(detailKey);changed();};
    texture.userData.quality='preview';
    texture.userData.requestDetail=()=>{
      if(detailReady){detailBudget.touch(record.id,releaseDetail);return;}
      if(detailPending||Date.now()-lastFailure<4000)return;
      detailPending=true;detailKey='product-detail:'+record.id+':'+detailAttempt++;
      queuedImage(detailKey,fast.large,100,20000).then(image=>{detailPending=false;detailReady=true;full=true;updateProductTextureImage(texture,image);texture.userData.quality='detail';detailBudget.touch(record.id,releaseDetail);changed();},()=>{detailPending=false;lastFailure=Date.now();});
    };
    // Far shelves use the light image. Approaching a shelf independently requests
    // the sharp one, including after a timeout; a failed request cannot strand
    // a nearby product on its 40 px first-frame placeholder.
    queuedImage('product:'+record.id,fast.small).then(image=>{full=true;lowImage=image;if(!detailReady){updateProductTextureImage(texture,image);texture.userData.quality='shelf';}onReady(true);},()=>onReady(detailReady));
    return texture;
  }
  const image = new Image();
  image.onload = () => {
    const value = record.render_crop;
    const crop = Array.isArray(value) ? value : value ? [value.x, value.y, value.x + value.width, value.y + value.height] : [0, 0, 1, 1];
    const sourceW = image.naturalWidth, sourceH = image.naturalHeight;
    const photoLimit=typeof window!=='undefined'&&window.innerWidth<=700?320:640;
    const factor = Math.min(1, photoLimit / Math.max(sourceW * (crop[2] - crop[0]), sourceH * (crop[3] - crop[1])));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(sourceW * (crop[2] - crop[0]) * factor));
    c.height = Math.max(1, Math.round(sourceH * (crop[3] - crop[1]) * factor));
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(image, sourceW * crop[0], sourceH * crop[1], sourceW * (crop[2] - crop[0]), sourceH * (crop[3] - crop[1]), 0, 0, c.width, c.height);
    for(const label of record.render_labels||[]){
      const [x,y,width,height]=label.rect,px=(x-crop[0])/(crop[2]-crop[0])*c.width,py=(y-crop[1])/(crop[3]-crop[1])*c.height,pw=width/(crop[2]-crop[0])*c.width,ph=height/(crop[3]-crop[1])*c.height;
      ctx.fillStyle='#f7edcc';ctx.fillRect(px,py,pw,ph);ctx.strokeStyle='#beaa79';ctx.lineWidth=1;ctx.strokeRect(px,py,pw,ph);ctx.fillStyle='#5e7051';ctx.font=`${Math.max(5,ph*.55)}px Arial`;ctx.textAlign='center';ctx.fillText(label.text,px+pw/2,py+ph*.72,pw-3);
    }
    if (record.render_polygon) {
      ctx.globalCompositeOperation = 'destination-in'; ctx.beginPath();
      record.render_polygon.forEach(([x, y], i) => { const px = (x - crop[0]) / (crop[2] - crop[0]) * c.width, py = (y - crop[1]) / (crop[3] - crop[1]) * c.height; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
      ctx.closePath(); ctx.fill(); ctx.globalCompositeOperation = 'source-over';
    }
    const data = ctx.getImageData(0, 0, c.width, c.height), pixels = data.data;
    const total = c.width * c.height, visited = new Uint8Array(total), queue = new Int32Array(total);
    const sourceAlpha = Uint8Array.from({ length: total }, (_, i) => pixels[i * 4 + 3]);
    let head = 0, tail = 0;
    const enqueue = i => {
      if (visited[i]) return; visited[i] = 1;
      const k = i * 4;
      const low=Math.min(pixels[k],pixels[k+1],pixels[k+2]),high=Math.max(pixels[k],pixels[k+1],pixels[k+2]);
      if(pixels[k+3]<8||low>228&&high-low<24)queue[tail++]=i;
    };
    for (let x = 0; x < c.width; x++) { enqueue(x); enqueue((c.height - 1) * c.width + x); }
    for (let y = 0; y < c.height; y++) { enqueue(y * c.width); enqueue(y * c.width + c.width - 1); }
    while (head < tail) {
      const i = queue[head++], x = i % c.width, y = Math.floor(i / c.width); pixels[i * 4 + 3] = 0;
      if (x) enqueue(i - 1); if (x < c.width - 1) enqueue(i + 1); if (y) enqueue(i - c.width); if (y < c.height - 1) enqueue(i + c.width);
    }
    // A white label can touch the white studio background. Restore its interior
    // when the surviving package surrounds it in both directions; preserve any
    // genuine transparency supplied by the photograph or its crop polygon.
    const rowLeft = new Int32Array(c.height).fill(c.width), rowRight = new Int32Array(c.height).fill(-1);
    const columnTop = new Int32Array(c.width).fill(c.height), columnBottom = new Int32Array(c.width).fill(-1);
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
      if (pixels[(y * c.width + x) * 4 + 3] < 100) continue;
      rowLeft[y] = Math.min(rowLeft[y], x); rowRight[y] = Math.max(rowRight[y], x);
      columnTop[x] = Math.min(columnTop[x], y); columnBottom[x] = Math.max(columnBottom[x], y);
    }
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
      const i = y * c.width + x;
      if (sourceAlpha[i] > 100 && pixels[i * 4 + 3] < 8 && x > rowLeft[y] + 1 && x < rowRight[y] - 1 && y > columnTop[x] + 1 && y < columnBottom[x] - 1) pixels[i * 4 + 3] = sourceAlpha[i];
    }
    let x0 = c.width, y0 = c.height, x1 = 0, y1 = 0;
    let red = 0, green = 0, blue = 0, samples = 0;
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
      const k = (y * c.width + x) * 4;
      if (pixels[k + 3] < 100) continue;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      if ((x + y) % 17 === 0 && Math.min(pixels[k], pixels[k + 1], pixels[k + 2]) < 210) { red += pixels[k]; green += pixels[k + 1]; blue += pixels[k + 2]; samples++; }
    }
    ctx.putImageData(data, 0, 0);
    const trimmed = document.createElement('canvas'); trimmed.width = Math.max(1, x1 - x0 + 1); trimmed.height = Math.max(1, y1 - y0 + 1);
    const tctx = trimmed.getContext('2d', { willReadFrequently: true });
    tctx.drawImage(c, x0, y0, trimmed.width, trimmed.height, 0, 0, trimmed.width, trimmed.height);
    const rgba = tctx.getImageData(0, 0, trimmed.width, trimmed.height).data;
    const left = [], right = [];
    const rowCount = Math.min(72, trimmed.height);
    for (let row = 0; row < rowCount; row++) {
      const y = Math.round(row * (trimmed.height - 1) / Math.max(1, rowCount - 1));
      let minX = trimmed.width, maxX = -1;
      for (let x = 0; x < trimmed.width; x++) if (rgba[(y * trimmed.width + x) * 4 + 3] > 130) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); }
      if (maxX >= minX) { left.push([minX / trimmed.width - .5, .5 - y / trimmed.height]); right.push([(maxX + 1) / trimmed.width - .5, .5 - y / trimmed.height]); }
    }
    texture.image = trimmed;
    texture.userData.presentation = {
      aspect: trimmed.width / trimmed.height,
      outline: simplifyContour([...right, ...left.reverse()]),
      sideColor: samples ? new THREE.Color(red / samples / 255, green / samples / 255, blue / samples / 255).convertSRGBToLinear() : new THREE.Color('#b2a080')
    };
    texture.needsUpdate = true;
    texture.userData.callbacks.forEach(fn => fn(texture.userData.presentation)); texture.userData.callbacks = [];
    onReady(true);
  };
  image.onerror = () => onReady(false);
  image.src = record.path;
  return texture;
}

function simplifyContour(points) {
  const distance = (p, a, b) => {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy);
  };
  const reduce = list => {
    if (list.length < 4) return list;
    let max = 0, index = 0;
    for (let i = 1; i < list.length - 1; i++) { const d = distance(list[i], list[0], list[list.length - 1]); if (d > max) { max = d; index = i; } }
    return max > .018 ? [...reduce(list.slice(0, index + 1)).slice(0, -1), ...reduce(list.slice(index))] : [list[0], list[list.length - 1]];
  };
  const midpoint = Math.floor(points.length / 2);
  return [...reduce(points.slice(0, midpoint + 1)).slice(0, -1), ...reduce([...points.slice(midpoint), points[0]]).slice(0, -1)];
}

const SIZE = {
  milk: [.72, .34, .22], yogurt: [.56, .31, .18], butter: [.28, .48, .14], cheese: [.48, .30, .12], eggs: [.36, .63, .28],
  flour: [.57, .38, .20], rice: [.57, .38, .20], sugar: [.55, .37, .18], salt: [.49, .34, .16], pasta: [.72, .25, .10],
  oil: [.73, .25, .18], water: [.70, .25, .18], icecream: [.49, .27, .07]
};

export function createProductModel(product, lot, texture, cellWidth, onChange) {
  if(product.id==='eggs')return createEggCarton(lot,cellWidth);
  const group = new THREE.Group();
  const PACK_SIZES = { bottle: [.73, .28, .18], carton: [.70, .34, .18], can: [.45, .34, .16], jar: [.44, .35, .18], tray: [.42, .65, .16], punnet: [.38, .62, .20], bag: [.61, .45, .16], packet: [.57, .39, .10], box: [.61, .48, .15], flat: [.40, .65, .08], tub: [.39, .45, .18], tube: [.68,.30,.10], roll: [.55, .45, .18], sausage: [.48, .49, .13], pump: [.70, .33, .18], bar: [.28, .45, .12] };
  let [maxHeight, maxWidth, depth] = SIZE[product.id] || PACK_SIZES[product.shelfKind] || (product.category === 'bread' ? [.56, .72, .20] : [.43, .64, .16]);
  depth *= ['bottle','can','jar','carton','box','tub'].includes(product.shelfKind) || ['milk','water','oil','yogurt'].includes(product.id) ? .52 : .32;
  if (product.category === 'bread') depth = .022;
  if (product.id === 'milk' && lot.pack === 500) { maxHeight *= .76; maxWidth *= .82; }
  if (product.id === 'icecream' && lot.pack >= 300) { maxHeight=.43;maxWidth=.48;depth=.04; }
  if(product.category==='produce'&&product.shelfKind!=='punnet'){maxHeight=product.id==='pineapple'?.38:product.id==='cabbage'?.30:.24;maxWidth=product.id==='banana'?.34:.28;depth=.025;}
  maxWidth = Math.min(maxWidth, cellWidth * .83);
  // The photo already contains its own lighting. Keep its printed colors and
  // avoid shadow acne on the thin photo surface, while the model casts a shadow.
  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide, transparent: false, alphaTest: .15, alphaToCoverage: true, toneMapped: false }); material.userData.owned = true;
  const front = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material); front.castShadow = true; front.userData.lotId = lot.id; group.add(front);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material); back.rotation.y = Math.PI; back.castShadow = true; back.userData.lotId = lot.id; group.add(back);
  const sideMaterial = new THREE.MeshStandardMaterial({ color: '#aa9777', roughness: .86 }); sideMaterial.userData.owned = true;
  const capMaterial = new THREE.MeshStandardMaterial({color:'#aa9777',roughness:.75}); capMaterial.userData.owned = true;
  let body = null, retailPack = null;
  const fit = presentation => {
    const width = Math.min(maxWidth, maxHeight * presentation.aspect), height = Math.min(maxHeight, maxWidth / presentation.aspect);
    front.scale.set(width, height, 1); front.position.set(0, height / 2, .015);
    back.scale.set(width, height, 1); back.position.set(0, height / 2, -depth - .015);
    if (body) { group.remove(body); body.geometry.dispose(); }
    if (presentation.outline.length > 5) {
      const shape = new THREE.Shape(presentation.outline.map(([x, y]) => new THREE.Vector2(x * width, y * height + height / 2)));
      const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: .0025, bevelThickness: .0025, bevelSegments: 1, steps: 1, curveSegments: 1 }); geometry.translate(0, 0, -depth);
      sideMaterial.color.copy(presentation.sideColor).multiplyScalar(.92); capMaterial.color.copy(presentation.sideColor);
      body = new THREE.Mesh(geometry, [capMaterial, sideMaterial]); body.castShadow = true; body.userData.lotId = lot.id; group.add(body);
    }
    group.userData.dimensions = { width, height, depth };
    if(product.shelfKind==='punnet'||product.id==='chicken-breast'){
      if(retailPack){group.remove(retailPack);retailPack.traverse(m=>{if(m.isMesh)m.geometry.dispose();});}
      retailPack=new THREE.Group();
      const plastic=new THREE.MeshStandardMaterial({color:'#e7f1e6',transparent:true,opacity:.23,roughness:.23,depthWrite:false});plastic.userData.owned=true;
      const rim=new THREE.MeshStandardMaterial({color:'#adc1b0',transparent:true,opacity:.72,roughness:.35});rim.userData.owned=true;
      const packWidth=width*1.14,packHeight=height*1.10;
      const panel=new THREE.Mesh(new THREE.BoxGeometry(packWidth,packHeight,depth+.045),plastic);panel.position.set(0,height/2,-depth/2);retailPack.add(panel);
      for(const y of [0,packHeight]){const edge=new THREE.Mesh(new THREE.BoxGeometry(packWidth,.012,depth+.06),rim);edge.position.set(0,y-height*.05,-depth/2);retailPack.add(edge);}
      for(const x of [-packWidth/2,packWidth/2]){const edge=new THREE.Mesh(new THREE.BoxGeometry(.012,packHeight,depth+.06),rim);edge.position.set(x,height/2,-depth/2);retailPack.add(edge);}
      retailPack.traverse(m=>{if(m.isMesh){m.userData.lotId=lot.id;m.castShadow=true;}});group.add(retailPack);
    }
    onChange();
  };
  front.scale.set(maxWidth, maxHeight, 1); front.position.set(0, maxHeight / 2, .015);
  back.scale.set(maxWidth, maxHeight, 1); back.position.set(0, maxHeight / 2, -depth - .015);
  if (texture.userData.presentation) fit(texture.userData.presentation); else texture.userData.callbacks.push(fit);
  return { group, front, back };
}

export function createEggCarton(lot,cellWidth,decorate=true){
  const group=new THREE.Group(),width=Math.min(.66,cellWidth*.87),scale=width/.66;
  const material=color=>{const m=new THREE.MeshStandardMaterial({color,roughness:.88});m.userData.owned=true;return m;};
  const paper=material('#d4c7a4'),edge=material('#b7a780');
  const tray=roundedBox(.66,.13,.40,paper,.026);tray.position.y=.07;group.add(tray);
  const seam=roundedBox(.67,.018,.41,edge,.01);seam.position.y=.14;group.add(seam);
  const lid=roundedBox(.67,.09,.41,paper,.028);lid.position.y=.19;group.add(lid);
  for(const x of [-.22,0,.22]){const rib=roundedBox(.045,.012,.37,edge,.006);rib.position.set(x,.238,0);group.add(rib);}
  if(decorate){
  const canvas=document.createElement('canvas');canvas.width=384;canvas.height=192;const ctx=canvas.getContext('2d');ctx.fillStyle='#3b604c';ctx.fillRect(0,0,384,192);ctx.strokeStyle='#cfb781';ctx.lineWidth=4;ctx.strokeRect(10,10,364,172);ctx.textAlign='center';ctx.fillStyle='#fff3cf';ctx.font='bold 52px Arial';ctx.fillText('ӨНДӨГ',192,82);ctx.font='32px Arial';ctx.fillText('6 ширхэг',192,135);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.userData.owned=true;
  const stickerMaterial=new THREE.MeshBasicMaterial({map:texture,toneMapped:false});stickerMaterial.userData.owned=true;
  const topLabel=new THREE.Mesh(new THREE.PlaneGeometry(.36,.20),stickerMaterial);topLabel.rotation.x=-Math.PI/2;topLabel.position.set(0,.259,0);group.add(topLabel);
  const frontLabel=new THREE.Mesh(new THREE.PlaneGeometry(.30,.105),stickerMaterial);frontLabel.position.set(0,.16,.231);group.add(frontLabel);
  group.add(createContactShadow(.78,.52));
  }
  // Rounded paper edges extend slightly below their nominal box. Rest the whole carton on the shelf.
  group.updateMatrixWorld(true);const bottom=new THREE.Box3().setFromObject(group).min.y;if(bottom<0)group.children.forEach(child=>{child.position.y-=bottom;});
  group.scale.setScalar(scale);group.traverse(m=>{if(m.isMesh){m.userData.lotId=lot.id;m.castShadow=true;m.receiveShadow=true;}});
  group.userData.dimensions={width,height:.25*scale,depth:.41*scale};return {group,front:tray,back:lid,lid};
}

export function fitModelInside(group,width,height,depth,allowUpscale=true){
  group.scale.setScalar(1);group.position.set(0,0,0);const parent=group.parent;parent?.remove(group);group.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(group),size=box.getSize(new THREE.Vector3());
  const scale=Math.min(allowUpscale?Infinity:1,width/Math.max(.001,size.x),height/Math.max(.001,size.y),depth/Math.max(.001,size.z));
  group.scale.setScalar(scale);group.position.set(-(box.min.x+box.max.x)*scale/2,-box.min.y*scale,-(box.min.z+box.max.z)*scale/2);parent?.add(group);return scale;
}

// Repeated shelf stock shares one draw call. Expose the actual geometry so
// refrigerated shelf bounds can be checked after each photograph has loaded.
export function createStockFacing(lot,texture,spacing,produce,onChange=()=>{}){
  const group=new THREE.Group(),count=produce?9:3,geometry=new THREE.PlaneGeometry(1,1),material=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,alphaTest:.18,alphaToCoverage:true,toneMapped:false});material.userData.owned=true;
  const front=new THREE.InstancedMesh(geometry,material,count);front.userData.lotId=lot.id;group.add(front);
  const fit=()=>{const aspect=texture.userData.presentation?.aspect||1,maxW=spacing*(produce?.27:.72),maxH=produce?.26:.49,w=Math.min(maxW,maxH*aspect),h=w/aspect,dummy=new THREE.Object3D();for(let i=0;i<count;i++){const row=produce?Math.floor(i/3):i;dummy.position.set(produce?((i%3)-1)*spacing*.25:(i-1)*spacing*.09,h/2+.04+(produce?(2-row)*.045:0),produce?-.20+row*.19:-.12+i*.18);dummy.rotation.set(0,0,0);dummy.scale.set(w,h,1);dummy.updateMatrix();front.setMatrixAt(i,dummy.matrix);}front.instanceMatrix.needsUpdate=true;front.computeBoundingBox();front.computeBoundingSphere();onChange();};
  if(texture.userData.presentation)fit();else{fit();texture.userData.callbacks.push(fit);}return {group,front};
}

// One draw call per batch, with a separate, non-overlapping place for each fruit.
export function createProduceBatch(lot,texture,cells,onChange=()=>{}){
  const group=new THREE.Group(),material=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,alphaTest:.18,alphaToCoverage:true,toneMapped:false});material.userData.owned=true;
  const front=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),material,cells.length);front.userData.lotId=lot.id;front.castShadow=true;group.add(front);
  const fit=()=>{const aspect=texture.userData.presentation?.aspect||1,dummy=new THREE.Object3D();cells.forEach((cell,i)=>{
    const width=Math.min(cell.width,cell.height*aspect),height=width/aspect;dummy.position.set(cell.x,height/2,cell.z);dummy.scale.set(width,height,1);dummy.updateMatrix();front.setMatrixAt(i,dummy.matrix);
  });front.instanceMatrix.needsUpdate=true;front.computeBoundingBox();front.computeBoundingSphere();onChange();};
  if(texture.userData.presentation)fit();else{fit();texture.userData.callbacks.push(fit);}return {group,front};
}

export function createContactShadow(width, depth) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const ctx = c.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 5, 32, 32, 31); gradient.addColorStop(0, 'rgba(35,27,16,.37)'); gradient.addColorStop(.55, 'rgba(35,27,16,.18)'); gradient.addColorStop(1, 'rgba(35,27,16,0)'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(c); texture.userData.owned = true;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }); material.userData.owned = true;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), material); mesh.rotation.x = -Math.PI / 2; mesh.position.y = .009; mesh.renderOrder = 1; return mesh;
}
