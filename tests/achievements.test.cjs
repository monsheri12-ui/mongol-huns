const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{createHash}=require('node:crypto');
const A=require('../dist/achievements.js'),G=require('../dist/game-core.js'),P=require('../dist/profile.js');
let checks=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);},ok=(v,m)=>{checks++;assert.ok(v,m);};
eq(A.DEFINITIONS.length,50,'There are exactly 50 achievements');eq(new Set(A.DEFINITIONS.map(d=>d.id)).size,50,'Identifiers are unique');
for(const d of A.DEFINITIONS){ok(d.mn&&d.ru&&d.descriptionMn&&d.descriptionRu,'Every reward has a full bilingual condition');ok(d.target>0&&Number.isSafeInteger(d.target),'Every progress goal is finite and positive');ok(A.GROUPS.some(g=>g.id===d.group),'Each achievement has a valid category');}
let s=A.normalize();const event=(type,key,detail={})=>{const before=JSON.stringify(s),result=A.record(s,{type,key,day:1,...detail},1000);eq(JSON.stringify(s),before,'Recording is immutable');s=result.state;return result.newly;};
eq(event('date','1:campaign:1:milk'),['dates-1'],'Checking one date unlocks the first date reward');
eq(event('date','1:campaign:1:milk'),[],'Repeating the same date check gives no reward');eq(s.counters.dates,1,'Repeated clicks do not increase progress');
s=A.normalize(JSON.parse(JSON.stringify(s)));event('date','1:campaign:1:milk');eq(s.counters.dates,1,'Reload preserves deduplication');
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
for(let i=0;i<50;i++)event('date',`1:campaign:1:lot-${i}`);
for(let i=0;i<10;i++){event('egg',`1:campaign:1:egg-${i}`);event('discard',`1:campaign:1:bad-${i}`);}
for(let i=0;i<50;i++)event('weigh',`1:campaign:1:bulk-${i}`,{grams:500,tied:true,spelled:true,withoutHint:true,category:i<25?'produce':'sweets'});
for(let i=0;i<200;i++)event('complete',`1:campaign:${i}`,{stars:3,clean:true,checked:true,format:i<100?'audio':'text',heard:true,revealed:false,products:[G.PRODUCTS[i%G.PRODUCTS.length].id],categories:[G.PRODUCTS[i%G.PRODUCTS.length].category],levels:i===199?[0,1,2,3]:[],fullShift:i===199});
eq(Object.keys(s.earned).length,50,'All 50 achievements are attainable through actual supported event types');
for(const row of A.progress(s)){eq(row.current,row.target,'Every earned progress bar reaches its goal');ok(row.unlocked,'Every earned reward stays unlocked');}
const serialized=JSON.stringify(s);ok(serialized.length<100000,'The ledger stays small after all milestones');
eq(A.normalize(JSON.parse(serialized)),s,'All rewards and deduplication survive a reload');
for(const value of [null,[],{counters:{delivered:Infinity,dates:-1,eggs:'100'}},{earned:{invented:123},products:['x','x','<script>'],categories:['all','fake']},false]){const safe=A.normalize(value);ok(A.progress(safe).length===50&&Object.values(safe.counters).every(Number.isFinite),'Malformed saved fields cannot break the collection');}
const art=require('../dist/assets/achievement-art-manifest.json'),artHashes=new Set();
eq(Object.keys(art).length,50,'All 50 achievements have an individual illustration');
for(const d of A.DEFINITIONS){const r=art[d.id];ok(!!r&&r.width===256&&r.height===256,'Each sticker has a responsive 256px image');const bytes=fs.readFileSync(path.join(__dirname,'../dist',r.path)),hash=createHash('sha256').update(bytes).digest('hex');eq(hash,r.sha256,'The image matches its manifest');ok(r.path.includes(hash.slice(0,16)),'Sticker URLs support safe immutable caching');artHashes.add(hash);ok(fs.existsSync(path.join(__dirname,'..',r.source)),'Original generated art is retained in the source');}
eq(artHashes.size,50,'The collection uses 50 distinct images, not copies of one badge');
ok(Object.values(art).reduce((n,r)=>n+r.bytes,0)<2000000,'The entire collection is below 2MB and thumbnails load on demand');
console.log(`PASS: ${checks} achievement thresholds, all-50 reachability, duplicate protection, quality/audio conditions and profile persistence checks.`);
