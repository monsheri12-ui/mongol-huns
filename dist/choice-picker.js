/* Styled, keyboard-accessible pickers. Hidden selects keep the game API stable;
   their platform-native popup is never used for these launch choices. */
(function(root){
  'use strict';
  const doc=document,ids=['welcome-language','settings-language','welcome-scope','welcome-order-format','welcome-level','welcome-timer'],records=new Map();
  const ui=(mn,ru)=>root.GroceryLanguage?.isRussian()?ru:mn;
  const menu=doc.createElement('div');menu.id='game-choice-menu';menu.className='game-choice-menu';menu.setAttribute('role','listbox');menu.setAttribute('popover','manual');menu.hidden=true;menu.dataset.learning='';
  let active=null,focusIndex=0;
  function title(id){return ({'welcome-language':ui('Интерфейсийн хэл','Язык интерфейса'),'settings-language':ui('Интерфейсийн хэл','Язык интерфейса'),'welcome-scope':ui('Тоглох горим','Режим игры'),'welcome-order-format':ui('Захиалгын хэлбэр','Формат заказа'),'welcome-level':ui('Тоглох түвшин','Сложность'),'welcome-timer':ui('Цагийн горим','Таймер')})[id];}
  function art(id,value){
    if(id.endsWith('language')){const image=doc.createElement('img');image.src='assets/ui/flag-'+(value==='mn'?'mn':'ru')+'.svg';image.alt='';image.width=30;image.height=20;image.className='choice-flag';return image;}
    if(id==='welcome-timer'){const image=doc.createElement('img');image.src=root.GroceryTimerArt?.[value==='challenge'?'challenge':'normal']||'';image.alt='';image.width=image.height=58;image.className='choice-tomato'+(value==='off'?' is-resting':'');return image;}
    const key=id==='welcome-scope'?(value==='all'?'full-shift':'orders-1'):id==='welcome-order-format'?(value==='audio'?'audio-orders-1':'text-orders-1'):(value==='all'?'full-shift':'level-'+value);
    const atlas=root.GroceryChoiceArt,cell=atlas?.items[key],icon=doc.createElement('span');icon.className='welcome-choice-art';
    if(cell){icon.style.backgroundImage=`url("${atlas.src}")`;icon.style.backgroundSize=`${atlas.columns*100}% ${atlas.rows*100}%`;icon.style.backgroundPosition=`${cell[0]*100/(atlas.columns-1)}% ${cell[1]*100/(atlas.rows-1)}%`;}
    return icon;
  }
  function caption(option){return option.textContent.replace(/^[🇲🇳🇷🇺]+\s*/u,'').trim();}
  function sync(record){
    const {select,button,visual}=record,option=select.selectedOptions[0];
    if(!option)return;
    const label=caption(option),key=select.value+'|'+label+'|'+root.GroceryLanguage?.current();
    button.disabled=select.disabled;button.setAttribute('aria-label',title(select.id)+': '+label);
    if(visual.dataset.choice===key)return;visual.dataset.choice=key;visual.replaceChildren(art(select.id,select.value));
    const name=doc.createElement('span');name.className='choice-caption';name.textContent=label;visual.append(name);
    const chevron=doc.createElement('span');chevron.className='welcome-select-chevron';chevron.textContent='⌄';visual.append(chevron);
  }
  function close(focus=false){const previous=active;if(!previous)return;active=null;previous.button.setAttribute('aria-expanded','false');try{menu.hidePopover?.();}catch{}menu.hidden=true;if(focus)previous.button.focus({preventScroll:true});}
  function enabledOptions(){return [...menu.querySelectorAll('[role=option]:not(:disabled)')];}
  function focusOption(index){
    const options=enabledOptions();if(!options.length||!active)return;focusIndex=(index+options.length)%options.length;const option=options[focusIndex];option.focus({preventScroll:true});
    // Scroll only the popup. scrollIntoView can also scroll the launch dialog,
    // making the whole start panel jump when a choice near its edge is focused.
    const optionBounds=option.getBoundingClientRect(),menuBounds=menu.getBoundingClientRect();
    if(optionBounds.top<menuBounds.top+7)menu.scrollTop-=menuBounds.top+7-optionBounds.top;
    else if(optionBounds.bottom>menuBounds.bottom-7)menu.scrollTop+=optionBounds.bottom-(menuBounds.bottom-7);
  }
  function open(record){
    if(record.select.disabled)return;if(active===record){close();return;}close();active=record;record.button.setAttribute('aria-expanded','true');menu.replaceChildren();menu.setAttribute('aria-label',title(record.select.id));
    for(const option of record.select.options){
      const button=doc.createElement('button');button.type='button';button.className='game-choice-option';button.setAttribute('role','option');button.setAttribute('aria-selected',String(option.selected));button.disabled=option.disabled;button.dataset.value=option.value;button.append(art(record.select.id,option.value));
      const copy=doc.createElement('span');copy.textContent=caption(option);button.append(copy);
      const check=doc.createElement('span');check.className='choice-selected-mark';check.textContent=option.selected?'✓':'';check.setAttribute('aria-hidden','true');button.append(check);
      button.addEventListener('click',()=>{record.select.value=option.value;close(true);record.select.dispatchEvent(new Event('change',{bubbles:true}));sync(record);});menu.append(button);
    }
    const parent=record.select.closest('dialog')||doc.body;parent.append(menu);menu.hidden=false;try{menu.showPopover?.();}catch{}
    const bounds=record.button.getBoundingClientRect(),width=Math.min(Math.max(bounds.width,record.select.id.endsWith('language')?180:290),root.innerWidth-24),below=root.innerHeight-bounds.bottom-12,above=bounds.top-12,down=below>=180||below>=above;
    menu.style.width=width+'px';menu.style.maxHeight=Math.max(100,Math.min(410,(down?below:above)-8))+'px';menu.style.left=Math.max(12,Math.min(bounds.left,root.innerWidth-width-12))+'px';
    menu.style.top=(down?bounds.bottom+7:Math.max(10,bounds.top-menu.getBoundingClientRect().height-7))+'px';
    focusOption(Math.max(0,enabledOptions().findIndex(o=>o.dataset.value===record.select.value)));
  }
  function mount(select){
    if(records.has(select.id))return;
    const label=select.closest('label');if(label){const replacement=doc.createElement('div');for(const a of label.attributes)replacement.setAttribute(a.name,a.value);replacement.append(...label.childNodes);label.replaceWith(replacement);}
    let shell=select.closest('.welcome-icon-select');if(!shell){shell=doc.createElement('span');shell.className='welcome-icon-select language-icon-select';select.before(shell);shell.append(select);}
    const visual=shell.querySelector('.welcome-select-visual')||doc.createElement('span');visual.className='welcome-select-visual';visual.setAttribute('aria-hidden','true');
    const button=doc.createElement('button');button.type='button';button.className='choice-trigger';button.setAttribute('aria-haspopup','listbox');button.setAttribute('aria-controls',menu.id);button.setAttribute('aria-expanded','false');button.append(visual);shell.prepend(button);
    select.hidden=true;select.tabIndex=-1;select.setAttribute('aria-hidden','true');select.dataset.customChoice='true';
    const record={select,button,visual};records.set(select.id,record);button.addEventListener('click',()=>open(record));
    button.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey)return;if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();if(active!==record)open(record);if(e.key==='Home')focusOption(0);if(e.key==='End')focusOption(enabledOptions().length-1);}});
    select.addEventListener('change',()=>sync(record));new MutationObserver(()=>sync(record)).observe(select,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['disabled']});sync(record);
    select.closest('dialog')?.addEventListener('close',()=>{if(active===record)close();});
  }
  menu.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close(true);}else if(e.key==='Tab')close(true);else if(!e.ctrlKey&&!e.metaKey&&['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();focusOption(e.key==='Home'?0:e.key==='End'?enabledOptions().length-1:focusIndex+(e.key==='ArrowDown'?1:-1));}else if(e.key.length===1&&!e.ctrlKey&&!e.metaKey){const options=enabledOptions(),i=options.findIndex(o=>o.textContent.trim().toLocaleLowerCase().startsWith(e.key.toLocaleLowerCase()));if(i>=0)focusOption(i);}});
  doc.addEventListener('pointerdown',e=>{if(active&&!menu.contains(e.target)&&!active.button.contains(e.target))close();},true);
  doc.addEventListener('scroll',e=>{if(active&&!menu.contains(e.target))close();},true);
  root.addEventListener('resize',()=>close());root.addEventListener('grocery:language',()=>{close();for(const r of records.values())sync(r);});
  for(const id of ids){const select=doc.getElementById(id);if(select)mount(select);}
  root.GroceryChoices={refresh(){for(const r of records.values())sync(r);},close};
})(window);
