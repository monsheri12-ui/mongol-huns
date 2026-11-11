import * as THREE from 'three';
import {createSlidingDoor} from './fridge-door.js';
import {chestLayout,createFreezerPack,produceSlots} from './freezer-layout.js';
import {createStoreWindows,atmosphereState,EXTERIOR_TIMES} from './window-atmosphere.js';
import {assetQueue,queuedImage} from './asset-queue.js';
import {icecreamBins,createIcecreamFacing} from './icecream-display.js';
import {createShoppingCart} from './shopping-cart.js';
import {createShoppingBasket} from './shopping-basket.js';
import {carrierLayout} from './carrier-layout.js';
import {carrierOccludesRay} from './carrier-picking.js';
import {createProducePouch} from './produce-pouch.js';
import {departmentFor,shelfPages,shelfFamilies,sortFrozenFamilies,isDoubleSidedShelf,shelfSides,rackFootprint} from './shelf-stock.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createFlower, createHangingPlant } from './flower.js';
import { timberMaterial, plasterMaterial, roundedBox, floorShadow } from './store-materials.js';
import { photoRecord, loadProductTexture, focusProductDetails, createProductModel, createStockFacing, createProduceBatch, createContactShadow, fitModelInside } from './product-presentation.js';
import { CARRIERS, poseFree, movePose, turnPose, circleFree } from './world-movement.js';

const G = window.GroceryGame;
const Prices=window.GroceryPrices;
const bridge = window.GameWorldBridge;
const root = document.getElementById('world');
const canvas = document.getElementById('world-canvas');
const $ = id => document.getElementById(id);
const ROOM = { width: 32, depth: 26, halfWidth: 16, halfDepth: 13 };
const STATION = { x: 6.5, z: 10.8 };
const zones = {
  meat: { name: 'МАХ, ЗАГАС', x: -12, z: -12, rotation: 0, width: 5.1, to: [-12, -9.2], yaw: 0 },
  dairy: { name: 'СҮҮ, ӨНДӨГ', x: -6, z: -12, rotation: 0, width: 5.1, to: [-6, -9.2], yaw: 0 },
  bread: { name: 'ШИНЭ ТАЛХ', x: 0, z: -12, rotation: 0, width: 5.1, to: [0, -9.2], yaw: 0 },
  pantry: { name: 'ӨДӨР ТУТМЫН ХҮНС', x: 6, z: -12, rotation: 0, width: 5.1, to: [6, -9.2], yaw: 0 },
  canned: { name: 'ЛААЗАЛСАН ХҮНС, СОУС', x: 12, z: -12, rotation: 0, width: 5.1, to: [12, -9.2], yaw: 0 },
  frozen: { name: 'ХӨЛДӨӨСӨН ХҮНС', x: -15, z: -7.5, rotation: Math.PI / 2, width: 5.1, to: [-12.2, -7.5], yaw: Math.PI / 2 },
  cold: { name: 'УС, ЗАЙРМАГ', x: -15, z: 0, rotation: Math.PI / 2, width: 5.1, to: [-12.45, -1.05], yaw: Math.PI / 2, pitch:-.28 },
  household: { name: 'АХУЙН БАРАА', x: -15, z: 7.5, rotation: Math.PI / 2, width: 5.1, to: [-12.2, 7.5], yaw: Math.PI / 2 },
  drinks: { name: 'УНДАА, ЖҮҮС', x: 15, z: -7.5, rotation: -Math.PI / 2, width: 5.1, to: [12.2, -7.5], yaw: -Math.PI / 2 },
  sweets: { name: 'АМТТАН', x: 15, z: 0, rotation: -Math.PI / 2, width: 5.1, to: [12.2, 0], yaw: -Math.PI / 2 },
  alcohol: { name: 'СОГТУУРУУЛАХ УНДАА', x: 15, z: 7.5, rotation: -Math.PI / 2, width: 5.1, to: [12.2, 7.5], yaw: -Math.PI / 2 },
  produce: { name: 'ЖИМС, НОГОО', x: -6, z: 2.3, rotation: 0, width: 8.6, to: [-6, 5.1], yaw: 0 },
  ready: { name: 'БЭЛЭН ХООЛ', x: 6, z: 2.3, rotation: 0, width: 5.1, to: [6, 5.1], yaw: 0 },
  'frozen-dumplings':{name:'БУУЗ, БАНШ',x:-12,z:9.65,rotation:Math.PI,width:3.3,to:[-12,7.1],yaw:Math.PI,pitch:-.24,chest:true},
  'frozen-bakery':{name:'ХӨЛДӨӨСӨН ГУРИЛАН БҮТЭЭГДЭХҮҮН',x:-7.8,z:9.65,rotation:Math.PI,width:3.3,to:[-7.8,7.1],yaw:Math.PI,pitch:-.24,chest:true},
  'frozen-vegetables':{name:'ХӨЛДӨӨСӨН НОГОО',x:-3.6,z:9.65,rotation:Math.PI,width:3.3,to:[-3.6,7.1],yaw:Math.PI,pitch:-.24,chest:true},
  'frozen-meat': {name:'ХӨЛДӨӨСӨН МАХ',x:-5.5,z:-4.6,rotation:0,width:3.6,to:[-5.5,-2.1],yaw:0},
  'pantry-2': {name:'ХҮНС, АМТЛАГЧ',category:'pantry',x:5.5,z:-4.6,rotation:0,width:5.1,to:[5.5,-1.6],yaw:0},
  packing: { name: 'БЭЛТГЭХ ШИРЭЭ', to: [6.5, 8.4], yaw: Math.PI }
};
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
} catch (_) {
  $('world-error').hidden = false;
  $('world-loading').hidden = true;
}
if (renderer) init().catch(error=>{console.error(error);$('world-error').hidden=false;$('world-loading').hidden=true;});

