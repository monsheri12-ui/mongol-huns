// Compress the eight approved selector illustrations into one embedded atlas.
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..'),dep=process.argv.indexOf('--dependencies');
const require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json'));
const sharp=require('sharp'),context={window:{}};
vm.runInNewContext(await fs.readFile(path.join(root,'dist/achievement-art.js'),'utf8'),context);
const ids=['full-shift','orders-1','audio-orders-1','text-orders-1','level-0','level-1','level-2','level-3'];
const cell=96,columns=4,rows=2,items={},tiles=[],sources={};
for(const [i,id] of ids.entries()){
  const source=context.window.GroceryAchievementArt[id].path,x=i%columns,y=Math.floor(i/columns);
  tiles.push({input:await sharp(path.join(root,'dist',source)).resize(cell,cell).png().toBuffer(),left:x*cell,top:y*cell});
  items[id]=[x,y];sources[id]=source;
}
const atlas=await sharp({create:{width:cell*columns,height:cell*rows,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(tiles).webp({quality:84,alphaQuality:100,effort:5}).toBuffer();
const runtime={src:'data:image/webp;base64,'+atlas.toString('base64'),columns,rows,items};
await fs.writeFile(path.join(root,'dist/choice-art.js'),'/* Embedded selector atlas: no image request when a choice changes. */\n(function(root){root.GroceryChoiceArt='+JSON.stringify(runtime)+';if(typeof root.Image==="function"){const image=new root.Image();image.src=root.GroceryChoiceArt.src;image.decode?.().catch(()=>{});}})(window);\n');
await fs.writeFile(path.join(root,'dist/assets/choice-art-manifest.json'),JSON.stringify({cell,columns,rows,bytes:atlas.length,sha256:createHash('sha256').update(atlas).digest('hex'),sources,items,derivedFromApprovedAchievementArt:true},null,2)+'\n');
console.log(JSON.stringify({illustrations:ids.length,atlasBytes:atlas.length,embedded:true,requestsOnSelection:0}));
