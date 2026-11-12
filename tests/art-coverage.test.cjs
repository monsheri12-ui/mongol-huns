'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{createHash}=require('node:crypto');
const root=path.resolve(__dirname,'..'),A=require('../dist/achievements.js'),manifest=require('../dist/assets/achievement-art-manifest.json');
let checks=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);},ok=(v,m)=>{checks++;assert.ok(v,m);};
// Read the real encoded WebP canvas and alpha feature. This keeps the regression
// test portable without requiring optional native image-processing build tools.
function webp(bytes){
 assert.equal(bytes.subarray(0,4).toString(),'RIFF');assert.equal(bytes.subarray(8,12).toString(),'WEBP');assert.equal(bytes.readUInt32LE(4)+8,bytes.length);
 const chunks=[];for(let offset=12;offset+8<=bytes.length;){const tag=bytes.subarray(offset,offset+4).toString(),size=bytes.readUInt32LE(offset+4),data=bytes.subarray(offset+8,offset+8+size);assert.equal(data.length,size);chunks.push({tag,data});offset+=8+size+(size%2);}
 const extended=chunks.find(c=>c.tag==='VP8X');if(extended){const d=extended.data;return {width:d.readUIntLE(4,3)+1,height:d.readUIntLE(7,3)+1,alpha:!!(d[0]&16),alphaChunk:chunks.some(c=>c.tag==='ALPH'&&c.data.length>1)||chunks.some(c=>c.tag==='VP8L')};}
 const lossless=chunks.find(c=>c.tag==='VP8L');if(lossless){const d=lossless.data;assert.equal(d[0],47);return {width:1+(((d[2]&63)<<8)|d[1]),height:1+(((d[4]&15)<<10)|(d[3]<<2)|(d[2]>>6)),alpha:!!(d[4]&16),alphaChunk:true};}
 const lossy=chunks.find(c=>c.tag==='VP8 ');assert.ok(lossy);assert.equal(lossy.data.subarray(3,6).toString('hex'),'9d012a');return {width:lossy.data.readUInt16LE(6)&16383,height:lossy.data.readUInt16LE(8)&16383,alpha:false,alphaChunk:false};
}
const context={window:{GroceryAchievements:A}};vm.runInNewContext(fs.readFileSync(path.join(root,'dist/timer-art.js'),'utf8'),context);vm.runInNewContext(fs.readFileSync(path.join(root,'dist/achievement-art.js'),'utf8'),context);
const runtime=context.window.GroceryAchievementArt,ids=A.DEFINITIONS.map(d=>d.id).sort();eq(Object.keys(manifest).sort(),ids,'Every achievement has an audited illustration manifest entry');eq(Object.keys(runtime).sort(),ids,'Every achievement uses real generated art in the game');
const unique=new Set(),sources=new Set();
for(const d of A.DEFINITIONS){const row=manifest[d.id];ok(row.generated===true,'The award uses generated character artwork: '+d.id);ok(/^assets\/(?:achievements|ui)\/[a-z0-9.-]+\.webp$/.test(row.path),'The sticker uses a local immutable WebP URL');eq(runtime[d.id].path,row.path,'Runtime art agrees with the audited source: '+d.id);
 const absolute=path.join(root,'dist',row.path),bytes=fs.readFileSync(absolute),sha=createHash('sha256').update(bytes).digest('hex'),info=webp(bytes);eq(row.sha256,sha,'Real image bytes match the manifest hash: '+d.id);eq(row.bytes,bytes.length,'Real image size matches the manifest: '+d.id);ok(row.path.includes(sha.slice(0,16)),'The content hash is present in the cache-safe image name');eq([info.width,info.height],[row.width,row.height],'Encoded dimensions match recorded metadata');eq([info.width,info.height],[256,256],'All stickers have the approved thumbnail resolution');ok(info.alpha&&info.alphaChunk,'The actual WebP encodes alpha rather than a flat opaque rectangle: '+d.id);
 ok(typeof row.source==='string'&&!path.isAbsolute(row.source)&&fs.existsSync(path.join(root,row.source)),'Generated source art is retained: '+d.id);sources.add(row.source);unique.add(row.path);
 ok(!row.aliasOf,'Every achievement has its own drawing rather than a milestone alias: '+d.id);
}
eq(unique.size,ids.length,'Every achievement has a different illustration URL');eq(new Set(Object.values(manifest).map(r=>r.sha256)).size,ids.length,'Every achievement has different actual image bytes');eq(sources.size,43,'Five original sheets and thirty-eight individual character sources are retained');
const uniqueBytes=[...unique].reduce((n,file)=>n+fs.statSync(path.join(root,'dist',file)).size,0);ok(uniqueBytes<2500000,'All unique award images stay below 2.5 MB and can load on demand');
console.log(`PASS: ${checks} all-${ids.length} runtime illustrations, generated sources, encoded alpha, dimensions, content hashes and no repeated illustrations checks.`);
