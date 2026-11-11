(function () {
  'use strict';
  const G = window.GroceryGame;
  const A = window.GroceryArt;
  const R = window.GroceryRussian;
  const F = window.GroceryFulfilment;
  const Prices = window.GroceryPrices;
  const L = window.GroceryLanguage;
  const Shift = window.GroceryShift;
  const Rotation = window.GroceryOrderRotation;
  const Bag = window.GroceryBag;
  const Ach = window.GroceryAchievements;
  const ui = (mn, ru) => L?.isRussian() ? ru : mn;
  const $ = id => document.getElementById(id);
  // Preserve browser find and native clipboard actions before any game handler.
  window.addEventListener('keydown',event=>{
    if(!window.GroceryInput.nativeShortcut(event))return;
    window.dispatchEvent(new Event('grocery:releasecontrols'));
    event.stopImmediatePropagation();
  },true);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const desktopControls = window.matchMedia('(hover: hover) and (pointer: fine)');
  const updateControlLayout = () => {
    const keyboard=desktopControls.matches && !(navigator.maxTouchPoints > 0);
    document.body.classList.toggle('keyboard-controls',keyboard);
    $('world-canvas').setAttribute('aria-label',keyboard?ui('Алхах: W A S D. Эргэх: зүүн, баруун сум.','Движение: W A S D. Поворот: стрелки влево и вправо.'):ui('Дэлгэцийн сумыг дарж алхана. Чирж эргэн тойрноо харна.','Нажимайте экранные стрелки, чтобы идти. Проведите пальцем, чтобы осмотреться.'));
  };
  updateControlLayout();
  desktopControls.addEventListener('change', updateControlLayout);
  window.addEventListener('grocery:language',updateControlLayout);
  const STORAGE_KEY = 'mongol-huns-v2';
  function readStorage(key) { try { const value = JSON.parse(localStorage.getItem(key)); return value && typeof value === 'object' && !Array.isArray(value) ? value : {}; } catch (_) { return {}; } }
  const previousProfile = readStorage(STORAGE_KEY);
  const stored = window.GroceryProfile.upgrade(previousProfile);
  if (stored.migrated) { try { if (!localStorage.getItem('mongol-huns-v2-before-supermarket')) localStorage.setItem('mongol-huns-v2-before-supermarket', JSON.stringify(previousProfile)); } catch (_) {} }
  const legacy = readStorage('mongol-huns-v1');
  const legacyAvailable = Array.isArray(legacy.bests) && legacy.bests.some(Boolean) || legacy.cart && Object.keys(legacy.cart).length > 0;
  let counts = G.normalizeCounts(stored.counts);
  let playShift = Shift.normalize(stored.playShift);
  const seed = Number.isInteger(stored.seed) ? stored.seed : G.DEFAULT_SEED;
  const classicAvailable = stored.classicAvailable === true;
  let mode = stored.mode === 'text' ? 'text' : stored.mode === 'classic' && classicAvailable ? 'classic' : stored.mode === 'legacy' && legacyAvailable || !stored.mode && legacyAvailable ? 'legacy' : 'campaign';
  const bestById = {};
  if (stored.bestById && typeof stored.bestById === 'object') Object.entries(stored.bestById).forEach(([key, value]) => { if (/^(campaign|text|classic|legacy):\d+$/.test(key) && Number.isInteger(value) && value >= 0 && value <= 3) bestById[key] = value; });
  G.LEGACY_ORDERS.forEach((o, i) => { const n = legacy.bests?.[i]; if (Number.isInteger(n) && n > 0 && n <= 3) bestById[`legacy:${o.id}`] = Math.max(n, bestById[`legacy:${o.id}`] || 0); });
  const freshOrderSeed=()=>{try{return Math.max(1,crypto.getRandomValues(new Uint32Array(1))[0]);}catch(_){return 1+Math.floor(Math.random()*0xfffffffe);}};
  let market=Shift.normalizeMarket(stored.market,bestById,previousProfile.version||legacyAvailable?0:freshOrderSeed());
  let orderRotation=Rotation.normalize(stored.orderRotation,Object.keys({...bestById,...market.orderNumbers}));
  Prices.setDay(market.day);
  const drafts = stored.drafts && typeof stored.drafts === 'object' && !Array.isArray(stored.drafts) ? stored.drafts : {};
  const activeByMode = stored.activeByMode && typeof stored.activeByMode === 'object' ? stored.activeByMode : {};
  const orderKey = id => `${mode}:${id}`;
  const currentCampaign=()=>mode==='campaign'||mode==='text';
  const fullCampaignCache=new Map();
  function fullCampaign(format=mode){if(!fullCampaignCache.has(format))fullCampaignCache.set(format,format==='text'?(orderRotation.textSeed===null?window.GroceryTextOrders.createCampaign(G,[50,50,50,50],seed):window.GroceryTextOrders.createGeneratedCampaign(G,[50,50,50,50],orderRotation.textSeed,orderRotation.textGeneration)):G.createCampaign([50,50,50,50],seed));return fullCampaignCache.get(format);}
  function planFreshOrders(){
    if(mode==='text'){
      const generation=orderRotation.textGeneration+1,result=window.GroceryTextOrders.createFreshCampaign(G,[50,50,50,50],freshOrderSeed(),generation,orderRotation.textSignatures);
      orderRotation={...orderRotation,textGeneration:generation,textSeed:result.seed};fullCampaignCache.set('text',result.orders);
    }
    orderRotation=Rotation.plan(orderRotation,fullCampaign(),counts,mode,freshOrderSeed());
  }
  const campaignOrders=()=>mode==='legacy'?G.LEGACY_ORDERS:mode==='classic'?G.createClassicCampaign(counts):Rotation.select(fullCampaign(),counts,orderRotation,mode);
  const orderInventory=order=>order.textOnly?window.GroceryTextOrders.createInventory(G,order):G.createInventory(order);
  let orders = campaignOrders();
  let bests = orders.map(o => bestById[orderKey(o.id)] || 0);
  const dailyBests=()=>Shift.dayBests(market,orders,mode);
  const shiftScope=()=>currentCampaign()?playShift:{scope:'all'};
  function canOpenOrder(index) {
    if (!Number.isInteger(index) || index < 0 || index >= orders.length) return false;
    if (bests[index]) return true;
    const level = G.levelForOrder(orders[index]);
    return Shift.next(orders,dailyBests(),mode==='legacy'?{scope:'all'}:{scope:'level',level},market,mode)===index;
  }
  const legacyIndex = Number.isInteger(legacy.orderIndex) && legacy.orderIndex >= 0 && legacy.orderIndex < G.LEGACY_ORDERS.length ? legacy.orderIndex : 0;
  let orderIndex = orders.findIndex(o => o.id === activeByMode[mode]);
  if (orderIndex < 0) orderIndex = mode === 'legacy' ? legacyIndex : Shift.next(orders,dailyBests(),playShift,market,mode);
  if (!canOpenOrder(orderIndex)) orderIndex = orders.findIndex((_, i) => canOpenOrder(i) && !dailyBests()[i]);
  if (orderIndex < 0) orderIndex = 0;
  let order = orders[orderIndex];
  const current = drafts[orderKey(order.id)] || (mode === 'legacy' && orderIndex === legacyIndex ? legacy : {});
  const oldNumber=market.day===1&&!market.scheduleSeed&&previousProfile.version?(Number(current.preparation?.number)||order.number||order.id):0;
  ({market,order}=Shift.numberOrder(market,mode,order,oldNumber,false));
  let inventory = orderInventory(order);
  let cart = G.sanitizeCart(current.cart, inventory);
  let service = F.sanitizeService(current.service,order,inventory);
  let disposals = F.sanitizeDisposals(current.disposals,inventory,order.day);
  let stats=F.initStats(stored.stats,drafts);
  const achievementHistory=Shift.progress(orders,dailyBests(),{scope:'all'});
  let achievements=Ach.hydrate(stored.achievements,{day:market.day,totalCompleted:market.totalCompleted,perfect:Object.values(bestById).filter(n=>n===3).length,textOrders:Object.entries(bestById).filter(([key,n])=>key.startsWith('text:')&&n>0).length,heard:Object.values(stored.heard||{}).filter(n=>n===true).length,heardKeys:Object.entries(stored.heard||{}).filter(([,n])=>n===true).map(([key])=>key),levels:achievementHistory.levels.filter(l=>l.total>0&&l.done===l.total).map(l=>l.level),fullShift:achievementHistory.levels.every(l=>l.total>0&&l.done===l.total),completedKeys:Object.keys(market.completed).map(key=>market.day+':'+key)});
  const sanitizeAchievementRun=input=>({day:market.day,heard:input?.day===market.day&&input.heard===true,revealed:input?.day===market.day&&input.revealed===true,viewed:input?.day===market.day&&Array.isArray(input.viewed)?[...new Set(input.viewed.filter(id=>inventory.some(l=>l.id===id)))].slice(-300):[],weightHints:input?.day===market.day&&Array.isArray(input.weightHints)?[...new Set(input.weightHints.filter(id=>inventory.some(l=>l.id===id)))].slice(-300):[]});
  let achievementRun=sanitizeAchievementRun(current.achievementRun);
  const achievementKey=()=>`${market.day}:${mode}:${order.id}`;
  function achievementEvent(type,suffix='',detail={}){const result=Ach.record(achievements,{...detail,type,day:market.day,key:achievementKey()+(suffix?':'+suffix:'')});achievements=result.state;window.GroceryAchievementUI.update(achievements,result.newly);}
  let fineReceipt=F.sanitizeFine(current.fineReceipt,order);
  let inspections = F.sanitizeInspections(current.inspections,inventory);
  let eggInspections = F.sanitizeEggInspections(current.eggInspections,inventory);
  let preparation = F.sanitizePrep(F.replacementOrder(order,service),current.preparation);
  inventory.forEach(l=>{if(cart[l.id]){cart[l.id]=Math.min(cart[l.id],availableStock(l));if(!cart[l.id])delete cart[l.id];}});
  let attempts = Number.isInteger(current.attempts) ? Math.max(0, Math.min(9999, current.attempts)) : 0;
  let checked=current.checked===true&&F.deliveryReview(F.replacementOrder(order,service),inventory,cart,inspections,!service.activeId,eggInspections).canSend;
  let packingStage=F.sanitizePacking(current.packingStage,F.deliveryReview(F.replacementOrder(order,service),inventory,cart,inspections,!service.activeId,eggInspections));
  let delivered = current.delivered === true && (checked||service.hadComplaint) && (bests[orderIndex]>0||F.hasPending(service));
  market=Shift.closeDay(market,orders,mode,shiftScope(),F.hasPending(service));
  let introSeen = stored.introSeen === true || legacy.introSeen === true;
  let controlsTutorialDay = Number.isInteger(stored.controlsTutorialDay) ? stored.controlsTutorialDay : 0;
  let afterControlsTutorial = null;
  let russianHints = stored.russianHints === true || L?.isRussian() === true;
  let scaleHints = stored.scaleHints !== false;
  let russianOrderOpen = false;
  let deliveryMode = mode==='text'||stored.deliveryMode==='text'?'text':'audio';
  const revealed = stored.revealed && typeof stored.revealed === 'object' ? stored.revealed : {};
  const heard = stored.heard && typeof stored.heard === 'object' ? stored.heard : {};
  let phone = null;
  let clientMessages = null, prepDesk = null, pendingPreparationAction = null;
  let sound = stored.sound === true || stored.sound === undefined && legacy.sound === true;
  let orderListLevel = G.levelForOrder(order);
  let category = 'all';
  let feedback = null;
  let inspectedLot = null;
  let inspectSource = 'shelf';
  let pendingDisposal = null;
  let pendingOrder = null;
  let shipping = false;
  let canPack = false;
  let settingsFromMenu = false, helpFromMenu = false, ordersFromMenu = false;
  let toastTimer;
  let audioContext;
  let scaleLot = null, scaleGrams = 0, scaleAnswerOK = false, scaleHasBag = false, scaleTied = false, artSerial = 0;
  const completedCount = () => dailyBests().filter(Boolean).length;
  const stars = n => `<span class="stars" aria-label="${n} од">${[1, 2, 3].map(i => A.icon('star', i <= n ? 'filled' : 'empty')).join('')}</span>`;
  const activeRequest = () => F.replacementOrder(order,service);
  const packingResult=()=>F.deliveryReview(activeRequest(),inventory,cart,inspections,!service.activeId,eggInspections);
  const amountText=(p,n)=>L?.isRussian()?R.amount(typeof p==='string'?G.BY_ID[p]:p,n):G.formatAmount(p,n);
  function worldChanged(){window.dispatchEvent(new Event('grocery:cart'));window.dispatchEvent(new Event('grocery:transport'));}
  function focusWorld(){if(!document.querySelector('dialog[open]'))$('world-canvas').focus({preventScroll:true});}
  function renderStats(){for(const panel of document.querySelectorAll('[data-shift-stats]'))panel.innerHTML=`<span><b>${market.totalCompleted}</b><small>${ui('Бэлэн захиалга','Собрано')}</small></span><span title="${stats.fineAmount.toLocaleString('ru-RU')} ₮"><b>${stats.fines}</b><small>${ui('Торгууль','Штрафы')}</small></span><span title="${stats.refundAmount.toLocaleString('ru-RU')} ₮"><b>${stats.refunds}</b><small>${ui('Мөнгө буцаалт','Возвраты')}</small></span>`;}
  const hasPreparation = () => F.prepared(activeRequest(),preparation);
  function reservedStock(lot){return (service.sentCart[lot.id]||0)+(service.activeId?(service.originalCart[lot.id]||0):0);}
  function availableStock(lot) { return Math.max(0,lot.stock-reservedStock(lot)-(disposals[lot.id]||0)); }
  function ensurePreparation(action) { if(hasPreparation())return true;pendingPreparationAction=action||null;prepDesk?.open();return false; }
  function renderCarrier() {
    const kind=packingStage!=='collecting'?'bag':hasPreparation()?preparation.transport:'';
    const icon=$('bag-button').querySelector('[data-icon]');if(icon){icon.dataset.icon=kind||'bag';icon.innerHTML=A.icon(kind||'bag');}
    $('bag-button').querySelector('span:nth-child(2)').textContent=kind==='cart'?'Тэрэг':kind==='basket'?'Сагс':'Уут';
    $('bag-button').setAttribute('aria-label',kind==='cart'?'Тэрэг':kind==='basket'?'Сагс':'Уут');
    $('packing-title').textContent=packingStage==='sealed'?'Бэлэн уут':packingStage==='packed'?'Бараагаа уутлах':service.activeId?'Солих бараа':kind==='cart'?'Таны тэрэг':kind==='basket'?'Таны сагс':'Таны уут';
  }
  function save() {
    drafts[orderKey(order.id)] = { cart: { ...cart }, disposals:{...disposals}, attempts, checked, delivered, preparation:{...preparation}, inspections:{...inspections},eggInspections:{...eggInspections},service,packingStage,fineReceipt,achievementRun };
    activeByMode[mode] = order.id;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, catalogVersion: window.GroceryProfile.CATALOG_VERSION, classicAvailable, counts, seed, mode, playShift, market, orderRotation,bestById, drafts, activeByMode, introSeen, controlsTutorialDay, sound, deliveryMode, revealed, heard, russianHints,scaleHints,stats,achievements,uiLanguage:L?.current()||'mn' })); } catch (_) { /* Gameplay also works without storage. */ }
  }
  const photoFor = lot => window.ProducePhotos?.[G.photoKey(lot)] || window.ProductPhotos?.[G.photoKey(lot)] || window.ProductPhotos?.[lot.productId];
  const productArt = (lot, extra = '', original=false) => {
    const art = A.product(lot.productId, extra, lot.pack, G.photoKey(lot),original);
    if (G.BY_ID[lot.productId].category !== 'produce' || G.BY_ID[lot.productId].shelfKind==='punnet' || G.isBulk(lot) || photoFor(lot)?.netted) return art;
    const id = `produce-net-${++artSerial}`;
    return `<span class="product-art netted-product ${extra}">${art}<svg class="produce-mesh" viewBox="0 0 128 128" aria-hidden="true"><defs><clipPath id="${id}"><path d="M45 20H83C93 38 115 72 108 104Q64 127 20 104C13 72 35 38 45 20Z"/></clipPath></defs><g clip-path="url(#${id})" fill="none" stroke="#bf893c" stroke-width="1.3" opacity=".8">${Array.from({length:18},(_,i)=>`<path d="M${i*14-100} 0l128 128M${i*14-100} 128L${i*14+28} 0"/>`).join('')}</g><path d="M45 20H83M49 16l-7-12m20 12V3m14 13 10-12" fill="none" stroke="#d2a351" stroke-width="3"/></svg></span>`;
  };
  const baggedArt=lot=>G.isBulk(lot)?Bag.pouch({art:productArt(lot),productId:lot.productId,grams:cart[lot.id]||0,tied:true,extra:"product-art weighed-product-art"}):productArt(lot);
  function fillIcons(scope = document) {
    scope.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = A.icon(el.dataset.icon); });
  }
  function chime(kind = 'add') {
    if (!sound) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audioContext ||= new Audio();
      audioContext.resume().catch(() => {});
      const notes = kind === 'success' ? [523.25, 659.25, 783.99] : kind === 'check' ? [440, 554.37] : [587.33];
      notes.forEach((hz, i) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const t = audioContext.currentTime + i * .11;
        oscillator.type = 'sine'; oscillator.frequency.value = hz;
        gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(.045, t + .01); gain.gain.exponentialRampToValueAtTime(.001, t + .19);
        oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(t); oscillator.stop(t + .2);
      });
    } catch (_) { /* Optional sound must not interrupt play. */ }
  }
  function toast(message) {
    clearTimeout(toastTimer); $('toast').textContent = message; $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 2100);
  }
  function soundUI() {
    $('sound-button').innerHTML = A.icon(sound ? 'sound' : 'mute');
    $('sound-button').setAttribute('aria-label', sound ? 'Дуу унтраах' : 'Дуу асаах');
    $('sound-button').setAttribute('aria-pressed', String(sound));
  }
  function audioRecord() {
    const record = window.OrderAudio?.[order.id];
    return mode === 'campaign' && record?.signature === G.orderSignature(order) ? { ...record, hintRu: russianHints ? R.orderText(G,order) : '', bilingual:L?.isRussian()===true } : null;
  }
  function syncPhone() {
    if (!phone) return;
    phone.setOrder(mode === 'campaign' && deliveryMode === 'audio' ? { ...order, signature: G.orderSignature(order) } : null, audioRecord());
    syncMessages();
  }
  function russianOrderHint() {
    if(!russianHints||L?.isRussian())return '';
    return `<details class="ru-help ticket-ru" id="order-russian-hint" ${russianOrderOpen?'open':''}><summary lang="ru">Русская подсказка</summary><p lang="ru" class="ru-order-text">${esc(R.orderText(G,activeRequest()))}</p></details>`;
  }
  function renderTicket() {
    $('ticket-compact-number').textContent=`№ ${String(order.number || orderIndex + 1).padStart(3,'0')}`;
    const request=activeRequest(),progress=F.lineProgress(request,inventory,cart);
    const requestNote=request.preference||request.replacement?request.message:'';
    const levelRoute=Shift.indexes(orders,{scope:'level',level:G.levelForOrder(order)},market,mode);
    const listen = mode === 'campaign' && deliveryMode === 'audio' && !service.activeId;
    const showText = !listen || revealed[orderKey(order.id)] === true;
    $('order-ticket').innerHTML = `
      <div class="ticket-topline"><span>${listen ? 'ДУУТ ЗАХИАЛГА' : 'ШИНЭ ЗАХИАЛГА'}</span><span class="ticket-number">№ ${String(order.number || orderIndex + 1).padStart(3, '0')}</span></div>
      <div class="ticket-level">${mode === 'legacy' ? 'Өмнөх захиалгууд' : `${mode === 'classic' ? 'Өмнөх тоглолт · ' : ''}${order.level}-р түвшин · ${G.LEVELS[order.levelIndex].name} <b>${levelRoute.indexOf(orderIndex)+1}/${levelRoute.length}</b>`}</div>
      <div class="customer"><span class="avatar" aria-hidden="true">${esc(order.customer.slice(0, 1))}</span><div><small>Захиалагч</small><strong>${esc(order.customer)}</strong></div></div>
      ${listen ? `<button class="ticket-voice" id="ticket-voice"><span class="ticket-voice-icon">▷</span><span>${heard[orderKey(order.id)] ? 'Дахин сонсох' : 'Утсанд зурвас ирлээ'}<small>Дуут захиалгаа нээх →</small></span></button>` : ''}
      ${showText ? `${requestNote?`<p class="customer-message">«${esc(requestNote)}»</p>`:''}<ol class="order-lines">${progress.map((line,i)=>`<li class="order-line ${line.complete?'is-collected':''}"><span class="line-number">${line.complete?A.icon('check'):String(i+1).padStart(2,'0')}</span><span class="product-name"><span class="order-product-title">${esc(G.lotName(line))}</span>${L?.isRussian()?`<small class="ru-product-hint" lang="ru">${esc(R.name(line))}</small>`:''}${line.collected?`<small class="collected-amount" lang="${L?.current()||'mn'}">${ui('Цуглуулсан','Собрано')}: ${esc(amountText(line.productId,line.collected))}</small>`:''}</span><span class="order-amount" data-learning>${amountText(line.productId,line.amount)}</span></li>`).join('')}</ol>` : '<p class="ticket-listen-hint">Зурвасаа сонсоод бараагаа цуглуулаарай.<br>Хүсвэл утсан дээрээс бичвэрийг нээж болно.</p>'}
      ${F.hasPending(service)?`<button id="ticket-client-message" class="ticket-service">${service.activeId?"Солих барааг бэлтгэж байна":"Хэрэглэгчийн зурвас"}</button>`:""}${russianOrderHint()}<div class="ticket-bottom"><span>Нийт ${request.lines.length} нэр төрөл</span><strong>Хүргэлтээр</strong></div>`;
    const ruHint=$('order-russian-hint');if(ruHint)ruHint.addEventListener('toggle',()=>{if(ruHint.isConnected)russianOrderOpen=ruHint.open;});
    $('ticket-client-message')?.addEventListener('click',()=>clientMessages?.open());
    $('ticket-voice')?.addEventListener('click', () => phone?.open());
    $('progress-count').textContent = `${completedCount()}/${orders.length}`;renderStats();
  }
  function renderCategories() {
    if (document.body.classList.contains('world-mode')) return;
    $('categories').innerHTML = G.CATEGORIES.map(c => `<button class="category-button" data-category="${c.id}" aria-pressed="${category === c.id}">${A.icon(c.icon)}${c.name}</button>`).join('');
  }
  function renderShelves() {
    if (document.body.classList.contains('world-mode')) return;
    const lots = inventory.filter(lot => !lot.hidden && (category === 'all' || G.BY_ID[lot.productId].category === category));
    $('shelf-count').textContent = `${lots.length} сонголт`;
    $('shelves').innerHTML = lots.map(lot => {
      const p = G.BY_ID[lot.productId];
      const empty = (cart[lot.id] || 0) >= lot.stock;
      return `<button class="product-card" data-lot="${lot.id}" draggable="${!empty}" ${empty ? 'disabled' : ''} aria-label="${esc(G.lotName(lot))}, ${G.formatAmount(p, lot.pack)}, шошго харах">
        <span class="inspect-hint">${A.icon('search')}</span>${productArt(lot)}<span class="product-name">${esc(G.lotName(lot))}</span><span class="pack-amount">${G.formatAmount(p, lot.pack)}</span>${empty ? '<span class="out-of-stock">Тавиур хоосон</span>' : ''}</button>`;
    }).join('');
  }
  function bagArt(){
    const chosen=inventory.filter(l=>cart[l.id]),stage=packingStage;
    $('bag-illustration').className=`bag-scene packing-${stage}`;
    $('bag-illustration').innerHTML=stage==='collecting'?`<div class="packing-cart-preview">${A.icon(preparation.transport||'basket')}<span>${ui('Бараа сагсанд байна','Товары в корзине')}</span></div>`:`<div class="packing-paper ${stage==='sealed'?'is-sealed':''}">${stage==='packed'?`<div class="packing-products">${chosen.map(lot=>`<span>${baggedArt(lot)}</span>`).join('')}</div>`:'<div class="packing-fold"></div><div class="packing-tape"></div>'}<div class="packing-paper-front"><b>№ ${F.orderNumber(order)}</b><span data-learning>${esc(order.customer)}</span><small>${preparation.bags} ${ui('уут','пак.')}</small></div></div>`;
  }
  function feedbackHTML(result) {
    if(result.canSend&&!result.ok)return `<h3>${ui('Захиалга дутуу байна','Заказ неполный')}</h3><p>${ui('Дутуу захиалгыг өгч болно. Торгууль','Можно упаковать и отдать. Штраф за недостающее')}: <b>${result.fine.toLocaleString('ru-RU')} ₮</b></p><ul>${result.missing.map(l=>`<li>${esc(L?.isRussian()?R.name(l):G.lotName(l))}: ${esc(amountText(l.productId,l.amount))}</li>`).join('')}</ul>`;
    if (result.ok) return `<h3>${A.icon('check')} Нэр, тоо хэмжээ таарч байна.</h3><p>${result.uncheckedEggs?.length?ui('Зарим өндөгний хайрцгийг нээж шалгаагүй байна.','Есть коробки яиц, которые вы не открыли для проверки.'):result.unverified?.length?'Зарим барааны хугацааг шалгаагүй байна. Хүсвэл шошгыг нь шалгаад хүргэлтэд гаргаарай.':'Муудсан, хугацаа нь дууссан бараа байхгүй.'}</p>`;
    const messages = [
      ...(result.damaged || []).map(e=>ui(`${esc(G.BY_ID[e.productId].name)}: хагарсан өндөг байна. Өөр хайрцаг сонгоорой.`,`${esc(R.name(e.productId))}: в коробке есть треснувшие яйца. Выберите другую коробку.`)),
      ...(result.spoiled || []).map(e => `${esc(G.BY_ID[e.productId].name)}: муудсан байна. Өнгө, гадаргуу, хөгцийг нь ажиглаад өөрийг сонгоорой.`),
      ...result.expired.map(e => `${esc(G.BY_ID[e.productId].name)}: хугацаа нь дууссан байна. Өөр багцаас сонгоорой.`),
      ...(result.wrongVariants || []).map(e => `${esc(e.name)}: захиалагч ${esc(e.expectedName)} хүссэн байна.`),
      ...result.missing.map(e => `${esc(G.lotName(e))}: ${G.formatAmount(e.productId, e.amount)} дутуу байна.`),
      ...result.excess.map(e => `${esc(G.lotName(e))}: ${G.formatAmount(e.productId, e.amount)} илүү байна.`),
      ...result.unexpected.map(e => `${esc(G.BY_ID[e.productId].name)}: энэ бараа захиалгад байхгүй.`)
    ];
    return `<h3>Дахиад нэг шалгаарай.</h3><ul>${messages.map(m => `<li>${m}</li>`).join('')}</ul>`;
  }
  function renderPacking() {
    const selected = inventory.filter(lot => cart[lot.id]);
    const totalPackages = selected.reduce((sum, lot) => sum + G.packageQuantity(lot, cart[lot.id]), 0);
    $('mobile-cart-count').textContent = totalPackages;
    $('header-bag-count').textContent=packingStage==='collecting'?totalPackages:preparation.bags;
    bagArt();renderCarrier();
    const pending=F.hasPending(service),ready=hasPreparation();
    $('service-summary').innerHTML=pending?`<p>${service.activeId?'Шинэ бараагаар солих захиалгыг бэлтгээрэй.':'Хэрэглэгчээс зурвас ирсэн байна.'}</p><button id="packing-client-message" class="secondary-button">Хэрэглэгчийн зурвас</button>`:!ready&&!delivered?'<button id="packing-prepare" class="secondary-button">Уут, сагсаа бэлтгэх</button>':`<p class="carrier-label">№ ${F.orderNumber(order)} · <span data-learning>${esc(order.customer)}</span> · ${preparation.bags} уут</p>`;
    $('packing-client-message')?.addEventListener('click',()=>clientMessages?.open());
    $('packing-prepare')?.addEventListener('click',()=>prepDesk?.open());
    $('cart-contents').innerHTML = selected.length ? selected.map(lot => {
      const p = G.BY_ID[lot.productId];
      if (G.isBulk(lot)) return `<div class="cart-line weighed-line"><button class="cart-preview" data-inspect="${lot.id}" aria-label="${esc(G.lotName(lot))}, ${G.formatAmount(p,cart[lot.id])}, дахин харах">${baggedArt(lot)}<span><span class="cart-name">${esc(G.lotName(lot))}</span><span class="cart-volume">Жинлэсэн · ${G.formatAmount(p,cart[lot.id])}</span></span></button><div class="weighed-controls"><button data-weigh="${lot.id}" ${delivered||shipping||packingStage!=='collecting'?"disabled":""}>Жин өөрчлөх</button><button data-return="${lot.id}" ${delivered||shipping||packingStage!=='collecting'?"disabled":""} aria-label="${esc(G.lotName(lot))}: бүгдийг буцаах">Буцаах</button></div></div>`;
      return `<div class="cart-line"><button class="cart-preview" data-inspect="${lot.id}" aria-label="${esc(G.lotName(lot))}, ${G.formatAmount(p, lot.pack)}, шошгыг дахин харах">${productArt(lot)}<span><span class="cart-name">${esc(G.lotName(lot))}</span><span class="cart-volume">${G.formatAmount(p, lot.pack)} · багц ${lot.batch}</span></span></button><div class="qty-control"><button data-remove="${lot.id}" ${delivered||shipping||packingStage!=='collecting'?"disabled":""} aria-label="${esc(G.lotName(lot))}: нэг савлагааг буцаах">${A.icon('minus')}</button><span class="qty">${cart[lot.id]}</span><button data-add="${lot.id}" ${delivered||shipping||packingStage!=='collecting'||cart[lot.id]>=availableStock(lot)?"disabled":""} aria-label="${esc(G.lotName(lot))}: ижил багцаас нэг савлагаа нэмэх">${A.icon('plus')}</button></div></div>`;
    }).join('') : `<p class="cart-empty">Уут тань хоосон байна.<br><strong>Тавиураас бараагаа сонгоорой.</strong></p>`;
    $('feedback').hidden = delivered || !feedback && !checked;
    if (feedback || checked) {
      const result = feedback || packingResult();
      $('feedback').innerHTML = feedbackHTML(result);
      $('feedback').classList.toggle('success', result.ok);
    }
    $('check-button').hidden=checked||delivered||packingStage!=='collecting';
    $('pack-items-button').hidden=!checked||delivered||packingStage!=='collecting';
    $('pack-items-button').disabled=!canPack||shipping;
    $('seal-bag-button').hidden=delivered||packingStage!=='packed';
    $('seal-bag-button').disabled=!canPack||shipping;
    $('unpack-button').hidden=delivered||packingStage==='collecting';
    $('dispatch-button').hidden=!checked||delivered||packingStage!=='sealed';
    $('packing-steps').innerHTML=['Бараа сагсанд','Уутанд хийсэн','Уутыг боосон'].map((text,i)=>`<span class="${i<=(packingStage==='sealed'?2:packingStage==='packed'?1:0)?'active':''}">${i+1}. ${text}</span>`).join('');
    $('dispatch-button').disabled = delivered || shipping || !canPack;
    $('check-button').disabled = !canPack || delivered;
    $('pack-location').hidden = canPack;
    $('packing').querySelector('.packing-footnote').textContent=packingStage==='sealed'?'Уут бэлэн. Захиалгыг өгч болно.':packingStage==='packed'?'Одоо уутаа боогоорой.':checked?'Бараагаа уутанд хийгээрэй.':'Бэлэн болсон үедээ шалгаарай.';
  }
  function renderAll() { renderTicket(); renderCategories(); renderShelves(); renderPacking(); soundUI(); }
  function changeCart(lotId, delta) {
    if(shipping||delivered)return;
    if(packingStage!=='collecting'){toast(ui('Эхлээд барааг сагсанд буцаагаарай.','Сначала верните товары в корзину.'));return;}
    const lot = inventory.find(l => l.id === lotId);
    if (!lot) return;
    if(delta>0&&!ensurePreparation(()=>changeCart(lotId,delta)))return;
    const previous = cart[lotId] || 0;
    const next = Math.max(0, Math.min(availableStock(lot), previous + delta));
    const units=inventory.reduce((sum,l)=>sum+G.packageQuantity(l,l.id===lotId?next:cart[l.id]||0),0);
    if(delta>0&&preparation.transport==='basket'&&units>6){toast(ui('Сагс дүүрсэн байна. Илүү бараагаа буцаагаарай.','Корзина заполнена. Уберите лишние товары.'));return;}
    if (next === previous) return;
    if (next) cart[lotId] = next; else delete cart[lotId];
    checked=false;feedback=null;packingStage='collecting';if(fineReceipt.recorded&&!service.activeId)fineReceipt=F.sanitizeFine(null,order);
    save();renderTicket();renderShelves();renderPacking();
    window.dispatchEvent(new Event('grocery:cart'));
    if (delta > 0) chime('add');
  }
  function productMore(lot,p){
    const bulk=G.isBulk(lot),chosen=cart[lot.id]||0,remaining=Math.max(0,availableStock(lot)-chosen);
    const quantity=n=>bulk?amountText(p,n):`${n} ${ui('савлагаа','уп.')}`;
    const rows=[[ui('Нэр','Название'),`${esc(G.lotName(lot))}${L?.isRussian()?`<small lang="ru">${esc(R.name(lot))}</small>`:''}`],[ui('Савлагааны хэмжээ','В упаковке'),bulk?ui('Жинлэж авна','На развес'):amountText(p,lot.pack)],[ui('Тавиурт','На полке'),quantity(remaining)],[ui('Сагсанд','В корзине'),quantity(chosen)]];
    return `<div class="product-more"><button type="button" id="inspect-more-button" class="product-more-button" aria-expanded="false" aria-controls="inspect-more">${A.icon('help')}Барааны талаар дэлгэрэнгүй</button><section id="inspect-more" class="product-more-panel" hidden><h3>Дэлгүүр дэх бараа</h3><dl>${rows.map(([title,value])=>`<div class="more-row"><dt>${title}</dt><dd data-learning>${value}</dd></div>`).join('')}</dl></section></div>`;
  }
  function bindProductMore(){
    bindDisposalAction();
    $('inspect-more-button')?.addEventListener('click',()=>{const open=$('inspect-more').hidden;$('inspect-more').hidden=!open;$('inspect-more-button').setAttribute('aria-expanded',String(open));});
    const current=inventory.find(l=>l.id===inspectedLot);if(!current)return;
    const choices=inventory.filter(l=>!l.hidden&&l.productId===current.productId&&(availableStock(l)>0||cart[l.id])).sort((a,b)=>(a.variantId||'').localeCompare(b.variantId||'')||a.pack-b.pack||a.batch.localeCompare(b.batch));
    if(choices.length<2)return;
    $('inspect-content').querySelector('.inspect-header').insertAdjacentHTML('afterend',`<label class="inspect-lot-picker">${ui('Тавиур дээрх савлагаа','Упаковки на полке')}<select id="inspect-lot-choice" data-learning aria-label="${ui('Савлагаа сонгох','Выбрать упаковку')}">${choices.map(l=>`<option value="${esc(l.id)}" ${l.id===current.id?'selected':''}>${esc(G.lotName(l))} · ${G.isBulk(l)?ui('Жинлэж авна','На развес'):amountText(G.BY_ID[l.productId],l.pack)} · ${ui('Багц','Партия')} ${esc(l.batch)}</option>`).join('')}</select></label>`);
    $('inspect-lot-choice').addEventListener('change',event=>openInspect(event.target.value,cart[event.target.value]?'cart':'shelf'));
  }
  function focusInspect(){const dialog=$('inspect-dialog');dialog.tabIndex=-1;dialog.focus({preventScroll:true});}
  function russianProductHint(lot,p) {
    if(L?.isRussian())return `<p class="product-ru-name" lang="ru">${esc(R.name(lot))}${G.BREAD_BY_ID[lot.variantId]?`<small>${esc(R.name(p.id))}</small>`:''}</p>`;
    if(!russianHints)return '';
    return `<details class="ru-help product-ru"><summary lang="ru">Подсказка по-русски</summary><div lang="ru"><strong>${esc(R.name(lot))}</strong><span>${p.category==='bread'?esc(R.name(p.id))+' · ':''}${G.isBulk(lot)?'Развесной товар — взвесьте нужное количество.':esc(R.amount(p,lot.pack))}</span>${lot.expires?`<small data-ru-expiry>Чтобы увидеть даты на этикетке, нажмите «Проверить срок».</small>`:G.isBulk(lot)?'<small>Осмотрите сам продукт: поверхность, цвет, следы гнили и плесени.</small>':'<small>Проверьте название и количество.</small>'}</div></details>`;
  }
  function showPhoto(lot) {
    $('photo-title').textContent = G.lotName(lot);
    $('photo-stage').innerHTML = lot.productId==='eggs'&&eggInspections[lot.id]?window.EggArt.carton(true,G.isDamaged(lot)):productArt(lot,'',true);
    $('photo-dialog').showModal();
  }
  function openLooseInspect(lot, source) {
    const p = G.BY_ID[lot.productId];
    $('inspect-content').innerHTML = `<div class="inspect-header"><span class="eyebrow">ГАДНА БАЙДЛЫГ ШАЛГАХ</span><button id="inspect-close" class="icon-button" aria-label="Хаах">${A.icon('close')}</button></div>${productMore(lot,p)}<div class="inspect-grid"><div class="inspect-picture">${productArt(lot)}<button id="inspect-photo" class="zoom-photo-button">Томруулж харах ↗</button></div><div class="product-label"><span class="eyebrow">ЗАДГАЙ ЖИМС, НОГОО</span><h2 id="inspect-title">${esc(G.lotName(lot))}</h2><div class="label-weight">Жинлэж авна</div>${Prices.html(lot,L?.isRussian())}<p class="appearance-instruction">Өнгө, хальс, навчийг нь ажиглаарай. Муудсан хэсэг, хөгц байгаа эсэхийг шалгаарай.</p><p class="appearance-note">Задгай барааг гадна байдлаар нь шалгана. Савласан барааны хугацааг шошгоноос нь харна.</p>${russianProductHint(lot,p)}</div></div><div class="inspect-actions"><button id="inspect-back" class="secondary-button">${A.icon('back')}${source==='cart'?'Уут руу буцах':'Тавиурт үлдээх'}</button><button id="inspect-add" class="primary-button">${A.icon('scale')}Жинлэх</button></div>`;
    $('inspect-close').addEventListener('click',closeInspect);
    $('inspect-back').addEventListener('click',closeInspect);
    $('inspect-photo').addEventListener('click',()=>showPhoto(lot));
    $('inspect-add').addEventListener('click',()=>openScale(lot.id));
    bindProductMore();if (!$('inspect-dialog').open) $('inspect-dialog').showModal();focusInspect();
  }
  function syncScaleHint(){
    $('scale-writing-help').hidden=!scaleHints;
    $('scale-answer').placeholder=scaleHints?'нэг килограмм…':'';
    if(!scaleHints){$('scale-word-hint').hidden=true;$('scale-word-hint').textContent='';$('scale-hint-button').setAttribute('aria-expanded','false');}
  }
  function renderScale(resetAnswer=true) {
    if(!scaleLot)return;
    syncScaleHint();
    if(resetAnswer){scaleAnswerOK=false;scaleTied=false;$('scale-answer').value='';$('scale-answer-feedback').textContent='';$('scale-word-hint').hidden=true;$('scale-hint-button').setAttribute('aria-expanded','false');}
    const reading=(scaleGrams/1000).toFixed(3).replace('.',L?.isRussian()?',':'.');
    const readable=n=>`${Math.floor(n/1000)?`${Math.floor(n/1000)} кг `:''}${n%1000||!n?`${n%1000} г`:''}`.trim();
    const plan=F.scalePlan(activeRequest(),inventory,cart,scaleLot,scaleGrams),showTarget=deliveryMode!=='audio'||service.activeId||revealed[orderKey(order.id)]===true;
    $('scale-weight').textContent=reading;$('scale-form-reading').textContent=`${reading} кг`;
    $('scale-readable').textContent=readable(scaleGrams);
    $('scale-take-bag').hidden=scaleHasBag;$('scale-bag-status').textContent=scaleHasBag?ui('Уут бэлэн. Уутны жинг автоматаар хассан.','Пакет на весах. Вес пустого пакета вычтен автоматически.'):ui('Эхлээд хоосон уут аваарай. Дараа нь бараагаа хийнэ.','Возьмите пустой пакет. Затем положите в него продукты.');
    $('scale-dialog').classList.toggle('has-produce-bag',scaleHasBag);
    $('scale-order-context').innerHTML=showTarget?(plan.requested?[[ui('Захиалгад','По заказу'),readable(plan.required)],[ui('Сагсанд','Уже в корзине'),readable(plan.collected)],[ui('Энэ уутанд','В этот пакет'),readable(plan.target)]].map(([label,value])=>`<div><span>${label}</span><strong data-learning>${value}</strong></div>`).join(''):`<p>${ui('Энэ бараа захиалгад байхгүй.','Этого продукта нет в заказе.')}</p>`):`<p>${ui('Хэрэгтэй жинг дуут захиалгаас сонсоорой.','Сверьте нужный вес с аудиозаказом.')}</p>`;
    const note=scaleTied?(showTarget&&plan.requested&&plan.excess?ui(`${readable(plan.excess)} илүү байна. Уутаа задлаад хасаарай.`,`Лишние ${readable(plan.excess)}. Развяжите пакет, чтобы убрать лишнее.`):showTarget&&plan.requested&&plan.remaining?ui(`Уут зангидсан. Дахин ${readable(plan.remaining)} хэрэгтэй.`,`Пакет завязан. Для заказа нужно ещё ${readable(plan.remaining)}.`):ui('Уут зангидсан. Сагсанд хийж болно.','Пакет завязан. Можно положить его в корзину.')):showTarget&&plan.requested?(plan.remaining?ui(`Дахин ${readable(plan.remaining)} нэмээрэй.`,`Добавьте ещё ${readable(plan.remaining)}.`):plan.excess?ui(`${readable(plan.excess)} илүү байна. «−» товчоор хасаарай.`,`Лишние ${readable(plan.excess)}. Уберите их кнопками «−».`):ui('Жин таарлаа. Доор үсгээр бичээрэй.','Вес совпал. Ниже запишите его словами.')):scaleGrams?ui('Заасан жинг монгол үсгээр бичээрэй.','Запишите показание весов словами по-монгольски.'):ui('Эхлээд «+» товчоор бараа нэмээрэй.','Сначала добавьте продукт кнопкой «+».');
    $('scale-amount').textContent=note;$('scale-amount').classList.toggle('is-excess',showTarget&&plan.requested&&plan.excess>0);
    $('scale-spelling-form').hidden=scaleGrams===0||scaleTied;$('scale-empty-message').hidden=scaleGrams!==0;
    $('scale-contents').innerHTML=scaleHasBag?Bag.pouch({art:productArt(scaleLot),productId:scaleLot.productId,grams:scaleGrams,tied:scaleTied}):'';
    const bagState={hasBag:scaleHasBag,grams:scaleGrams,answerOK:scaleAnswerOK,tied:scaleTied};
    $('scale-commit').disabled=scaleGrams>0?!Bag.canStore(bagState):!cart[scaleLot.id];
    $('scale-dialog').classList.toggle('is-bag-tied',scaleTied);
    $('scale-tie-bag').disabled=!scaleHasBag||!scaleGrams||!scaleAnswerOK||scaleTied;
    $('scale-tie-bag').textContent=scaleTied?ui('Уут зангидсан','Пакет завязан'):'Уут зангидах';
    $('scale-untie-bag').hidden=!scaleTied;
    $('scale-tie-status').textContent=scaleTied?ui('Уут бэлэн. Сагсанд хийж болно.','Пакет закрыт. Теперь можно положить его в корзину.'):scaleAnswerOK?ui('Одоо уутаа зангидаарай.','Теперь завяжите пакет.'):ui('Эхлээд бараагаа жинлээд жинг нь бичээрэй.','Сначала наберите вес и проверьте запись словами.');
    $('scale-commit').innerHTML=`${A.icon('basket')}${scaleGrams||!cart[scaleLot.id]?'Уутанд хийх':'Уутнаас буцаах'}`;
    $('scale-commit-help').textContent=scaleTied?ui('Доорх ногоон товчоор сагсанд хийнэ.','Нажмите зелёную кнопку внизу, чтобы положить завязанный пакет в корзину.'):scaleAnswerOK?ui('Уутаа зангидаад сагсанд хийнэ.','Завяжите пакет — затем станет доступна зелёная кнопка внизу.'):ui('Жингээ бичиж шалгаад уутаа зангидаарай.','Проверьте запись веса, затем завяжите пакет.');
    $('scale-clear').disabled=scaleGrams===0||scaleTied;
    $('scale-russian').hidden=!russianHints||L?.isRussian();
    document.querySelectorAll('[data-scale-delta]').forEach(button=>{const delta=Number(button.dataset.scaleDelta);button.disabled=scaleTied||!scaleHasBag||(delta<0?scaleGrams===0:scaleGrams>=scaleLot.stock);});
  }
  function openScale(lotId) {
    if(shipping||delivered||packingStage!=='collecting')return;
    if(!ensurePreparation(()=>openScale(lotId)))return;
    const lot=inventory.find(l=>l.id===lotId);if(!lot||!G.isBulk(lot))return;
    scaleLot={...lot,stock:availableStock(lot)};scaleGrams=G.weighPortion(scaleLot,cart[lot.id]||0);scaleHasBag=scaleGrams>0;scaleTied=scaleGrams>0;scaleAnswerOK=scaleTied;$('scale-answer').value=scaleTied?F.weightWords(scaleGrams):'';$('scale-answer-feedback').textContent='';$('scale-word-hint').hidden=true;
    const steps=['produce','meat','frozen'].includes(G.BY_ID[lot.productId].category)?[50,100,250,500]:[5,10,25,100];
    $('scale-title').textContent=G.lotName(lot);$('scale-product-ru').textContent=L?.isRussian()?R.name(lot):'';$('scale-product-ru').hidden=!L?.isRussian();
    $('scale-controls').innerHTML=['Нэмэх','Хасах'].map((title,row)=>`<fieldset><legend>${title}</legend><div>${steps.map(n=>`<button type="button" data-scale-delta="${row?-n:n}" aria-label="${n} грамм ${row?'хасах':'нэмэх'}">${row?'−':'+'} ${n} г</button>`).join('')}</div></fieldset>`).join('');
    $('scale-russian').open=false;renderScale(false);if(!$('scale-dialog').open)$('scale-dialog').showModal();
  }
  function openInspect(lotId, source = 'shelf') {
    if (shipping || delivered) return;
    const lot = inventory.find(l => l.id === lotId);
    if (!lot) return;
    if(!achievementRun.viewed.includes(lot.id)){achievementRun.viewed.push(lot.id);save();}
    inspectedLot = lotId; inspectSource = source;
    const p = G.BY_ID[lot.productId];
    if (G.isBulk(lot) && p.category === 'produce') { openLooseInspect(lot,source); return; }
    const remaining = availableStock(lot) - (cart[lot.id] || 0);
    $('inspect-content').innerHTML = `
      <div class="inspect-header"><span class="eyebrow">БАРААНЫ ШОШГО</span><button id="inspect-close" class="icon-button" aria-label="Хаах">${A.icon('close')}</button></div>${productMore(lot,p)}
      <div class="inspect-grid"><div class="inspect-picture">${productArt(lot)}<button id="inspect-photo" class="zoom-photo-button">Томруулж харах ↗</button></div><div class="product-label"><span class="eyebrow">${p.category === 'household' ? 'АХУЙН БАРАА' : 'ХҮНСНИЙ БҮТЭЭГДЭХҮҮН'}</span><h2 id="inspect-title">${esc(G.lotName(lot))}</h2><div class="label-weight">${G.formatAmount(p, lot.pack)}${G.BREAD_BY_ID[lot.variantId] ? ` · ${G.BREAD_BY_ID[lot.variantId].netWeight} г` : ''}</div>${Prices.html(lot,L?.isRussian())}${lot.expires ? `<button id="inspect-expiry" type="button" class="expiry-check" aria-expanded="false" aria-controls="inspect-dates">${A.icon('calendar')}Хугацааг шалгах</button><p id="inspect-expiry-hint" class="expiry-hint">Огноог харахын тулд шошгыг нь шалгаарай.</p><div id="inspect-dates" hidden><div class="label-row"><small>Үйлдвэрлэсэн огноо</small><strong>${G.dateLabel(lot.manufactured)}</strong></div><div class="label-row expiry"><small>Хэрэглэж дуусах хугацаа</small><strong>${G.dateLabel(lot.expires)}</strong></div><div class="label-row label-reference"><small>Өнөөдөр</small><strong>${G.dateLabel(order.day)}</strong></div></div>` : `<div class="label-row"><small>Хэрэглэх заавар</small><strong>Хугацааны даалгаваргүй бараа</strong></div>`}${russianProductHint(lot,p)}<div class="barcode" aria-hidden="true"></div><div class="batch-number">БАГЦ ${lot.batch}</div></div></div>
      <div class="inspect-actions"><button id="inspect-back" class="secondary-button">${A.icon('back')}${source === 'cart' ? 'Уут руу буцах' : 'Тавиурт үлдээх'}</button><button id="inspect-add" class="primary-button" ${remaining <= 0 ? 'disabled' : ''}>${A.icon('bag')}Уутанд хийх</button></div>`;
    if(p.id==='eggs'){
      const section=document.createElement('section');section.className='egg-inspection';section.innerHTML=`<button id="inspect-eggs" type="button" class="expiry-check" aria-expanded="false" aria-controls="egg-check-result">${ui('Хайрцгийг нээх','Открыть коробку')}</button><p class="expiry-hint">${ui('Өндөгний хальс бүтэн эсэхийг шалгаарай.','Проверьте, цела ли скорлупа у всех яиц.')}</p><div id="egg-check-result" hidden></div>`;$('inspect-content').querySelector('.product-label .barcode').before(section);
      $('inspect-eggs').addEventListener('click',()=>{achievementEvent('egg',lot.id);eggInspections[lot.id]=true;$('inspect-eggs').setAttribute('aria-expanded','true');$('inspect-eggs').textContent=ui('Хайрцгийг шалгасан','Коробка проверена');$('inspect-eggs').disabled=true;$('inspect-content').querySelector('.inspect-picture>.product-art').outerHTML=window.EggArt.carton(true,G.isDamaged(lot));$('egg-check-result').hidden=false;$('egg-check-result').textContent=G.isDamaged(lot)?ui('Хагарсан өндөг байна. Өөр хайрцаг сонгоорой.','В коробке есть треснувшие яйца. Выберите другую коробку.'):ui('Бүх өндөг бүтэн байна.','Скорлупа всех яиц целая.');$('egg-check-result').className=G.isDamaged(lot)?'egg-result is-damaged':'egg-result';checked=checked&&packingResult().canSend;if(!packingResult().canSend)packingStage='collecting';save();renderPacking();worldChanged();refreshDisposalAction();});
    }
    $('inspect-expiry')?.addEventListener('click', () => {
      $('inspect-dates').hidden = false;
      $('inspect-expiry').setAttribute('aria-expanded', 'true');
      $('inspect-expiry').innerHTML = `${A.icon('check')}Огноо шалгасан`;
      $('inspect-expiry').disabled = true;
      $('inspect-expiry-hint').hidden = true;
      inspections[lot.id]=true;checked=checked&&packingResult().canSend;if(!packingResult().canSend)packingStage='collecting';save();renderPacking();worldChanged();refreshDisposalAction();
      achievementEvent('date',lot.id);save();
      const ruDates = $('inspect-content').querySelector('[data-ru-expiry]');
      if (ruDates) ruDates.innerHTML = 'Даты находятся на этикетке. Сравните их с игровой датой.';
    });
    $('inspect-close').addEventListener('click', closeInspect);
    $('inspect-back').addEventListener('click', closeInspect);
    $('inspect-photo').addEventListener('click', () => showPhoto(lot));
    if (G.isBulk(lot)) {
      $('inspect-content').querySelector('.label-weight').textContent=p.category==='sweets'?'Задгай чихэр · Жинлэж авна':'Задгай · Жинлэж авна';
      $('inspect-add').innerHTML=`${A.icon('scale')}Жинлэх`;
    }
    const pickInspected=()=>{
      if(G.isBulk(lot)){openScale(lot.id);return;}
      if(!ensurePreparation(pickInspected))return;
      const before=cart[lot.id]||0;changeCart(lot.id,1);
      if((cart[lot.id]||0)<=before)return;
      closeInspect();toast(`${G.lotName(lot)}: уутанд нэмлээ.`);
    };
    $('inspect-add').addEventListener('click',pickInspected);
    bindProductMore();if (!$('inspect-dialog').open) $('inspect-dialog').showModal();focusInspect();
  }
  function closeInspect() {
    const id = inspectedLot;
    $('inspect-dialog').close();
    requestAnimationFrame(() => {
      const selector = inspectSource === 'cart' ? `[data-inspect="${id}"]` : `[data-world-lot="${id}"]`;
      (document.querySelector(selector) || $('world-canvas'))?.focus({ preventScroll: true });
    });
  }
  function checkOrder() {
    if (shipping || delivered) return;
    if (!canPack) { toast('Эхлээд бэлтгэх ширээнд очоорой.'); return; }
    if(!ensurePreparation(checkOrder))return;
    attempts++;
    feedback = packingResult();
    checked=feedback.canSend;
    save(); renderPacking();
    if(checked){chime('check');$('pack-items-button').focus({preventScroll:true});}
    if (window.matchMedia('(max-width: 720px)').matches) $('feedback').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  }
  function packItems(){if(shipping||delivered||!canPack||!ensurePreparation(packItems))return;if(!checked)checkOrder();if(!checked||!packingResult().canSend)return;packingStage='packed';save();renderAll();worldChanged();$('seal-bag-button').focus({preventScroll:true});}
  function sealBag(){if(shipping||delivered||!canPack||packingStage!=='packed'||!packingResult().canSend)return;packingStage='sealed';save();renderAll();worldChanged();$('dispatch-button').focus({preventScroll:true});}
  function unpackBag(){if(shipping||delivered)return;packingStage='collecting';checked=false;feedback=null;save();renderAll();worldChanged();}
  function syncMessages() {
    clientMessages?.setContext(order,service);
    const available=mode==='campaign'&&deliveryMode==='audio'||service.hadComplaint;
    $('phone-button').hidden=!available;
    $('phone-button').disabled=!available;
  }
  function closeWorkDialogs(){for(const id of ['packing-dialog','orders-dialog','inspect-dialog','scale-dialog','prep-dialog','settings-dialog'])if($(id).open)$(id).close();}
  function finishRun() {
    const earned=F.runStars(attempts,service,fineReceipt.amount);
    bests[orderIndex]=Math.max(bests[orderIndex],earned);bestById[orderKey(order.id)]=bests[orderIndex];
    market=Shift.recordCompletion(market,orderKey(order.id),earned,order.customer);
    market=Shift.closeDay(market,orders,mode,shiftScope(),F.hasPending(service));
    const completedLevels=Shift.progress(orders,dailyBests(),{scope:'all'}).levels,selected=inventory.filter(l=>cart[l.id]>0),fresh=selected.filter(l=>!G.isUnfit(l,order.day));
    const clean=!service.hadComplaint&&!fineReceipt.amount&&G.validateOrder(order,inventory,cart).ok;
    achievementEvent('complete','',{stars:earned,clean,checked:selected.length>0&&selected.every(l=>achievementRun.viewed.includes(l.id)&&(!l.expires||inspections[l.id])&&(l.productId!=='eggs'||eggInspections[l.id])),format:mode==='text'||deliveryMode==='text'?'text':'audio',heard:achievementRun.heard,revealed:achievementRun.revealed,products:fresh.map(l=>l.productId),categories:fresh.map(l=>G.BY_ID[l.productId].category),levels:completedLevels.filter(l=>l.total>0&&l.done===l.total).map(l=>l.level),fullShift:completedLevels.every(l=>l.total>0&&l.done===l.total)});
    delivered=true;checked=true;shipping=false;save();renderAll();syncMessages();window.dispatchEvent(new Event('grocery:transport'));closeWorkDialogs();showSuccess();
  }
  function notifyComplaint() {
    save();renderAll();syncMessages();
    if(F.hasPending(service)&&!service.activeId)clientMessages?.notify();
  }
  function startReplacement(id) {
    if(shipping)return;
    if(service.activeId){if(service.activeId!==id){toast(ui('Эхэлсэн солилцоогоо эхлээд дуусгаарай.','Сначала завершите текущую замену.'));return;}phone.close();ensurePreparation();return;}
    const next=F.beginReplacement(service,id);if(next===service)return;
    service=next;cart={};checked=false;delivered=false;feedback=null;russianOrderOpen=false;packingStage='collecting';
    preparation=F.sanitizePrep(activeRequest(),{});pendingPreparationAction=null;
    phone.close();closeWorkDialogs();save();renderAll();syncMessages();window.dispatchEvent(new Event('grocery:cart'));window.dispatchEvent(new Event('grocery:transport'));prepDesk.open();
  }
  function refundItem(id) {
    if(shipping)return;
    const wasActive=service.activeId===id,next=F.refundComplaint(service,id);if(next===service)return;
    const refunded=next.complaints.find(c=>c.id===id);stats.refunds++;stats.refundAmount+=refunded.refund;
    service=next;
    if(wasActive){cart={...service.originalCart};checked=true;delivered=true;packingStage='sealed';feedback=null;pendingPreparationAction=null;}
    save();renderAll();syncMessages();window.dispatchEvent(new Event('grocery:cart'));window.dispatchEvent(new Event('grocery:transport'));
    if(!F.hasPending(service)){phone.close();finishRun();}
  }
  function dispatchOrder() {
    if(shipping||delivered||!canPack||packingStage!=='sealed')return;
    if(!ensurePreparation(dispatchOrder))return;
    const result=packingResult();
    if(!checked||!result.canSend){checked=false;feedback=result;renderPacking();return;}
    const replacing=service.activeId,request=activeRequest(),shipped={...cart};
    if(!replacing&&!fineReceipt.recorded){fineReceipt={amount:result.fine,missing:result.missing,recorded:true};if(result.fine){stats.fines++;stats.fineAmount+=result.fine;}}
    if(!replacing){const complaints=F.complaintsFor(order,inventory,cart);service={...F.emptyService(),originalCart:{...cart},complaints,hadComplaint:complaints.length>0};}
    delivered=true;shipping=true;phone?.stop();save();renderTicket();syncMessages();window.dispatchEvent(new Event('grocery:transport'));
    $('dispatch-button').disabled=true;$('dispatch-button').classList.add('is-shipping');$('bag-illustration').classList.add('shipping');chime('success');
    setTimeout(()=>{
      shipping=false;$('bag-illustration').classList.remove('shipping');$('dispatch-button').classList.remove('is-shipping');$('packing-dialog').close();
      if(replacing){
        const good=G.validateOrder(request,inventory,shipped).ok;
        service=F.finishReplacement(service,replacing,shipped,good);cart={...service.originalCart};checked=true;delivered=true;packingStage='sealed';
        save();renderAll();syncMessages();window.dispatchEvent(new Event('grocery:cart'));
        if(F.hasPending(service)){toast(ui('Хэрэглэгчээс зурвас ирлээ.','Пришло сообщение клиента.'));notifyComplaint();}else finishRun();
      }else if(F.hasPending(service)){
        save();renderAll();syncMessages();toast(ui('Захиалгыг хүргэлтэд гаргалаа.','Заказ отправлен клиенту.'));
        const key=orderKey(order.id);setTimeout(()=>{if(orderKey(order.id)===key&&F.hasPending(service)&&!service.activeId)notifyComplaint();},1200);
      }else finishRun();
    },window.matchMedia('(prefers-reduced-motion: reduce)').matches?50:700);
  }
  function showSuccess() {
    const earned = F.runStars(attempts,service,fineReceipt.amount);
    const fineHTML=fineReceipt.amount?`<div class="fine-receipt"><b>${ui('Дутуу захиалгын торгууль','Штраф за неполный заказ')}: ${fineReceipt.amount.toLocaleString('ru-RU')} ₮</b><p>${fineReceipt.missing.map(l=>`${esc(L?.isRussian()?R.name(l):G.lotName(l))}: ${amountText(l.productId,l.amount)}`).join(' · ')}</p></div>`:'';
    const shiftProgress=Shift.progress(orders,dailyBests(),shiftScope());
    const nextOrder=Shift.next(orders,dailyBests(),shiftScope(),market,mode);
    const allDone = nextOrder<0;
    const transition=nextOrder>=0&&currentCampaign()&&playShift.scope==='all'&&G.levelForOrder(orders[nextOrder])>G.levelForOrder(order);
    const levelOnly=currentCampaign()&&playShift.scope==='level';
    const today=dailyBests(),totalStars=Shift.indexes(orders,shiftScope()).reduce((sum,i)=>sum+today[i],0);
    $('success-content').innerHTML = `<div class="success-illustration">${A.icon(allDone ? 'star' : 'truck')}</div><span class="eyebrow">${allDone ? levelOnly?ui('ТҮВШИН ДУУССАН','УРОВЕНЬ ПРОЙДЕН'):'БҮХ ЗАХИАЛГА ДУУССАН' : `ЗАХИАЛГА № ${String(F.orderNumber(order)).padStart(3, '0')}`}</span><h2 id="success-title">${allDone ? levelOnly?ui('Түвшнээ дуусгалаа!','Уровень пройден!'):'Сайн ажиллалаа!' : service.hadComplaint?'Хэрэглэгчийн хүсэлтийг шийдлээ!':'Хүргэлтэд гарлаа!'}</h2>${stars(earned)}${fineHTML}<p class="dialog-lead">${allDone ? levelOnly?ui('Энэ түвшний ээлж дууслаа. Дараагийн өдрийг эхлүүлж болно.','Смена на этом уровне завершена. Можно начать следующий игровой день.'):ui('Ээлж дууслаа. Захиалга, торгууль, буцаалтаа харна уу.','Смена завершена. Посмотрите итоги заказов, штрафов и возвратов.') : fineReceipt.amount?ui('Захиалгыг өглөө. Дутуу бараанд торгууль тооцов.','Заказ отдан. Начислен штраф за недостающие товары.'):service.hadComplaint?'Шинэ бараагаар сольсон эсвэл мөнгийг нь буцаасан.':'Захиалга бүрэн, тоо хэмжээ зөв.<br>Хугацаа нь дууссан, муудсан бараа байхгүй.'}</p>${F.refundTotal(service)?`<p class="refund-receipt">Мөнгийг буцаасан: ${F.refundTotal(service).toLocaleString("en-US")} ₮</p>`:""}<div class="success-meta"><span><strong>${shiftProgress.done}/${shiftProgress.total}</strong>Дууссан захиалга</span><span><strong>${totalStars}/${shiftProgress.total * 3}</strong>Нийт од</span><span><strong>${attempts}</strong>Шалгасан тоо</span><span><strong>${stats.fines}</strong>${ui("Торгууль","Штрафы")}</span><span><strong>${stats.refunds}</strong>${ui("Мөнгө буцаалт","Возвраты")}</span></div>${transition?`<div class="shift-transition"><b>${ui('Түвшин дууслаа','Уровень пройден')}</b><span>${G.levelForOrder(orders[nextOrder])+1} · ${esc(ui(G.LEVELS[G.levelForOrder(orders[nextOrder])].name,L.translateText(G.LEVELS[G.levelForOrder(orders[nextOrder])].name)))}</span></div>`:''}<button id="success-next" class="primary-button">${nextOrder>=0 ? transition ? ui('Дараагийн түвшинд орох','Перейти на следующий уровень') : 'Дараагийн захиалга' : ui('Дараагийн өдөр','Следующий игровой день')}${A.icon('arrow')}</button><button type="button" class="secondary-button success-achievements" data-achievements-open data-learning>Амжилтууд</button><button id="success-replay" class="text-button">Энэ захиалгыг дахин тоглох</button>`;
    window.GroceryAchievementUI.update(achievements);
    $('success-next').addEventListener('click', () => {
      $('success-dialog').close();
      if (nextOrder>=0) startOrder(nextOrder); else {advanceDay();document.body.classList.remove('game-started');window.dispatchEvent(new Event('grocery:welcome'));}
    });
    $('success-replay').addEventListener('click', () => { $('success-dialog').close(); startOrder(orderIndex); });
    if (!$('success-dialog').open) $('success-dialog').showModal();
  }
  function advanceDay(){
    if(F.hasPending(service))return false;
    const next=Shift.nextDay(market,orders,mode,shiftScope());if(next===market)return false;
    save();market=next;Prices.setDay(market.day);
    if(currentCampaign()){planFreshOrders();orders=campaignOrders();bests=orders.map(o=>bestById[orderKey(o.id)]||0);}
    const target=Shift.next(orders,dailyBests(),shiftScope(),market,mode);
    loadOrder(target>=0?target:0,false);save();renderAll();syncPhone();
    window.dispatchEvent(new Event('grocery:inventory'));
    return true;
  }
  function loadOrder(index, resume = true) {
    orderIndex=index;const savedDraft=drafts[orderKey(orders[index].id)];
    const oldLabel=resume&&market.day===1&&!market.scheduleSeed?Number(savedDraft?.preparation?.number)||0:0;
    ({market,order}=Shift.numberOrder(market,mode,orders[index],oldLabel,false));inventory=orderInventory(order);russianOrderOpen=false;pendingPreparationAction=null;
    const savedService=F.sanitizeService(savedDraft?.service,order,inventory);
    const draft=resume&&(!bests[index]||savedDraft?.delivered===false||F.hasPending(savedService))?savedDraft:null;
    service=draft?savedService:F.emptyService();disposals=F.sanitizeDisposals(draft?.disposals,inventory,order.day);inspections=F.sanitizeInspections(draft?.inspections,inventory);eggInspections=F.sanitizeEggInspections(draft?.eggInspections,inventory);
    cart=G.sanitizeCart(draft?.cart,inventory);
    achievementRun=sanitizeAchievementRun(draft?.achievementRun);
    inventory.forEach(l=>{if(cart[l.id]){cart[l.id]=Math.min(cart[l.id],availableStock(l));if(!cart[l.id])delete cart[l.id];}});
    preparation=F.sanitizePrep(activeRequest(),draft?.preparation);fineReceipt=F.sanitizeFine(draft?.fineReceipt,order);packingStage=F.sanitizePacking(draft?.packingStage,packingResult());
    attempts=Number.isInteger(draft?.attempts)?Math.max(0,Math.min(9999,draft.attempts)):0;
    checked=draft?.checked===true&&packingResult().canSend;
    delivered=draft?.delivered===true&&(checked||service.hadComplaint)&&(bests[index]>0||F.hasPending(service));
    feedback=null;category='all';orderListLevel=G.levelForOrder(order);
  }
  function finishOrderSwitch() {
    save(); renderAll(); syncPhone(); window.dispatchEvent(new Event('grocery:inventory'));
    $('world-canvas').focus({ preventScroll: true });window.dispatchEvent(new Event('grocery:transport'));
    if(document.body.classList.contains('game-started')){if(delivered&&F.hasPending(service))clientMessages?.open();else if(!delivered){if(service.activeId)ensurePreparation();else if(mode==='campaign'&&deliveryMode==='audio'){clientMessages?.showTab('voice');phone?.open();}else ensurePreparation();}}
  }
  function startOrder(index) {
    if (!canOpenOrder(index)) return;
    save(); if(playShift.scope==='level')playShift.level=G.levelForOrder(orders[index]);loadOrder(index);receiveOrder();finishOrderSwitch();
  }
  function receiveOrder(){({market,order}=Shift.numberOrder(market,mode,order,order.number));orderRotation=Rotation.received(orderRotation,mode,order,G.orderSignature(order));}
  function showOrders(level = G.levelForOrder(order)) {
    orderListLevel = Number.isInteger(level) && level >= 0 && level < 4 ? level : 0;
    $('order-level-tabs').innerHTML = mode === 'legacy' ? '<span class="legacy-label">Өмнөх 12 захиалга</span>' : G.LEVELS.map((l, levelIndex) => {
      const indexes = orders.map((o, i) => ({ o, i })).filter(({ o }) => o.levelIndex === levelIndex);
      const today=dailyBests(),done = indexes.filter(({ i }) => today[i]).length;
      return `<button data-level="${levelIndex}" aria-pressed="${orderListLevel === levelIndex}"><b>${levelIndex + 1}</b><span>${l.name}<small>${done}/${counts[levelIndex]}</small></span></button>`;
    }).join('');
    const visible=Shift.indexes(orders,mode==='legacy'?{scope:'all'}:{scope:'level',level:orderListLevel},market,mode).map(i=>({o:orders[i],i}));
    $('order-grid').innerHTML = visible.map(({ o, i },position) => {
      const displayNumber=market.orderNumbers[orderKey(o.id)]||position+1;
      const unlocked = canOpenOrder(i);
      const preview = mode === 'campaign' && deliveryMode === 'audio' && !revealed[orderKey(o.id)] ? `Дуут зурвас · ${o.lines.length} нэр төрөл` : o.lines.slice(0, 2).map(G.lotName).join(' · ');
      return `<button class="order-choice ${i === orderIndex ? 'active' : ''}" data-order="${i}" ${unlocked ? '' : 'disabled'} aria-label="${displayNumber}. ${esc(o.customer)}. ${unlocked ? bests[i] ? `${bests[i]} од` : 'Тоглох' : 'Хаалттай'}"><span class="order-choice-number">${String(displayNumber).padStart(2, '0')}${!unlocked ? A.icon('lock') : i === orderIndex ? '<span>Одоо</span>' : ''}</span><span class="order-choice-title">${esc(o.customer)}</span><span class="order-choice-preview">${esc(preview)}</span>${stars(bests[i])}</button>`;
    }).join('');
    if (!$('orders-dialog').open) $('orders-dialog').showModal();
  }
  function requestOrder(index) {
    if(F.hasPending(service)){ordersFromMenu=false;$('orders-dialog').close();clientMessages?.open();return;}
    if (!canOpenOrder(index)) return;
    ordersFromMenu=false;
    $('orders-dialog').close();
    if (index === orderIndex && !delivered) return;
    startOrder(index);
  }
  function settingsPreview() {
    const value = G.normalizeCounts(G.LEVELS.map((_, i) => Number($(`settings-count-${i}`).value)));
    $('settings-total').textContent = `Нийт ${value.reduce((a, b) => a + b, 0)} захиалга`;
  }
  function showSettings() {
    $('settings-feedback').textContent='';
    $('settings-levels').innerHTML = G.LEVELS.map((level, i) => `<div class="settings-level"><div class="settings-level-title"><span>${i + 1}</span><div><strong>${level.name}</strong><p>${level.hint}</p></div></div><div class="settings-range"><input type="range" id="settings-count-${i}" min="5" max="50" step="1" value="${counts[i]}" aria-label="${i + 1}-р түвшний захиалгын тоо"><input type="number" id="settings-number-${i}" min="5" max="50" step="1" value="${counts[i]}" aria-label="${i + 1}-р түвшний захиалгын тоог оруулах"></div><div class="range-limits"><span>5</span><span>50</span></div></div>`).join('');
    $('settings-legacy').hidden = !legacyAvailable;
    $('settings-classic').hidden = !classicAvailable;
    $('settings-language').value=L?.current()||'mn';
    $('settings-delivery').value = deliveryMode;
    $('settings-russian').checked = russianHints;
    $('settings-russian').disabled = L?.isRussian()===true;
    $('settings-sound').checked = sound;
    $('settings-scale-hints').checked = scaleHints;
    settingsPreview();
    $('settings-dialog').showModal();
  }
  function selectCampaign(nextMode, nextCounts = counts, receive = true) {
    if(F.hasPending(service)&&(nextMode!==mode||G.normalizeCounts(nextCounts).some((n,i)=>n!==counts[i]))){const message=ui('Эхлээд хэрэглэгчийн хүсэлтийг шийдээрэй. Дараа нь захиалгын тоог өөрчилж болно.','Сначала решите обращение клиента, затем меняйте количество заказов.');if($('settings-dialog').open)$('settings-feedback').textContent=message;else toast(message);return;}
    save(); counts = G.normalizeCounts(nextCounts); mode = nextMode;
    if(mode==='text')deliveryMode='text';else if(mode==='campaign')deliveryMode='audio';
    orders = campaignOrders();
    bests = orders.map(o => bestById[orderKey(o.id)] || 0);
    const previousIndex = orders.findIndex(o => o.id === activeByMode[mode]);
    const previousLevel = previousIndex >= 0 ? G.levelForOrder(orders[previousIndex]) : 0;
    const oldDraft=previousIndex>=0?drafts[orderKey(orders[previousIndex].id)]:null;
    const replayInProgress=previousIndex>=0&&(oldDraft?.delivered===false||Array.isArray(oldDraft?.service?.complaints)&&oldDraft.service.complaints.some(c=>['open','collecting'].includes(c.status)));
    let target = previousIndex >= 0 && (!dailyBests()[previousIndex] || replayInProgress) && canOpenOrder(previousIndex) ? previousIndex : orders.findIndex((o, i) => G.levelForOrder(o) === previousLevel && canOpenOrder(i) && !dailyBests()[i]);
    if (target < 0) target = orders.findIndex((_, i) => canOpenOrder(i) && !dailyBests()[i]);
    if (target < 0) target = 0;
    loadOrder(target);if(receive&&document.body.classList.contains('game-started'))receiveOrder();if(receive)finishOrderSwitch();else{renderAll();syncPhone();window.dispatchEvent(new Event('grocery:inventory'));}
    $('settings-dialog').close();
    toast('Тохиргоог хадгаллаа. Дууссан захиалгын одууд хадгалагдсан.');
  }
  fillIcons(); renderAll();window.GroceryAchievementUI.update(achievements);
  phone = new window.PhoneOrders({
    trigger: $('phone-button'),
    onReveal: () => { revealed[orderKey(order.id)] = true;achievementRun.revealed=true;save(); renderTicket(); },
    onHeard: () => { heard[orderKey(order.id)] = true;achievementRun.heard=true;achievementEvent('heard','',{recording:orderKey(order.id)});save(); renderTicket(); }
  });
  clientMessages=new window.ClientMessages(phone,{onReplace:startReplacement,onRefund:refundItem,russian:()=>russianHints||L?.isRussian()});
  prepDesk=new window.PreparationDesk({getOrder:activeRequest,getPrep:()=>preparation,setPrep:value=>{preparation=F.sanitizePrep(activeRequest(),value);save();renderCarrier();window.dispatchEvent(new Event('grocery:transport'));},russian:()=>L?.isRussian(),onReady:()=>{const action=pendingPreparationAction;pendingPreparationAction=null;save();renderPacking();window.dispatchEvent(new Event('grocery:transport'));if(action)action();else focusWorld();}});
  phone.dialog.addEventListener('close',()=>{if(document.body.classList.contains('game-started')&&!delivered&&!hasPreparation()&&!$('welcome-dialog').open)requestAnimationFrame(()=>{if(!delivered&&!hasPreparation()&&!document.querySelector('dialog[open]'))prepDesk.open();});});
  syncPhone();
  $('categories').addEventListener('click', event => {
    const button = event.target.closest('[data-category]'); if (!button) return;
    category = button.dataset.category; renderCategories(); renderShelves();
    document.querySelector(`[data-category="${category}"]`)?.focus({ preventScroll: true });
  });
  $('shelves').addEventListener('click', event => { const card = event.target.closest('[data-lot]'); if (card && !card.disabled) openInspect(card.dataset.lot); });
  $('shelves').addEventListener('dragstart', event => {
    const card = event.target.closest('[data-lot]');
    if (!card || shipping || delivered) { event.preventDefault(); return; }
    event.dataTransfer.setData('text/plain', card.dataset.lot); event.dataTransfer.effectAllowed = 'copy';
  });
  $('packing').addEventListener('dragover', event => { if (!shipping && !delivered) { event.preventDefault(); event.dataTransfer.dropEffect = 'copy'; $('packing').classList.add('drag-over'); } });
  $('packing').addEventListener('dragleave', event => { if (!$('packing').contains(event.relatedTarget)) $('packing').classList.remove('drag-over'); });
  $('packing').addEventListener('drop', event => { event.preventDefault(); $('packing').classList.remove('drag-over'); openInspect(event.dataTransfer.getData('text/plain')); });
  $('cart-contents').addEventListener('click', event => {
    const weigh=event.target.closest('[data-weigh]'),back=event.target.closest('[data-return]');
    if(weigh){openScale(weigh.dataset.weigh);return;}
    if(back){changeCart(back.dataset.return,-(cart[back.dataset.return]||0));return;}
    const minus = event.target.closest('[data-remove]');
    const plus = event.target.closest('[data-add]');
    const inspect = event.target.closest('[data-inspect]');
    if (minus || plus) {
      const id = minus?.dataset.remove || plus.dataset.add;
      changeCart(id, minus ? -1 : 1);
      const nextButton = document.querySelector(`[data-${minus ? 'remove' : 'add'}="${id}"]`);
      if (nextButton && !nextButton.disabled) nextButton.focus({ preventScroll: true });
    } else if (inspect) openInspect(inspect.dataset.inspect, 'cart');
  });
  $('check-button').addEventListener('click', checkOrder);
  $('dispatch-button').addEventListener('click',dispatchOrder);
  $('pack-items-button').addEventListener('click',packItems);
  $('seal-bag-button').addEventListener('click',sealBag);
  $('unpack-button').addEventListener('click',unpackBag);
  $('scale-take-bag').addEventListener('click',()=>{if(!scaleLot)return;scaleHasBag=true;renderScale();});
  $('scale-controls').addEventListener('click',event=>{const b=event.target.closest('[data-scale-delta]');if(!b||!scaleLot||!scaleHasBag||scaleTied)return;scaleGrams=G.adjustPortion(scaleLot,scaleGrams,Number(b.dataset.scaleDelta));renderScale();});
  $('scale-clear').addEventListener('click',()=>{if(scaleTied)return;scaleGrams=0;renderScale();});
  $('scale-answer').addEventListener('input',()=>{scaleAnswerOK=false;$('scale-answer-feedback').textContent='';$('scale-commit').disabled=scaleGrams>0;$('scale-tie-bag').disabled=true;$('scale-tie-status').textContent=ui('Жингээ бичиж шалгаарай.','Проверьте новую запись веса.');});
  $('scale-spelling-form').addEventListener('submit',event=>{
    event.preventDefault();if(scaleTied)return;scaleAnswerOK=F.weightAnswerMatches(scaleGrams,$('scale-answer').value);
    $('scale-answer-feedback').textContent=scaleAnswerOK?ui('Зөв бичлээ. Одоо уутаа зангидаарай.','Верно. Теперь завяжите пакет.'):scaleHints?ui('Жинг үсгээр дахин бичээрэй. Тусламж товчийг ашиглаж болно.','Проверьте запись веса. Можно открыть подсказку.'):ui('Жинг монголоор үсгээр дахин бичээрэй.','Проверьте запись веса словами на монгольском.');
    $('scale-answer-feedback').classList.toggle('correct',scaleAnswerOK);renderScale(false);
  });
  $('scale-hint-button').addEventListener('click',()=>{if(!scaleHints||!scaleLot||!scaleGrams||scaleTied)return;const reveal=$('scale-word-hint').hidden;if(reveal&&!achievementRun.weightHints.includes(scaleLot.id)){achievementRun.weightHints.push(scaleLot.id);save();}$('scale-word-hint').textContent=reveal?F.weightWords(scaleGrams):'';$('scale-word-hint').hidden=!reveal;$('scale-hint-button').setAttribute('aria-expanded',String(reveal));});

  $('scale-tie-bag').addEventListener('click',()=>{if(!scaleHasBag||!scaleGrams||!scaleAnswerOK)return;scaleTied=true;renderScale(false);});
  $('scale-untie-bag').addEventListener('click',()=>{scaleTied=false;renderScale(false);});
  $('scale-commit').addEventListener('click',()=>{
    if(!scaleLot||!scaleHasBag||shipping||delivered||scaleGrams>0&&(!scaleAnswerOK||!scaleTied))return;
    const id=scaleLot.id,next=G.weighPortion(scaleLot,scaleGrams),previous=cart[id]||0;
    changeCart(id,next-previous);
    if((cart[id]||0)!==next)return;
    if(next>0&&next!==previous){achievementEvent('weigh',id,{grams:next,tied:scaleTied,spelled:scaleAnswerOK,withoutHint:!achievementRun.weightHints.includes(id),category:G.BY_ID[scaleLot.productId].category});save();}
    $('scale-dialog').close();
    if($('inspect-dialog').open)closeInspect();
    toast(`${G.lotName(scaleLot)}: ${G.formatAmount(scaleLot.productId,next)}.`);
  });
  $('help-button').addEventListener('click',()=>{helpFromMenu=true;$('main-menu-dialog').close();$('help-dialog').showModal();});
  $('help-start').addEventListener('click', () => $('help-dialog').close());
  $('help-dialog').addEventListener('close',()=>{introSeen=true;save();const back=helpFromMenu;helpFromMenu=false;if(back)requestAnimationFrame(()=>{if(!document.querySelector('dialog[open]'))openMainMenu();});});
  $('orders-button').addEventListener('click', () => { if (!shipping) {ordersFromMenu=true;$('main-menu-dialog').close();showOrders();} });
  $('orders-dialog').addEventListener('close',()=>{const back=ordersFromMenu;ordersFromMenu=false;if(back)requestAnimationFrame(()=>{if(!document.querySelector('dialog[open]'))openMainMenu();});});
  $('order-grid').addEventListener('click', event => { const button = event.target.closest('[data-order]'); if (button && !button.disabled) requestOrder(Number(button.dataset.order)); });
  $('switch-confirm').addEventListener('click', () => { const next = pendingOrder; pendingOrder = null; $('switch-dialog').close(); startOrder(next); });
  $('sound-button').addEventListener('click', () => { sound = !sound; soundUI(); save(); if (sound) chime(); });
  $('settings-button').addEventListener('click', event => {
    if(!window.GroceryInput.menuClick(event))return;
    settingsFromMenu=true;$('main-menu-dialog').close();showSettings();
  });
  $('settings-dialog').addEventListener('close',()=>{
    const back=settingsFromMenu;settingsFromMenu=false;
    if(back)requestAnimationFrame(()=>{if(document.body.classList.contains('game-started')&&!document.querySelector('dialog[open]'))openMainMenu();});
  });
  $('settings-levels').addEventListener('input', event => {
    const match = event.target.id.match(/^settings-(count|number)-(\d)$/); if (!match) return;
    const i = Number(match[2]);
    if (match[1] === 'number' && event.target.value === '') return;
    const value = Math.max(5, Math.min(50, Math.round(Number(event.target.value) || 5)));
    $(`settings-count-${i}`).value = value;
    if (match[1] === 'count') $(`settings-number-${i}`).value = value;
    settingsPreview();
  });
  $('settings-levels').addEventListener('change', event => {
    const match = event.target.id.match(/^settings-number-(\d)$/); if (!match) return;
    event.target.value = $(`settings-count-${match[1]}`).value;
  });
  $('settings-apply').addEventListener('click', () => { L?.set($('settings-language').value);russianHints=L?.isRussian()||$('settings-russian').checked; selectCampaign($('settings-delivery').value==='text'?'text':'campaign', G.LEVELS.map((_, i) => Number($(`settings-count-${i}`).value))); });
  $('settings-classic').addEventListener('click', () => selectCampaign('classic'));
  $('settings-legacy').addEventListener('click', () => selectCampaign('legacy'));
  $('settings-sound').addEventListener('change', event => { sound = event.target.checked; soundUI(); save(); if (sound) chime(); });
  $('settings-scale-hints').addEventListener('change',event=>{scaleHints=event.target.checked;syncScaleHint();save();});
  $('order-level-tabs').addEventListener('click', event => { const button = event.target.closest('[data-level]'); if (button) showOrders(Number(button.dataset.level)); });

  const disposalMessage=reason=>({
    'expired':ui('Хэрэглэх хугацаа дууссан байна.','Срок годности истёк.'),
    'spoiled':ui('Гаднаас нь муудсан нь харагдаж байна.','На продукте видны признаки порчи.'),
    'damaged':ui('Хайрцагт хагарсан өндөг байна.','В коробке есть треснувшие яйца.'),
    'inspect-date':ui('Эхлээд шошгон дээрх хугацааг шалгаарай.','Сначала нажмите «Проверить срок» на этикетке.'),
    'inspect-eggs':ui('Хайрцгийг нээгээд өндөг бүтэн эсэхийг шалгаарай.','Откройте коробку и проверьте, цела ли скорлупа.'),
    'fresh':ui('Энэ бараа шаардлага хангаж байна. Муудсан барааны саванд хийх хэрэггүй.','У этого товара нет подтверждённых признаков порчи. Отправлять его в брак не нужно.'),
    'stock':ui('Сонгосон хэмжээ байхгүй байна.','Выбранного количества уже нет.'),
    'unavailable':ui('Энэ барааг сонгох боломжгүй.','Этот товар недоступен.'),
    'amount':ui('Байгаа хэмжээнээс хэтрүүлэхгүйгээр бүхэл тоо оруулаарай.','Укажите целое количество в пределах остатка.')
  })[reason]||ui('Бараагаа дахин шалгаарай.','Проверьте товар ещё раз.');
  function refreshDisposalAction(){
    const button=$('inspect-discard'),hint=$('inspect-discard-hint'),lot=inventory.find(l=>l.id===inspectedLot);if(!button||!lot)return;
    const review=F.disposalReview(lot,order.day,inspections,eggInspections);
    const needsInspection=['inspect-date','inspect-eggs'].includes(review.reason);
    button.disabled=needsInspection||shipping||delivered||packingStage!=='collecting';
    hint.textContent=packingStage!=='collecting'?ui('Эхлээд ууталсан бараагаа сагсанд буцаагаарай.','Сначала верните упакованные товары в корзину.'):needsInspection?disposalMessage(review.reason):ui('Зөвхөн муудсан, гэмтсэн эсвэл хугацаа нь дууссан бараанд.','Для испорченных, повреждённых и просроченных товаров.');
  }
  function bindDisposalAction(){
    const lot=inventory.find(l=>l.id===inspectedLot);if(!lot||G.BY_ID[lot.productId].category==='household')return;
    $('inspect-content').querySelector('.inspect-actions').insertAdjacentHTML('beforebegin',`<div class="inspect-disposal"><button type="button" id="inspect-discard" class="disposal-link">${A.icon('bin')}${ui('Муудсан барааны саванд хийх','Отправить в брак')}</button><p id="inspect-discard-hint"></p></div>`);
    $('inspect-discard').addEventListener('click',()=>openWaste(lot,inspectSource==='cart'?'cart':'shelf'));
    refreshDisposalAction();
  }
  function disposalLimit(lot,source){return source==='cart'?cart[lot.id]||0:Math.max(0,availableStock(lot)-(cart[lot.id]||0));}
  function renderWaste(){
    const candidate=pendingDisposal&&inventory.find(l=>l.id===pendingDisposal.id),confirm=$('waste-confirm');
    confirm.hidden=!candidate;$('waste-back').textContent=candidate?ui('Буцах','Назад'):ui('Хаах','Закрыть');
    if(candidate){
      const review=F.disposalReview(candidate,order.day,inspections,eggInspections),limit=disposalLimit(candidate,pendingDisposal.source),bulk=G.isBulk(candidate);
      const amount=bulk?limit:Math.min(1,limit);pendingDisposal.amount=amount;
      confirm.disabled=!review.canDiscard||!limit||shipping||delivered||packingStage!=='collecting';confirm.hidden=!review.canDiscard;
      $('waste-content').innerHTML=`<div class="waste-product">${productArt(candidate)}<div><h3 data-learning>${esc(G.lotName(candidate))}</h3>${L?.isRussian()?`<p lang="ru">${esc(R.name(candidate))}</p>`:''}<small>${pendingDisposal.source==='cart'?ui('Сагснаас','Из корзины'):ui('Тавиураас','С полки')}</small></div></div><p class="waste-status" role="status">${disposalMessage(review.reason)}</p>${review.canDiscard&&limit?bulk?`<p class="waste-quantity">${ui('Сонгосон муудсан барааг бүхэлд нь авна:','Будет удалена вся выбранная испорченная партия:')} <strong>${amountText(G.BY_ID[candidate.productId],amount*candidate.pack)}</strong></p>`:`<label class="waste-quantity">${ui('Савлагааны тоо','Количество упаковок')}<input id="waste-quantity" type="number" inputmode="numeric" min="1" max="${limit}" step="1" value="${amount}"><small>${ui('Байгаа','Доступно')}: ${limit} · ${amountText(G.BY_ID[candidate.productId],candidate.pack)}</small></label>`:''}<p class="waste-note">${review.canDiscard?ui('Энэ бараа захиалгад хэрэгтэй бол шинээр нь сонгоорой.','Если этот товар нужен в заказе, возьмите свежий.') : ui('Бараа өөрчлөгдөөгүй.','Товар остался на месте.')}</p>`;
      return;
    }
    const removed=inventory.filter(l=>disposals[l.id]),selected=inventory.filter(l=>cart[l.id]);
    $('waste-content').innerHTML=`<p class="waste-note">${ui('Барааг нээгээд хугацаа эсвэл гадна байдлыг нь шалгана. Муудсан бол «Муудсан барааны саванд хийх» товчийг дараарай.','Откройте товар и проверьте дату или внешний вид. Если он испорчен, нажмите «Отправить в брак».')}</p><h3>${ui('Саванд хийсэн бараа','Убрано в контейнер')}</h3>${removed.length?`<ul class="waste-journal">${removed.map(l=>`<li><span data-learning>${esc(G.lotName(l))}${L?.isRussian()?`<small lang="ru">${esc(R.name(l))}</small>`:''}</span><strong>${amountText(G.BY_ID[l.productId],disposals[l.id]*l.pack)}</strong></li>`).join('')}</ul>`:`<p class="waste-empty">${ui('Сав одоогоор хоосон байна.','Контейнер пока пуст.')}</p>`}${selected.length?`<h3>${ui('Сагсан дахь барааг шалгах','Осмотреть товары в корзине')}</h3><div class="waste-cart-list">${selected.map(l=>`<button type="button" data-waste-inspect="${esc(l.id)}">${productArt(l)}<span data-learning>${esc(G.lotName(l))}<small>${amountText(G.BY_ID[l.productId],cart[l.id]*l.pack)}</small></span><span aria-hidden="true">↗</span></button>`).join('')}</div>`:''}`;
  }
  function openWaste(lot=null,source='shelf'){
    pendingDisposal=lot?{id:lot.id,source}:null;renderWaste();if(!$('waste-dialog').open)$('waste-dialog').showModal();
  }
  $('waste-content').addEventListener('click',event=>{const b=event.target.closest('[data-waste-inspect]');if(!b)return;$('waste-dialog').close();openInspect(b.dataset.wasteInspect,'cart');});
  $('waste-content').addEventListener('input',event=>{
    if(event.target.id!=='waste-quantity'||!pendingDisposal)return;
    const n=Number(event.target.value),lot=inventory.find(l=>l.id===pendingDisposal.id);pendingDisposal.amount=n;
    $('waste-confirm').disabled=!Number.isSafeInteger(n)||n<1||n>disposalLimit(lot,pendingDisposal.source);
  });
  $('waste-confirm').addEventListener('click',()=>{
    if(!pendingDisposal||shipping||delivered||packingStage!=='collecting')return;
    const {id,source,amount}=pendingDisposal,lot=inventory.find(l=>l.id===id);if(!lot)return;
    const result=F.discardLot(lot,{day:order.day,source,amount,cart,disposals,reserved:{[id]:reservedStock(lot)},inspections,eggInspections});
    if(!result.ok){renderWaste();return;}
    cart=result.cart;disposals=result.disposals;
    achievementEvent('discard',lot.id);
    if(source==='cart'){checked=false;feedback=null;packingStage='collecting';if(fineReceipt.recorded&&!service.activeId)fineReceipt=F.sanitizeFine(null,order);}
    save();renderAll();worldChanged();$('waste-dialog').close();if($('inspect-dialog').open)closeInspect();
    toast(ui('Барааг муудсан барааны саванд хийлээ.','Товар отправлен в контейнер для брака.')+(order.lines.some(l=>l.productId===lot.productId)?ui(' Захиалгад шинээр нь аваарай.',' Возьмите свежий товар для заказа.'):''));
  });
  $('waste-dialog').addEventListener('close',()=>{pendingDisposal=null;});
  $('packing-waste').addEventListener('click',()=>openWaste());
  function openPacking() { renderPacking(); if (!$('packing-dialog').open) $('packing-dialog').showModal(); }
  // Space must not activate a focused dismiss/add button in a product view.
  for(const id of ['inspect-dialog','photo-dialog','scale-dialog'])for(const type of ['keydown','keyup'])$(id).addEventListener(type,event=>{
    if(event.code!=='Space'||window.GroceryInput.nativeShortcut(event)||window.GroceryInput.editing(event.target))return;
    if(event.target.closest('#inspect-close,#inspect-back,#inspect-add,#inspect-discard,[data-close="photo-dialog"],[data-close="scale-dialog"]'))event.preventDefault();
  });
  $('bag-button').addEventListener('click', openPacking);
  $('map-button').addEventListener('click', () => $('map-dialog').showModal());
  $('ticket-toggle').addEventListener('click', event => {
    if(!window.GroceryInput.menuClick(event))return;
    const panel = document.querySelector('.order-float');
    const collapsed = panel.classList.toggle('collapsed');
    $('ticket-toggle').setAttribute('aria-expanded', String(!collapsed));
  });
  const compactHud=window.matchMedia('(max-width: 900px) and (orientation: portrait)');
  function showCompactReceipt(){if(!compactHud.matches)return;document.querySelector('.order-float').classList.remove('collapsed');$('ticket-toggle').setAttribute('aria-expanded','true');}
  compactHud.addEventListener('change',showCompactReceipt);showCompactReceipt();
  window.GameWorldBridge = {
    atmosphere:()=>{const p=Shift.progress(orders,dailyBests(),shiftScope());return {day:market.day,progress:p.total?p.done/p.total:0};},
    inventory: () => inventory,
    count: id => (cart[id]||0)+(disposals[id]||0)+(service.sentCart[id]||0)+(service.activeId?(service.originalCart[id]||0):0),
    transport:()=>hasPreparation()?preparation.transport:'',
    label:()=>({number:F.orderNumber(order),customer:order.customer,bags:delivered?0:preparation.bags}),
    carried:()=>delivered||packingStage!=='collecting'?[]:inventory.filter(l=>cart[l.id]),
    selected:()=>inventory.filter(l=>cart[l.id]),packingStage:()=>packingStage,delivered:()=>delivered,
    russianHints:()=>russianHints||L?.isRussian(),
    inspect: id => openInspect(id, 'world'),
    openPacking,openWaste:()=>openWaste(),
    atStation: value => { canPack = value; renderPacking(); }
  };
  $('mobile-bag-link').addEventListener('click', () => $('packing').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  $('mobile-order-button').addEventListener('click', () => $('order-ticket').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  $('mobile-cart-button').addEventListener('click', () => $('packing').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  function openMainMenu(){
    if(shipping)return;
    save();phone?.stop();window.dispatchEvent(new Event('grocery:releasecontrols'));
    $('menu-session').textContent=ui(`Захиалга № ${F.orderNumber(order)} · ${order.customer}`,`Заказ № ${F.orderNumber(order)} · ${order.customer}`);
    if(!$('main-menu-dialog').open)$('main-menu-dialog').showModal();
  }
  $('welcome-guide').addEventListener('click',()=>{helpFromMenu=false;$('help-dialog').showModal();});
  $('home-button').addEventListener('click',event=>{event.preventDefault();if(window.GroceryInput.menuClick(event))openMainMenu();});
  $('menu-resume').addEventListener('click',()=>{$('main-menu-dialog').close();focusWorld();});
  $('menu-finish').addEventListener('click',()=>{
    save();settingsFromMenu=false;$('main-menu-dialog').close();
    document.body.classList.remove('game-started');window.dispatchEvent(new Event('grocery:welcome'));
  });
  $('main-menu-dialog').addEventListener('close',focusWorld);
  $('controls-tutorial-dialog').addEventListener('close',()=>{
    controlsTutorialDay=market.day;save();
    const next=afterControlsTutorial;afterControlsTutorial=null;
    if(next&&document.body.classList.contains('game-started'))next();
  });
  document.addEventListener('click', event => { const button = event.target.closest('[data-close]'); if (button&&window.GroceryInput.menuClick(event)) $(button.dataset.close)?.close(); });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog||!window.GroceryInput.menuClick(event)) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
        if (dialog.id === 'inspect-dialog') closeInspect(); else if (!['success-dialog', 'welcome-dialog'].includes(dialog.id)) dialog.close();
      }
    });
  });
  // Dismissing a completed order must leave a clear route to the next one.
  $('success-dialog').addEventListener('cancel', event => { event.preventDefault(); $('success-dialog').close(); showOrders(); });
  $('welcome-russian').disabled=L?.isRussian()===true;
  window.addEventListener('grocery:language',()=>{if(L?.isRussian())russianHints=true;for(const id of ['welcome-russian','settings-russian']){$(id).checked=russianHints;$(id).disabled=L?.isRussian()===true;}save();renderAll();syncMessages();if($('prep-dialog').open)prepDesk?.render();if($('scale-dialog').open)renderScale(false);window.dispatchEvent(new Event('grocery:navigation-hints'));});
  const canResumeSession=()=>!market.closed&&(!!market.orderNumbers[orderKey(order.id)]||hasPreparation()||Object.keys(cart).length>0||attempts>0||F.hasPending(service));
  window.GrocerySession = { canResume:canResumeSession,shift:()=>({...playShift}), shiftProgress:format=>{const targetMode=format==='text'?'text':format==='audio'?'campaign':mode,list=targetMode===mode?orders:Rotation.select(fullCampaign(targetMode),counts,orderRotation,targetMode);return Shift.progress(list,Shift.dayBests(market,list,targetMode),playShift);}, marketDay:()=>({day:market.day,closed:market.closed,offer:Prices.offerForDay()}), archiveAvailable: classicAvailable || legacyAvailable, currentMode: () => mode,currentLevel:()=>G.levelForOrder(order), deliveryMode: () => deliveryMode, russianHints: () => russianHints };
  save(); // Save the first random schedule before the welcome screen can be reloaded.
  window.addEventListener('grocery:start', event => {
    const resuming=event.detail?.resume===true;
    russianHints=L?.isRussian()||event.detail?.russianHints===true;
    const requestedMode=event.detail?.mode==='text'?'text':'campaign';
    if(!resuming&&event.detail?.archive&&currentCampaign())selectCampaign(classicAvailable?'classic':'legacy',counts,false);
    else if(!resuming&&!event.detail?.archive&&mode!==requestedMode)selectCampaign(requestedMode,counts,false);
    const requestedShift=Shift.normalize({scope:event.detail?.scope,level:Number(event.detail?.level)||0});
    if(!resuming&&!event.detail?.archive&&currentCampaign()&&!F.hasPending(service)){
      if(canResumeSession())orderRotation=Rotation.received(orderRotation,mode,order,G.orderSignature(order));
      save();playShift=requestedShift;const advanced=advanceDay();
      if(!advanced)planFreshOrders();
      market={...market,completed:Object.fromEntries(Object.entries(market.completed).filter(([key])=>!key.startsWith(mode+':'))),orderNumbers:{},closed:false};
      orders=campaignOrders();bests=orders.map(o=>bestById[orderKey(o.id)]||0);
      const target=Shift.next(orders,dailyBests(),playShift,market,mode);
      if(target>=0){loadOrder(target,false);phone?.close();closeWorkDialogs();renderAll();window.dispatchEvent(new Event('grocery:inventory'));window.dispatchEvent(new Event('grocery:transport'));}
    }
    receiveOrder();introSeen = true; save(); renderTicket(); syncPhone();window.dispatchEvent(new Event('grocery:navigation-hints'));
    const openReceivedOrder=()=>{
      if(delivered&&F.hasPending(service))clientMessages.open();
      else if(delivered)showSuccess();
      else if(service.activeId){if(hasPreparation())clientMessages.open();else ensurePreparation();}
      else if(mode==='campaign'&&deliveryMode==='audio'){clientMessages.showTab('voice');phone.open();}
      else ensurePreparation();
    };
    if(controlsTutorialDay!==market.day&&!event.detail?.archive){
      afterControlsTutorial=openReceivedOrder;window.dispatchEvent(new Event('grocery:releasecontrols'));
      $('controls-tutorial-dialog').showModal();
    }else openReceivedOrder();
  });
})();
