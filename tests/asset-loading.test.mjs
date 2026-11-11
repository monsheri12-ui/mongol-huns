import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {createAssetQueue,queuedImage} from '../src/asset-queue.js';

let checks=0;const ok=(value,message)=>{checks++;assert.ok(value,message);};
const flush=()=>new Promise(resolve=>setImmediate(resolve));
const q=createAssetQueue(2),started=[],releases={};
const task=key=>()=>new Promise(resolve=>{started.push(key);releases[key]=resolve;});
const a=q.enqueue('a',task('a')),b=q.enqueue('b',task('b')),c=q.enqueue('c',task('c'));
const urgent=q.enqueue('urgent',task('urgent'),50);
ok(q.enqueue('a',()=>{throw Error('duplicate');})===a,'Duplicate requests share their promise');
await flush();ok(started.join(',')==='urgent,a','Pending urgent shelves load first');
ok(q.stats().running===2,'Network concurrency is bounded');
q.promote('c',100);releases.a('ok');await a;await flush();ok(started.at(-1)==='c','Approaching a shelf promotes its pending image');
releases.urgent('ok');releases.c('ok');await Promise.all([urgent,c]);await flush();releases.b('ok');await b;
await assert.rejects(q.enqueue('bad',()=>Promise.reject(Error('404'))));checks++;
ok(await q.enqueue('after-error',()=>42)===42,'A missing image releases its queue slot');
ok(await q.enqueue('bad',()=>43)===43,'A failed key can be retried successfully');
ok(q.forget('bad'),'A completed detail request can release its cached image');
ok(await q.enqueue('bad',()=>44)===44,'An evicted image can be loaded again');

const realImage=globalThis.Image;
globalThis.Image=class {set src(path){if(path==='good')queueMicrotask(()=>this.onload?.());}set decoding(value){}};
await assert.rejects(queuedImage('timeout-test','stalled',0,15));checks++;
ok(!!await queuedImage('after-timeout','good',0,50),'A hung request times out and later images still load');
globalThis.Image=realImage;

const root=new URL('../dist/',import.meta.url),sandbox={window:{},URL,Blob,atob};
for(const name of ['photos','produce-assets','fast-assets','bag-assets','environment-assets','art'])vm.runInNewContext(fs.readFileSync(new URL(name+'.js',root),'utf8'),sandbox);
const fast=sandbox.window.FastAssets,records={...sandbox.window.ProductPhotos,...sandbox.window.ProducePhotos};
for(const [id,record] of Object.entries(records)){
  const prepared=fast.products[id];ok(!!prepared,id+' has a baked product preview');
  ok(prepared.width>0&&prepared.height>0&&prepared.aspect===prepared.width/prepared.height,'Baked geometry preserves source proportions');
  ok(prepared.outline.length>=4&&prepared.outline.every(pair=>pair.every(n=>Number.isFinite(n)&&Math.abs(n)<=.51)),'Cutout contour is valid');
  ok(prepared.placeholder.startsWith('data:image/webp;base64,'),'A local placeholder requires no network request');
  for(const size of ['small','large']){
    const file=prepared[size],bytes=fs.readFileSync(new URL(file,root));
    ok(file.includes(createHash('sha256').update(bytes).digest('hex').slice(0,16)),'Preview paths are content-addressed for safe caching');
  }
  const art=sandbox.window.GroceryArt.product(id,'',undefined,id),original=sandbox.window.GroceryArt.product(id,'',undefined,id,true);
  ok(art.includes(prepared.small),'Normal thumbnails use the small preview');
  ok(original.includes(record.path),'Enlarged inspection still uses the original photograph');
}
for(const state of ['open','tied'])ok(fs.existsSync(new URL(fast.bags[state].path,root)),'Transparent pouch previews are packaged');
for(const key of Object.keys(sandbox.window.EnvironmentAssets))for(const size of ['small','large'])ok(fs.existsSync(new URL(fast.environment[key][size],root)),'Seasonal panoramas have responsive previews');
const audit=JSON.parse(fs.readFileSync(new URL('assets/fast-assets-audit.json',root)));
ok(audit.shelf640Bytes+audit.manifestBytes<audit.originalPhotoBytes*.30,'Desktop photos and baked metadata are at least 70% smaller than original source photos');
ok(audit.shelf320Bytes+audit.manifestBytes<audit.originalPhotoBytes*.20,'Mobile photos and baked metadata are at least 80% smaller than original source photos');
console.log(`PASS: ${checks} progressive loading, queue recovery, asset coverage and original zoom checks.`);
