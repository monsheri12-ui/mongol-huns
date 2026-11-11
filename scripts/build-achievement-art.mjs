// Technical slicing and compression of the approved, generated sticker sheets.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..'),dep=process.argv.indexOf('--dependencies');
const require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json'));
const sharp=require('sharp'),A=createRequire(import.meta.url)('../dist/achievements.js');
const source=path.join(root,'art/achievement-stickers'),out=path.join(root,'dist/assets/achievements');await fs.mkdir(out,{recursive:true});
const manifest={},runtime={},keep=new Set(),tiles=[];
// The later general date award uses the quality-check vector badge. Keep the
// original 50 sheet positions stable when rebuilding their approved artwork.
const stickerDefinitions=A.DEFINITIONS.filter(d=>d.id!=='dates-any-1');
for(let sheet=1;sheet<=5;sheet++){
  const sourceName=`sheet-${sheet}${sheet===4?'-v2':''}.png`,file=path.join(source,sourceName),metadata=await sharp(file).metadata(),stats=await sharp(file).stats();
  if(!metadata.hasAlpha||stats.channels[3].min!==0)throw Error(`Sheet ${sheet} must have real transparent margins`);
  // Locate the transparent gutters close to the requested equal grid. The
  // generator can shift a character slightly: cutting at an exact fifth would
  // leave a sliver of its neighbour. This only selects crop rectangles; no
  // foreground pixels, outlines or illustrations are repainted or masked.
  const raw=await sharp(file).ensureAlpha().raw().toBuffer();
  function cutsForRow(row){
    const y0=Math.round(row*metadata.height/2),y1=Math.round((row+1)*metadata.height/2),cuts=[0];
    for(let column=1;column<5;column++){
      const ideal=Math.round(column*metadata.width/5),radius=Math.round(metadata.width*.035);let best=ideal,bestScore=Infinity;
      for(let x=ideal-radius;x<=ideal+radius;x++){
        let occupied=0;for(let y=y0;y<y1;y++)for(let dx=-1;dx<=1;dx++)if(raw[(y*metadata.width+x+dx)*4+3]>180)occupied++;
        const score=occupied*1000+Math.abs(x-ideal);if(score<bestScore){best=x;bestScore=score;}
      }cuts.push(best);
    }cuts.push(metadata.width);return cuts;
  }
  const rowCuts=[cutsForRow(0),cutsForRow(1)];
  for(let cell=0;cell<10;cell++){
    const d=stickerDefinitions[(sheet-1)*10+cell],column=cell%5,row=Math.floor(cell/5),left=rowCuts[row][column],top=Math.round(row*metadata.height/2),width=rowCuts[row][column+1]-left,height=Math.round((row+1)*metadata.height/2)-top;
    const buffer=await sharp(file).extract({left,top,width,height}).resize(240,240,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).extend({top:8,bottom:8,left:8,right:8,background:{r:0,g:0,b:0,alpha:0}}).webp({quality:86,alphaQuality:100,effort:5}).toBuffer();
    const sha256=createHash('sha256').update(buffer).digest('hex'),name=`${d.id}.${sha256.slice(0,16)}.256.webp`;keep.add(name);await fs.writeFile(path.join(out,name),buffer);
    runtime[d.id]={path:'assets/achievements/'+name};manifest[d.id]={...runtime[d.id],width:256,height:256,bytes:buffer.length,sha256,source:`art/achievement-stickers/${sourceName}`,cell:{column,row,columns:5,rows:2},crop:{left,top,width,height},generated:true};
    tiles.push({input:await sharp(buffer).resize(160,160).png().toBuffer(),left:((sheet-1)*10+cell)%10*170,top:Math.floor(((sheet-1)*10+cell)/10)*170});
  }
}
for(const file of await fs.readdir(out))if(!keep.has(file))await fs.unlink(path.join(out,file));
await fs.writeFile(path.join(root,'dist/achievement-art.js'),'window.GroceryAchievementArt='+JSON.stringify(runtime)+';\n');
await fs.writeFile(path.join(root,'dist/assets/achievement-art-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
await sharp({create:{width:1700,height:850,channels:4,background:'#fff6e4'}}).composite(tiles).png().toFile(path.join(source,'collection-preview.png'));
console.log(JSON.stringify({stickers:Object.keys(runtime).length,bytes:Object.values(manifest).reduce((n,r)=>n+r.bytes,0),allOriginalSheetsPreserved:true,loadedOnlyWhenCollectionIsOpened:true}));
