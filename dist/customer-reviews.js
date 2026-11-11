(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryReviews=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const POSITIVE=[
    ['Баярлалаа! Бүх бараа бүрэн, шинэ байна.','Спасибо! Все товары на месте и свежие.'],
    ['Захиалгыг зөв бэлтгэсэн байна. Маш их баярлалаа!','Заказ собран правильно. Большое спасибо!'],
    ['Савлагаа цэвэрхэн, бараа гэмтээгүй байна. Баярлалаа.','Всё аккуратно упаковано, товары целы. Спасибо.'],
    ['Хүссэн бараа, тоо хэмжээ яг таарлаа. Сайн ажиллалаа!','И товары, и количество именно те, что я просил. Отличная работа!']
  ];
  const NEGATIVE={missing:['Захиалсан бараанаас дутуу байна. Дараагийн удаа жагсаалтыг сайн шалгаарай.','Часть заказанных товаров отсутствует. В следующий раз внимательнее сверьтесь со списком.'],expired:['Хугацаа нь дууссан бараа ирсэнд сэтгэл дундуур байна. Дараагийн удаа хугацааг нь шалгаарай.','Я расстроен, что получил просроченный товар. Пожалуйста, проверяйте сроки годности.'],damaged:['Зарим бараа гэмтсэн байна. Савлагаа, чанарыг нь сайн шалгаарай.','Некоторые товары повреждены. Пожалуйста, внимательнее проверяйте упаковку и качество.'],spoiled:['Муудсан бараа ирсэн байна. Дараагийн удаа чанарыг нь сайн шалгаарай.','В заказе оказался испорченный товар. Пожалуйста, внимательнее проверяйте качество.']};
  const valid=k=>typeof k==='string'&&/^[a-z0-9:-]{1,160}$/.test(k);
  function normalize(input){const ids=new Set(),reviews=[];for(const r of Array.isArray(input?.reviews)?input.reviews:[]){if(!valid(r?.id)||ids.has(r.id)||!['positive','negative'].includes(r.type)||typeof r.mn!=='string'||typeof r.ru!=='string')continue;ids.add(r.id);reviews.push({id:r.id,type:r.type,mn:r.mn.slice(0,700),ru:r.ru.slice(0,700),customer:typeof r.customer==='string'?r.customer.slice(0,80):'',number:Number.isSafeInteger(r.number)&&r.number>0?r.number:1,read:r.read===true});}return {reviews:reviews.slice(-500),considered:[...new Set((Array.isArray(input?.considered)?input.considered:[]).filter(valid))].slice(-5000)};}
  function finish(input,{key,seed=1,order,reason=null}){let state=normalize(input);if(!valid(key)||state.considered.includes(key))return {state,review:null};state={...state,considered:[...state.considered,key].slice(-5000)};let roll=(Math.imul((seed>>>0)^order.id,2246822519)+3266489917)>>>0;roll^=roll>>>13;roll>>>=0;if(roll%100>=55)return {state,review:null};const type=reason?'negative':'positive',copy=reason?NEGATIVE[reason]||NEGATIVE.spoiled:POSITIVE[(roll>>>8)%POSITIVE.length],review={id:'review:'+key,type,mn:copy[0],ru:copy[1],customer:order.customer,number:order.number||order.id,read:false};return {state:{...state,reviews:[...state.reviews,review].slice(-500)},review};}
  const read=input=>{const state=normalize(input);return {...state,reviews:state.reviews.map(r=>({...r,read:true}))};};
  return {POSITIVE,NEGATIVE,normalize,finish,read};
});
