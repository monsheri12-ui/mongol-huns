import assert from 'node:assert/strict';
import {rowShuffle} from '../src/shelf-shuffle.js';
let checks=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);},ok=(v,m)=>{checks++;assert.ok(v,m);};
const products=Array.from({length:23},(_,i)=>({id:'product-'+i,price:100+i,model:'model-'+i}));
for(const columns of [1,2,4,7,9])for(const seed of [1,2,150,4294967295]){
 const before=JSON.stringify(products),shuffled=rowShuffle(products,columns,seed,'pantry');eq(JSON.stringify(products),before,'Shuffling does not mutate inventory');eq(shuffled,rowShuffle(products,columns,seed,'pantry'),'Saved seed restores exactly the same layout');
 for(let offset=0;offset<products.length;offset+=columns){const old=products.slice(offset,offset+columns),next=shuffled.slice(offset,offset+columns);eq(next.map(p=>p.id).sort(),old.map(p=>p.id).sort(),'Products stay in the same physical row');for(const item of next)ok(old.includes(item),'The model, product and price remain one shared family object');}
}
eq(rowShuffle(products,7,0),products,'Legacy zero-seed stock keeps the approved layout');ok(new Set(Array.from({length:15},(_,i)=>rowShuffle(products,7,i+1,'pantry').map(p=>p.id).join())).size>10,'Different shifts produce varied row arrangements');
console.log(`PASS: ${checks} stable, per-row product/price/model shuffle checks.`);
