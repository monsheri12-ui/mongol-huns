(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let ready=false,mode='audio',scope='all',selectedLevel=0,optionLanguage='',choiceScrollTop=null,choiceScrollBaseline=0,choiceScrollRevision=0;
  const ui=(mn,ru)=>window.GroceryLanguage?.isRussian()?ru:mn;
  const preparation={room:['Дэлгүүрээ бэлтгэж байна…','Готовим магазин к открытию…'],stock:['Бараагаа тавиур дээр өрж байна…','Раскладываем товары по стеллажам…'],cold:['Хөргөгч, хөлдөөгчөө дүүргэж байна…','Наполняем холодильники и морозильники…'],bags:['Захиалгын уутаа бэлтгэж байна…','Готовим пакеты для заказов…'],ready:['Дэлгүүр бэлэн боллоо!','Магазин готов!']};
  let preparationStage='room';
  function preparationCaption(){const words=preparation[preparationStage]||preparation.room;$('loading-caption').textContent=ui(...words);}
  const levelName=level=>ui(level.name,window.GroceryLanguage.translateText(level.name));
  const levelChoice=i=>[
    levelName(window.GroceryGame.LEVELS[0]),
    ui('Барааны хэрэглэх хугацааг шалгаарай.','Проверяйте срок годности продуктов.'),
    ui('Хэрэгтэй тоо хэмжээг цуглуулаарай.','Собирайте нужное количество товара.'),
    ui('Хэрэглэгчийн хүссэн төрөл, маркийг сонгоорой.','Выбирайте вид и марку товара по просьбе клиента.')
  ][i];
  function renderChoiceIcons(){
    const chosen=[['welcome-scope',scope==='all'?'full-shift':'orders-1'],['welcome-order-format',mode==='audio'?'audio-orders-1':'text-orders-1'],['welcome-level',scope==='all'?'full-shift':'level-'+selectedLevel]];
    for(const [id,illustration] of chosen){
      const select=$(id),visual=select.closest('.welcome-icon-select')?.querySelector('.welcome-select-visual');if(!visual)continue;
      const label=select.selectedOptions[0]?.textContent||'',key=illustration+'|'+label;
      if(visual.dataset.choice===key)continue;
      visual.dataset.choice=key;
      visual.replaceChildren();
      const atlas=window.GroceryChoiceArt,cell=atlas?.items[illustration];
      if(cell){const art=document.createElement('span');art.className='welcome-choice-art';art.style.backgroundImage=`url("${atlas.src}")`;art.style.backgroundSize=`${atlas.columns*100}% ${atlas.rows*100}%`;art.style.backgroundPosition=`${cell[0]*100/(atlas.columns-1)}% ${cell[1]*100/(atlas.rows-1)}%`;visual.append(art);}
      else{const source=window.GroceryAchievementArt?.[illustration];if(source){const image=document.createElement('img');image.src=source.path;image.alt='';image.width=image.height=52;image.decoding='async';visual.append(image);}}
      const caption=document.createElement('span');caption.textContent=label;visual.append(caption);
      const arrow=document.createElement('span');arrow.className='welcome-select-chevron';arrow.textContent='⌄';visual.append(arrow);
    }
  }
  function renderShift(){
    const G=window.GroceryGame,session=window.GrocerySession,progress=session?.shiftProgress?.(mode),day=session?.marketDay?.();
    const language=window.GroceryLanguage?.current()||'mn',refreshOptions=optionLanguage!==language;
    $('welcome-start').textContent=day?.closed?ui('Дараагийн өдрийг эхлэх','Начать следующий день'):ui('Ээлжээ эхлэх','Начать смену');
    $('welcome-resume').hidden=!session?.canResume?.();
    $('welcome-resume').textContent=ui('Үргэлжлүүлэн тоглох','Продолжить игру');
    if(refreshOptions)$('welcome-scope').innerHTML=`<option value="all">${ui('Бүтэн ээлж','Полная смена')}</option><option value="level">${ui('Нэг түвшин','Один уровень')}</option>`;$('welcome-scope').value=scope;
    $('welcome-level-field').hidden=false;
    $('welcome-short-lead').textContent=ui('Захиалгаа монгол хэлээр цуглуулаарай.','Соберите заказ на монгольском.');
    $('welcome-details-title').textContent=ui('Нэмэлт','Дополнительно');
    $('welcome-details').hidden=window.GroceryLanguage?.isRussian()===true&&!session?.archiveAvailable;
    $('welcome-speech-short').textContent=ui('Дууг автоматаар үүсгэсэн; дуудлага нь ойролцоо.','Озвучка создана ИИ; возможны неточности.');
    $('welcome-speech-details').textContent=ui('Дуудлагын тухай','Подробнее о произношении');
    $('welcome-audio-note').hidden=mode!=='audio';
    if(refreshOptions)$('welcome-level').innerHTML=`<option value="all">${ui('Бүх 4 түвшин дарааллаар','Все 4 уровня по порядку')}</option>`+G.LEVELS.map((level,i)=>`<option value="${i}">${i+1} · ${levelChoice(i)}</option>`).join('');$('welcome-level').value=scope==='all'?'all':String(selectedLevel);
    if(refreshOptions)$('welcome-order-format').innerHTML=`<option value="audio">${ui('Дуут захиалга','Аудиозаказ')}</option><option value="text">${ui('Бичвэр захиалга','Текстовый заказ')}</option>`;$('welcome-order-format').value=mode;optionLanguage=language;
    const entries=progress?.levels||[],chosen=entries.filter(e=>scope==='all'||e.level===selectedLevel),done=chosen.reduce((sum,e)=>sum+e.done,0),total=chosen.reduce((sum,e)=>sum+e.total,0);
    $('welcome-shift-summary').textContent=scope==='all'?ui(`4 түвшин · ${total} захиалга`,`4 уровня · ${total} заказов`):ui(`${selectedLevel+1}-р түвшин · ${total} захиалга`,`Уровень ${selectedLevel+1} · ${total} заказов`);
    if(done)$('welcome-shift-summary').textContent+=ui(` · ${done} дууссан`,` · выполнено ${done}`);
    renderChoiceIcons();
  }
  // Native pickers may scroll a focused select when their popup closes. Keep
  // the learner's viewport where it was before opening the picker.
  function renderChoiceChange(){
    const dialog=$('welcome-dialog'),top=choiceScrollTop??choiceScrollBaseline,revision=++choiceScrollRevision;
    choiceScrollTop=null;renderShift();
    const restore=()=>{if(dialog.open&&revision===choiceScrollRevision){dialog.scrollTop=top;choiceScrollBaseline=top;}};
    restore();requestAnimationFrame(()=>{restore();requestAnimationFrame(restore);});
  }
  for(const id of ['welcome-scope','welcome-level','welcome-order-format','welcome-language']){
    const select=$(id),remember=()=>{choiceScrollTop=choiceScrollBaseline;};
    select.addEventListener('pointerdown',remember,{capture:true});
    select.addEventListener('keydown',event=>{if(['ArrowUp','ArrowDown','Home','End','PageUp','PageDown','Enter',' '].includes(event.key))choiceScrollTop=$('welcome-dialog').scrollTop;},{capture:true});
  }
  const rememberManualScroll=()=>requestAnimationFrame(()=>{choiceScrollBaseline=$('welcome-dialog').scrollTop;});
  $('welcome-dialog').addEventListener('wheel',rememberManualScroll,{passive:true});
  $('welcome-dialog').addEventListener('touchmove',rememberManualScroll,{passive:true});
  $('welcome-dialog').addEventListener('pointerup',event=>{if(event.target===$('welcome-dialog'))rememberManualScroll();});
  $('welcome-dialog').addEventListener('keydown',event=>{if(event.target.tagName!=='SELECT'&&['PageUp','PageDown','Home','End','ArrowUp','ArrowDown'].includes(event.key))rememberManualScroll();});
  $('welcome-scope').addEventListener('change',()=>{scope=$('welcome-scope').value;renderChoiceChange();});
  $('welcome-level').addEventListener('change',()=>{const value=$('welcome-level').value;scope=value==='all'?'all':'level';if(scope==='level')selectedLevel=Number(value);renderChoiceChange();});
  $('welcome-order-format').addEventListener('change',()=>{mode=$('welcome-order-format').value;renderChoiceChange();});
  window.addEventListener('grocery:language',()=>{preparationCaption();if(ready)renderChoiceChange();});
  function welcome(){
    if(!ready)return;
    const session=window.GrocerySession;$('welcome-archive').hidden=!session?.archiveAvailable;
    $('welcome-russian').checked=session?.russianHints?.()===true;
    selectedLevel=session?.shift?.().level??session?.currentLevel?.()??0;scope=session?.shift?.().scope||'all';mode=session?.deliveryMode?.()==='text'?'text':'audio';renderShift();
    if(!$('welcome-dialog').open){$('welcome-details').open=false;$('welcome-dialog').showModal();$('welcome-dialog').scrollTop=0;choiceScrollBaseline=0;}
  }
  window.addEventListener('grocery:prepare', event => {
    const {stage,percent}=event.detail;preparationStage=stage;
    $('loading-progress').value = percent;
    $('loading-percent').textContent = `${percent}%`;
    preparationCaption();
  });
  window.addEventListener('grocery:worldready', event => {
    ready = true;
    $('world-loading').hidden = true;
    welcome();
  });
  $('loading-retry').addEventListener('click', () => location.reload());
  window.addEventListener('grocery:welcome', welcome);
  $('welcome-dialog').addEventListener('cancel', event => event.preventDefault());
  function start(archive = false, resume = false) {
    $('welcome-dialog').close();
    document.body.classList.add('game-started');
    window.dispatchEvent(new CustomEvent('grocery:start', { detail: { mode,archive,resume,scope,level:selectedLevel,russianHints:$('welcome-russian').checked } }));
    if (mode === 'text' || archive) $('world-canvas').focus({ preventScroll: true });
  }
  $('welcome-start').addEventListener('click', () => start(false));
  $('welcome-resume').addEventListener('click', () => start(false,true));
  $('welcome-archive').addEventListener('click', () => start(true));
  preparationCaption();
  // Cache requested, content-hashed previews only. Never prefetch the 200
  // recordings or full-resolution photographs as a condition of starting.
  if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
