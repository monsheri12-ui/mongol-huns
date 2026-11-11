(function (global) {
  'use strict';
  const owners = new WeakMap();
  let serial = 0;
  const icon = (name) => {
    const paths = {
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      play: '<path d="m8 4 12 8-12 8V4Z" fill="currentColor" stroke="none"/>',
      pause: '<path d="M8 5v14m8-14v14" stroke-width="4"/>',
      repeat: '<path d="M20 8a8 8 0 1 0 0 8M20 2v6h-6"/>',
      phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
      note: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6"/>',
      ear: '<path d="M6 10a6 6 0 1 1 12 0c0 4-4 4-4 7a3 3 0 0 1-6 0m2-6a2 2 0 1 1 4 0c0 2-2 2-2 4"/>',
      bag: '<path d="M4 7h16l1 14H3L4 7Zm4 0V5a4 4 0 0 1 8 0v2"/>',
      check: '<path d="m5 12 4 4L20 5"/>',
      signal: '<path d="M4 18v2m5-7v7m5-12v12m5-17v17" stroke-width="2.3"/>',
      battery: '<rect x="2" y="6" width="18" height="12" rx="2"/><path d="M23 10v4"/><rect x="5" y="9" width="12" height="6" rx="1" fill="currentColor" stroke="none"/>'
    };
    return `<svg class="po-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.phone}</svg>`;
  };
  const formatTime = value => {
    const seconds = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  };
  function audioUrl(record) {
    const raw = record?.audioUrl || record?.path;
    if (typeof raw !== 'string' || !raw.trim()) return '';
    try {
      const parsed = new URL(raw, document.baseURI);
      if (!['http:', 'https:', 'blob:', 'data:', 'file:'].includes(parsed.protocol)) return '';
      if (parsed.protocol === 'data:' && !raw.startsWith('data:audio/')) return '';
      if (!record.audioUrl && ['http:', 'https:'].includes(parsed.protocol) && /^[a-f0-9]{64}$/i.test(record.sha256 || '')) {
        parsed.searchParams.set('audio', record.sha256.slice(0, 16));
        return parsed.href;
      }
      return raw;
    } catch (_) { return ''; }
  }
  function waveform(peaks) {
    if (!Array.isArray(peaks) && !ArrayBuffer.isView(peaks)) return null;
    const data = Array.from(peaks, value => Number.isFinite(Number(value)) ? Math.abs(Number(value)) : 0);
    if (!data.length) return null;
    const maximum = data.reduce((maximum, value) => Math.max(maximum, value), 0);
    if (!Number.isFinite(maximum) || maximum <= 0) return null;
    const scale = maximum > 1 ? maximum : 1;
    return Array.from({ length: 32 }, (_, index) => {
      const start = Math.min(data.length - 1, Math.floor(index * data.length / 32));
      const end = Math.max(start + 1, Math.floor((index + 1) * data.length / 32));
      let peak = 0;
      for (let i = start; i < Math.min(end, data.length); i++) peak = Math.max(peak, data[i]);
      return Math.min(1, peak / scale);
    });
  }

  class PhoneOrders {
    constructor({ trigger, onReveal = () => {}, onHeard = () => {} } = {}) {
      if (!(trigger instanceof HTMLElement)) throw new TypeError('PhoneOrders requires a trigger HTMLElement');
      this.trigger = trigger;
      this.onReveal = typeof onReveal === 'function' ? onReveal : () => {};
      this.onHeard = typeof onHeard === 'function' ? onHeard : () => {};
      this.destroyed = false;
      this.order = null; this.record = null; this.audio = null;
      this._generation = 0; this._listeners = []; this._audioListeners = [];
      this._heardFired = false; this._revealed = false; this._valid = false;
      this._duration = 0; this._state = 'empty'; this._unread = false; this._notificationTimer = null;
      this._originalTriggerLabel = trigger.getAttribute('aria-label');
      this._originalTriggerExpanded = trigger.getAttribute('aria-expanded');
      this._originalTriggerControls = trigger.getAttribute('aria-controls');
      this._originalTriggerHaspopup = trigger.getAttribute('aria-haspopup');
      this._triggerName = trigger.id==='phone-button'?'Захиалгын утас':(this._originalTriggerLabel || trigger.textContent || 'Утас').trim();
      this._speed = 1;
      try { const saved = Number(localStorage.getItem('mongol-huns-phone-speed')); if ([.8, 1, 1.1].includes(saved)) this._speed = saved; } catch (_) {}
      let dialog = document.getElementById('phone-dialog');
      this._createdDialog = !dialog;
      if (dialog && dialog.tagName !== 'DIALOG') throw new TypeError('phone-dialog must be a dialog element');
      if (!dialog) { dialog = document.createElement('dialog'); dialog.id = 'phone-dialog'; document.body.append(dialog); }
      if (owners.has(dialog)) throw new Error('phone-dialog already has a PhoneOrders owner');
      owners.set(dialog, this);
      this.dialog = dialog;
      this._originalDialogNodes = Array.from(dialog.childNodes);
      this._originalDialogClass = dialog.className;
      this._originalDialogLabelledBy = dialog.getAttribute('aria-labelledby');
      this._prefix = `phone-orders-${++serial}`;
      dialog.classList.add('po-dialog');
      dialog.setAttribute('aria-labelledby', `${this._prefix}-title`);
      dialog.innerHTML = `<div class="po-stage">
        <div class="po-hand" aria-hidden="true"><i class="po-finger po-finger-one"></i><i class="po-finger po-finger-two"></i><i class="po-palm"></i><i class="po-cuff"></i></div>
        <div class="po-phone"><div class="po-side-key po-key-one" aria-hidden="true"></div><div class="po-side-key po-key-two" aria-hidden="true"></div>
          <div class="po-screen">
            <div class="po-statusbar" aria-hidden="true"><span>ЗАХИАЛГЫН УТАС</span><i class="po-speaker"></i><span class="po-status-icons">${icon('signal')}${icon('battery')}</span></div>
            <header class="po-contact-header"><span class="po-contact-avatar" data-po="avatar" aria-hidden="true">Н</span><div class="po-contact-title"><h2 id="${this._prefix}-title" data-po="customer">Захиалгын утас</h2><p>Дуут захиалга</p></div></header>
            <div class="po-chat" data-po="chat">
              <span class="po-day-chip">Хүнсний хүргэлт</span>
              <div class="po-message-intro"><span class="po-small-avatar" data-po="small-avatar" aria-hidden="true">Н</span><span>Ирсэн зурвас</span></div>
              <article class="po-message"><div class="po-message-top"><span class="po-message-label">Дуут зурвас</span><span class="po-message-order" data-po="order-label"></span></div>
                <div class="po-audio-row"><button type="button" class="po-play" data-po="play" aria-label="Дуу тоглуулах" disabled>${icon('play')}</button><div class="po-wave-wrap"><div class="po-waveform po-waveform-neutral" data-po="waveform" aria-hidden="true">${Array.from({length:32},()=>'<i></i>').join('')}</div><input class="po-seek" data-po="seek" type="range" min="0" max="1" step="0.1" value="0" aria-label="Дуут зурвасын байрлал" disabled><div class="po-time-row"><span data-po="current">0:00</span><span data-po="duration">—</span></div></div></div>
                <div class="po-audio-tools"><button type="button" data-po="repeat" class="po-repeat" aria-label="Эхнээс нь дахин сонсох" disabled>${icon('repeat')}<span>Дахин сонсох</span></button><label class="po-speed-label">Хурд<select data-po="speed" aria-label="Дууны хурд"><option value="0.8">0.8×</option><option value="1">1×</option><option value="1.1">1.1×</option></select></label></div>
                <p class="po-audio-status" data-po="status" role="status" aria-live="polite">Дуут захиалга хараахан ирээгүй байна.</p><button type="button" data-po="retry" class="po-retry" hidden>Дахин оролдох</button>
              </article>
              <article class="po-transcript" id="${this._prefix}-transcript" data-po="transcript" hidden><span>Захиалгын бичвэр</span><p data-po="bilingual-text" class="po-bilingual-text" lang="ru" hidden></p><p data-po="text"></p><details class="po-ru-hint ru-help" data-po="ru-hint" hidden><summary lang="ru">Русская подсказка</summary><p data-po="ru-text" lang="ru"></p></details></article>
              <div class="po-heard" data-po="heard" hidden>${icon('check')}Сонсож дууссан</div>
            </div>
            <footer class="po-bottom"><button type="button" data-po="reveal" class="po-reveal" aria-expanded="false" aria-controls="${this._prefix}-transcript" disabled>${icon('note')}Текст харах</button><button type="button" class="po-dismiss" data-po="dismiss"><span>Дуут зурвасыг хаах</span></button><p class="po-speech-notice">Дуу оруулгыг автоматаар үүсгэсэн.<br>Дуудлага нь ойролцоо.</p><i class="po-home-indicator" aria-hidden="true"></i></footer>
            <div class="po-media-holder" data-po="media" hidden></div>
          </div>
        </div>
      </div>`;
      this.ui = Object.fromEntries(Array.from(dialog.querySelectorAll('[data-po]'), el => [el.dataset.po, el]));
      this.ui.speed.value = String(this._speed);
      this._badge = document.createElement('span'); this._badge.className = 'po-unread-badge'; this._badge.textContent = '1'; this._badge.hidden = true; this._badge.setAttribute('aria-hidden', 'true'); trigger.append(this._badge);
      this._notification = document.createElement('button'); this._notification.type = 'button'; this._notification.className = 'po-incoming'; this._notification.hidden = true;
      this._notification.innerHTML = `<span class="po-incoming-icon" aria-hidden="true">${icon('phone')}</span><span><small>ШИНЭ ДУУТ ЗАХИАЛГА</small><strong data-po-caller></strong><span>Утсаа нээж сонсоорой.</span></span><b aria-hidden="true">↗</b>`;
      this._notification.setAttribute('aria-live', 'polite'); document.body.append(this._notification);
      this._listen(trigger, 'click', () => this.open());
      this._listen(this._notification, 'click', () => this.open());
      this._listen(this.ui.dismiss, 'click', () => this.close());
      this._listen(this.ui.play, 'click', () => this.audio?.paused ? this._play() : this._pause());
      this._listen(this.ui.repeat, 'click', () => { if (!this._valid || !this.audio) return; try { this.audio.currentTime = 0; } catch (_) {} this._play(); });
      this._listen(this.ui.seek, 'input', () => {
        if (!this.audio || this.audio.readyState < 1) return;
        try { this.audio.currentTime = Math.min(this._duration, Math.max(0, Number(this.ui.seek.value))); this._updateTimeline(); } catch (_) { this._status('loading'); }
      });
      this._listen(this.ui.speed, 'change', () => {
        const speed = Number(this.ui.speed.value); if (![.8,1,1.1].includes(speed)) return;
        this._speed = speed; this._applySpeed();
        try { localStorage.setItem('mongol-huns-phone-speed', String(speed)); } catch (_) {}
      });
      this._listen(this.ui.reveal, 'click', () => this._toggleTranscript());
      this._listen(this.ui.retry, 'click', () => this._state === 'blocked' ? this._play() : this._loadRecord());
      this._listen(dialog, 'cancel', event => { event.preventDefault(); this.close(); });
      this._listen(dialog, 'close', () => { this._pause(); this.trigger.setAttribute('aria-expanded','false'); });
      this._listen(dialog, 'click', event => { if (event.target !== dialog) return; const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)this.close(); });
      trigger.classList.add('po-trigger'); trigger.setAttribute('aria-haspopup','dialog'); trigger.setAttribute('aria-controls','phone-dialog'); trigger.setAttribute('aria-expanded','false');
    }
    _listen(target, type, handler) { target.addEventListener(type,handler); this._listeners.push(()=>target.removeEventListener(type,handler)); }
    _callback(callback) { try { callback({ order:this.order, record:this.record }); } catch (error) { console.error('PhoneOrders callback failed',error); } }
    _markUnread(value, notify = false) {
      this._unread = !!value; this._badge.hidden = !value; this.trigger.classList.toggle('po-trigger-unread',!!value);
      this._updateTriggerLabel();
      clearTimeout(this._notificationTimer);
      if (value && notify && this.order) { this._notification.querySelector('[data-po-caller]').textContent=this.order.customer||'Захиалагч';this._notification.hidden=false;this._notificationTimer=setTimeout(()=>{this._notification.hidden=true;},8500); }
      else this._notification.hidden=true;
    }
    _updateTriggerLabel(){this.trigger.setAttribute('aria-label',this._unread?`${this._triggerName} — шинэ дуут захиалга`:this._state==='playing'?`${this._triggerName} — дуут захиалга тоглож байна`:this._triggerName);}
    setOrder(order, record = null) {
      if (this.destroyed) return false;
      const previousKey = this.order ? `${this.order.id}:${this.order.signature}` : '';
      const nextKey = order ? `${order.id}:${order.signature}` : '';
      const previouslyHeard = this._heardFired, previouslyRevealed = this._revealed;
      this._disposeAudio();
      this.order = order ? { ...order } : null; this.record = record ? { ...record } : null;
      this._heardFired = nextKey === previousKey && previouslyHeard; this._revealed = nextKey === previousKey && previouslyRevealed; this._duration = Number(record?.duration)>0 && Number.isFinite(Number(record.duration)) ? Number(record.duration) : 0;
      this.ui.transcript.hidden=true;this.ui.reveal.setAttribute('aria-expanded','false');this.ui.reveal.innerHTML=`${icon('note')}${this._revealLabel(false)}`;this.ui.heard.hidden=!this._heardFired;
      const customer = typeof order?.customer==='string'&&order.customer.trim() ? order.customer.trim() : 'Захиалагч';
      this.ui.customer.textContent=order ? customer : 'Захиалгын утас';this.ui.avatar.textContent=customer.slice(0,1);this.ui['small-avatar'].textContent=customer.slice(0,1);
      this.ui['order-label'].textContent=order?.id!==undefined ? `№ ${String(order.number||order.id).padStart(3,'0')}` : '';
      this.ui.text.textContent=typeof record?.text==='string' ? record.text : '';
      const ruMatches=typeof order?.signature==='string'&&record?.signature===order.signature;
      this.ui['ru-hint'].hidden=record?.bilingual===true||!(ruMatches&&typeof record?.hintRu==='string'&&record.hintRu.trim());
      this.ui['ru-hint'].open=false;this.ui['ru-text'].textContent=ruMatches&&typeof record?.hintRu==='string'?record.hintRu:'';
      this.ui['bilingual-text'].textContent=ruMatches&&record?.bilingual===true?record.hintRu||'':'';this.ui['bilingual-text'].hidden=!this.ui['bilingual-text'].textContent;
      this._setWaveform(record?.peaks);
      this._loadRecord();
      if(nextKey&&nextKey!==previousKey)this._markUnread(true,!this.dialog.open);
      if(!order)this._markUnread(false);
      this._updateTimeline();
      return this._valid;
    }
    _disposeAudio() {
      this._generation++;
      this.trigger.classList.remove('po-trigger-playing');
      const audio=this.audio; this.audio=null;
      this._audioListeners.forEach(dispose=>dispose());this._audioListeners=[];
      if(audio){try{audio.pause();audio.removeAttribute('src');audio.load();}catch(_){}audio.remove();}
    }
    _loadRecord() {
      this._disposeAudio(); this._valid=false;
      this.ui.play.innerHTML=icon('play');this.ui.play.setAttribute('aria-label','Дуу тоглуулах');this.ui.play.setAttribute('aria-pressed','false');
      const signature=this.order?.signature;
      const matches=typeof signature==='string'&&signature.length>0&&this.record?.signature===signature;
      const url=audioUrl(this.record);
      this.ui.play.disabled=true;this.ui.repeat.disabled=true;this.ui.seek.disabled=true;this.ui.reveal.disabled=true;this.ui.retry.hidden=true;
      if(!this.order){this._status('empty');return;}
      if(!matches){this.ui.text.textContent='';this.ui.heard.hidden=true;this._status('mismatch');return;}
      this._valid=true;
      this.ui.reveal.disabled=!(typeof this.record.text==='string'&&this.record.text.trim());
      if(!url){this._status('missing');return;}
      const audio=document.createElement('audio');audio.preload='metadata';audio.setAttribute('aria-label','Захиалагчийн дуут зурвас');this.audio=audio;this.ui.media.append(audio);
      const generation=this._generation;
      const listen=(type,handler)=>{const guarded=()=>{if(this.destroyed||this.audio!==audio||this._generation!==generation)return;handler();};audio.addEventListener(type,guarded);this._audioListeners.push(()=>audio.removeEventListener(type,guarded));};
      const ready=()=>{this._readDuration();this.ui.play.disabled=false;this.ui.repeat.disabled=false;this._updateTimeline();if(audio.paused&&this._state!=='ended')this._status(audio.currentTime>0?'paused':'ready');};
      listen('loadedmetadata',ready);listen('canplay',ready);listen('durationchange',()=>{this._readDuration();this._updateTimeline();});listen('timeupdate',()=>this._updateTimeline());
      listen('loadstart',()=>this._status('loading'));listen('waiting',()=>this._status('loading'));listen('stalled',()=>{if(audio.readyState<2)this._status('loading');});
      listen('playing',()=>{this._status('playing');this.ui.play.innerHTML=icon('pause');this.ui.play.setAttribute('aria-label','Дууг түр зогсоох');this.ui.play.setAttribute('aria-pressed','true');this._markUnread(false);});
      listen('pause',()=>{this.ui.play.innerHTML=icon('play');this.ui.play.setAttribute('aria-label','Үргэлжлүүлэн сонсох');this.ui.play.setAttribute('aria-pressed','false');if(!audio.ended&&this._state!=='error')this._status(audio.currentTime>0?'paused':'ready');});
      listen('ended',()=>{this._status('ended');this.ui.play.innerHTML=icon('play');this.ui.play.setAttribute('aria-label','Дахин сонсох');this.ui.play.setAttribute('aria-pressed','false');this.ui.heard.hidden=false;this._updateTimeline();if(!this._heardFired){this._heardFired=true;this._callback(this.onHeard);}});
      listen('error',()=>{if(audio.error)this._status('error');});
      audio.src=url;this._applySpeed();this._status('loading');this.ui.play.disabled=false;this.ui.repeat.disabled=false;
      try{audio.load();}catch(_){this._status('error');}
    }
    _readDuration(){if(this.audio&&Number.isFinite(this.audio.duration)&&this.audio.duration>0)this._duration=this.audio.duration;}
    _applySpeed(){if(!this.audio)return;this.audio.playbackRate=this._speed;this.audio.defaultPlaybackRate=this._speed;if('preservesPitch'in this.audio)this.audio.preservesPitch=true;if('webkitPreservesPitch'in this.audio)this.audio.webkitPreservesPitch=true;}
    async _play(){
      const audio=this.audio;if(!this._valid||!audio)return false;
      if(typeof this.order?.signature!=='string'||this.record?.signature!==this.order.signature){this._disposeAudio();this._valid=false;this._status('mismatch');return false;}
      this._applySpeed();const generation=this._generation;
      try{await audio.play();return this.audio===audio&&this._generation===generation;}catch(error){if(this.audio!==audio||this._generation!==generation)return false;this._status(error?.name==='NotAllowedError'?'blocked':'error');return false;}
    }
    _pause(){if(this.audio&&!this.audio.paused){try{this.audio.pause();}catch(_){}}}
    _status(state){
      this._state=state;this.trigger.classList.toggle('po-trigger-playing',state==='playing');this._updateTriggerLabel();
      const strings={empty:'Дуут захиалга хараахан ирээгүй байна.',mismatch:'Энэ дуут зурвас одоогийн захиалгатай тохирохгүй байна.',missing:'Энэ захиалгын дуу хараахан бэлэн болоогүй байна.',loading:'Дууг ачаалж байна…',ready:'Сонсохын тулд тоглуулах товчийг дараарай.',paused:'Түр зогссон.',playing:'Дуу тоглож байна.',ended:'Зурвасыг сонсож дууслаа.',error:'Дууг ачаалж чадсангүй. Дахин оролдоно уу.',blocked:'Дууг тоглуулахын тулд дахин дарна уу.'};
      this.ui.status.textContent=strings[state]||strings.error;this.dialog.dataset.audioState=state;this.ui.status.setAttribute('aria-busy',String(state==='loading'));
      this.ui.retry.hidden=!['error','blocked','missing'].includes(state);
      if(state==='error'){this.ui.play.innerHTML=icon('play');this.ui.play.setAttribute('aria-label','Дуу тоглуулах');this.ui.play.setAttribute('aria-pressed','false');}
    }
    _setWaveform(peaks){const values=waveform(peaks);this.ui.waveform.classList.toggle('po-waveform-neutral',!values);Array.from(this.ui.waveform.children).forEach((bar,i)=>{bar.style.height=values?`${2+values[i]*28}px`:'2px';bar.classList.remove('po-bar-played');});}
    _updateTimeline(){
      const current=this.audio&&Number.isFinite(this.audio.currentTime)?Math.max(0,this.audio.currentTime):0;
      const duration=Number.isFinite(this._duration)&&this._duration>0?this._duration:0;
      this.ui.current.textContent=formatTime(current);this.ui.duration.textContent=duration?formatTime(duration):'—';this.ui.seek.max=String(duration||1);this.ui.seek.value=String(Math.min(current,duration||1));
      this.ui.seek.disabled=!this._valid||!this.audio||this.audio.readyState<1||!duration;
      this.ui.seek.setAttribute('aria-valuetext',`${formatTime(current)} өнгөрсөн, нийт ${duration?formatTime(duration):'хугацаа тодорхойгүй'}`);
      const ratio=duration?Math.min(1,current/duration):0;this.ui.seek.style.setProperty('--po-progress',`${ratio*100}%`);Array.from(this.ui.waveform.children).forEach((bar,i)=>bar.classList.toggle('po-bar-played',ratio>0&&i/32<ratio));
    }
    _revealLabel(revealed){return global.GroceryLanguage?.isRussian()?revealed?'Скрыть текст':this.record?.bilingual?'Текст и перевод заказа':'Текст заказа':revealed?'Текст нуух':'Текст харах';}
    _toggleTranscript(){
      if(!this._valid||this.ui.reveal.disabled)return;
      const reveal=this.ui.transcript.hidden;this.ui.transcript.hidden=!reveal;
      this.ui.reveal.setAttribute('aria-expanded',String(reveal));this.ui.reveal.innerHTML=`${icon('note')}${this._revealLabel(reveal)}`;
      if(reveal&&!this._revealed){this._revealed=true;this._callback(this.onReveal);}
      // Scroll only the chat, never the outer page or the mobile viewport.
      const top=reveal?this.ui.chat.scrollTop+this.ui.transcript.getBoundingClientRect().top-this.ui.chat.getBoundingClientRect().top-12:0;
      this.ui.chat.scrollTo({top,behavior:'auto'});
    }
    open(){if(this.destroyed)return false;if(!this.dialog.open){if(typeof this.dialog.showModal==='function')this.dialog.showModal();else this.dialog.setAttribute('open','');}this.trigger.setAttribute('aria-expanded','true');this._markUnread(false);this.ui.dismiss.focus({preventScroll:true});return true;}
    close(){if(this.destroyed)return;this._pause();if(this.dialog.open){if(typeof this.dialog.close==='function')this.dialog.close();else this.dialog.removeAttribute('open');}this.trigger.setAttribute('aria-expanded','false');this.trigger.focus({preventScroll:true});}
    stop(){if(this.destroyed)return;this._pause();if(this.audio){try{this.audio.currentTime=0;}catch(_){}}this.ui.play.innerHTML=icon('play');this.ui.play.setAttribute('aria-label','Дуу тоглуулах');this.ui.play.setAttribute('aria-pressed','false');this._updateTimeline();if(this.audio&&this._valid)this._status(this.audio.readyState<1?'loading':'ready');}
    destroy(){
      if(this.destroyed)return;this.close();this._disposeAudio();clearTimeout(this._notificationTimer);this._listeners.forEach(dispose=>dispose());this._listeners=[];this._badge.remove();this._notification.remove();this.trigger.classList.remove('po-trigger','po-trigger-unread','po-trigger-playing');
      for(const [name,value]of[['aria-label',this._originalTriggerLabel],['aria-expanded',this._originalTriggerExpanded],['aria-controls',this._originalTriggerControls],['aria-haspopup',this._originalTriggerHaspopup]]){if(value===null)this.trigger.removeAttribute(name);else this.trigger.setAttribute(name,value);}
      owners.delete(this.dialog);if(this._createdDialog)this.dialog.remove();else{this.dialog.replaceChildren(...this._originalDialogNodes);this.dialog.className=this._originalDialogClass;this.dialog.removeAttribute('data-audio-state');if(this._originalDialogLabelledBy===null)this.dialog.removeAttribute('aria-labelledby');else this.dialog.setAttribute('aria-labelledby',this._originalDialogLabelledBy);}
      this.order=null;this.record=null;this.destroyed=true;
    }
  }
  PhoneOrders.formatTime=formatTime;
  PhoneOrders.waveform=waveform;
  global.PhoneOrders=PhoneOrders;
})(window);
