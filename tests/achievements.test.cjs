const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{createHash}=require('node:crypto');
const A=require('../dist/achievements.js'),G=require('../dist/game-core.js'),P=require('../dist/profile.js');
let checks=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);},ok=(v,m)=>{checks++;assert.ok(v,m);};
eq(A.DEFINITIONS.length,83,'There are 83 quality, timer, earnings and feedback achievements');eq(new Set(A.DEFINITIONS.map(d=>d.id)).size,83,'Identifiers are unique');
for(const d of A.DEFINITIONS){ok(d.mn&&d.ru&&d.descriptionMn&&d.descriptionRu,'Every reward has a full bilingual condition');ok(d.target>0&&Number.isSafeInteger(d.target),'Every progress goal is finite and positive');ok(A.GROUPS.some(g=>g.id===d.group),'Each achievement has a valid category');}
let s=A.normalize();const event=(type,key,detail={})=>{const before=JSON.stringify(s),result=A.record(s,{type,key,day:1,...detail},1000);eq(JSON.stringify(s),before,'Recording is immutable');s=result.state;return result.newly;};
eq(event('date','1:campaign:1:dumplings',{productId:'dumplings',category:'frozen'}),['dates-any-1'],'Dumplings unlock the general date reward');
eq(s.counters.dairyDates,0,'Checking dumplings does not count as a dairy inspection');
for(const [productId,category] of [['beef','meat'],['eggs','dairy'],['quail-eggs','dairy'],['margarine','dairy']])event('date','1:campaign:1:'+productId,{productId,category});
eq(s.counters.dairyDates,0,'Meat, eggs and margarine do not count as dairy products');
eq(event('date','1:campaign:1:milk',{productId:'milk',category:'dairy'}),['dates-1'],'Checking milk unlocks the dairy-specific reward');
eq(event('date','1:campaign:1:milk',{productId:'milk',category:'dairy'}),[],'Repeating the same date check gives no reward');eq(s.counters.dates,6,'Repeated clicks do not increase progress');
s=A.normalize(JSON.parse(JSON.stringify(s)));event('date','1:campaign:1:milk',{productId:'milk',category:'dairy'});eq(s.counters.dates,6,'Reload preserves deduplication');eq(s.counters.dairyDates,1,'Reload preserves the proven dairy check');
for(const productId of ['yogurt','cheese','lactose-free-milk','cream','airag']){const dairy=A.record(A.normalize(),{type:'date',day:1,key:productId,category:'dairy',productId},1000);ok(dairy.newly.includes('dates-1'),'Other dairy products also qualify: '+productId);}
let capped=A.normalize();for(let i=0;i<50;i++)capped=A.record(capped,{type:'date',key:'other-'+i,day:1,category:'frozen',productId:'dumplings'},1000).state;
const lateDairy=A.record(capped,{type:'date',key:'late-milk',day:1,category:'dairy',productId:'milk'},1001);eq(lateDairy.newly,['dates-1'],'Dairy reward remains attainable after the general counter reaches its cap');eq(lateDairy.state.counters.dates,50,'The general date counter remains bounded');
const legacy=A.hydrate({version:1,counters:{dates:7},earned:{'dates-1':500,'orders-1':400},seen:['date:old-lot']});
eq(legacy.version,2,'Date conditions have an explicit migration version');eq(legacy.earned['dates-any-1'],500,'An old general date award keeps its original timestamp');ok(!legacy.earned['dates-1'],'Unproven historical dairy awards are converted to the general award');eq(legacy.counters.dates,7,'Historical date-check progress is retained');eq(legacy.earned['orders-1'],400,'Other earned achievements are preserved');eq(legacy.seen,['date:old-lot'],'Existing duplicate protection survives migration');eq(A.normalize(legacy),legacy,'The achievement migration runs only once');
event('egg','1:campaign:1:eggs');eq(s.counters.eggs,1,'Opening the egg box is separate from checking its date');
event('weigh','1:campaign:1:apple',{grams:1000,tied:false,spelled:true});eq(s.counters.weighed,0,'An untied bag does not count');
event('weigh','1:campaign:1:apple',{grams:1000,tied:true,spelled:false});eq(s.counters.weighed,0,'Unverified spelling does not count');
event('weigh','1:campaign:1:apple',{grams:1000,tied:true,spelled:true,category:'produce',withoutHint:true});eq(s.counters.weighed,1,'The completed bag counts once');eq(s.counters.weightWords,1,'Independent spelling counts');eq(s.counters.produceWeighed,1,'Produce weighing is categorized');
event('weigh','1:campaign:1:apple',{grams:1500,tied:true,spelled:true,category:'produce',withoutHint:true});eq(s.counters.weighed,1,'Adjusting the same portion does not farm rewards');
event('weigh','1:campaign:2:candy',{grams:500,tied:true,spelled:true,category:'sweets',withoutHint:false});eq(s.counters.weightWords,1,'Using a hint still prevents the no-hint reward');eq(s.counters.sweetsWeighed,1,'Weighed sweets have their own reward');
event('heard','1:campaign:1',{recording:'campaign:1'});event('heard','1:campaign:1',{recording:'campaign:1'});eq(s.counters.heard,1,'One recording is counted once');
s=A.record(s,{type:'heard',key:'2:campaign:1',day:2,recording:'campaign:1'},1000).state;eq(s.counters.heard,1,'The same recording on another day is still the same recording');
s=A.normalize();
for(let i=0;i<4;i++)event('complete',`1:text:${i}`,{stars:3,clean:true,checked:true,format:'text',products:['milk'],categories:['dairy']});
eq(s.counters.streak,4,'A clean streak spans consecutive completed orders');event('complete','1:text:4',{stars:1,clean:false,format:'text'});eq(s.counters.streak,0,'A fine or complaint resets the current streak');
for(let i=5;i<10;i++)event('complete',`1:text:${i}`,{stars:3,clean:true,format:'text'});ok(s.earned['clean-streak'],'Five subsequent clean deliveries unlock the streak');
event('complete','1:text:10',{stars:1,clean:false,format:'text'});ok(s.earned['clean-streak'],'An earned streak reward is permanent');
eq(A.progress(s).find(d=>d.id==='clean-streak').current,5,'A permanently earned reward keeps a full progress bar after the current streak resets');
const count=s.counters.delivered;event('complete','1:text:10',{stars:3,clean:true,format:'text'});eq(s.counters.delivered,count,'Replaying a finished order does not count twice');
event('complete','1:campaign:20',{stars:3,clean:true,format:'audio',heard:false});eq(s.counters.audioOrders,0,'A perfect delivery without a completed listen is not an audio reward');
event('complete','1:campaign:21',{stars:3,clean:true,format:'audio',heard:true,revealed:true});eq(s.counters.audioOrders,1,'Listening then delivering counts');eq(s.counters.withoutText,0,'Opening a transcript prevents the listening-only reward');
event('complete','1:campaign:22',{stars:3,clean:true,format:'audio',heard:true,revealed:false});eq(s.counters.withoutText,1,'Completed listening without transcript counts');
event('complete','1:campaign:23',{stars:2,clean:false,checked:true,format:'audio',heard:true});eq(s.counters.withoutText,1,'A complaint does not earn a clean listening-only reward');

