(function(root){
  'use strict';
  const A=root.GroceryAchievements,art=root.GroceryArt,$=id=>document.getElementById(id);
  const total=A.DEFINITIONS.length;
  const ui=(mn,ru)=>root.GroceryLanguage?.isRussian()?ru:mn;
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let state=A.normalize(),filter='all',group='all',noticeTimer,returnTo;
  const dialog=$('achievements-dialog'),notice=$('achievement-notice');
  function entries(){
    const count=Object.keys(state.earned).length;
    document.querySelectorAll('[data-achievements-open]').forEach(button=>{
      button.innerHTML=`${art.icon('trophy')}<span>${ui('Амжилтууд','Достижения')}</span><b>${count}<small>/${total}</small></b>`;
      button.setAttribute('aria-label',ui(`Амжилтууд: ${count} / ${total}`,`Достижения: получено ${count} из ${total}`));
    });
  }
  function render(){
    const rows=A.progress(state),unlocked=rows.filter(d=>d.unlocked).length;
    $('achievements-title').textContent=ui('Таны амжилтууд','Ваши достижения');
    $('achievements-kicker').textContent=ui('ЗАХИАЛГА БЭЛТГЭГЧИЙН ЦУГЛУУЛГА','КОЛЛЕКЦИЯ СБОРЩИКА');
    $('achievements-lead').textContent=ui('Бараагаа таньж, нямбай шалгаж, улам сайн цуглуулаарай.','Узнавайте продукты, проверяйте качество и собирайте заказы всё увереннее.');
    $('achievement-total').innerHTML=`<b>${unlocked}</b><span>/ ${total}</span>`;
    $('achievement-overall').max=total;$('achievement-overall').value=unlocked;$('achievement-overall').setAttribute('aria-label',ui(`Авсан амжилт: ${unlocked} / ${total}`,`Получено достижений: ${unlocked} из ${total}`));
    $('achievements-total-label').textContent=ui('Авсан амжилт','Получено наград');
    for(const b of dialog.querySelectorAll('[data-achievement-filter]')){const earned=b.dataset.achievementFilter==='earned';b.textContent=(earned?ui('Авсан','Получены'):ui('Бүгд','Все'))+' · '+(earned?unlocked:total);b.setAttribute('aria-pressed',String(b.dataset.achievementFilter===filter));}
    const shown=rows.filter(d=>(group==='all'||d.group===group)&&(filter==='all'||(filter==='earned'?d.unlocked:!d.unlocked)));
    $('achievement-grid').innerHTML=shown.length?shown.map(d=>{
      const category=A.GROUPS.find(g=>g.id===d.group);
      const illustration=root.GroceryAchievementArt?.[d.id];
      return `<article class="achievement-card ${d.unlocked?'is-earned':'is-locked'}"><div class="achievement-card-top"><span class="achievement-medal ${illustration?'has-sticker':''}" aria-hidden="true">${illustration?`<img src="${illustration.path}" alt="" width="112" height="112" loading="lazy" decoding="async">`:art.icon(category.icon)}<i>${art.icon(d.unlocked?'check':'lock')}</i></span><div><span class="achievement-category">${ui(category.mn,category.ru)}</span><h3>${esc(ui(d.mn,d.ru))}</h3></div></div><p>${esc(ui(d.descriptionMn,d.descriptionRu))}</p><div class="achievement-card-bottom"><span class="achievement-status">${d.unlocked?art.icon('check')+ui('Авсан','Получено'):ui('Ахиц','Прогресс')}</span><b>${d.current}<small> / ${d.target}</small></b></div><progress max="${d.target}" value="${d.current}" aria-label="${esc(ui(d.mn,d.ru))}: ${d.current} / ${d.target}"></progress></article>`;
    }).join(''):`<div class="achievements-empty">${art.icon('star')}<h3>${ui('Эхний амжилт таныг хүлээж байна','Первое достижение ждёт вас')}</h3><p>${ui('Нэг захиалга цуглуулах эсвэл барааны хугацааг шалгаж эхлээрэй.','Начните с одного заказа или проверьте срок годности товара.')}</p></div>`;
    $('achievements-save-note').textContent=ui('Ахиц энэ хөтөч дээр хадгалагдана. Нэг үйлдлийг давтахад дахин тооцохгүй.','Прогресс сохраняется в этом браузере. Повтор одного действия не увеличивает счётчик.');
    $('achievements-back').textContent=ui('Буцах','Назад');$('achievements-close').setAttribute('aria-label',ui('Хаах','Закрыть'));
  }
  function hideNotice(){clearTimeout(noticeTimer);try{notice.hidePopover?.();}catch{}notice.hidden=true;}
  function notify(ids){
    if(!ids.length)return;hideNotice();const first=A.DEFINITIONS.find(d=>d.id===ids[0]);
    const sticker=root.GroceryAchievementArt?.[first.id];
    notice.innerHTML=`<span class="achievement-toast-medal ${sticker?'has-sticker':''}" aria-hidden="true">${sticker?`<img src="${sticker.path}" width="72" height="72" alt="">`:art.icon('trophy')}</span><span><small>${ids.length===1?ui('ШИНЭ АМЖИЛТ','НОВОЕ ДОСТИЖЕНИЕ'):ui(`${ids.length} ШИНЭ АМЖИЛТ`,`НОВЫЕ ДОСТИЖЕНИЯ · ${ids.length}`)}</small><strong>${esc(ui(first.mn,first.ru))}</strong>${ids.length>1?`<span>${ui(`Бас ${ids.length-1} амжилт авлаа.`, `И ещё ${ids.length-1} в вашей коллекции.`)}</span>`:''}</span>`;
    notice.hidden=false;try{notice.showPopover?.();}catch{}noticeTimer=setTimeout(hideNotice,4800);
  }
  document.addEventListener('click',event=>{const b=event.target.closest('[data-achievements-open]');if(!b)return;returnTo=b;hideNotice();render();if(!dialog.open)dialog.showModal();});
  dialog.addEventListener('click',event=>{const b=event.target.closest('[data-achievement-filter]');if(b){filter=b.dataset.achievementFilter;render();}});
  for(const id of ['achievements-close','achievements-back'])$(id).addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{if(returnTo?.isConnected)returnTo.focus({preventScroll:true});});
  root.addEventListener('grocery:language',()=>{hideNotice();entries();if(dialog.open)render();});
  root.GroceryAchievementUI={update(next,newly=[]){state=A.normalize(next);entries();if(dialog.open)render();notify(newly);}};
})(window);
