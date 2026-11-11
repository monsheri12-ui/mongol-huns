import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createRequire} from 'node:module';
import {WINDOW,EXTERIOR_TIMES,atmosphereState,createStoreWindows} from '../src/window-atmosphere.js';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createSlidingDoor} from '../src/fridge-door.js';
import {icecreamBins,createIcecreamFacing} from '../src/icecream-display.js';
import {departmentFor,shelfFamilies,sortFrozenFamilies} from '../src/shelf-stock.js';
import {chestLayout,createFreezerPack,produceSlots} from '../src/freezer-layout.js';
import {createProduceBatch} from '../src/product-presentation.js';
const require=createRequire(import.meta.url),G=require('../dist/game-core.js');globalThis.window={GroceryGame:G};
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
const texture=new THREE.Texture(),frame=new THREE.MeshBasicMaterial(),sill=new THREE.MeshBasicMaterial();
const windows=createStoreWindows(texture,frame,sill),panes=windows.group.children.filter(m=>m.userData.exterior);
ok(panes.length===7,'All seven real window openings have exterior scenery');
for(const pane of panes){
 const bars=windows.group.children.filter(m=>m.material===frame&&Math.abs(m.position.x-pane.position.x)<2);
 const bounds=new THREE.Box3();for(const bar of bars)bounds.union(new THREE.Box3().setFromObject(bar));
 ok(Math.abs(bounds.getSize(new THREE.Vector3()).y-(WINDOW.height+WINDOW.frame*2))<1e-5,'Frame height matches its pane plus exactly two frame thicknesses');
 ok(Math.abs(bounds.getSize(new THREE.Vector3()).x-(WINDOW.width+WINDOW.frame*2))<1e-5,'Frame width matches its pane plus exactly two frame thicknesses');
 ok(pane.geometry.parameters.width===WINDOW.width&&pane.geometry.parameters.height===WINDOW.height,'Weather geometry stays inside the glass opening');
}
for(let day=1;day<=8;day++){ok(atmosphereState(day).weather===(day-1)%4,'Saved game days rotate sun, cloud, rain and snow');windows.set({day,progress:.5});ok(windows.uniforms.weather.value===(day-1)%4,'Only the exterior material receives weather');}
const morning=atmosphereState(1,0),night=atmosphereState(1,1);ok(morning.phase===0&&night.phase===3,'Shift progress moves from morning to night');
const metadata=JSON.parse(readFileSync(new URL('../dist/assets/environment/metadata.json',import.meta.url))),sceneryTextures={};
const sceneryHashes=new Set();
for(const season of ['Summer','Winter'])for(const time of EXTERIOR_TIMES){
 const key='city'+season+time,record=metadata[key];ok(!!record,'Each season has its own morning, day, evening and night panorama');
 sceneryTextures[key]=new THREE.Texture();sceneryTextures[key].name=key;
 const bytes=readFileSync(new URL('../dist/'+record.path,import.meta.url));sceneryHashes.add(createHash('sha256').update(bytes).digest('hex'));
 ok(bytes.length>50000&&record.width/record.height===3,'Each complete panorama is packaged at the matching camera aspect ratio');
}
ok(sceneryHashes.size===8,'All eight scenery files contain distinct landscapes, not aliases of the dusk image');
const seasonal=createStoreWindows(sceneryTextures,frame,sill);
for(const [day,season] of [[1,'Summer'],[4,'Winter'],[8,'Winter']]){
 for(let n=0;n<=100;n++){
  seasonal.set({day,progress:n/100});
  ok(seasonal.uniforms.mapA.value.name.startsWith('city'+season)&&seasonal.uniforms.mapB.value.name.startsWith('city'+season),'The entire snowy shift, including crossfades, stays in leafless winter scenery');
 }
 for(const [n,time] of EXTERIOR_TIMES.entries()){
  seasonal.set({day,progress:n/3});const u=seasonal.uniforms;
  ok((u.blend.value===0?u.mapA.value:u.mapB.value)===sceneryTextures['city'+season+time],'Each time of day selects its own background, including night lights');
 }
}
windows.set({day:3,progress:.25});ok(!windows.tick(.2,false,false,false),'Looking away from windows does not force animation frames');ok(!windows.tick(.2,true,true,false),'Pause freezes rain and snow');ok(!windows.tick(.2,true,false,true),'Reduced motion stops weather animation');ok(windows.tick(.2,true,false,false),'Visible rain animates without a separate particle scene');
for(const direction of [-1,1]){
 const door=createSlidingDoor(1.13,2.35,direction);door.setClosedPosition(0,1.47,.74);door.open();for(let n=0;n<30;n++)door.tick(.04);
 ok(door.isOpen,'A closed glass door opens completely');ok(Math.abs(door.group.position.z-.74)<1e-10,'Sliding doors never protrude into the shopping aisle');
 ok(Math.abs(door.group.position.x-direction*1.13*.88)<1e-8,'The opening clears the selected cabinet bay');
 door.toggle();for(let n=0;n<30;n++)door.tick(.04);ok(!door.isOpen&&door.group.position.x===0,'The same handle closes the door');
}
const orders=G.createCampaign([50,50,50,50]);
for(const o of [orders[0],orders[50],orders[100],orders[150]]){
 const inventory=G.createInventory(o).filter(l=>!l.hidden);
 for(const department of ['frozen-dumplings','frozen-bakery','frozen-vegetables']){
  const lots=inventory.filter(l=>departmentFor(G.BY_ID[l.productId])===department),layout=chestLayout(lots);
  ok(layout.bins.length===8,'Each frozen-food chest has eight filled compartments');
  ok(new Set(layout.labels.map(l=>l.family.key)).size===layout.labels.length,'Each product family has one label rather than overlapping duplicate tags');
  for(let a=0;a<layout.labels.length;a++)for(let b=a+1;b<layout.labels.length;b++){
   const x=layout.labels[a],y=layout.labels[b],halfWidth=(x.width+y.width)/2,halfHeight=halfWidth*480/1024;
   ok(Math.abs(x.x-y.x)>=halfWidth+.01||Math.abs(x.y-x.width*.09-y.y+y.width*.09)>=halfHeight+.01,'Freezer price-tag rectangles never overlap or share the same pixels');
  }
  for(const bin of layout.bins){
   for(const lot of bin.family.lots){
    const texture=new THREE.Texture();texture.userData.callbacks=[];const model=createFreezerPack(G.BY_ID[lot.productId],lot,texture);
    for(const aspect of [.25,1,3]){
     const p={aspect,outline:[],sideColor:new THREE.Color('#b0a080')};texture.userData.presentation=p;for(const fn of texture.userData.callbacks)fn(p);
     const bounds=new THREE.Box3().setFromObject(model.group),size=bounds.getSize(new THREE.Vector3());
     ok(size.x<=.67001&&size.y<=.10501&&size.z<=.48001,'Complete frozen dough and vegetable packages lie flat inside their own basket');
     ok(bin.y+Math.max(2,bin.family.lots.length-1)*.014+bounds.max.y<1.095,'The entire stack stays below the glass lid');
    }
   }
  }
 }
 const vegetables=inventory.filter(l=>G.BY_ID[l.productId].category==='produce');
 for(const family of shelfFamilies(vegetables)){
  const cells=produceSlots(family.lots,.86);
  ok(new Set(cells.map(c=>c.lot.id)).size===family.lots.length,'Fresh, spoiled and packaged produce lots remain individually accessible');
  for(const cell of cells)ok(Math.abs(cell.x)+cell.width/2<.86*.47&&cell.z+.24+cell.depth/2<.60,'Every apple, banana and other fruit fits the real tray width and depth');
  for(const lot of family.lots){
   const texture=new THREE.Texture();texture.userData.callbacks=[];const model=createProduceBatch(lot,texture,cells.filter(c=>c.lot.id===lot.id));
   for(const aspect of [.1,1,5]){
    texture.userData.presentation={aspect};for(const fn of texture.userData.callbacks)fn(texture.userData.presentation);
    const bounds=new THREE.Box3().setFromObject(model.group);
    ok(bounds.min.x>-.86*.47&&bounds.max.x<.86*.47&&bounds.max.y<=.24001&&bounds.max.z+.24<.60,'The complete instanced produce batch fits the crate at every photograph aspect ratio');
    ok(model.group.children.length===1&&model.front.isInstancedMesh,'Repeated produce shares one draw call per lot and adds no artificial net plane');
   }
  }
 }
}
for(const o of [orders[0],orders[50],orders[100],orders[150]]){
 const lots=G.createInventory(o).filter(l=>!l.hidden&&l.productId==='icecream'),bins=icecreamBins(lots);
 ok(bins.length===8,'The freezer has eight filled baskets');
 ok(new Set(bins.map(b=>b.family.key)).size===7,'All seven ice-cream appearances are visible together');
 ok(new Set(bins.flatMap(b=>b.family.lots.map(l=>l.id))).size===lots.length,'Every existing ice-cream batch remains accessible');
 for(const lot of lots){
  const tex=new THREE.Texture();tex.userData.callbacks=[];
  const model=createIcecreamFacing(G.BY_ID.icecream,lot,tex);
  for(const aspect of [.35,.6,1.6,2.2]){
   const presentation={aspect,outline:[],sideColor:new THREE.Color('#c4b293')};tex.userData.presentation=presentation;for(const fn of tex.userData.callbacks)fn(presentation);
   const size=new THREE.Box3().setFromObject(model.group).getSize(new THREE.Vector3());
   ok(size.x<=.51001&&size.y<=.31001&&size.z<=.43001,'A full package fits its basket before and after photograph loading');
  }
 }
}
for(const p of G.PRODUCTS.filter(p=>p.category==='canned'))ok(departmentFor(p)==='canned','Every meat or fish preserve stays on an ordinary canned-goods shelf');
for(const id of ['turkey-whole','pork-tenderloin','chicken-breast'])ok(departmentFor(G.BY_ID[id])==='frozen-meat','Frozen cuts and turkey stay behind freezer doors');
for(const id of ['buuz','bansh'])ok(departmentFor(G.BY_ID[id])==='frozen-dumplings','Raw dumplings have their own freezer');
for(const id of ['frozen-broccoli','frozen-peas','frozen-fries'])ok(departmentFor(G.BY_ID[id])==='frozen-vegetables','Frozen vegetables have a separate freezer');
ok(departmentFor(G.BY_ID['mini-khuushuur'])==='frozen-bakery','Frozen dough products have their own freezer');
ok(departmentFor(G.BY_ID.mantuu)==='ready','The existing ready-to-eat0–5C mini-mantuu is not misclassified as a frozen raw dumpling');
const seafood=sortFrozenFamilies(shelfFamilies(G.createInventory(orders[0]).filter(l=>departmentFor(G.BY_ID[l.productId])==='frozen'))),fish=seafood.findIndex(f=>f.key==='fish-flounder'),shrimp=seafood.findIndex(f=>f.key==='shrimp');
ok(shrimp===fish+1&&Math.floor(fish/5)===Math.floor(shrimp/5),'Frozen shrimp occupy the neighbouring fish position on the same physical shelf');
console.log(`PASS:${checks} window/frame fit, exterior-only weather, door motion, freezer package bounds and cold-storage checks.`);
