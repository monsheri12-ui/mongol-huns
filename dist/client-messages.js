(function(global){
  'use strict';
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  class ClientMessages {
    constructor(phone,{onReplace,onRefund,russian=()=>false,account=()=>({}),reviews=()=>[],onReviewsRead=()=>{}}={}){
      this.phone=phone;this.onReplace=onReplace;this.onRefund=onRefund;this.russian=russian;this.order=null;this.service=null;
      this.account=account;this.reviews=reviews;this.onReviewsRead=onReviewsRead;this.accountLimit=50;this.reviewLimit=20;
      this.tabs=document.createElement('nav');this.tabs.className='client-phone-tabs';this.tabs.setAttribute('aria-label','Утасны хэсэг');
      this.tabs.dataset.learning='';this.tabs.innerHTML='<button type="button" data-client-tab="voice" aria-pressed="true">Захиалга</button><button type="button" data-client-tab="sms" aria-pressed="false">SMS</button><button type="button" data-client-tab="account" aria-pressed="false">Орлого</button>';
      phone.dialog.querySelector('.po-contact-header').after(this.tabs);
      this.panel=document.createElement('section');this.panel.className='client-sms-panel';this.panel.setAttribute('aria-label','Хэрэглэгчийн зурвас');phone.dialog.querySelector('.po-chat').append(this.panel);
      this.accountPanel=document.createElement('section');this.accountPanel.className='client-account-panel';this.accountPanel.dataset.learning='';phone.dialog.querySelector('.po-chat').append(this.accountPanel);
      this.badge=document.createElement('span');this.badge.className='po-unread-badge client-unread-badge';this.badge.textContent='!';this.badge.hidden=true;phone.trigger.append(this.badge);
      this.notification=document.createElement('button');this.notification.type='button';this.notification.className='po-incoming client-sms-notification';this.notification.hidden=true;
      this.notification.innerHTML='<span class="po-incoming-icon" aria-hidden="true">SMS</span><span><small>ХЭРЭГЛЭГЧЭЭС ЗУРВАС ИРЛЭЭ</small><strong></strong><span>Утсаа нээж уншаарай.</span></span><b aria-hidden="true">↗</b>';document.body.append(this.notification);
      this.tabs.addEventListener('click',e=>{const b=e.target.closest('[data-client-tab]');if(b)this.showTab(b.dataset.clientTab);});
      this.panel.addEventListener('click',e=>{const b=e.target.closest('[data-service-action]');if(!b||b.disabled)return;const callback=b.dataset.serviceAction==='replace'?this.onReplace:this.onRefund;callback?.(b.dataset.complaint);});
      this.accountPanel.addEventListener('click',e=>{if(!e.target.closest('[data-account-more]'))return;this.accountLimit+=50;this.renderAccount();});
      this.panel.addEventListener('click',e=>{if(!e.target.closest('[data-reviews-more]'))return;this.reviewLimit+=20;this.renderReviews();});
      this.notification.addEventListener('click',()=>this.open());
      phone.trigger.addEventListener('click',()=>{if(!this.badge.hidden)this.open();});
    }
    setContext(order,service){
      const changed=this.order?.id!==order.id,hasVoice=!!this.phone.order;this.order=order;this.service=service;
      this.tabs.hidden=false;this.tabs.classList.toggle('no-voice',!hasVoice);this.tabs.querySelector('[data-client-tab="voice"]').hidden=!hasVoice;
      if(!hasVoice){this.phone.ui.customer.textContent=order.customer;this.phone.ui.avatar.textContent=order.customer.slice(0,1);this.phone.ui['small-avatar'].textContent=order.customer.slice(0,1);}
      if(changed||!hasVoice&&!this.phone.dialog.classList.contains('client-account-open'))this.showTab(hasVoice?'voice':'sms');
      this.render();if(!global.GroceryFulfilment.hasPending(service)&&!this.reviews().some(r=>!r.read)){this.badge.hidden=true;this.notification.hidden=true;}else if(this.reviews().some(r=>!r.read))this.badge.hidden=false;return this;
    }
    showTab(tab){
      if(this.tab!==tab)this.phone.ui.chat.scrollTop=0;this.tab=tab;
      const sms=tab==='sms',account=tab==='account';this.phone.ui.dismiss.querySelector('span').textContent=account||sms?this.ui('Хаах','Закрыть'):this.ui('Дуут зурвасыг хаах','Закрыть аудиосообщение');
      this.phone.dialog.classList.toggle('client-sms-open',sms);this.phone.dialog.classList.toggle('client-account-open',account);this.tabs.querySelectorAll('[data-client-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.clientTab===tab)));
      this.phone.dialog.querySelector('.po-contact-title p').textContent=account?this.ui('Орлого, торгууль','Начисления и штрафы'):sms?this.ui('Хэрэглэгчийн зурвас','SMS от клиента'):this.ui('Дуут захиалга','Аудиозаказ');
      if(sms||account)this.phone.stop();if(account)this.renderAccount();if(sms){this.badge.hidden=true;this.notification.hidden=true;if(this.phone.dialog.open&&this.reviews().some(r=>!r.read))this.onReviewsRead();}return this;
    }
    ui(mn,ru){return global.GroceryLanguage?.isRussian()?ru:mn;}
    renderAccount(){
      const A=global.GroceryAccount,state=A.normalize(this.account()),s=A.summary(state),money=n=>Math.abs(n).toLocaleString('ru-RU')+' ₮',title={salary:this.ui('Захиалгын хөлс','Оплата заказа'),missing:this.ui('Дутуу барааны торгууль','Штраф за неполный заказ'),quality:this.ui('Чанарын торгууль','Штраф за некачественный товар'),disorder:this.ui('Эмх замбараагүй байдлын торгууль','Штраф за беспорядок')};
      this.accountPanel.innerHTML=`<div class="account-summary ${s.balance<0?'is-negative':''}"><small>${this.ui('Дансны үлдэгдэл','На счёте')}</small><strong>${s.balance<0?'−':''}${money(s.balance)}</strong><div class="account-totals"><span>${this.ui('Нийт хөлс','Всего заработано')}<b>${money(s.earned)}</b></span><span>${this.ui('Нийт торгууль','Всего штрафов')}<b>${money(s.fines)}</b></span><span>${this.ui('Хамгийн их торгууль','Самый большой штраф')}<b>${money(s.largestFine)}</b></span></div></div>`+(state.entries.length?state.entries.slice(-this.accountLimit).reverse().map(row=>`<article class="account-entry ${row.kind==='fine'?'is-fine':''}"><span><b>${title[row.reason]}</b><small>№ ${row.number} · ${esc(row.customer)}</small></span><strong>${row.kind==='fine'?'−':'+'}${money(row.amount)}</strong></article>`).join(''):`<p class="account-empty">${this.ui('Эхний захиалгаа дуусгахад энд хөлс орно.','После первого выполненного заказа здесь появится оплата.')}</p>`)+(state.entries.length>this.accountLimit?`<button type="button" class="account-show-more" data-account-more>${this.ui('Өмнөх гүйлгээг харах','Показать предыдущие начисления')}</button>`:'');
    }
    renderReviews(){
      this.panel.querySelector('.client-review-list')?.remove();const reviews=this.reviews().slice(-this.reviewLimit).reverse();if(!reviews.length)return;this.panel.querySelector('.client-empty')?.remove();
      const list=document.createElement('section');list.className='client-review-list';list.dataset.learning='';list.innerHTML=`<h3>${this.ui('Хэрэглэгчдийн сэтгэгдэл','Отзывы покупателей')}</h3>`+reviews.map(r=>`<article class="client-message client-review ${r.type==='positive'?'is-positive':'is-negative'}"><div class="client-message-meta">${esc(r.customer)} · № ${r.number}</div><strong>${r.type==='positive'?this.ui('Эерэг сэтгэгдэл','Положительный отзыв'):this.ui('Сөрөг сэтгэгдэл','Отрицательный отзыв')}</strong><p lang="mn">${esc(r.mn)}</p>${this.russian()?`<p class="client-message-ru" lang="ru">${esc(r.ru)}</p>`:''}</article>`).join('')+(this.reviews().length>this.reviewLimit?`<button type="button" class="client-reviews-more" data-reviews-more>${this.ui('Өмнөх сэтгэгдлийг харах','Показать предыдущие отзывы')}</button>`:'');this.panel.append(list);
    }
    notifyReview(review){this.notification.dataset.learning='';this.notification.querySelector('small').textContent=review.type==='positive'?this.ui('ЭЕРЭГ СЭТГЭГДЭЛ','ПОЛОЖИТЕЛЬНЫЙ ОТЗЫВ'):this.ui('СӨРӨГ СЭТГЭГДЭЛ','ОТРИЦАТЕЛЬНЫЙ ОТЗЫВ');this.notification.querySelector('strong').textContent=review.customer;this.notification.hidden=false;this.badge.hidden=false;}
    notify(){this.notification.querySelector('small').textContent=this.ui('ХЭРЭГЛЭГЧЭЭС ЗУРВАС ИРЛЭЭ','СООБЩЕНИЕ КЛИЕНТА');if(!this.order||!global.GroceryFulfilment.hasPending(this.service))return;this.badge.hidden=false;this.notification.querySelector('strong').textContent=this.order.customer;this.notification.hidden=false;}
    open(){this.showTab('sms');this.phone.open();if(this.reviews().some(r=>!r.read))this.onReviewsRead();return true;}
    render(){
      if(!this.order||!this.service)return;
      const G=global.GroceryGame,R=global.GroceryRussian,F=global.GroceryFulfilment,ru=this.russian();
      this.tabs.querySelector('[data-client-tab="voice"]').textContent=this.ui('Захиалга','Заказ');this.tabs.querySelector('[data-client-tab="sms"]').textContent=this.ui('SMS','SMS');this.tabs.querySelector('[data-client-tab="account"]').textContent=this.ui('Орлого','Начисления');
      const statusbar=this.phone.dialog.querySelector('.po-statusbar>span'),transcriptTitle=this.phone.ui.transcript.querySelector(':scope>span');
      statusbar.dataset.learning='';statusbar.textContent=this.ui('ЗАХИАЛГЫН УТАС','ТЕЛЕФОН СБОРЩИКА');
      if(transcriptTitle){transcriptTitle.dataset.learning='';transcriptTitle.textContent=this.ui('Захиалгын бичвэр','Текст заказа');}
      const sms=this.tab==='sms',account=this.tab==='account';this.phone.ui.dismiss.querySelector('span').textContent=sms||account?this.ui('Хаах','Закрыть'):this.ui('Дуут зурвасыг хаах','Закрыть аудиосообщение');
      this.phone.dialog.querySelector('.po-contact-title p').textContent=account?this.ui('Орлого, торгууль','Начисления и штрафы'):sms?this.ui('Хэрэглэгчийн зурвас','SMS от клиента'):this.ui('Дуут захиалга','Аудиозаказ');
      if(!this.service.complaints.length){this.panel.innerHTML='<p class="client-empty">Хэрэглэгчээс зурвас ирээгүй байна.</p>';this.renderReviews();return;}
      this.panel.innerHTML=this.service.complaints.map(c=>{
        const name=G.BY_ID[c.productId].name,amount=G.formatAmount(c.productId,c.amount),bad=c.reason==='expired'?'хугацаа нь дууссан байна':'муудсан байна';
        const text=c.reason==='damaged'?'Сайн уу. Өндөгний хайрцагт хагарсан өндөг байна. Өөр хайрцгаар солих эсвэл мөнгийг нь буцааж өгнө үү.':`Сайн уу. «${name}» (${amount}) ${bad}. Шинэ бараагаар солих эсвэл мөнгийг нь буцааж өгнө үү.`;
        const textRu=c.reason==='damaged'?'В коробке есть треснувшие яйца. Пожалуйста, замените коробку или верните за неё деньги.':`В заказе получен ${c.reason==='expired'?'товар с истёкшим сроком годности':'испорченный товар'}: ${R.name(c.productId)} — ${R.amount(G.BY_ID[c.productId],c.amount)}. Пожалуйста, замените его или верните деньги за этот товар.`;
        const pending=['open','collecting'].includes(c.status);
        const outgoing=c.status==='refunded'?`Энэ барааны ${c.refund.toLocaleString('en-US')} ₮-ийг буцаалаа.`:c.status==='replaced'?'Шинэ барааг хүргэж өглөө.':'Шинэ барааг бэлтгэж байна.';
        const outgoingRu=c.status==='refunded'?`Оформлен возврат за этот товар: ${c.refund.toLocaleString('ru-RU')} ₮.`:c.status==='replaced'?'Свежая замена доставлена.':'Собираем свежую замену.';
        return `<article class="client-message"><div class="client-message-meta">${esc(this.order.customer)} · № ${F.orderNumber(this.order)}</div><p data-learning lang="mn">${esc(text)}</p>${c.attempts&&pending?'<p data-learning lang="mn">Дахин ирсэн бараа бас шаардлага хангахгүй байна.</p>':''}${ru?`<p class="client-message-ru" lang="ru">${esc(textRu)}</p>`:''}<div class="client-item">${esc(name)} · ${esc(amount)}</div>${pending?`<div class="client-actions"><button data-service-action="replace" data-complaint="${esc(c.id)}" ${c.status==='collecting'||this.service.activeId&&this.service.activeId!==c.id?'disabled':''}>${c.status==='collecting'?'Сольж өгөх барааг бэлтгэж байна':'Шинэ бараагаар солих'}</button><button data-service-action="refund" data-complaint="${esc(c.id)}">Мөнгийг буцаах · ${c.refund.toLocaleString('en-US')} ₮</button></div>`:''}</article>${c.status!=='open'?`<article class="client-reply"><p data-learning lang="mn">${esc(outgoing)}</p>${ru?`<p lang="ru">${esc(outgoingRu)}</p>`:''}</article>`:''}`;
      }).join('');
      this.renderReviews();
    }
  }
  global.ClientMessages=ClientMessages;
})(window);