const old={version:2,catalogVersion:P.CATALOG_VERSION,mode:'text',cart:{old:1},bestById:{'text:1':3},drafts:{'text:2':{cart:{saved:2},attempts:1}},achievements:s};
const migrated=P.upgrade(old);eq(migrated.achievements,s,'Profile upgrades retain the achievement record');eq(migrated.drafts,old.drafts,'Achievement migration does not touch saved carts');
let h=A.hydrate(null,{day:2,totalCompleted:75,perfect:23,textOrders:10,heard:2,heardKeys:['campaign:1','campaign:2'],levels:[0,1],completedKeys:['2:campaign:1']});
ok(h.earned['orders-50']&&h.earned['stars-10']&&h.earned['text-orders-10'],'Proven historical deliveries, stars and text orders count');eq(h.counters.checkedOrders,0,'Unknown historical quality checks are not invented');eq(h.counters.withoutText,0,'Historical no-transcript success is not invented');
eq(A.hydrate(h,{day:2,totalCompleted:75,perfect:23,textOrders:10,heard:2,levels:[0,1]}).counters,h.counters,'Hydration is idempotent');
eq(A.record(h,{type:'complete',day:2,key:'2:campaign:1',stars:3,clean:true}).state.counters.delivered,75,'Previously delivered orders are not awarded again on migration');