async function init() {
  const prepare=(stage,percent)=>window.dispatchEvent(new CustomEvent('grocery:prepare',{detail:{stage,percent}}));
  const paint=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  prepare('room',15);await paint();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.07;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // The room, lights and stock are static while the camera walks. Reuse the
  // shadow map until assets, inventory or visible stock actually change.
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#eaf3e9');
  scene.fog = new THREE.FogExp2('#edf3e5', .0025);
  const environmentScene = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(environmentScene, .04).texture; scene.environmentIntensity = .14;
  if (typeof environmentScene.dispose === 'function') environmentScene.dispose(); pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(63, window.innerWidth / window.innerHeight, .08, 90);
  scene.add(camera);
  camera.position.set(0, 1.64, 10.8);
  camera.rotation.order = 'YXZ';
  let yaw = -.1, pitch = -.03;
  const carryingPitch=()=>bridge.transport?.()==='cart'?-.25:bridge.transport?.()==='basket'?-.18:-.04;
  let lastTransport='';
  const colliders = [];
  const solidMeshes = [];
  const targets = [],fridgeDoors=[];
  const textureCache = new Map();
  let productGroup = new THREE.Group(); scene.add(productGroup);
  const rows = new Map();
  let needsRender = true;
  let navigation = null;
  let nearStation = false;
  let departmentVisible = false;
  let currentTarget = null;
  let lastNearby = '';
  let nearbyExpanded=false;
  function setNearbyExpanded(value){nearbyExpanded=value;$('nearby-panel').classList.toggle('is-expanded',value);$('nearby-toggle').setAttribute('aria-expanded',String(value));}
  let currentZone = '';
  let lastTick = performance.now();
  let nearestTick = 0;
  let nearbyDirty = true;
  let bobTime = 0;
  const held = new Set();
  const walkPointers = new Map();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const raycaster = new THREE.Raycaster();
  const carryPickBounds=new THREE.Box3();
  const rayPoint = new THREE.Vector2();
  const mousePoint = new THREE.Vector2(0, 0);
  const pathGroup = new THREE.Group(); scene.add(pathGroup);
  let carryGroup=null,carryContents=null,carryKey='',carryItemsKey='',shelfFocus=false,carrierPark=0;
  const materials = {};
  function mat(color, roughness = .8, metalness = 0) {
    const key = `${color}:${roughness}:${metalness}`;
    return materials[key] ||= new THREE.MeshStandardMaterial({ color, roughness, metalness });
  }
  function box(w, h, d, material, x, y, z, parent = scene, solid = false) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.receiveShadow = true;
    parent.add(mesh); if (solid) solidMeshes.push(mesh); return mesh;
  }
  function addFridgeDoor(parent,cabinet,x,y,z,width,height,column,side=1){
    const door=createSlidingDoor(width,height,column===2?-1:1);door.cabinet=cabinet;door.id=fridgeDoors.length;door.setClosedPosition(x,y,z,side<0?Math.PI:0);parent.add(door.group);
    door.pane.userData.fridgeDoor=door.id;door.handle.userData.fridgeDoor=door.id;door.center=new THREE.Vector3(x,y,z);parent.localToWorld(door.center);fridgeDoors.push(door);return door;
  }
  function fridgeForLot(id){
    const row=rows.get(id);if(!row)return null;const cabinet=departmentFor(G.BY_ID[row.lot.productId]);
    return fridgeDoors.filter(d=>d.cabinet===cabinet).map(d=>({door:d,score:Math.min(...row.positions.map(p=>p.distanceTo(d.center)))+.16*camera.position.distanceTo(d.center)})).sort((a,b)=>a.score-b.score)[0]?.door||null;
  }
  function cyl(rt, rb, h, material, x, y, z, parent = scene, segments = 24) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  function canvasTexture(w, h, draw) {
    const el = document.createElement('canvas'); el.width = w; el.height = h;
    draw(el.getContext('2d'), w, h);
    const texture = new THREE.CanvasTexture(el); texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8); return texture;
  }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM.width, ROOM.depth), timberMaterial({ floor: true }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const wall = plasterMaterial(); const green = mat('#67947f', .58); const oak = timberMaterial(); const brass = mat('#d6b473', .3, .45); const cream = mat('#fff5dc');
  box(32, 5.4, .22, wall, 0, 2.7, -12.9, scene, true);
  box(.22, 5.4, 26, wall, -15.9, 2.7, 0, scene, true);
  box(.22, 5.4, 26, wall, 15.9, 2.7, 0, scene, true);
  box(32, 5.4, .22, wall, 0, 2.7, 12.9, scene, true);
  box(32, 1.1, .25, green, 0, .55, -12.75);
  box(.25, 1.1, 26, green, -15.75, .55, 0);
  box(.25, 1.1, 26, green, 15.75, .55, 0);
  box(32, .2, 26, mat('#f7f3e7'), 0, 5.4, 0);
  for (let x = -12; x <= 12; x += 6) box(.14, .3, 26, mat('#dcc8a8'), x, 5.2, 0);
  for (let z = -9; z <= 9; z += 6) box(32, .23, .14, mat('#e2cfb0'), 0, 5.15, z);
  scene.add(new THREE.HemisphereLight('#f1f8ff', '#e2d3b8', 2.20));
  scene.add(new THREE.AmbientLight('#ffffff', .48));
  const sunlight = new THREE.DirectionalLight('#fff6e5', 1.5); sunlight.position.set(-8, 12, 10); sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048); sunlight.shadow.camera.left = -21; sunlight.shadow.camera.right = 21; sunlight.shadow.camera.top = 20; sunlight.shadow.camera.bottom = -20; sunlight.shadow.normalBias = .025; sunlight.shadow.radius = 4; scene.add(sunlight);
  for (const [i, [x, z]] of [[-10, -8], [0, -8], [10, -8], [-10, 0], [0, 0], [10, 0], [-10, 8], [0, 8], [10, 8]].entries()) {
    cyl(.025, .025, 1.05, mat('#503d29'), x, 4.6, z);
    cyl(.11, .5, .3, mat(i%2?'#96b5a2':'#e0cba6', .55, .15), x, 3.97, z);
    cyl(.45, .45, .025, new THREE.MeshStandardMaterial({ color: '#fff0c5', emissive: '#ffcc77', emissiveIntensity: 2 }), x, 3.81, z);
    if (i % 2 === 0) { const light = new THREE.PointLight('#fff6e8', 7, 15, 2); light.position.set(x, 3.7, z); scene.add(light); }
  }
  // Timber wainscot and brass trim keep the large room warm at eye level.
  box(31.4, .055, .1, brass, 0, 1.18, -12.72);
  box(.1, .055, 25.4, brass, -15.72, 1.18, 0); box(.1, .055, 25.4, brass, 15.72, 1.18, 0);
  for(let x=-15;x<=15;x+=1.5) { box(.045,1.06,.06,mat('#456b58'),x,.56,-12.69);box(.045,1.06,.06,mat('#456b58'),x,.56,12.7); }
  for(let z=-12;z<=12;z+=1.5) for(const x of [-15.7,15.7]) box(.06,1.06,.045,mat('#456b58'),x,.56,z);
  // Seasonal panoramas share the same skyline, with four real lighting states.
  const cityTexture = canvasTexture(1024, 512, (ctx, w, h) => {
    const sky = ctx.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#768bb9'); sky.addColorStop(.62, '#e8b69f'); sky.addColorStop(1, '#9aafac'); ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#718097'; ctx.beginPath(); ctx.moveTo(0, 350); for (let x = 0; x <= w; x += 60) ctx.lineTo(x, 310 + 35 * Math.sin(x * .012)); ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
    for (let i = 0; i < 19; i++) { const x = i * 62 - 10, y = 195 + (i * 71) % 150, bw = 32 + (i * 17) % 37; ctx.fillStyle = i % 2 ? '#576e85' : '#69778c'; ctx.fillRect(x, y, bw, h - y); for (let fy = y + 13; fy < h; fy += 22) for (let fx = x + 7; fx < x + bw - 4; fx += 12) { ctx.fillStyle = (fx + fy) % 5 < 3 ? '#f6d395' : '#94b0b5'; ctx.fillRect(fx, fy, 4, 7); } }
  });
  const exteriorTextures={},environmentRecords=window.EnvironmentAssets||{},environmentPaths=new Map();
  for(const [key,record] of Object.entries(environmentRecords)){
    if(!environmentPaths.has(record.path)){
      const texture=cityTexture.clone(),fast=window.FastAssets?.environment?.[key];texture.needsUpdate=true;
      queuedImage('environment:'+key,fast?(window.innerWidth<=700?fast.small:fast.large):record.path,-20).then(image=>{texture.image=image;texture.needsUpdate=true;assetReady(true);},()=>assetReady(false));
      texture.colorSpace=THREE.SRGBColorSpace;environmentPaths.set(record.path,texture);
    }
    exteriorTextures[key]=environmentPaths.get(record.path);
  }
  const storeWindows=createStoreWindows(Object.keys(exteriorTextures).length?exteriorTextures:cityTexture,mat('#3a514d'),oak);scene.add(storeWindows.group);
  function updateAtmosphere(){
    const input=bridge.atmosphere?.(),state=atmosphereState(input?.day,input?.progress);
    for(const phase of [state.from,state.to])assetQueue.promote('environment:city'+state.season+EXTERIOR_TIMES[phase],100);
    if(storeWindows.set(input))needsRender=true;
  }
  updateAtmosphere();
  function textLines(ctx,text,maxWidth,maxLines,startSize,minSize=24){
    for(let size=startSize;size>=minSize;size-=2){
      ctx.font=`700 ${size}px Arial,sans-serif`;const lines=[];let line='';
      for(const word of String(text).split(/\s+/)){const next=line?`${line} ${word}`:word;if(line&&ctx.measureText(next).width>maxWidth){lines.push(line);line=word;}else line=next;}
      if(line)lines.push(line);
      if(lines.length<=maxLines&&lines.every(value=>ctx.measureText(value).width<=maxWidth))return {lines,size};
    }
    return {lines:[String(text)],size:minSize};
  }
  function drawCenteredText(ctx,text,x,centerY,maxWidth,maxLines,fontSize,minSize=24){
    const layout=textLines(ctx,text,maxWidth,maxLines,fontSize,minSize);ctx.font=`700 ${layout.size}px Arial,sans-serif`;
    layout.lines.forEach((line,i)=>ctx.fillText(line,x,centerY+(i-(layout.lines.length-1)/2)*layout.size*1.12));
  }
  function paintSign(ctx,w,h,text,ru=''){
    ctx.fillStyle='#fffdf0';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#9b824e';ctx.lineWidth=4;ctx.strokeRect(5,5,w-10,h-10);ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillStyle='#183f30';drawCenteredText(ctx,text,w/2,h*(ru?.34:.5),w-50,2,Math.round(h*(ru?.36:.43)),18);
    if(ru){ctx.fillStyle='#465842';drawCenteredText(ctx,ru,w/2,h*.79,w-50,1,Math.round(h*.26),18);}
  }
  function sign(text, width, height, x, y, z, parent, small = false) {
    const texture = canvasTexture(1024, Math.max(100, Math.round(1024 * height / width)), (ctx, w, h) => {
      paintSign(ctx,w,h,text);
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture,toneMapped:false }));mesh.userData.signText=text; mesh.position.set(x, y, z); parent.add(mesh); return mesh;
  }
  function plant(x, z, high = false) {
    const group = high ? createHangingPlant() : createFlower({ flowers: false, color: '#a77953', seed: x });
    group.position.set(x, high ? 3.3 : 0, z); group.scale.setScalar(high ? .9 : 1.1); scene.add(group);
    if (!high) { const shadow = floorShadow(1.6,1.5,.22); shadow.position.set(x,.013,z); scene.add(shadow); }
  }
  plant(-14, 11.6); plant(14, 11.6); plant(-8, 12.2, true); plant(-3.8, 12.2, true);
  const racks = {};
  function buildColdDepartment(zone) {
    const group=new THREE.Group();group.position.set(zone.x,0,zone.z);group.rotation.y=zone.rotation;scene.add(group);racks.cold=group;
    const frame=mat('#426457',.42,.22),inside=mat('#e5eeea',.56),white=mat('#dce8e2',.38,.1);
    // Water stands in the upright cabinet; ice cream occupies its own closed freezer.
    box(2.0,3.15,.16,inside,-1.5,1.63,-.28,group,true);
    for(const x of [-2.53,-.47])box(.12,3.25,.95,frame,x,1.63,.04,group,true);
    for(const y of [.4,1.28,2.16]){box(2.0,.12,1.03,frame,-1.5,y,.05,group,true);box(2.0,.06,.06,brass,-1.5,y+.015,.62,group);box(1.9,.025,.07,new THREE.MeshBasicMaterial({color:'#e7f7ee'}),-1.5,y+.08,-.1,group);}
    const door=new THREE.Mesh(new THREE.PlaneGeometry(1.87,2.78),new THREE.MeshPhysicalMaterial({color:'#dce9e7',transparent:true,opacity:.045,roughness:.1,clearcoat:1,depthWrite:false,envMapIntensity:.2}));door.position.set(-1.5,1.65,.65);group.add(door);
    const handle=roundedBox(.035,.32,.07,brass,.008);handle.position.set(-.7,1.6,.71);group.add(handle);
    const freezer=roundedBox(2.7,.52,1.12,white,.045);freezer.position.set(1.05,.36,.16);group.add(freezer);solidMeshes.push(freezer);
    box(2.72,.1,1.15,frame,1.05,.12,.16,group);
    box(2.46,.045,.98,mat('#dcece9',.7),1.05,.80,.16,group);
    box(2.7,.44,.07,white,1.05,.82,.71,group);box(2.7,.86,.07,white,1.05,1.02,-.39,group);
    for(const x of [-.29,2.39]){
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([x,.60,.71,x,.60,-.39,x,1.46,-.39,x,.60,.71,x,1.46,-.39,x,1.04,.71],3));g.computeVertexNormals();
      group.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:'#e0ece8',roughness:.4,side:THREE.DoubleSide})));
      const edge=box(.06,.055,1.18,frame,x,1.25,.16,group);edge.rotation.x=.36;
    }
    box(2.7,.055,.055,frame,1.05,1.04,.71,group);box(2.7,.055,.055,frame,1.05,1.46,-.39,group);
    for(let i=0;i<2;i++){
      const glass=new THREE.Mesh(new THREE.PlaneGeometry(1.27,1.18),new THREE.MeshPhysicalMaterial({color:'#e6f1ee',roughness:.08,transparent:true,opacity:.035,clearcoat:.35,depthWrite:false,side:THREE.DoubleSide,envMapIntensity:.06}));glass.rotation.x=-Math.PI/2+.36;glass.position.set(.395+i*1.31,1.25,.16);group.add(glass);
      const grip=roundedBox(.21,.028,.045,brass,.006);grip.position.set(.395+i*1.31,1.11,.57);group.add(grip);
    }
    const wire=mat('#d4e3df',.35,.22);
    for(let row=0;row<2;row++)for(let column=0;column<4;column++){
      const x=.1275+column*.615,z=row?-.10:.43,y=row?1.02:.84;
      for(const dx of [-.29,.29])box(.014,.15,.49,wire,x+dx,y,z,group);
      for(const dz of [-.245,.245])box(.58,.018,.014,wire,x,y+.075,z+dz,group);
      for(let n=0;n<6;n++)box(.012,.14,.012,wire,x-.25+n*.10,y,z+.245,group);
    }
    box(2.46,.018,.04,new THREE.MeshBasicMaterial({color:'#eefbff'}),1.05,1.39,-.32,group);
    sign('ЗАЙРМАГ',2.55,.28,1.05,1.91,-.28,group);
    const snow=canvasTexture(128,128,ctx=>{ctx.strokeStyle='#e1f1eb';ctx.lineWidth=5;ctx.lineCap='round';for(let i=0;i<6;i++){ctx.save();ctx.translate(64,64);ctx.rotate(i*Math.PI/3);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-45);ctx.moveTo(0,-27);ctx.lineTo(-11,-36);ctx.moveTo(0,-27);ctx.lineTo(11,-36);ctx.stroke();ctx.restore();}});
    const badge=new THREE.Mesh(new THREE.PlaneGeometry(.24,.24),new THREE.MeshBasicMaterial({map:snow,transparent:true,depthWrite:false}));badge.position.set(2.20,.15,.755);group.add(badge);
    const crown=roundedBox(zone.width+.25,.74,.17,frame,.04);crown.position.set(0,3.5,.05);group.add(crown);sign(zone.name,zone.width-.15,.46,0,3.51,.151,group).userData.department='cold';
    colliders.push({x0:zone.x-.55,x1:zone.x+.88,z0:zone.z-zone.width/2-.15,z1:zone.z+zone.width/2+.15});
    const shadow=floorShadow(zone.width+1,2.8,.20);shadow.position.set(zone.x+.2,.013,zone.z);shadow.rotation.z=zone.rotation;scene.add(shadow);
  }
  function buildChestDepartment(id,zone){
    const g=new THREE.Group();g.position.set(zone.x,0,zone.z);g.rotation.y=zone.rotation;scene.add(g);
    const body=mat('#e4eee7',.42,.08),edge=mat('#456e5c',.35,.2);
    box(3.3,.65,1.28,body,0,.42,0,g,true);box(3.34,.12,1.32,edge,0,.12,0,g);
    box(3.18,.055,1.18,mat('#cfe3df'),0,.79,0,g);
    for(const x of [-1.62,1.62])box(.055,.34,1.28,edge,x,.91,0,g);
    for(const z of [-.63,.63])box(3.3,.07,.055,edge,0,1.07,z,g);
    for(let i=0;i<2;i++){const pane=new THREE.Mesh(new THREE.PlaneGeometry(1.56,1.20),new THREE.MeshPhysicalMaterial({color:'#deeee6',transparent:true,opacity:.035,roughness:.1,depthWrite:false,side:THREE.DoubleSide}));pane.rotation.x=-Math.PI/2;pane.position.set((i-.5)*1.61,1.095,0);g.add(pane);box(.23,.035,.06,brass,(i-.5)*1.61,1.13,.47,g);}
    for(const x of [-1.17,-.39,.39,1.17])for(const z of [-.29,.29]){for(const dx of [-.37,.37])box(.012,.15,.52,edge,x+dx,.90,z,g);for(const dz of [-.26,.26])box(.74,.014,.012,edge,x,.975,z+dz,g);}
    box(3.15,.025,.05,new THREE.MeshBasicMaterial({color:'#edfff3'}),0,1.01,-.56,g);
    sign(zone.name,3.15,.30,0,1.47,-.59,g).userData.department=id;
    colliders.push({x0:zone.x-1.73,x1:zone.x+1.73,z0:zone.z-.70,z1:zone.z+.70});
  }
  function buildRack(id, zone) {
    if(zone.chest){buildChestDepartment(id,zone);return;}
    if(id==='cold'){buildColdDepartment(zone);return;}
    const group = new THREE.Group(); group.position.set(zone.x, 0, zone.z); group.rotation.y = zone.rotation; scene.add(group); racks[id] = group;
    const isFridge = ['dairy', 'cold', 'meat', 'frozen', 'ready'].includes(id),island=isDoubleSidedShelf(id);
    const frame = isFridge ? mat('#4b6560', .4, .35) : oak;
    box(zone.width, 3.15, .14, isFridge ? mat('#edf4e8') : mat('#e4cfaa'), 0, 1.62, -.28, group, true);
    box(.15, 3.25, island?1.80:.9, frame, -zone.width / 2, 1.62, island?-.28:.02, group, true); box(.15, 3.25, island?1.80:.9, frame, zone.width / 2, 1.62, island?-.28:.02, group, true);
    for (let y of [.4, 1.28, 2.16]) {
      box(zone.width, .12, island?1.80:1.05, frame, 0, y, island?-.28:.05, group, true);
      box(zone.width, .09, .06, brass, 0, y, .6, group);
      if(island)box(zone.width,.09,.06,brass,0,y,-1.16,group);
      if (isFridge) box(zone.width - .1, .025, .08, new THREE.MeshStandardMaterial({ color: '#fffbd6', emissive: '#fff5bb', emissiveIntensity: .8 }), 0, y + .08, -.05, group);
    }
    const crown = roundedBox(zone.width + .26, .78, island?.93:.17, isFridge ? mat('#31574b', .4, .18) : oak, .04); crown.position.set(0, 3.5, island?-.28:.05); group.add(crown);
    sign(zone.name, zone.width - .15, .46, 0, 3.51, island?.20:.151, group).userData.department=id;
    if(island){const back=sign(zone.name,zone.width-.15,.46,0,3.51,-.76,group);back.rotation.y=Math.PI;back.userData.department=id;}
    box(zone.width+.1,.22,island?1.80:1.0,isFridge?mat('#3b5c50',.48,.2):oak,0,.18,island?-.28:.03,group);
    for(const y of [.4,1.28,2.16]) {
      const rail=roundedBox(zone.width,.06,.07,brass,.012); rail.position.set(0,y+.018,.617);group.add(rail);
      if(island){const back=rail.clone();back.position.z=-1.177;group.add(back);}
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(zone.width-.18,.025), new THREE.MeshBasicMaterial({color:isFridge?'#e4eee7':'#ffdfa0'}));strip.position.set(0,y+.085,-.13);strip.rotation.x=-.6;group.add(strip);
    }
    if(id==='frozen'){const fishSign=sign('ЗАГАСНЫ ХӨЛДӨӨГЧ',zone.width-.5,.22,0,3.08,.16,group);fishSign.userData.fishFreezer=true;}
    if(id==='meat'){sign('ХӨРГӨСӨН МАХ',zone.width-.5,.22,0,3.08,.16,group);}
    if (isFridge) {
      const glassMaterial = new THREE.MeshPhysicalMaterial({color:'#d4e5dc',roughness:.09,metalness:.03,transparent:true,opacity:id==='meat'||id==='frozen'?.075:.045,depthWrite:false,clearcoat:1,clearcoatRoughness:.08});
      const doors=3,doorW=zone.width/doors;
      for(let i=0;i<doors;i++) {
        const x=-zone.width/2+doorW*(i+.5);
        if(id==='meat'||id==='frozen'){addFridgeDoor(group,id,x,1.63,.68,doorW-.04,2.81,i);continue;}
        const pane=new THREE.Mesh(new THREE.PlaneGeometry(doorW-.07,2.73),glassMaterial);pane.position.set(x,1.63,.64);group.add(pane);
        if(island){const back=pane.clone();back.position.z=-1.20;back.rotation.y=Math.PI;group.add(back);}
        if(id==='meat'||id==='frozen'){for(const dx of [-1,1])box(.055,2.81,.055,mat('#718e86',.28,.6),x+dx*(doorW-.04)/2,1.63,.68,group);for(const dy of [-1,1])box(doorW-.04,.055,.055,mat('#718e86',.28,.6),x,1.63+dy*1.39,.68,group);}
        if(i<doors-1)box(.028,2.84,.045,mat('#7f9585',.32,.65),x+doorW/2,1.64,.645,group);
        const gripX=x+doorW/2-.025,gripY=2.78;
        const handle=roundedBox(.022,.27,.028,mat('#c4d2cc',.25,.75),.006);handle.position.set(gripX,gripY,.735);group.add(handle);
        for(const dy of [-.12,.12])box(.024,.022,.085,mat('#c4d2cc',.25,.75),gripX,gripY+dy,.69,group);
        if(island){if(i<doors-1)box(.028,2.84,.045,mat('#7f9585',.32,.65),x+doorW/2,1.64,-1.205,group);const backHandle=handle.clone();backHandle.position.z=-1.295;group.add(backHandle);for(const dy of [-.12,.12])box(.024,.022,.085,mat('#c4d2cc',.25,.75),gripX,gripY+dy,-1.25,group);}
      }
    }
    const shadow=floorShadow(zone.width+1.1,island?3.4:2.6,.20);shadow.position.set(zone.x,.013,zone.z+(island?-.28:.25));shadow.rotation.z=zone.rotation;scene.add(shadow);
    colliders.push(rackFootprint(id,zone));
  }
  Object.entries(zones).forEach(([id, zone]) => { if (id !== 'packing'&&id!=='frozen-meat') buildRack(id, zone); });
  // Delivery counter, complete with a real place to return and pack the order.
  box(3.7, .92, 1.3, oak, STATION.x, .46, STATION.z, scene, true);
  const counterTop=roundedBox(3.95,.13,1.53,new THREE.MeshPhysicalMaterial({color:'#35564d',roughness:.57,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.3}),.055);counterTop.position.set(STATION.x,.98,STATION.z);scene.add(counterTop);solidMeshes.push(counterTop);
  box(3.7, .04, .04, brass, STATION.x, 1.055, STATION.z - .74);
  const counterPlaque=roundedBox(2.73,.39,.035,brass,.014);counterPlaque.position.set(STATION.x,.43,STATION.z-.724);scene.add(counterPlaque);
  const counterSign = sign('ЗАХИАЛГА БЭЛТГЭХ', 2.65, .31, STATION.x, .43, STATION.z - .752, scene, true); counterSign.rotation.y = Math.PI;
  counterSign.userData.department='packing';
  for (let i=0;i<3;i++) {
    const face=roundedBox(1.12,.68,.045,oak,.028);face.position.set(STATION.x-1.23+i*1.23,.48,STATION.z-.67);scene.add(face);
    const pull=roundedBox(.24,.025,.04,brass,.006);pull.position.set(STATION.x-1.23+i*1.23,.72,STATION.z-.706);scene.add(pull);
  }
  const counterShadow=floorShadow(4.9,2.8,.24);counterShadow.position.set(STATION.x,.013,STATION.z);scene.add(counterShadow);
  const flower=createFlower({flowers:true,color:'#e1d8bf'});flower.scale.setScalar(.76);flower.position.set(STATION.x-.92,1.055,STATION.z+.04);flower.rotation.y=.08;scene.add(flower);
  const flowerShadow=floorShadow(.65,.55,.18);flowerShadow.position.set(STATION.x-.92,1.06,STATION.z+.04);scene.add(flowerShadow);
  const stationBags=new THREE.Group();scene.add(stationBags);
  stationBags.position.set(STATION.x,1.055,STATION.z);
  let stationBagKey='';
  const tableTarget = box(3.9, 1.8, 1.5, new THREE.MeshBasicMaterial({ visible: false }), STATION.x, .9, STATION.z); tableTarget.userData.station = true; targets.push(tableTarget);
  colliders.push({ x0: STATION.x - 2, x1: STATION.x + 2, z0: STATION.z - .8, z1: STATION.z + .8 });
  // A separate closed container keeps rejected goods away from delivery bags.
  const wastePosition={x:STATION.x+2.8,z:STATION.z-1.5};
  const wasteMaterial=new THREE.MeshStandardMaterial({color:'#657b69',roughness:.66});
  const wasteLidMaterial=new THREE.MeshStandardMaterial({color:'#ac7654',roughness:.6});
  const wasteBody=roundedBox(.70,.82,.63,wasteMaterial,.05);wasteBody.position.set(wastePosition.x,.49,wastePosition.z);scene.add(wasteBody);
  const wasteLid=roundedBox(.80,.10,.73,wasteLidMaterial,.035);wasteLid.position.set(wastePosition.x,.94,wastePosition.z);scene.add(wasteLid);
  for(const dx of [-.24,.24]){const foot=box(.10,.09,.12,wasteMaterial,wastePosition.x+dx,.06,wastePosition.z+.19);foot.castShadow=true;}
  const wastePlaque=sign('МУУДСАН БАРАА',.59,.22,wastePosition.x,.58,wastePosition.z-.323,scene,true);wastePlaque.rotation.y=Math.PI;
  const wasteShadow=floorShadow(1.2,1.05,.2);wasteShadow.position.set(wastePosition.x,.014,wastePosition.z);scene.add(wasteShadow);
  const wasteTarget=box(.84,1.06,.78,new THREE.MeshBasicMaterial({visible:false}),wastePosition.x,.53,wastePosition.z);wasteTarget.userData.waste=true;targets.push(wasteTarget);
  colliders.push({x0:wastePosition.x-.44,x1:wastePosition.x+.44,z0:wastePosition.z-.41,z1:wastePosition.z+.41});
  const displays = [
    {x:-5.5,z:-4.6,title:'ХӨЛДӨӨСӨН МАХ',ids:G.PRODUCTS.filter(p=>departmentFor(p)==='frozen-meat').map(p=>p.id)}
  ];
  for(const display of displays) {
    const group=new THREE.Group();group.position.set(display.x,0,display.z);scene.add(group);
    // A closed freezer cabinet has stocked shelves and framed doors on both sides.
    const base=box(3.60,.22,1.38,mat('#d4e2da'),0,.15,0,group,true);solidMeshes.push(base);
    box(3.60,2.38,.10,mat('#e6eee8'),0,1.38,0,group,true);
    for(const x of [-1.78,1.78])box(.10,2.65,1.38,green,x,1.40,0,group,true);
    for(const y of [.43,1.20,1.97]){
      box(3.60,.09,1.38,mat('#adc5b8'),0,y,0,group,true);
      for(const z of [-.70,.70])box(3.60,.055,.055,brass,0,y+.02,z,group);
    }
    for(const side of [-1,1])for(let door=0;door<3;door++)addFridgeDoor(group,'frozen-meat',(door-1)*1.16,1.47,side*.74,1.13,2.35,door,side);
    box(3.72,.47,.16,green,0,2.82,0,group);
    sign(display.title,3.4,.31,0,2.83,.10,group).userData.department='frozen-meat';
    const back=sign(display.title,3.4,.31,0,2.83,-.10,group);back.rotation.y=Math.PI;back.userData.department='frozen-meat';
    colliders.push({x0:display.x-1.86,x1:display.x+1.86,z0:display.z-.78,z1:display.z+.78});
    const shadow=floorShadow(4.3,2.2,.23);shadow.position.set(display.x,.012,display.z);scene.add(shadow);
  }
  function photoPath(lot) { return photoRecord(lot)?.path || `assets/products/${lot.productId}.webp`; }
  let loadedPhotos = 0, failedPhotos = 0, firstLoadDone = false;
  const photoTotal = new Set(bridge.inventory().filter(lot => !lot.hidden).map(lot => photoRecord(lot)?.id || lot.productId)).size + environmentPaths.size + Object.keys(window.GroceryBagAssets||{}).length;
  function assetReady(ok) {
    needsRender=true; loadedPhotos++; if(!ok)failedPhotos++;
    window.dispatchEvent(new CustomEvent('grocery:loadprogress',{detail:{loaded:loadedPhotos,total:photoTotal,failed:failedPhotos}}));
  }
  function loadPhoto(lot) {
    const record = photoRecord(lot);
    const key = record?.id || lot.productId;
    if (textureCache.has(key)) return textureCache.get(key);
    const texture = loadProductTexture(record || { path: photoPath(lot) }, ok => {
      assetReady(ok);
    });
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    textureCache.set(key, texture); return texture;
  }
  const weave = canvasTexture(256, 128, ctx => {
    ctx.fillStyle = '#ad854d'; ctx.fillRect(0, 0, 256, 128);
    for (let y = 0; y < 128; y += 12) {
      ctx.fillStyle = y % 24 ? '#c8a16a' : '#b88f57'; ctx.fillRect(0, y, 256, 8);
      for (let x = 0; x < 256; x += 20) { ctx.fillStyle = '#8e693d'; ctx.fillRect(x + (y % 24 ? 8 : 0), y, 3, 12); }
    }
  });
  const wicker = new THREE.MeshStandardMaterial({ map: weave, color: '#c9a36d', roughness: .95 });
  function makeTray(category, width, parent) {
    const basket = category === 'bread'; const material = basket ? wicker : mat('#aa7d48');
    const depth = basket ? .66 : .79, lip = basket ? .09 : .13;
    box(width, .035, depth, material, 0, .017, .10, parent);
    for (const side of [-1, 1]) box(.035, lip, depth, material, side * width / 2, lip / 2, .10, parent);
    box(width, lip, .035, material, 0, lip / 2, .10 + depth / 2, parent);
    if (!basket) for (let i = 1; i < 3; i++) box(width - .04, .012, .012, mat('#75532e'), 0, i * lip / 3, .128 + depth / 2, parent);
  }
  const tagMaterials = new Map();
  function paintProductTag(ctx,w,h,lot){
    ctx.save();ctx.scale(w/1024,h/480);w=1024;h=480;
    const p=G.BY_ID[lot.productId],hints=bridge.russianHints?.();
    ctx.fillStyle='#fffef3';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#a59165';ctx.lineWidth=5;ctx.strokeRect(3,3,w-6,h-6);ctx.textAlign='center';ctx.textBaseline='middle';
    const secondary=hints?(G.BREAD_BY_ID[lot.variantId]?`${window.GroceryRussian.name(lot)} · ${window.GroceryRussian.name(p.id)}`:window.GroceryRussian.name(lot)):G.BREAD_BY_ID[lot.variantId]?p.name:'';
    ctx.fillStyle='#163d2a';drawCenteredText(ctx,G.lotName(lot),w/2,secondary?104:165,w-64,2,secondary?80:102,38);
    if(secondary){ctx.fillStyle='#3d5238';drawCenteredText(ctx,secondary,w/2,258,w-64,2,48,32);}
    ctx.strokeStyle='#cfbf96';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(26,318);ctx.lineTo(w-26,318);ctx.stroke();
    const price=Prices.quote(lot);ctx.fillStyle='#67522d';ctx.font='600 36px Arial,sans-serif';ctx.fillText(price.bulk?'1 кг':G.lotUnit(lot),w/2,341,w-40);
    if(price.sale){
      ctx.fillStyle='#ffe4a0';ctx.fillRect(6,365,w-12,109);ctx.fillStyle='#af3d31';ctx.fillRect(22,387,150,61);ctx.fillStyle='#fff7e8';ctx.font='700 44px Arial,sans-serif';ctx.fillText(`−${price.percent}%`,97,420,140);
      const old=Prices.money(price.regular);ctx.font='500 52px Arial,sans-serif';ctx.fillStyle='#726b60';ctx.fillText(old,350,420,266);const length=Math.min(266,ctx.measureText(old).width);ctx.strokeStyle='#847469';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(350-length/2,417);ctx.lineTo(350+length/2,417);ctx.stroke();
      ctx.fillStyle='#9e3028';ctx.font='800 84px Arial,sans-serif';ctx.fillText(Prices.money(price.price),760,418,440);
    }else{ctx.fillStyle='#214c36';ctx.font='800 84px Arial,sans-serif';ctx.fillText(Prices.money(price.price),w/2,418,w-60);}
    ctx.restore();
  }
  function saleHint(lot){const q=Prices.quote(lot);return q?.sale?`<small class="nearby-sale" data-learning><b>−${q.percent}%</b><del>${Prices.money(q.regular)}</del><strong>${Prices.money(q.price)}</strong></small>`:'';}
  function productTag(lot, width, parent, x, y, z) {
    const tagKey = `${G.lotName(lot)}:${lot.pack}`;
    let material = tagMaterials.get(tagKey);
    if (!material) {
    const tagWidth=window.innerWidth<=700?512:768;
    const texture = canvasTexture(tagWidth,tagWidth*480/1024,(ctx,w,h)=>paintProductTag(ctx,w,h,lot));
    material = new THREE.MeshBasicMaterial({ map:texture,toneMapped:false });material.userData.tagLot=lot;
    tagMaterials.set(tagKey, material);
    }
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(width, width * 480/1024), material); tag.position.set(x, y-width*.09, z+.015); tag.userData.lotId = lot.id; parent.add(tag); targets.push(tag);
  }
  const navigationLabels={'frozen-meat':'Хөлдөөсөн мах','frozen-dumplings':'Бууз, банш','frozen-bakery':'Хөлдөөсөн гурилан бүтээгдэхүүн','frozen-vegetables':'Хөлдөөсөн ногоо','pantry-2':'Хүнс, амтлагч',meat:'Мах, загас',dairy:'Сүү, өндөг',bread:'Талх',pantry:'Хүнс, цай',canned:'Лаазалсан хүнс, соус',frozen:'Хөлдөөсөн хүнс',cold:'Ус, зайрмаг',household:'Ахуйн бараа',drinks:'Ундаа, жүүс',sweets:'Амттан',alcohol:'Согтууруулах ундаа',produce:'Жимс, ногоо',ready:'Бэлэн хоол',packing:'Бэлтгэх ширээ'};
  // This is a view of the actual stocked store, rendered only when its contents
  // change. It shares geometry and positions with the walking view.
  const mapCamera=new THREE.OrthographicCamera(-18.5,18.5,15.03125,-15.03125,.1,100);
  mapCamera.position.set(0,38,24);mapCamera.lookAt(0,0,0);mapCamera.updateMatrixWorld();
  let mapRenderTarget=null,mapDirty=true;
  function mapPoint(x,z,y=.12){const p=new THREE.Vector3(x,y,z).project(mapCamera);return {left:`${(p.x+1)*50}%`,top:`${(1-p.y)*50}%`};}
  function positionMapPlayer(){Object.assign($('map-player').style,mapPoint(camera.position.x,camera.position.z));$('map-player').style.transform=`translate(-50%,-50%) rotate(${-yaw}rad)`;}
  function renderStoreMap(){
    positionMapPlayer();
    document.querySelectorAll('#map-dialog .map-zone').forEach(button=>{const zone=zones[button.dataset.mapZone];Object.assign(button.style,button.dataset.mapZone==='packing'?mapPoint(STATION.x,STATION.z,1):mapPoint(zone.x,zone.z,2.4));});
    if(!mapDirty)return;
    const preview=$('store-map-canvas'),width=preview.width,height=preview.height;
    mapRenderTarget ||= new THREE.WebGLRenderTarget(width,height,{depthBuffer:true});
    mapRenderTarget.texture.colorSpace=THREE.SRGBColorSpace;
    const previousTarget=renderer.getRenderTarget(),hidden=[],bounds=new THREE.Box3(),center=new THREE.Vector3();
    scene.updateMatrixWorld(true);
    scene.traverse(mesh=>{if(!mesh.isMesh||!mesh.visible)return;bounds.setFromObject(mesh);bounds.getCenter(center);if(bounds.max.y>4.4||Math.abs(center.z)>12.45||Math.abs(center.x)>15.65){hidden.push(mesh);mesh.visible=false;}});
    if(carryGroup?.visible){hidden.push(carryGroup);carryGroup.visible=false;}
    const shadowUpdate=renderer.shadowMap.needsUpdate;
    try{
      renderer.shadowMap.needsUpdate=false;renderer.setRenderTarget(mapRenderTarget);renderer.render(scene,mapCamera);
      const pixels=new Uint8Array(width*height*4);renderer.readRenderTargetPixels(mapRenderTarget,0,0,width,height,pixels);
      const ctx=preview.getContext('2d'),frame=ctx.createImageData(width,height),stride=width*4;
      for(let y=0;y<height;y++)frame.data.set(pixels.subarray((height-y-1)*stride,(height-y)*stride),y*stride);
      ctx.putImageData(frame,0,0);mapDirty=false;
    }finally{hidden.forEach(mesh=>{mesh.visible=true;});renderer.setRenderTarget(previousTarget);renderer.shadowMap.needsUpdate=shadowUpdate;needsRender=true;}
  }
  function updateNavigationHints(){
    const hints=bridge.russianHints?.(),ru=window.GroceryLanguage?.DEPARTMENTS||{};
    scene.traverse(mesh=>{
      const id=mesh.userData.department,texture=mesh.material?.map;if(!id||!texture?.image?.getContext)return;
      const c=texture.image,ctx=c.getContext('2d'),w=c.width,h=c.height;
      paintSign(ctx,w,h,mesh.userData.signText,hints?ru[id]||'':'');texture.needsUpdate=true;
    });
    tagMaterials.forEach(material=>{const c=material.map.image;paintProductTag(c.getContext('2d'),c.width,c.height,material.userData.tagLot);material.map.needsUpdate=true;});
    const mapProducts={'frozen-dumplings':'buuz','frozen-bakery':'mini-khuushuur','frozen-vegetables':'frozen-broccoli','frozen-meat':'goat-meat','pantry-2':'rolled-oats',meat:'chicken-thigh',dairy:'milk',bread:'white-bread',pantry:'rice',canned:'canned-tuna',frozen:'shrimp',cold:'icecream',household:'dish-soap',drinks:'fruit-juice',sweets:'milk-biscuits',alcohol:'beer-sengur',produce:'red-apple',ready:'mantuu'};
    document.querySelectorAll('#map-dialog .zone-links [data-destination]').forEach((button,i)=>{const id=button.dataset.destination,pid=mapProducts[id];button.innerHTML=`<span class="map-directory-number">${String(i+1).padStart(2,'0')}</span><span class="map-directory-photo" aria-hidden="true">${pid&&G.BY_ID[pid]?window.GroceryArt.product(pid):window.GroceryArt.icon('bag')}</span><span class="zone-label" data-learning>${navigationLabels[id]}${hints?`<small lang="ru">${ru[id]||''}</small>`:''}</span><span aria-hidden="true">→</span>`;});
    mapDirty=true;if($('map-dialog').open)renderStoreMap();
    currentZone='';lastNearby='';nearestTick=0;nearbyDirty=true;needsRender=true;
  }
  function disposeCarried(group){if(!group)return;const disposed=new Set();group.traverse(o=>{if(o.geometry&&!disposed.has(o.geometry)){disposed.add(o.geometry);o.geometry.dispose();}if(o.isInstancedMesh)o.dispose();const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>{if(m?.userData?.owned&&!disposed.has(m)){disposed.add(m);if(m.map?.userData?.owned&&!disposed.has(m.map)){disposed.add(m.map);m.map.dispose();}m.dispose();}});});}

  function setShelfFocus(value){const next=!!value&&!!transport();if(next===shelfFocus)return;shelfFocus=next;if(next){held.clear();navigation=null;clearPath();}document.body.classList.toggle('shelf-focus-mode',next);needsRender=true;nearbyDirty=true;nearestTick=0;}
  function positionCarrier(){if(!carryGroup)return;const c=CARRIERS[transport()];if(!c)return;const side=carrierPark*2;carryGroup.position.set(camera.position.x-Math.sin(yaw)*c.offset+Math.cos(yaw)*side,carrierLayout(transport(),window.innerWidth,window.innerHeight,0).baseY,camera.position.z-Math.cos(yaw)*c.offset-Math.sin(yaw)*side);carryGroup.rotation.set(0,yaw-.25*carrierPark,0);}
  function loadBagTexture(state){
    const key=`pouch:${state}`;if(textureCache.has(key))return textureCache.get(key);
    const record=window.GroceryBagAssets?.[state],texture=new THREE.Texture();texture.colorSpace=THREE.SRGBColorSpace;textureCache.set(key,texture);
    if(!record)return texture;
    queuedImage(key,window.FastAssets?.bags?.[state]?.path||record.path,20).then(image=>{texture.image=image;texture.needsUpdate=true;assetReady(true);},()=>assetReady(false));return texture;
  }
  function productInSlot(parent,lot,x,y,z,maxWidth,maxHeight,maxDepth){
    const holder=new THREE.Group();holder.position.set(x,y,z);parent.add(holder);let model;
    const bulk=G.isBulk(lot),texture=loadPhoto(lot),safe=window.GroceryBag.SAFE;
    const fit=()=>{if(!model)return;fitModelInside(model.group,maxWidth*(bulk?safe.width:1),maxHeight*(bulk?safe.height:1),maxDepth*(bulk?.6:1));if(bulk)model.group.position.y+=maxHeight*(1-safe.top-safe.height);holder.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;}});needsRender=true;};
    model=createProductModel(G.BY_ID[lot.productId],lot,texture,maxWidth,fit);holder.add(model.group);
    if(bulk){
      holder.add(createProducePouch(loadBagTexture('tied'),maxWidth,maxHeight,maxDepth));
      holder.add(createContactShadow(maxWidth*.92,maxDepth*.9));
    }
    fit();return holder;
  }
  function paperBag(parent,label,index,count,x,width,filled,sealed,lots){
    const group=new THREE.Group();group.position.x=x;parent.add(group);const depth=.48,height=.62;
    const owned=color=>{const m=new THREE.MeshBasicMaterial({color});m.userData.owned=true;return m;};
    // Four separate walls keep contents inside the opening; no tilted cartons.
    box(width,height,.025,owned('#c9a26a'),0,height/2,depth/2,group);
    box(width,height,.025,owned('#d8b67d'),0,height/2,-depth/2,group);
    for(const side of [-1,1])box(.025,height,depth,owned(side<0?'#b58d57':'#c8a16b'),side*width/2,height/2,0,group);
    box(width,.025,depth,owned('#a78050'),0,.012,0,group);
    const map=canvasTexture(384,220,(ctx,w,h)=>{ctx.fillStyle='#fff6df';ctx.fillRect(0,0,w,h);ctx.textAlign='center';ctx.fillStyle='#365340';ctx.font='bold 54px Georgia';ctx.fillText(`№ ${label.number}`,w/2,72,w-18);ctx.font='35px Arial';ctx.fillText(label.customer||'',w/2,133,w-18);ctx.font='25px Arial';ctx.fillText(`${index+1}/${count}`,w/2,183);});map.userData.owned=true;
    const m=new THREE.MeshBasicMaterial({map,toneMapped:false});m.userData.owned=true;const sticker=new THREE.Mesh(new THREE.PlaneGeometry(width*.82,.33),m);sticker.position.set(0,.33,-depth/2-.016);sticker.rotation.y=Math.PI;group.add(sticker);
    if(sealed){box(width+.035,.065,depth+.04,owned('#d5b175'),0,height+.028,0,group);box(width*.84,.05,.11,owned('#e4c58c'),0,height+.083,-.02,group);box(.10,.10,depth+.05,owned('#f2dfb4'),0,height+.06,0,group);}
    else if(filled){const cols=2,rows=Math.max(1,Math.ceil(lots.length/cols));lots.forEach((lot,i)=>productInSlot(group,lot,((i%cols)-.5)*width*.42,.37,(Math.floor(i/cols)-(rows-1)/2)*Math.min(.18,.32/rows),width*.39,.40,Math.min(.15,.33/rows)));}
    return group;
  }
  function updateStationBags(){
    const label=bridge.label?.()||{},stage=bridge.packingStage?.()||'collecting',lots=bridge.selected?.()||[],delivered=bridge.delivered?.();
    const key=JSON.stringify([label.number,label.customer,label.bags,stage,delivered,lots.map(l=>l.id)]);if(key===stationBagKey)return;stationBagKey=key;
    disposeCarried(stationBags);stationBags.clear();
    if(!delivered){const count=Math.max(1,label.bags||1),visible=Math.min(5,count),width=Math.min(.82,3.45/visible-.08);for(let i=0;i<visible;i++)paperBag(stationBags,label,i,count,(i-(visible-1)/2)*(width+.09),width,stage==='packed',stage==='sealed',stage==='packed'?lots.filter((_,j)=>j%visible===i):[]);}
    needsRender=true;
  }
  function updateCarrier(){
    const kind=bridge.transport?.()||'',label=bridge.label?.()||{},stage=bridge.packingStage?.()||'collecting',key=kind?`${kind}:${label.number}:${label.customer}:${label.bags}:${stage}`:'';
    document.body.dataset.carrier=kind;
    if(kind!==lastTransport){setShelfFocus(false);carrierPark=0;pitch=carryingPitch();camera.rotation.set(pitch,yaw,0,'YXZ');lastTransport=kind;needsRender=true;}
    if(key!==carryKey){
      if(carryGroup){scene.remove(carryGroup);disposeCarried(carryGroup);}carryGroup=null;carryContents=null;carryKey=key;carryItemsKey='';
      if(kind){
        const asset=kind==='cart'?createShoppingCart():createShoppingBasket();
        carryGroup=asset.group;carryContents=asset.contents;carryPickBounds.setFromObject(carryGroup).expandByScalar(.12);scene.add(carryGroup);carryGroup.scale.set(.78,1,.9);positionCarrier();
      }
      renderer.shadowMap.needsUpdate=true;
      needsRender=true;
    }
    updateStationBags();if(!carryContents)return;
    const lots=bridge.carried?.()||[],layout=carrierLayout(kind,window.innerWidth,window.innerHeight,lots.length),itemsKey=lots.map(l=>l.id).join('|')+':'+layout.portrait;if(itemsKey===carryItemsKey)return;carryItemsKey=itemsKey;disposeCarried(carryContents);carryContents.clear();
    lots.forEach((lot,i)=>{const slot=layout.slots[i];productInSlot(carryContents,lot,slot.x,slot.y,slot.z,slot.width,slot.height,slot.depth);});needsRender=true;renderer.shadowMap.needsUpdate=true;
  }

  function stockFacing(lot,texture,spacing,produce){return createStockFacing(lot,texture,spacing,produce,()=>{needsRender=true;});}
  function refrigeratedModel(lot,texture,width,height,depth,facing=false){
    const holder=new THREE.Group();let model;
    const fit=()=>{if(!model)return;fitModelInside(model.group,width,height,depth,false);needsRender=true;};
    model=facing?createStockFacing(lot,texture,width,false,fit):createProductModel(G.BY_ID[lot.productId],lot,texture,width,fit);
    holder.add(model.group);fit();return {group:holder,front:model.front};
  }
  function buildProducts() {
    const disposedMaterials = new Set();
    productGroup.traverse(o => {
      if (!o.isMesh) return;
      o.geometry.dispose();if(o.isInstancedMesh)o.dispose();
      const list = Array.isArray(o.material) ? o.material : [o.material];
      list.forEach(material => { if (!material || disposedMaterials.has(material)) return; disposedMaterials.add(material); if (material.map?.userData?.owned) material.map.dispose(); if (material.userData?.owned) material.dispose(); });
    });
    scene.remove(productGroup); productGroup = new THREE.Group(); scene.add(productGroup);
    targets.splice(0,targets.length,tableTarget,wasteTarget); rows.clear();
    const groups = {};
    bridge.inventory().filter(lot => !lot.hidden).forEach(lot => {const id=departmentFor(G.BY_ID[lot.productId]);if(id==='frozen-meat')return;(groups[id] ||= []).push(lot);});
    for (const [category, lots] of Object.entries(groups)) {
      const zone = zones[category]; if (!zone) continue;
      let shelfGroup = new THREE.Group(); shelfGroup.position.set(zone.x, 0, zone.z); shelfGroup.rotation.y = zone.rotation; productGroup.add(shelfGroup);
      lots.sort((a, b) => (a.variantId || a.productId).localeCompare(b.variantId || b.productId) || a.batch.localeCompare(b.batch));
      if(zone.chest){
        const layout=chestLayout(lots);
        for(const bin of layout.bins){
          const copies=Math.max(3,bin.family.lots.length);
          for(let n=0;n<copies;n++){
            const lot=bin.family.lots[n%bin.family.lots.length],slot=new THREE.Group();slot.position.set(bin.x,bin.y+n*.014,bin.z);shelfGroup.add(slot);
            const texture=loadPhoto(lot),model=createFreezerPack(G.BY_ID[lot.productId],lot,texture,()=>{needsRender=true;});slot.add(model.group);
            const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();if(!texture.userData.presentation)texture.userData.callbacks.push(register);
            const position=new THREE.Vector3();model.front.getWorldPosition(position);const row=rows.get(lot.id);if(row){row.groups.push(slot);row.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
          }
        }
        for(const label of layout.labels)productTag(label.family.lots[0],label.width,shelfGroup,label.x,label.y,label.z);
        continue;
      }
      if(category==='cold'){
        const water=lots.filter(l=>l.productId!=='icecream'),icecream=lots.filter(l=>l.productId==='icecream');
        function coldItem(lot,x,y,z,width,flat=false){
          const slot=new THREE.Group();slot.position.set(x,y,z);if(flat)slot.rotation.x=-Math.PI/2;shelfGroup.add(slot);
          const texture=loadPhoto(lot),model=createProductModel(G.BY_ID[lot.productId],lot,texture,width,()=>{needsRender=true;});if(flat)model.group.scale.setScalar(.82);slot.add(model.group);
          if(!flat)slot.add(createContactShadow(.65,.4));
          const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();if(!texture.userData.presentation)texture.userData.callbacks.push(register);
          const position=new THREE.Vector3();model.front.getWorldPosition(position);const row=rows.get(lot.id);if(row){row.groups.push(slot);row.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
        }
        if(water.length)for(let i=0;i<6;i++){
          const lot=water[i%water.length],x=-1.5+(i%2? .47:-.47),y=.465+Math.floor(i/2)*.88;coldItem(lot,x,y,.4,.78);productTag(lot,.74,shelfGroup,x,y-.07,.69);
        }
        for(const bin of icecreamBins(icecream)){
          const copies=Math.max(3,bin.family.lots.length);
          for(let n=0;n<copies;n++){
            const lot=bin.family.lots[n%bin.family.lots.length],slot=new THREE.Group();slot.position.set(bin.x+(n%2? .045:-.045),bin.y+n*.012,bin.z-(Math.floor(n/2))*.035);shelfGroup.add(slot);
            const model=createIcecreamFacing(G.BY_ID[lot.productId],lot,loadPhoto(lot),()=>{needsRender=true;});slot.add(model.group);
            const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();const texture=loadPhoto(lot);if(!texture.userData.presentation)texture.userData.callbacks.push(register);
            const position=new THREE.Vector3();model.front.getWorldPosition(position);const row=rows.get(lot.id);if(row){row.groups.push(slot);row.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
          }
          productTag(bin.family.lots[0],.57,shelfGroup,bin.x,bin.row?.23:.51,.757);
        }
        continue;
      }
      const pages=shelfPages(lots,zone.width);if(category==='frozen')pages.forEach(page=>{page.families=sortFrozenFamilies(page.families);});
      pages.forEach(({families,columns,spacing},pageIndex)=>{
        const shelfId=pageIndex?`${category}-${pageIndex+1}`:category,shelfZone=zones[shelfId];if(!shelfZone)throw new Error(`No physical shelf for ${category} page${pageIndex+1}`);
        shelfSides(shelfId,shelfZone).forEach(pose=>{
        const faceGroup=new THREE.Group();faceGroup.position.set(pose.x,0,pose.z);faceGroup.rotation.y=pose.rotation;productGroup.add(faceGroup);
        const slots=Array.from({length:columns*3},(_,index)=>families[index%families.length]);
        slots.forEach((family,index)=>{
          const column=index%columns,row=Math.floor(index/columns),x=-.5*(columns-1)*spacing+column*spacing,y=.465+row*.88;
          const tray=new THREE.Group();tray.position.set(x,y,.12);faceGroup.add(tray);
          const representative=family.lots.find(l=>!G.isUnfit(l))||family.lots[0];
          if(['bread','produce'].includes(category)||G.isBulk(representative))makeTray(category,spacing*.94,tray);
          if(category==='produce'){
            const cells=produceSlots(family.lots,spacing);
            for(const lot of family.lots){
              const slot=new THREE.Group();slot.position.set(0,.04,.12);tray.add(slot);
              const texture=loadPhoto(lot),model=createProduceBatch(lot,texture,cells.filter(c=>c.lot.id===lot.id),()=>{needsRender=true;});slot.add(model.group);
              const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();if(!texture.userData.presentation)texture.userData.callbacks.push(register);
              const position=new THREE.Vector3();model.front.getWorldPosition(position);const row=rows.get(lot.id);if(row){row.groups.push(slot);row.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
            }
          }else family.lots.forEach((lot,lotIndex)=>{
            const slot=new THREE.Group(),p=G.BY_ID[lot.productId],many=family.lots.length>1;
            slot.position.set(many?(lotIndex%2?1:-1)*spacing*.14:0,0,many?-Math.floor(lotIndex/2)*.13:0);tray.add(slot);
            const texture=loadPhoto(lot),cellWidth=spacing*(many?.69:1),refrigerated=['meat','frozen'].includes(category),model=refrigerated?refrigeratedModel(lot,texture,cellWidth*.93,.69,.34):refrigeratedModel(lot,texture,cellWidth*.93,.69,.40,category==='sweets');
            model.group.position.set(0,['produce','bread'].includes(category)?.04:.012,.12);slot.add(model.group);
            const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();if(!texture.userData.presentation)texture.userData.callbacks.push(register);
            const position=new THREE.Vector3();model.front.getWorldPosition(position);const previous=rows.get(lot.id);if(previous){previous.groups.push(slot);previous.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
          });
          tray.add(createContactShadow(Math.min(.82,spacing*.93),category==='produce'?.60:.42));
          productTag(representative,Math.min(spacing*.96,1.0),faceGroup,x,y-.07,.68);
        });
        });
      });
    }
    for(const display of displays) {
      const choices=display.ids.map(id=>bridge.inventory().find(l=>l.productId===id&&!l.hidden&&!G.isUnfit(l))).filter(Boolean);
      if(!choices.length)continue;
      for(let side=0;side<2;side++)for(let i=0;i<9;i++){
        const lot=choices[(i+side*2)%choices.length],tier=Math.floor(i/3),slot=new THREE.Group();
        slot.position.set(display.x+(i%3-1)*1.12,.48+tier*.77,display.z+(side?-.42:.42));slot.rotation.y=side?Math.PI:0;productGroup.add(slot);
        const texture=loadPhoto(lot),model=refrigeratedModel(lot,texture,1.02,.63,.40,true);slot.add(model.group);slot.add(createContactShadow(.85,.37));
        productTag(lot,1.0,slot,0,-.06,.30);
        const register=()=>model.group.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.lotId&&!targets.includes(mesh))targets.push(mesh);});register();if(!texture.userData.presentation)texture.userData.callbacks.push(register);
        const position=new THREE.Vector3();model.front.getWorldPosition(position);const row=rows.get(lot.id);if(row){row.groups.push(slot);row.positions.push(position);}else rows.set(lot.id,{lot,group:slot,groups:[slot],position,positions:[position]});
      }
    }
    needsRender = true; nearestTick = 0; updateStock();
  }
  function updateStock() {
    mapDirty=true;
    for (const row of rows.values()) row.groups.forEach(group => { group.visible = bridge.count(row.lot.id) < row.lot.stock; });
    renderer.shadowMap.needsUpdate = true; needsRender = true; nearestTick = 0;
  }
  const transport=()=>bridge.transport?.()||'';
  function isFree(x,z){return circleFree(x,z,transport()==='cart'?1.50:transport()==='basket'?1.36:.32,colliders);}
  function rotate(angle){setShelfFocus(false);const p=turnPose({x:camera.position.x,z:camera.position.z,yaw},angle,transport(),colliders);camera.position.x=p.x;camera.position.z=p.z;yaw=p.yaw;needsRender=true;nearestTick=0;}
  function move(dx, dz) {
    setShelfFocus(false);
    const p=movePose({x:camera.position.x,z:camera.position.z,yaw},dx,dz,transport(),colliders);camera.position.x=p.x;camera.position.z=p.z;
    needsRender = true;
  }
  function planPath(goalX, goalZ) {
    const size = .45, originX = -14.85, originZ = -11.7, nx = 67, nz = 53;
    const toCell = (x, z) => [Math.max(0, Math.min(nx - 1, Math.round((x - originX) / size))), Math.max(0, Math.min(nz - 1, Math.round((z - originZ) / size)))];
    const world = (x, z) => [originX + x * size, originZ + z * size];
    const prefix=[];let ax=camera.position.x,az=camera.position.z;
    if(!isFree(ax,az)){
      let found=false;
      for(let distance=.15;distance<=1.95&&!found;distance+=.15)for(const angle of [yaw+Math.PI,yaw-Math.PI/2,yaw+Math.PI/2,yaw]){const x=ax-Math.sin(angle)*distance,z=az-Math.cos(angle)*distance,p=movePose({x:ax,z:az,yaw},x-ax,z-az,transport(),colliders);if(Math.hypot(p.x-x,p.z-z)<.001&&isFree(x,z)){prefix.push([x,z,yaw]);ax=x;az=z;found=true;break;}}
      if(!found)return null;
    }
    function nearestFree(x,z){const [cx,cz]=toCell(x,z),candidates=[];for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++){const ix=cx+dx,iz=cz+dz;if(ix<0||ix>=nx||iz<0||iz>=nz)continue;const [wx,wz]=world(ix,iz);if(!isFree(wx,wz))continue;const steps=Math.max(1,Math.ceil(Math.hypot(wx-x,wz-z)/.06));if(Array.from({length:steps+1},(_,i)=>isFree(x+(wx-x)*i/steps,z+(wz-z)*i/steps)).every(Boolean))candidates.push({cell:[ix,iz],distance:Math.hypot(wx-x,wz-z)});}return candidates.sort((a,b)=>a.distance-b.distance)[0]?.cell;}
    const startCell=nearestFree(ax,az),endCell=nearestFree(goalX,goalZ);if(!startCell||!endCell)return null;
    const [sx,sz]=startCell,[gx,gz]=endCell;
    const start = sz * nx + sx, end = gz * nx + gx;
    const queue = [start], parent = new Map([[start, -1]]);
    for (let q = 0; q < queue.length; q++) {
      const id = queue[q]; if (id === end) break;
      const cx = id % nx, cz = Math.floor(id / nx);
      for (const [dx, dz] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) {
        const x = cx + dx, z = cz + dz, next = z * nx + x;
        if (x < 0 || x >= nx || z < 0 || z >= nz || parent.has(next) || !isFree(...world(x, z))) continue;
        parent.set(next, id); queue.push(next);
      }
    }
    if (!parent.has(end)) return null;
    const path = []; let id = end;
    while (id !== start) { path.push(world(id % nx, Math.floor(id / nx))); id = parent.get(id); }
    path.reverse();path.unshift(world(sx,sz));path.push([goalX,goalZ]);return [...prefix,...path];
  }
  const pathGeometry = new THREE.CylinderGeometry(.055, .055, .012, 12);
  const pathMaterial = new THREE.MeshBasicMaterial({ color: '#f5d99a' });
  function clearPath() { pathGroup.clear(); needsRender = true; }
  function navigate(id) {
    setShelfFocus(false);
    const zone = zones[id]; if (!zone) return;
    const path=planPath(...zone.to);if(!path){setHint(window.GroceryLanguage?.isRussian()?'Отъедьте немного от полки и выберите отдел ещё раз.':'Тавиураас бага зэрэг холдоод хэсгээ дахин сонгоорой.');return;}
    clearPath();
    navigation = { path, index: 0, yaw: zone.yaw, pitch:zone.pitch, id };
    path.forEach(([x, z], i) => { if (i % 2) return; const marker = new THREE.Mesh(pathGeometry, pathMaterial); marker.position.set(x, .018, z); marker.userData.pathIndex = i; pathGroup.add(marker); });
    setHint(`${zone.name} рүү явж байна…`);
    held.clear(); needsRender = true;
  }
  function turnTowards(target, dt) {
    const diff = Math.atan2(Math.sin(target - yaw), Math.cos(target - yaw)); rotate(diff * Math.min(1, dt * 7));
  }
  function setHint(text){const next=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(text):text;if($('world-hint').textContent!==next)$('world-hint').textContent=next;}
  function hitAt(point) {
    raycaster.setFromCamera(point, camera); raycaster.far = 3.55;
    const hit=raycaster.intersectObjects([...targets,...fridgeDoors.flatMap(d=>d.isOpen?[d.handle]:[d.pane,d.handle])].filter(t=>{if(!t.parent)return false;for(let p=t;p;p=p.parent)if(!p.visible)return false;return true;}),false)[0];
    if (!hit) return null;
    if(hit.object.userData.fridgeDoor!==undefined)return {doorId:hit.object.userData.fridgeDoor,distance:hit.distance};
    if (hit.object.userData.waste) return { waste: true, distance: hit.distance };
    if (hit.object.userData.station) return { station: true, distance: hit.distance };
    const blockers = raycaster.intersectObjects(solidMeshes, false);
    if (blockers[0] && blockers[0].distance < hit.distance - .08) return null;
    return { lotId: hit.object.userData.lotId, distance: hit.distance, carrierOverlap:carrierOccludesRay(raycaster.ray,carryGroup,carryPickBounds) };
  }
  function updateNearby() {
    const position = camera.position;
    const station = Math.hypot(position.x - STATION.x, position.z - (STATION.z - .4)) < 2.8;
    if (station !== nearStation) { nearStation = station; bridge.atStation(station); }
    let nearestZone = station ? 'packing' : Object.keys(zones).filter(id => id !== 'packing').sort((a, b) => Math.hypot(position.x - zones[a].to[0], position.z - zones[a].to[1]) - Math.hypot(position.x - zones[b].to[0], position.z - zones[b].to[1]))[0];
    if (currentZone !== nearestZone) { currentZone = nearestZone; $('location-name').innerHTML = `<span data-learning>${zones[nearestZone].name}</span>${bridge.russianHints?.()?`<small class="department-ru" lang="ru">${window.GroceryLanguage?.DEPARTMENTS[nearestZone]||''}</small>`:''}`; }
    const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    const candidates = [...rows.values()].filter(row => row.group.visible).map(row => { const closest = row.positions.map(point => ({ distance: Math.hypot(point.x - position.x, point.z - position.z), dot: new THREE.Vector3(point.x - position.x, 0, point.z - position.z).normalize().dot(forward) })).filter(item => item.dot > .18).sort((a, b) => a.distance - b.distance)[0]; return closest ? { ...row, ...closest } : null; }).filter(row => row && row.distance < 3.55).sort((a, b) => a.distance - b.distance);
    const showDepartment=!station&&candidates.some(row=>row.dot>.3&&row.distance<(departmentVisible?3.25:2.75));
    if(showDepartment!==departmentVisible){departmentVisible=showDepartment;document.querySelector('.location-plaque').hidden=!showDepartment;}
    const near=[],seenFamilies=new Set();for(const row of candidates){const key=row.lot.variantId||row.lot.productId;if(seenFamilies.has(key))continue;seenFamilies.add(key);near.push(row);if(near.length===10)break;}
    focusProductDetails(near.map(({lot})=>photoRecord(lot)?.id||lot.productId));
    for(const {lot} of near){assetQueue.promote('product:'+(photoRecord(lot)?.id||lot.productId),50);loadPhoto(lot).userData.requestDetail?.();}
    const key = near.map(row => row.lot.id+':'+(fridgeForLot(row.lot.id)?.isOpen||false)).join();
    if (key !== lastNearby) {
      lastNearby = key;
      $('nearby-products').innerHTML = near.map(({ lot }) => `<button data-world-lot="${lot.id}">${window.GroceryArt.product(lot.productId,'',lot.pack,G.photoKey(lot))}<span><span data-learning>${G.lotName(lot)}</span>${bridge.russianHints?.()?`<small class="nearby-ru" lang="ru">${window.GroceryRussian.name(lot)}${G.BREAD_BY_ID[lot.variantId]?' · '+window.GroceryRussian.name(lot.productId):''}</small>`:''}<small>${G.isBulk(lot)?'Задгай · ':G.BY_ID[lot.productId].category==='produce'?'Савласан · ':''}${G.lotUnit(lot)}</small>${saleHint(lot)}</span><span class="nearby-arrow">↗</span></button>`).join('');
      $('nearby-panel').hidden = !near.length;
    }
    const toggleLabel=window.GroceryLanguage?.isRussian()?'Рядом с вами':'Ойр байгаа бараа',nearbyCount=$('nearby-products').children.length;
    const toggleKey=[nearestZone,nearbyCount,nearbyExpanded,bridge.russianHints?.(),toggleLabel].join('|');
    if($('nearby-toggle').dataset.contentKey!==toggleKey){$('nearby-toggle').dataset.contentKey=toggleKey;$('nearby-toggle').innerHTML=`<span class="nearby-standard">${toggleLabel} · ${nearbyCount}</span><span class="nearby-place"><strong data-learning>${zones[nearestZone].name}</strong>${bridge.russianHints?.()?`<small lang="ru">${window.GroceryLanguage?.DEPARTMENTS[nearestZone]||''}</small>`:''}</span><span class="nearby-caret" aria-hidden="true">${nearbyExpanded?'⌃':'⌄'}</span>`;}
    let target = hitAt(mousePoint) || hitAt(new THREE.Vector2(0, 0));
    if(target?.lotId){const door=fridgeForLot(target.lotId);if(door&&!door.isOpen)target={doorId:door.id,distance:target.distance};}
    currentTarget = target;

    const looseProduce=target?.lotId&&G.isBulk(rows.get(target.lotId).lot)&&G.BY_ID[rows.get(target.lotId).lot.productId].category==='produce';
    // A stable shelf-level hint avoids flickering as the aim crosses adjacent tags.
    const priceHelp=!navigation&&target?.doorId===undefined&&!target?.station&&!target?.waste&&near.some(row=>{const door=fridgeForLot(row.lot.id);return !door||door.isOpen;});
    $('world-hint').classList.toggle('is-price-help',priceHelp);
    if(!navigation)setHint(target?.waste?(window.GroceryLanguage?.isRussian()?'Контейнер для брака · нажмите, чтобы открыть.':'Муудсан барааны сав · дарж нээгээрэй.'):target?.doorId!==undefined?(window.GroceryLanguage?.isRussian()?'Откройте холодильник, затем выберите упаковку.':'Хөргөгчөө нээгээд бараагаа сонгоорой.'):target?.station?'Бэлтгэх ширээ · дарж уутаа шалгаарай':priceHelp?(window.GroceryLanguage?.isRussian()?'Нажмите на ценник, чтобы рассмотреть товар крупнее.':'Барааг томруулж харахын тулд үнийн шошгон дээр дараарай.'):target?.lotId?`${G.lotName(rows.get(target.lotId).lot)} · ${looseProduce?'гадна байдлыг нь ажиглаарай':'дарж шошгыг нь харна уу'}`:'Тавиурт ойртож, бараан дээр дараарай.');
    const ru=window.GroceryLanguage?.isRussian(),carrierKind=transport();
    $('world-prompt').classList.toggle('has-context',!!(navigation||shelfFocus||target?.station||target?.waste||target?.doorId!==undefined));
    if(shelfFocus)setHint(ru?(carrierKind==='cart'?'Тележка оставлена рядом. Вы осматриваете полку.':'Корзина оставлена рядом. Вы осматриваете полку.'):(carrierKind==='cart'?'Тэрэг хажууд байна. Тавиурын барааг үзээрэй.':'Сагс хажууд байна. Тавиурын барааг үзээрэй.'));
    const canFocusShelf=!!carrierKind&&near.some(row=>{const door=fridgeForLot(row.lot.id);return !door||door.isOpen;})&&target?.doorId===undefined&&!target?.waste&&!target?.station;
    $('interact-button').hidden = !target&&!shelfFocus&&!canFocusShelf;
    const action=target?.waste?'Муудсан барааны сав':target?.doorId!==undefined?(fridgeDoors[target.doorId].opening?(window.GroceryLanguage?.isRussian()?'Закрыть холодильник':'Хөргөгчийг хаах'):(window.GroceryLanguage?.isRussian()?'Открыть холодильник':'Хөргөгчийг нээх')):target?.station?'Уутаа бэлтгэх':looseProduce?'Гадна байдал харах':'Шошго харах';const translated=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(action):action;const focusAction=shelfFocus?(ru?(carrierKind==='cart'?'Взять тележку':'Взять корзину'):(carrierKind==='cart'?'Тэргээ авах':'Сагсаа авах')):canFocusShelf?(ru?'Осмотреть полку':'Тавиурыг үзэх'):translated;if($('interact-button').textContent!==focusAction)$('interact-button').textContent=focusAction;
    canvas.classList.toggle('can-interact', !!target);
    positionMapPlayer();
  }
  function interact(target) {
    if (!target) return;
    if(target.lotId&&target.carrierOverlap)setShelfFocus(true);
    if(target.station||target.waste)setShelfFocus(false);
    held.clear(); navigation = null; clearPath();setNearbyExpanded(false);
    if(target.doorId!==undefined){fridgeDoors[target.doorId].toggle();lastNearby='';needsRender=true;nearbyDirty=true;return;}
    const door=target.lotId&&fridgeForLot(target.lotId);if(door&&!door.isOpen){door.open();lastNearby='';needsRender=true;nearbyDirty=true;return;}
    if (target.waste) bridge.openWaste(); else if (target.station) bridge.openPacking(); else bridge.inspect(target.lotId);
  }
  let pointer = null;
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0 || pointer) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, lastY: event.clientY, moved: false };
    canvas.setPointerCapture(event.pointerId); canvas.focus({ preventScroll: true });
  });
  canvas.addEventListener('pointermove', event => {
    mousePoint.set(event.clientX / window.innerWidth * 2 - 1, -event.clientY / window.innerHeight * 2 + 1);
    if (!pointer || pointer.id !== event.pointerId) { nearestTick = 0; return; }
    if (Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) > 5) pointer.moved = true;
    if (pointer.moved) { navigation = null; clearPath(); rotate(-(event.clientX - pointer.lastX) * .0042); pitch -= (event.clientY - pointer.lastY) * .0032; pitch = Math.max(-.8, Math.min(.7, pitch)); needsRender = true; nearestTick = 0; }
    pointer.lastX = event.clientX; pointer.lastY = event.clientY;
  });
  canvas.addEventListener('pointerup', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    if (!pointer.moved) { rayPoint.set(event.clientX / window.innerWidth * 2 - 1, -event.clientY / window.innerHeight * 2 + 1); interact(hitAt(rayPoint)); }
    pointer = null;
  });
  const cancelLook = event => { if (pointer?.id === event.pointerId) pointer = null; };
  canvas.addEventListener('pointercancel', cancelLook);
  canvas.addEventListener('lostpointercapture', cancelLook);
  window.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || !window.GroceryInput.gameKey(event)) return;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) { event.preventDefault(); held.add(event.code); navigation = null; clearPath(); }
    if (event.code === 'KeyE' || event.code === 'Enter' && document.activeElement === canvas) { event.preventDefault(); interact(currentTarget); }
  });
  window.addEventListener('keyup', event => held.delete(event.code));
  const releaseControls = () => { held.clear(); walkPointers.clear(); pointer = null; };
  window.addEventListener('grocery:releasecontrols',releaseControls);
  window.addEventListener('blur', releaseControls);
  document.addEventListener('visibilitychange', () => { releaseControls(); if (!document.hidden) { lastTick = performance.now(); needsRender = true; } });
  canvas.addEventListener('webglcontextrestored', () => { renderer.shadowMap.needsUpdate = true; needsRender = true; });
  document.querySelectorAll('[data-walk]').forEach(button => {
    const code = button.dataset.walk;
    button.addEventListener('pointerdown', event => { if (event.button !== 0 || walkPointers.has(code)) return; event.preventDefault(); walkPointers.set(code, { id: event.pointerId, at: performance.now() }); button.setPointerCapture(event.pointerId); held.add(code); navigation = null; clearPath(); });
    const up = event => { const active = walkPointers.get(code); if (active?.id !== event.pointerId) return; walkPointers.delete(code); held.delete(code); if (performance.now() - active.at < 130) { const step = .38; if (code === 'ArrowLeft') rotate(.18); else if (code === 'ArrowRight') rotate(-.18); else { const forward = code === 'KeyW' ? 1 : code === 'KeyS' ? -1 : 0; const side = code === 'KeyD' ? 1 : code === 'KeyA' ? -1 : 0; move((-Math.sin(yaw) * forward + Math.cos(yaw) * side) * step, (-Math.cos(yaw) * forward - Math.sin(yaw) * side) * step); } needsRender = true; nearestTick = 0; } };
    const cancel = event => { if (walkPointers.get(code)?.id === event.pointerId) { walkPointers.delete(code); held.delete(code); } };
    button.addEventListener('pointerup', up); button.addEventListener('pointercancel', cancel); button.addEventListener('lostpointercapture', cancel);
    button.addEventListener('keydown', event => { if (window.GroceryInput.gameKey(event)&&(event.code === 'Space' || event.code === 'Enter')) { held.add(code); event.preventDefault(); } });
    button.addEventListener('keyup', event => { if (event.code === 'Space' || event.code === 'Enter') held.delete(code); });
  });
  $('nearby-toggle').addEventListener('click',()=>{setNearbyExpanded(!nearbyExpanded);nearestTick=0;needsRender=true;});
  $('nearby-products').addEventListener('click', event => { const button = event.target.closest('[data-world-lot]'); if (button && rows.has(button.dataset.worldLot)) interact({ lotId: button.dataset.worldLot }); });
  $('interact-button').addEventListener('click',()=>{if(shelfFocus)setShelfFocus(false);else if(transport()&&currentTarget?.doorId===undefined&&!currentTarget?.station&&!currentTarget?.waste)setShelfFocus(true);else interact(currentTarget);});
  $('map-button').addEventListener('click',()=>requestAnimationFrame(renderStoreMap));
  document.querySelectorAll('[data-destination]').forEach(button => button.addEventListener('click', () => { const id = button.dataset.destination; document.querySelectorAll('dialog[open]').forEach(d => { if (d.id === 'map-dialog' || d.id === 'packing-dialog') d.close(); }); navigate(id); }));
  window.addEventListener('grocery:inventory', () => { buildProducts();updateNavigationHints();updateCarrier();updateAtmosphere(); lastNearby = ''; });
  window.addEventListener('grocery:cart', () => {updateStock();updateCarrier();});
  window.addEventListener('grocery:texturepreview',()=>{needsRender=true;});
  window.addEventListener('grocery:transport',()=>{updateCarrier();updateAtmosphere();});
  window.addEventListener('grocery:navigation-hints',updateNavigationHints);
  window.addEventListener('resize', () => { releaseControls(); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight);positionCarrier();updateCarrier(); needsRender = true; });
  window.ShopWorld = { navigate, atStation: () => nearStation };
  prepare('stock',50);await paint();
  Object.keys(window.GroceryBagAssets||{}).forEach(loadBagTexture);
  buildProducts();prepare('cold',80);await paint();
  updateNavigationHints();updateCarrier();updateNearby();prepare('bags',95);
  const windowDirection=new THREE.Vector3();
  function tick(now) {
    const dt = Math.min(.04, (now - lastTick) / 1000); lastTick = now;
    const paused = !!document.querySelector('dialog[open]') || document.hidden || !document.body.classList.contains('game-started');
    if (!paused) {
      let forward = (held.has('KeyW') || held.has('ArrowUp') ? 1 : 0) - (held.has('KeyS') || held.has('ArrowDown') ? 1 : 0);
      let side = (held.has('KeyD') ? 1 : 0) - (held.has('KeyA') ? 1 : 0);
      if (held.has('ArrowLeft')) rotate(dt * 1.55);
      if (held.has('ArrowRight')) rotate(-dt * 1.55);
      if (forward || side) { const length = Math.hypot(forward, side); forward /= length; side /= length; move((-Math.sin(yaw) * forward + Math.cos(yaw) * side) * dt * 2.65, (-Math.cos(yaw) * forward - Math.sin(yaw) * side) * dt * 2.65); bobTime += dt * 10; }
      else if (navigation) {
        const next = navigation.path[navigation.index];
        if (next) {
          const dx = next[0] - camera.position.x, dz = next[1] - camera.position.z, distance = Math.hypot(dx, dz);
          if (distance < .12) { navigation.index++; pathGroup.children.forEach(m => { m.visible = m.userData.pathIndex >= navigation.index; }); }
          else { const step = Math.min(distance, dt * 3.6);turnTowards(Number.isFinite(next[2])?next[2]:Math.atan2(-dx, -dz),dt);move(dx / distance * step, dz / distance * step);pitch += ((navigation.pitch??carryingPitch()) - pitch) * Math.min(1, dt * 4); bobTime += dt * 10; }
        } else { turnTowards(navigation.yaw, dt); needsRender = true; if (Math.abs(Math.atan2(Math.sin(navigation.yaw - yaw), Math.cos(navigation.yaw - yaw))) < .025) { navigation = null; clearPath(); } }
      }
      camera.position.y = 1.64 + ((forward || side || navigation) && !reducedMotion.matches ? Math.sin(bobTime) * .014 : 0);
      camera.rotation.set(pitch, yaw, 0, 'YXZ');
      positionCarrier();
      if (needsRender || nearestTick === 0) nearbyDirty = true;
      if (nearbyDirty && now - nearestTick > 170) { updateNearby(); nearestTick = now; nearbyDirty = false; }
    }
    const parkTarget=shelfFocus?1:0,nextPark=reducedMotion.matches?parkTarget:THREE.MathUtils.damp(carrierPark,parkTarget,12,dt);
    if(Math.abs(nextPark-carrierPark)>.0005){carrierPark=Math.abs(nextPark-parkTarget)<.001?parkTarget:nextPark;positionCarrier();needsRender=true;}
    if(!paused)for(const door of fridgeDoors)if(door.tick(dt,reducedMotion.matches)){needsRender=true;nearbyDirty=true;}
    camera.getWorldDirection(windowDirection);if(storeWindows.tick(dt,windowDirection.z>.12,paused,reducedMotion.matches))needsRender=true;
    if (needsRender && !document.hidden) {
      renderer.render(scene, camera); needsRender = false;
      // The shop is usable after its first frame. Background photos, including
      // failures or timeouts, never keep the player behind a loading screen.
      if(!firstLoadDone){firstLoadDone=true;prepare('ready',100);window.dispatchEvent(new CustomEvent('grocery:worldready',{detail:{failed:failedPhotos}}));}
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
