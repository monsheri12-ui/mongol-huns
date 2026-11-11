// Shared milestone art is explicit in the manifest, not a new drawing per alias.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
const A=createRequire(import.meta.url)('../dist/achievements.js');
const FAMILIES=['expiry','shelf','fine','salary','positive','negative','timer','challenge'];
function familyFor(d){
  if(d.id==='dates-any-1')return 'expiry';
  if(d.group==='timing')return d.id.startsWith('challenge-')?'challenge':'timer';
  if(d.id.startsWith('shelf-return-'))return 'shelf';
  if(/^(first-fine|large-fine-|biggest-fine|disorder-fine)/.test(d.id))return 'fine';
  if(/^(first-salary|earnings)/.test(d.id))return 'salary';
  if(d.id.startsWith('positive-review-'))return 'positive';
  if(d.id.startsWith('negative-review-'))return 'negative';
  throw Error('Missing generated art family for '+d.id);
}
export async function assertExtraSources(root,sharp){
  for(const family of FAMILIES){
    const source=path.join(root,'art/achievement-stickers/extra',family+'.png'),metadata=await sharp(source).metadata(),stats=await sharp(source).stats();
    if(metadata.format!=='png'||!metadata.hasAlpha||stats.channels[3].min!==0)throw Error(`Generated ${family} original must be a PNG with real transparent margins.`);
  }
}
export async function buildExtraAchievementArt({root,sharp,manifest,runtime,keep}){
  const groups=new Map();for(const d of A.DEFINITIONS){if(manifest[d.id])continue;const family=familyFor(d);if(!groups.has(family))groups.set(family,[]);groups.get(family).push(d);}
  const timerText=await fs.readFile(path.join(root,'dist/timer-art.js'),'utf8'),timerMatch=timerText.trim().match(/^window\.GroceryTimerArt=(\{.*\});$/s);
  if(!timerMatch)throw Error('Expected a JSON timer artwork mapping.');const timerArt=JSON.parse(timerMatch[1]);
  for(const [family,definitions] of groups){
    const primary=definitions[0].id,source=`art/achievement-stickers/extra/${family}.png`,isTimer=family==='timer'||family==='challenge';
    const buffer=isTimer?await fs.readFile(path.join(root,'dist',timerArt[family==='timer'?'normal':'challenge'])):await sharp(path.join(root,source)).trim({background:'#00000000',threshold:1}).resize(240,240,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).extend({top:8,bottom:8,left:8,right:8,background:{r:0,g:0,b:0,alpha:0}}).webp({quality:90,alphaQuality:100,effort:5}).toBuffer();
    const sha256=createHash('sha256').update(buffer).digest('hex'),name=`${primary}.${sha256.slice(0,16)}.256.webp`,runtimePath=isTimer?timerArt[family==='timer'?'normal':'challenge']:'assets/achievements/'+name;
    const metadata=await sharp(buffer).metadata();if(metadata.width!==256||metadata.height!==256)throw Error('Achievement art must be 256 × 256: '+family);
    if(!isTimer){keep.add(name);await fs.writeFile(path.join(root,'dist/assets/achievements',name),buffer);}
    for(const d of definitions){runtime[d.id]={path:runtimePath};manifest[d.id]={...runtime[d.id],width:256,height:256,bytes:buffer.length,sha256,source,generated:true,family,...(d.id!==primary?{aliasOf:primary}:{})};}
  }
  if(A.DEFINITIONS.some(d=>!runtime[d.id]||!manifest[d.id])||Object.keys(runtime).length!==A.DEFINITIONS.length)throw Error('Every defined achievement must have generated artwork.');
}
export async function writeAchievementArt({root,manifest,runtime,keep}){
  for(const name of await fs.readdir(path.join(root,'dist/assets/achievements')))if(!keep.has(name))await fs.unlink(path.join(root,'dist/assets/achievements',name));
  await fs.writeFile(path.join(root,'dist/achievement-art.js'),'window.GroceryAchievementArt='+JSON.stringify(runtime)+';\n');
  await fs.writeFile(path.join(root,'dist/assets/achievement-art-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const root=path.resolve(import.meta.dirname,'..'),dep=process.argv.indexOf('--dependencies'),require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json')),sharp=require('sharp');
  await assertExtraSources(root,sharp);
  const approved=JSON.parse(await fs.readFile(path.join(root,'dist/assets/achievement-art-manifest.json'),'utf8')),manifest=Object.fromEntries(Object.entries(approved).filter(([,r])=>/^art\/achievement-stickers\/sheet-[1-5](?:-v2)?\.png$/.test(r.source)&&r.cell&&r.crop));
  if(Object.keys(manifest).length!==50)throw Error('Keep the approved 50 original sheet illustrations.');
  const runtime=Object.fromEntries(Object.entries(manifest).map(([id,r])=>[id,{path:r.path}])),keep=new Set(Object.values(manifest).map(r=>path.basename(r.path)));
  await fs.mkdir(path.join(root,'dist/assets/achievements'),{recursive:true});
  await buildExtraAchievementArt({root,sharp,manifest,runtime,keep});await writeAchievementArt({root,manifest,runtime,keep});
  console.log(JSON.stringify({stickers:Object.keys(manifest).length,uniqueIllustrations:new Set(Object.values(manifest).map(r=>r.sha256)).size}));
}