// Reach every award using supported game events, rather than directly setting counters.
s=A.normalize();
for(let i=0;i<100;i++)event('heard',`1:campaign:${i}`,{recording:'campaign:'+i});
for(let i=0;i<50;i++)event('date',`1:campaign:1:lot-${i}`,{productId:i===49?'milk':'dumplings',category:i===49?'dairy':'frozen'});
for(let i=0;i<10;i++){event('egg',`1:campaign:1:egg-${i}`);event('discard',`1:campaign:1:bad-${i}`);}
for(let i=0;i<50;i++)event('weigh',`1:campaign:1:bulk-${i}`,{grams:500,tied:true,spelled:true,withoutHint:true,category:i<25?'produce':'sweets'});
for(let i=0;i<200;i++)event('complete',`1:campaign:${i}`,{stars:3,clean:true,checked:true,format:i<100?'audio':'text',heard:true,revealed:false,products:[G.PRODUCTS[i%G.PRODUCTS.length].id],categories:[G.PRODUCTS[i%G.PRODUCTS.length].category],levels:i===199?[0,1,2,3]:[],fullShift:i===199});
for(let i=0;i<25;i++)event('timed',`timer-${i}`,{timed:true,timingMode:'challenge',elapsedMs:1000,limitMs:10000,stars:3,clean:true,orderKey:'time-order-'+i});
for(let i=0;i<20;i++)event('shelf-return','return-'+i);
for(let i=0;i<501;i++)event('salary','pay-'+i,{amount:1000});
event('fine','fine-large',{amount:100001,reason:'disorder'});
for(let i=0;i<100;i++){event('review','positive-'+i,{reviewType:'positive'});event('review','negative-'+i,{reviewType:'negative'});}
eq(Object.keys(s.earned).length,83,'All 83 achievements are attainable through actual supported event types');
for(const row of A.progress(s)){eq(row.current,row.target,'Every earned progress bar reaches its goal');ok(row.unlocked,'Every earned reward stays unlocked');}
const serialized=JSON.stringify(s);ok(serialized.length<100000,'The ledger stays small after all milestones');
eq(A.normalize(JSON.parse(serialized)),s,'All rewards and deduplication survive a reload');
for(const value of [null,[],{counters:{delivered:Infinity,dates:-1,eggs:'100'}},{earned:{invented:123},products:['x','x','<script>'],categories:['all','fake']},false]){const safe=A.normalize(value);ok(A.progress(safe).length===83&&Object.values(safe.counters).every(Number.isFinite),'Malformed saved fields cannot break the collection');}
const art=require('../dist/assets/achievement-art-manifest.json'),artHashes=new Map();
eq(Object.keys(art).length,83,'All 83 achievements have generated artwork, without vector fallbacks');
const originalArt=Object.entries(art).filter(([,r])=>/^art\/achievement-stickers\/sheet-[1-5](?:-v2)?\.png$/.test(r.source)&&r.cell&&r.crop);
eq(originalArt.length,50,'The original 50 approved sheet illustrations remain separate');
const originalDigest=createHash('sha256').update(JSON.stringify(originalArt.sort(([a],[b])=>a.localeCompare(b)).map(([id,r])=>[id,r.sha256,r.source,r.cell,r.crop]))).digest('hex');
eq(originalDigest,'7f1b75edd07010d3b9e0c91d795976261316c943482f5ade87bc04bab5ea7d94','Original sticker identities, image hashes, sheet cells and crops remain byte-for-byte approved');
const runtimeText=fs.readFileSync(path.join(__dirname,'../dist/achievement-art.js'),'utf8').trim(),runtimeMatch=runtimeText.match(/^window\.GroceryAchievementArt=(\{.*\});$/s);
ok(runtimeMatch,'Runtime artwork is one complete JSON mapping');const runtime=JSON.parse(runtimeMatch[1]);eq(Object.keys(runtime).length,83,'All 83 drawings are available to the game');
for(const d of A.DEFINITIONS){
  const r=art[d.id];ok(!!r&&r.width===256&&r.height===256,'Each sticker has a responsive 256px image: '+d.id);ok(r.generated===true,'Every illustration is explicitly generated');
  const bytes=fs.readFileSync(path.join(__dirname,'../dist',r.path)),hash=createHash('sha256').update(bytes).digest('hex');
  eq(hash,r.sha256,'The image matches its manifest');eq(bytes.length,r.bytes,'Manifest byte count matches the actual image');ok(r.path.includes(hash.slice(0,16)),'Sticker URLs support safe immutable caching');
  eq(bytes.toString('ascii',0,4),'RIFF','Sticker is a real WebP');eq(bytes.toString('ascii',8,16),'WEBPVP8X','Sticker includes its canvas metadata');eq([bytes.readUIntLE(24,3)+1,bytes.readUIntLE(27,3)+1],[256,256],'Actual WebP dimensions are 256px');
  artHashes.set(hash,r.bytes);eq(runtime[d.id],{path:r.path},'Runtime and audit manifest use the same illustration');ok(fs.existsSync(path.join(__dirname,'..',r.source)),'Original generated art is retained in the source');
  ok(!r.aliasOf,'Every achievement has a separate drawing; milestone aliases are disallowed');
}
eq(artHashes.size,83,'All 83 achievements have different actual illustrations');
eq(new Set(originalArt.map(([,r])=>r.sha256)).size,50,'All original 50 illustrations stay distinct');
ok([...artHashes.values()].reduce((n,bytes)=>n+bytes,0)<2500000,'The 83 unique drawings stay below 2.5MB and load only when needed');
console.log(`PASS: ${checks} achievement thresholds, all-83 reachability, dairy/general date separation, duplicate protection, quality/audio conditions and profile persistence checks.`);
