// Rebuild approved stickers without assigning their cells by definition order.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {assertExtraSources,buildExtraAchievementArt,writeAchievementArt,REVISED_IDS} from './build-extra-achievement-art.mjs';
const root=path.resolve(import.meta.dirname,'..'),dep=process.argv.indexOf('--dependencies');
const require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json'));
const sharp=require('sharp'),A=createRequire(import.meta.url)('../dist/achievements.js');
const source=path.join(root,'art/achievement-stickers'),out=path.join(root,'dist/assets/achievements');
const approved=JSON.parse(await fs.readFile(path.join(root,'art/achievement-stickers/original-manifest.json'),'utf8'));
const original=Object.entries(approved).filter(([,r])=>/^art\/achievement-stickers\/sheet-[1-5](?:-v2)?\.png$/.test(r.source)&&r.cell&&r.crop);
if(original.length!==50)throw Error('The approved 50 sheet stickers, cells and crop rectangles must be retained in the manifest.');
const cellKeys=new Set();for(const [id,r] of original){
  if(!A.DEFINITIONS.some(d=>d.id===id))throw Error('Unknown original achievement: '+id);
  const key=r.source+':'+r.cell.row+':'+r.cell.column;
  if(cellKeys.has(key))throw Error('Duplicate approved sheet cell: '+key);cellKeys.add(key);
  if(r.cell.columns!==5||r.cell.rows!==2||!Number.isInteger(r.cell.column)||r.cell.column<0||r.cell.column>4||!Number.isInteger(r.cell.row)||r.cell.row<0||r.cell.row>1)throw Error('Invalid approved cell: '+id);
}
// Preflight every extra source before writing or pruning runtime files.
await assertExtraSources(root,sharp);
await fs.mkdir(out,{recursive:true});
const manifest={},runtime={},keep=new Set(),tiles=[],sourceChecks=new Set();
for(const [id,record] of original){
  const file=path.join(root,record.source);
  if(!sourceChecks.has(file)){
    const metadata=await sharp(file).metadata(),stats=await sharp(file).stats();
    if(!metadata.hasAlpha||stats.channels[3].min!==0)throw Error(`Sheet must have real transparent margins: ${record.source}`);
    sourceChecks.add(file);
  }
  // Accepted cell/crop is the source of truth. New definitions may be inserted
  // anywhere without changing any of the approved 50 illustrations.
  const buffer=await sharp(file).extract(record.crop).resize(240,240,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).extend({top:8,bottom:8,left:8,right:8,background:{r:0,g:0,b:0,alpha:0}}).webp({quality:86,alphaQuality:100,effort:5}).toBuffer();
  const sha256=createHash('sha256').update(buffer).digest('hex');
  if(sha256!==record.sha256)throw Error(`Approved artwork bytes changed for ${id}; keep the accepted source/crop and Sharp version instead of overwriting the illustration.`);
  const name=`${id}.${sha256.slice(0,16)}.256.webp`;keep.add(name);await fs.writeFile(path.join(out,name),buffer);
  const sheet=Number(record.source.match(/sheet-(\d)/)[1]),index=(sheet-1)*10+record.cell.row*5+record.cell.column;
  tiles.push({input:await sharp(buffer).resize(160,160).png().toBuffer(),left:index%10*170,top:Math.floor(index/10)*170});
  if(REVISED_IDS.has(id))continue;
  runtime[id]={path:'assets/achievements/'+name};manifest[id]={...record,...runtime[id],width:256,height:256,bytes:buffer.length,sha256,generated:true};
}
await buildExtraAchievementArt({root,sharp,manifest,runtime,keep});
await writeAchievementArt({root,manifest,runtime,keep});
await sharp({create:{width:1700,height:850,channels:4,background:'#fff6e4'}}).composite(tiles).png().toFile(path.join(source,'collection-preview.png'));
console.log(JSON.stringify({stickers:Object.keys(runtime).length,uniqueIllustrations:new Set(Object.values(manifest).map(r=>r.sha256)).size,allOriginalSheetsPreserved:true,loadedOnlyWhenCollectionIsOpened:true}));
