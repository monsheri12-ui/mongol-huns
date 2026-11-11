(function(global){
  'use strict';
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  class ClientMessages {
    constructor(phone,{onReplace,onRefund,russian=()=>false}={}){
      this.phone=phone;this.onReplace=onReplace;this.onRefund=onRefund;this.russian=russian;this.order=null;this.service=null;
      this.tabs=document.createElement('nav');this.tabs.className='client-phone-tabs';this.tabs.setAttribute('aria-label','Утасны хэсэг');
      this.tabs.innerHTML='<button type="button" data-client-tab="voice" aria-pressed="true">Дуут захиалга</button><button type="button" data-client-tab="sms" aria-pressed="false">SMS · Хэрэглэгч</button>';
      phone.dialog.querySelector('.po-contact-header').after(this.tabs);
      this.panel=document.createElement('section');this.panel.className='client-sms-panel';this.panel.setAttribute('aria-label','Хэрэглэгчийн зурвас');phone.dialog.querySelector('.po-chat').append(this.panel);
      this.badge=document.createElement('span');this.badge.className='po-unread-badge client-unread-badge';this.badge.textContent='!';this.badge.hidden=true;phone.trigger.append(this.badge);
      this.notification=document.createElement('button');this.notification.type='button';this.notification.className='po-incoming client-sms-notification';this.notification.hidden=true;
      this.notification.innerHTML='<span class="po-incoming-icon" aria-hidden="true">SMS</span><span><small>ХЭРЭГЛЭГЧЭЭС ЗУРВАС ИРЛЭЭ</small><strong></strong><span>Утсаа нээж уншаарай.</span></span><b aria-hidden="true">↗</b>';document.body.append(this.notification);
      this.tabs.addEventListener('click',e=>{const b=e.target.closest('[data-client-tab]');if(b)this.showTab(b.dataset.clientTab);});
      this.panel.addEventListener('click',e=>{const b=e.target.closest('[data-service-action]');if(!b||b.disabled)return;const callback=b.dataset.serviceAction==='replace'?this.onReplace:this.onRefund;callback?.(b.dataset.complaint);});
      this.notification.addEventListener('click',()=>this.open());
      phone.trigger.addEventListener('click',()=>{if(!this.badge.hidden)this.open();});
    }
    setContext(order,service){
      const changed=this.order?.id!==order.id,hasVoice=!!this.phone.order;this.order=order;this.service=service;
      this.tabs.hidden=!hasVoice;
      this.tabs.querySelector('[data-client-tab="voice"]').textContent=service.hadComplaint?'Анхны дуут захиалга':'Дуут захиалга';
      if(!hasVoice){this.phone.ui.customer.textContent=order.customer;this.phone.ui.avatar.textContent=order.customer.slice(0,1);this.phone.ui['small-avatar'].textContent=order.customer.slice(0,1);}
      if(changed||!hasVoice)this.showTab(hasVoice?'voice':'sms');
      this.render();if(!global.GroceryFulfilment.hasPending(service)){this.badge.hidden=true;this.notification.hidden=true;}return this;
    }
    showTab(tab){const sms=tab==='sms';this.phone.ui.dismiss.querySelector('span').textContent=sms?'Хаах':'Дуут зурвасыг хаах';this.phone.dialog.classList.toggle('client-sms-open',sms);this.tabs.querySelectorAll('[data-client-tab]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.clientTab==='sms')===sms)));this.phone.dialog.querySelector('.po-contact-title p').textContent=sms?'Хэрэглэгчийн зурвас':'Дуут захиалга';if(sms){this.phone.stop();this.badge.hidden=true;this.notification.hidden=true;}return this;}
    notify(){if(!this.order||!global.GroceryFulfilment.hasPending(this.service))return;this.badge.hidden=false;this.notification.querySelector('strong').textContent=this.order.customer;this.notification.hidden=false;}
    open(){this.showTab('sms');this.phone.open();return true;}
    render(){
      if(!this.order||!this.service)return;
      const G=global.GroceryGame,R=global.GroceryRussian,F=global.GroceryFulfilment,ru=this.russian();
      if(!this.service.complaints.length){this.panel.innerHTML='<p class="client-empty">Хэрэглэгчээс зурвас ирээгүй байна.</p>';return;}
      this.panel.innerHTML=this.service.complaints.map(c=>{
        const name=G.BY_ID[c.productId].name,amount=G.formatAmount(c.productId,c.amount),bad=c.reason==='expired'?'хугацаа нь дууссан байна':'муудсан байна';
        const text=c.reason==='damaged'?'Сайн уу. Өндөгний хайрцагт хагарсан өндөг байна. Өөр хайрцгаар солих эсвэл мөнгийг нь буцааж өгнө үү.':`Сайн уу. «${name}» (${amount}) ${bad}. Шинэ бараагаар солих эсвэл мөнгийг нь буцааж өгнө үү.`;
        const textRu=c.reason==='damaged'?'В коробке есть треснувшие яйца. Пожалуйста, замените коробку или верните за неё деньги.':`В заказе получен ${c.reason==='expired'?'товар с истёкшим сроком годности':'испорченный товар'}: ${R.name(c.productId)} — ${R.amount(G.BY_ID[c.productId],c.amount)}. Пожалуйста, замените его или верните деньги за этот товар.`;
        const pending=['open','collecting'].includes(c.status);
        const outgoing=c.status==='refunded'?`Энэ барааны ${c.refund.toLocaleString('en-US')} ₮-ийг буцаалаа.`:c.status==='replaced'?'Шинэ барааг хүргэж өглөө.':'Шинэ барааг бэлтгэж байна.';
        const outgoingRu=c.status==='refunded'?`Оформлен возврат за этот товар: ${c.refund.toLocaleString('ru-RU')} ₮.`:c.status==='replaced'?'Свежая замена доставлена.':'Собираем свежую замену.';
        return `<article class="client-message"><div class="client-message-meta">${esc(this.order.customer)} · № ${F.orderNumber(this.order)}</div><p data-learning lang="mn">${esc(text)}</p>${c.attempts&&pending?'<p data-learning lang="mn">Дахин ирсэн бараа бас шаардлага хангахгүй байна.</p>':''}${ru?`<p class="client-message-ru" lang="ru">${esc(textRu)}</p>`:''}<div class="client-item">${esc(name)} · ${esc(amount)}</div>${pending?`<div class="client-actions"><button data-service-action="replace" data-complaint="${esc(c.id)}" ${c.status==='collecting'||this.service.activeId&&this.service.activeId!==c.id?'disabled':''}>${c.status==='collecting'?'Сольж өгөх барааг бэлтгэж байна':'Шинэ бараагаар солих'}</button><button data-service-action="refund" data-complaint="${esc(c.id)}">Мөнгийг буцаах · ${c.refund.toLocaleString('en-US')} ₮</button></div>`:''}</article>${c.status!=='open'?`<article class="client-reply"><p data-learning lang="mn">${esc(outgoing)}</p>${ru?`<p lang="ru">${esc(outgoingRu)}</p>`:''}</article>`:''}`;
      }).join('');
    }
  }
  global.ClientMessages=ClientMessages;
})(window);
