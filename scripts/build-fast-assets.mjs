// Bake the existing presentation once, rather than mask large photographs on
// every visitor's device. Originals remain available for enlarged inspection.
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';

const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist');
const dep=process.argv.indexOf('--dependencies');
const require=createRequire(dep>=0?path.resolve(process.argv[dep+1],'package.json'):path.join(root,'tools/asset-preparer/package.json'));
const sharp=require('sharp'),{createCanvas,Image,GlobalFonts}=require('@napi-rs/canvas');
try{GlobalFonts.registerFromPath('/System/Library/Fonts/Supplemental/Arial.ttf','Arial');}catch{}
const sandbox={window:{},URL,Blob,atob};
for(const name of ['photos','produce-assets','environment-assets','bag-assets'])vm.runInNewContext(await fs.readFile(path.join(dist,name+'.js'),'utf8'),sandbox);
globalThis.window={innerWidth:1024};globalThis.Image=Image;globalThis.document={createElement:()=>createCanvas(1,1)};
const {loadProductTexture}=await import('../src/product-presentation.js');
const output=path.join(dist,'assets/fast');await fs.mkdir(output,{recursive:true});
const manifest={products:{},bags:{},environment:{}},keep=new Set();
const hash=b=>createHash('sha256').update(b).digest('hex').slice(0,16);
async function save(id,size,buffer){
  const name=`${id}.${hash(buffer)}.${size}.webp`;keep.add(name);await fs.writeFile(path.join(output,name),buffer);return 'assets/fast/'+name;
}
let originalBytes=0,largeBytes=0,smallBytes=0;const originals=new Set();
for(const record of Object.values({...sandbox.window.ProductPhotos,...sandbox.window.ProducePhotos})){
  const source=path.join(dist,record.path);if(!originals.has(source)){originals.add(source);originalBytes+=(await fs.stat(source)).size;}
  let texture;await new Promise((resolve,reject)=>{texture=loadProductTexture({...record,path:source},ok=>ok?resolve():reject(new Error(record.id)));});
  const png=texture.image.toBuffer('image/png'),p=texture.userData.presentation;
  const encode=limit=>sharp(png).resize({width:limit,height:limit,fit:'inside',withoutEnlargement:true}).webp({quality:85,alphaQuality:100,effort:5}).toBuffer();
  const large=await encode(640),small=await encode(320),tiny=await sharp(png).resize({width:40,height:40,fit:'inside',withoutEnlargement:true}).webp({quality:48,alphaQuality:90}).toBuffer();
  manifest.products[record.id]={large:await save(record.id,640,large),small:await save(record.id,320,small),placeholder:'data:image/webp;base64,'+tiny.toString('base64'),width:texture.image.width,height:texture.image.height,aspect:p.aspect,outline:p.outline.map(pair=>pair.map(n=>+n.toFixed(5))),sideColor:p.sideColor.toArray().map(n=>+n.toFixed(5))};
  largeBytes+=large.length;smallBytes+=small.length;
}
for(const [key,record] of Object.entries(sandbox.window.GroceryBagAssets)){
  const image=await sharp(path.join(dist,record.path)).resize(512,512).webp({quality:90,alphaQuality:100,effort:5}).toBuffer();
  manifest.bags[key]={path:await save('bag-'+key,512,image)};
}
for(const [key,record] of Object.entries(sandbox.window.EnvironmentAssets)){
  const result={};for(const [name,limit] of [['large',1920],['small',1280]]){
    const image=await sharp(path.join(dist,record.path)).resize({width:limit,withoutEnlargement:true}).webp({quality:82,effort:5}).toBuffer();
    result[name]=await save(key,limit,image);
  }manifest.environment[key]=result;
}
for(const name of await fs.readdir(output))if(!keep.has(name))await fs.unlink(path.join(output,name));
await fs.writeFile(path.join(dist,'fast-assets.js'),'window.FastAssets='+JSON.stringify(manifest)+';\n');
const audit={products:Object.keys(manifest.products).length,originalPhotoBytes:originalBytes,shelf640Bytes:largeBytes,shelf320Bytes:smallBytes,manifestBytes:(await fs.stat(path.join(dist,'fast-assets.js'))).size,originalsPreserved:true};
await fs.writeFile(path.join(dist,'assets/fast-assets-audit.json'),JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit));
