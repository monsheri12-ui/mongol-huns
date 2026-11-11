(function(global){
  'use strict';
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  class PreparationDesk {
    constructor({getOrder,getPrep,setPrep,onReady,russian=()=>false}){
      Object.assign(this,{getOrder,getPrep,setPrep,onReady,russian});this.stage=0;
      this.dialog=document.getElementById('prep-dialog');
      this.dialog.querySelector('[data-prep-take]').addEventListener('click',()=>{const F=global.GroceryFulfilment,p=this.getPrep(),o=this.getOrder();this.setPrep({...p,bags:Math.min(F.requiredBags(o),p.bags+1)});this.render();});
      this.dialog.querySelector('[data-prep-return]').addEventListener('click',()=>{const p=this.getPrep();this.setPrep({...p,bags:Math.max(0,p.bags-1)});this.render();});
      this.dialog.querySelector('[data-prep-next]').addEventListener('click',()=>{this.stage=1;this.render();});
      this.dialog.querySelector('#prep-label-form').addEventListener('submit',e=>{e.preventDefault();const p={...this.getPrep(),number:this.dialog.querySelector('#prep-number').value,customer:this.dialog.querySelector('#prep-customer').value};this.setPrep(p);if(global.GroceryFulfilment.labelMatches(this.getOrder(),p)){this.stage=2;this.render();}else this.message(this.russian()?'Номер заказа или имя не совпадают. Сверьтесь с заказом.':'Захиалгын дугаар эсвэл нэр таарахгүй байна. Захиалгаа дахин хараарай.');});
      this.dialog.querySelectorAll('[data-prep-transport]').forEach(b=>b.addEventListener('click',()=>{const p={...this.getPrep(),transport:b.dataset.prepTransport};this.setPrep(p);this.render();if(p.transport!==global.GroceryFulfilment.transportFor(this.getOrder()))this.message(this.russian()?'Для этого количества выберите другой вариант. До 6 упаковок — корзина, больше — тележка.':'Энэ хэмжээнд өөрийг сонгоорой. 6 хүртэл савлагаанд сагс, түүнээс олон бол тэрэг авна.');}));
      this.dialog.querySelectorAll('[data-prep-back]').forEach(b=>b.addEventListener('click',()=>{this.stage=Math.max(0,this.stage-1);this.render();}));
      this.dialog.querySelector('[data-prep-finish]').addEventListener('click',()=>{if(!global.GroceryFulfilment.prepared(this.getOrder(),this.getPrep()))return;this.dialog.close();this.onReady();});
    }
    message(value){this.dialog.querySelector('#prep-feedback').textContent=value;}
    open(){const F=global.GroceryFulfilment,o=this.getOrder(),p=this.getPrep();this.stage=p.bags<F.requiredBags(o)?0:!F.labelMatches(o,p)?1:2;this.render();if(!this.dialog.open)this.dialog.showModal();}
    render(){
      const F=global.GroceryFulfilment,o=this.getOrder(),p=this.getPrep(),ru=this.russian(),needed=F.requiredBags(o),units=F.expectedUnits(o);
      this.message('');this.dialog.querySelector('#prep-reference').innerHTML=`<span>${ru?'Заказ':'Захиалга'} № <b data-learning>${F.orderNumber(o)}</b></span><span>${ru?'Клиент':'Захиалагч'}: <b data-learning>${esc(o.customer)}</b></span>`;
      this.dialog.querySelector('#prep-step').textContent=`${this.stage+1} / 3`;
      this.dialog.querySelectorAll('[data-prep-stage]').forEach(e=>{e.hidden=Number(e.dataset.prepStage)!==this.stage;});
      this.dialog.querySelector('#prep-bags-status').textContent=ru?`Взято пакетов: ${p.bags} из ${needed}`:`Авсан уут: ${p.bags} / ${needed}`;
      this.dialog.querySelector('[data-prep-take]').disabled=p.bags>=needed;this.dialog.querySelector('[data-prep-return]').disabled=!p.bags;this.dialog.querySelector('[data-prep-next]').disabled=p.bags<needed;
      this.dialog.querySelector('#prep-number').value=p.number;this.dialog.querySelector('#prep-customer').value=p.customer;
      this.dialog.querySelector('#prep-volume').textContent=ru?`Число упаковок по заказу: ${units}. Корзина — до 6, тележка — от 7.`:`Захиалгад ойролцоогоор ${units} савлагаа байна. 6 хүртэл бол сагс, 6-аас олон бол тэрэг авна.`;
      this.dialog.querySelectorAll('[data-prep-transport]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.prepTransport===p.transport)));
      this.dialog.querySelector('[data-prep-finish]').disabled=!F.prepared(o,p);
      this.dialog.querySelector('#prep-illustration').innerHTML=Array.from({length:Math.max(1,p.bags)},(_,i)=>`<div class="prep-bag ${i>=p.bags?'prep-bag-empty':''}"><i class="prep-bag-handle"></i><div class="paper-bag"><span class="prep-paper-label">${F.labelMatches(o,p)?`<b data-learning>№ ${F.orderNumber(o)}</b><span data-learning>${esc(o.customer)}</span><small>${i+1}/${needed}</small>`:'<span>№ _____</span><span>________</span>'}</span></div></div>`).join('');
    }
  }
  global.PreparationDesk=PreparationDesk;
})(window);
