'use strict';
const assert=require('node:assert/strict'),B=require('../dist/produce-bag.js'),G=require('../dist/game-core.js');
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
const base={hasBag:true,grams:1000,answerOK:true,tied:true};
ok(B.canStore(base),'A weighed, checked, tied bag is ready for the basket');
for(const state of [{...base,hasBag:false},{...base,grams:0},{...base,answerOK:false},{...base,tied:false}])ok(!B.canStore(state),'Every required packing step is real');
for(const product of G.PRODUCTS.filter(p=>p.category==='produce'||p.soldByWeight||['chocolate-box','curd-candy'].includes(p.id))){
 for(const grams of [0,5,50,100,250,500,1000,2600,10000]){
  const count=B.fillCount(product.id,grams),cells=B.cells(count);ok(count>=0&&count<=4,'Portion visual has bounded item count');
  for(const cell of cells){ok(cell.left>=B.SAFE.left&&cell.top>=B.SAFE.top,'Food starts inside the safe film area');ok(cell.left+cell.width<=B.SAFE.left+B.SAFE.width+1e-9&&cell.top+cell.height<=B.SAFE.top+B.SAFE.height+1e-9,'Even long silhouettes fit wholly within the bag');}
 }
}
ok(B.fillCount('banana',1000)===1,'An already photographed banana bunch is not duplicated beyond the bag');
ok(B.stage({...base,tied:false})==='tie','Checking the language answer leads to tying, not directly to the basket');
console.log(`PASS: ${checks} all-product bag containment and required tying checks.`);
