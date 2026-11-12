// Technical contact sheet: no product artwork is redrawn or cropped.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';

const root=path.resolve(import.meta.dirname,'..');
const dep=process.argv.indexOf('--dependencies');
const require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json'));
const sharp=require('sharp');
const A=createRequire(import.meta.url)('../dist/achievements.js');
const sourceDirectory=path.join(root,'art/achievement-stickers/unique');
const ids=(await fs.readdir(sourceDirectory)).filter(name=>name.endsWith('.png')).map(name=>name.slice(0,-4));
const unknown=ids.filter(id=>!A.DEFINITIONS.some(d=>d.id===id));
if(unknown.length)throw Error('Unknown achievement artwork IDs: '+unknown.join(', '));
if(ids.length!==26)throw Error(`Wait for all 26 individual new PNGs before rendering this contact sheet; currently ${ids.length} are available.`);
const definitions=A.DEFINITIONS.filter(d=>ids.includes(d.id));
const manifest=JSON.parse(await fs.readFile(path.join(root,'dist/assets/achievement-art-manifest.json'),'utf8'));
const columns=5,tileWidth=210,tileHeight=250,imageSize=182;
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
function wrap(text){
  const lines=[];let current='';
  for(const word of text.split(/\s+/)){
    const next=current?current+' '+word:word;
    if(current&&next.length>22){lines.push(current);current=word;}else current=next;
  }
  if(current)lines.push(current);
  if(lines.length>3)throw Error('Achievement title requires more than three readable label lines: '+text);
  return lines;
}
const layers=[],inputs=[];
for(let index=0;index<definitions.length;index++){
  const d=definitions[index],sourceRelative=`art/achievement-stickers/unique/${d.id}.png`,entry=manifest[d.id];
  // Use the actual runtime WebP once the new manifest has been built. Before
  // that, use the new master instead of showing an obsolete family alias.
  const source=entry?.source===sourceRelative?path.join(root,'dist',entry.path):path.join(root,sourceRelative);
  const metadata=await sharp(source).metadata();
  if(!metadata.hasAlpha)throw Error('Artwork must preserve alpha: '+d.id);
  const image=await sharp(source).resize(imageSize,imageSize,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toBuffer();
  const left=index%columns*tileWidth,top=Math.floor(index/columns)*tileHeight;
  layers.push({input:image,left:left+Math.floor((tileWidth-imageSize)/2),top:top+7});
  const lines=wrap(d.ru),label=`<svg xmlns="http://www.w3.org/2000/svg" width="${tileWidth}" height="${tileHeight}"><text fill="#365440" font-family="Arial,DejaVu Sans,sans-serif" font-size="16" font-weight="600" text-anchor="middle">${lines.map((line,i)=>`<tspan x="${tileWidth/2}" y="${205+i*18}">${escape(line)}</tspan>`).join('')}</text></svg>`;
  layers.push({input:Buffer.from(label),left,top});
  inputs.push({id:d.id,title:d.ru,source:path.relative(root,source),lines});
}
const destination=path.resolve(root,'../../outputs/unique-achievements/new-26-preview.png');
await fs.mkdir(path.dirname(destination),{recursive:true});
await sharp({create:{width:columns*tileWidth,height:Math.ceil(definitions.length/columns)*tileHeight,channels:4,background:'#fff6e4'}}).composite(layers).png().toFile(destination);
console.log(JSON.stringify({count:definitions.length,columns,tileWidth,tileHeight,file:destination,inputs},null,2));
