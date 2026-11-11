import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {departmentFor,shelfFamilies,shelfPages,shelfSides,rackFootprint} from '../src/shelf-stock.js';
import {poseFree} from '../src/world-movement.js';
const require=createRequire(import.meta.url),G=require('../dist/game-core.js');
const additions=require('../dist/basic-assortment.js').products;
const hash=x=>crypto.createHash('sha256').update(JSON.stringify(x)).digest('hex');
let checks=0;const ok=(value,message)=>{checks++;assert.ok(value,message);};
ok(additions.length===100&&G.PRODUCTS.length===202,'100 reviewed basic additions produce202 unique store products');
ok(additions.filter(p=>p.category==='produce'&&p.soldByWeight).length===21,'21 new loose produce types use the weighing flow');
ok(additions.every(p=>p.storage&&p.ruName&&p.shelfKind),'New goods have storage, translation and a physical package model');
for(const id of ['stewed-beef','rolled-oats','millet','red-lentils','cream','mozzarella','aaruul','sausages','chicken-wings','boortsog','garlic','broccoli','lemon','strawberry','walnuts','black-tea','wet-wipes','vodka'])ok(G.BY_ID[id]?.basicAssortment,`Basic category covered by${id}`);
ok(G.BY_ID['stewed-beef'].pack===430&&G.BY_ID['stewed-beef'].shelfLifeDays===730,'Stew agrees with manufacturer430g/two-year specifications');
ok(G.BY_ID['roasted-seaweed'].pack===30,'Photographed30g seaweed overrides conflicting retailer35g card');
ok(G.BY_ID.vodka.category==='alcohol'&&G.BY_ID.whisky.category==='alcohol','Spirits appear with alcoholic drinks');
const orders=G.createCampaign([50,50,50,50]);
ok(hash(orders)==='04481c7060b56299815c572f3944d7a615d9be845fd8c98e98d8aa68d5ae89c2','All200 original order objects remain byte-for-byte identical');
const inventories=orders.flatMap(o=>G.createInventory(o));
const beginnerIds=new Set(orders.filter(o=>o.levelIndex===0).map(o=>o.id));
const oldLots=inventories.filter(l=>!G.BY_ID[l.productId].basicAssortment&&!l.id.includes('-beginner-expired-')).map(l=>beginnerIds.has(Number(l.id.match(/^o(\d+)-/)?.[1]))&&G.isUnfit(l)?{...l,hidden:true}:l).sort((a,b)=>a.id.localeCompare(b.id));
ok(oldLots.length===28105&&hash(oldLots)==='88e64228edb3dc9aeb7308559ebf67101b4fa35dcbb6a0bae5be461ed655116c','All28105 old lots retain exact IDs, batches, dates and quantities');
for(const order of [orders[0],orders[50],orders[100],orders[150]]){
 const lots=G.createInventory(order).filter(l=>!l.hidden),groups=new Map();
 for(const lot of lots){const destination=departmentFor(G.BY_ID[lot.productId]);if(!groups.has(destination))groups.set(destination,[]);groups.get(destination).push(lot);}
 for(const [destination,stock] of groups){
  if(destination==='cold')continue;
  if(destination==='frozen-meat'){ok(shelfFamilies(stock).length<=9,'All frozen-meat types fit actual nine display positions');continue;}
  const width=destination==='produce'?8.6:destination==='dairy'?5.95:5.1,pages=shelfPages(stock,width);
  ok(pages.length<=(destination==='pantry'?2:1),`${destination} has enough physical racks`);
  const keys=pages.flatMap(p=>p.families.map(f=>f.key));
  ok(keys.length===new Set(stock.map(l=>l.variantId||l.productId)).size,'No product family disappears during layout');
  const allLotIds=pages.flatMap(p=>p.families.flatMap(f=>f.lots.map(l=>l.id)));
  ok(allLotIds.length===stock.length&&new Set(allLotIds).size===stock.length,'Every visible lot remains on its physical shelf');
  for(const page of pages){ok(page.spacing>=.62,'Product/price-label spacing remains at least62cm');ok(page.families.length<=page.columns*3,'Three real tiers accommodate all assigned families');}
 }
 for(const product of additions){const lot=lots.find(l=>l.productId===product.id);ok(!!lot,`${product.id} remains visible on every difficulty`);if(product.category==='produce'&&product.soldByWeight)ok(lot.pack===1&&!lot.expires&&!lot.manufactured,'Loose produce has grams and no floating expiry date');if(product.storage==='frozen')ok(departmentFor(product).startsWith('frozen'),'Frozen stock goes to a freezer');}
}
const obstacle={x0:2.8,x1:8.2,z0:-5.13,z1:-3.97};
ok(poseFree(5.5,-1.6,0,'cart',[obstacle]),'New pantry map destination leaves room for the trolley');
ok(!poseFree(5.5,-3.4,0,'cart',[obstacle]),'Trolley cannot pass through the new rack');
for(const [id,zone] of [['pantry-2',{x:5.5,z:-4.6,width:5.1,rotation:0}],['produce',{x:-6,z:2.3,width:8.6,rotation:0}],['ready',{x:6,z:2.3,width:5.1,rotation:0}]]){
 const sides=shelfSides(id,zone),bounds=rackFootprint(id,zone);
 ok(sides.length===2,'Every free-standing grocery rack has two stock faces');
 ok(Math.abs(sides[1].rotation-sides[0].rotation-Math.PI)<1e-8,'Back labels and product fronts face the opposite aisle');
 ok(sides[0].z+.68<bounds.z1+.01&&sides[1].z-.68>bounds.z0-.04,'Both stocked sides fit the collision footprint');
 ok(poseFree(zone.x,zone.z+3,0,'cart',[bounds]),'Front aisle remains usable with the trolley');
 ok(poseFree(zone.x,zone.z-3.5,Math.PI,'cart',[bounds]),'Rear aisle remains usable with the trolley');
 ok(!poseFree(zone.x,zone.z-1.4,Math.PI,'cart',[bounds]),'The rear shelf is solid to the trolley');
}
const html=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
ok(html.includes('data-destination="pantry-2"'),'Second pantry rack is reachable from the map');
const sources=require('../dist/assets/product-sources.json').products;
for(const id of ['roasted-seaweed','mini-khuushuur'])ok(sources.find(r=>r.id===id).render_labels?.length,'Historical source-photo dates are concealed by a physical batch sticker');
console.log(`PASS:${checks} assortment coverage, frozen order/lot identity, shelf capacity, reachability and date-presentation checks.`);
