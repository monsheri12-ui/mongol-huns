const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
require('./audio-text.test.cjs');
const G=require('../dist/game-core.js');
const corpus=require('../dist/assets/order-corpus.json');
const manifest=require('../dist/assets/audio-manifest.json');
const auditPath=path.join(__dirname,'../audio-audit.json');
const audit=fs.existsSync(auditPath)?JSON.parse(fs.readFileSync(auditPath,'utf8')):null;
if(process.argv.includes('--require-audit'))assert.ok(audit,'Release requires completed acoustic audit evidence');
if(audit){
 assert.equal(audit.summary.complete,true);
 assert.equal(audit.summary.reviewedOrders,200);
 assert.equal(audit.orders.length,200);
 assert.equal(new Set(audit.orders.map(r=>r.id)).size,200);
}
const signatures=new Set(), hashes=new Set();
let files=0;
for(const order of G.createCampaign([50,50,50,50])) {
 const entry=manifest[order.id], record=corpus.records.find(r=>r.id===order.id);
 assert.ok(entry);assert.equal(entry.signature,G.orderSignature(order));assert.equal(entry.text,record.text);assert.equal(entry.voice,record.voice);signatures.add(entry.signature);
 if(entry.path){const file=path.join(__dirname,'../dist',entry.path);assert.ok(fs.existsSync(file));const data=fs.readFileSync(file);assert.ok(data.length>5000);assert.ok(entry.duration>2);assert.equal(entry.peaks.length,32);assert.ok(entry.peaks.some(v=>v>0));assert.ok(entry.peaks.every(v=>v>=0&&v<=1));const digest=crypto.createHash('sha256').update(data).digest('hex');assert.equal(entry.sha256,digest,`Order ${order.id}: manifest must describe the actual audio`);hashes.add(digest);files++;
  if(audit){const reviewed=audit.orders.find(r=>r.id===order.id);assert.ok(reviewed);assert.equal(reviewed.status,'core_fields_reviewed');assert.equal(reviewed.audioSha256,digest,`Order ${order.id}: changed audio needs a new acoustic review`);assert.equal(reviewed.signature,entry.signature);assert.equal(reviewed.voice,entry.voice);assert.ok(reviewed.unpromptedSpeechRecognition.some(r=>r.audioSha256===digest&&r.referenceTextProvided===false));if(order.preference)assert.equal(reviewed.decision.preferenceChecked,true);}
 }
}
assert.equal(signatures.size,200);assert.equal(hashes.size,files);
if(process.argv.includes('--require-all'))assert.equal(files,200,'Release requires a real audio file for every order');
console.log(`PASS audio records: all 200 match exact orders; ${files} unique playable files; ${200-files} pending`);
