/* Persistent learning achievements. Events are deduplicated within a game day;
   the ledger is bounded by the actual milestone goals, not by play time. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryAchievements=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const GROUPS=[
    {id:'orders',mn:'Захиалга',ru:'Заказы',icon:'bag'},
    {id:'quality',mn:'Чанар',ru:'Качество',icon:'check'},
    {id:'weighing',mn:'Жинлэх',ru:'Взвешивание',icon:'scale'},
    {id:'listening',mn:'Сонсох',ru:'Аудирование',icon:'sound'},
    {id:'assortment',mn:'Барааны төрөл',ru:'Ассортимент',icon:'grid'},
    {id:'shifts',mn:'Түвшин ба ээлж',ru:'Уровни и смены',icon:'star'},
    {id:'timing',mn:'Цагтай тоглох',ru:'На время',icon:'star'}
  ];
  const DEFINITIONS=[];
  const add=(id,group,metric,target,mn,ru,descriptionMn,descriptionRu)=>DEFINITIONS.push(Object.freeze({id,group,metric,target,mn,ru,descriptionMn,descriptionRu}));
  const milestones=(prefix,group,metric,values,titles,describe)=>values.forEach((n,i)=>add(prefix+'-'+n,group,metric,n,...titles[i],...describe(n)));
  milestones('orders','orders','delivered',[1,5,10,25,50,100,200],[['Эхний захиалга','Первый заказ'],['Ажилдаа даслаа','Вошли в ритм'],['Эхний арав','Первая десятка'],['Найдвартай бэлтгэгч','Надёжный сборщик'],['Тавин хүргэлт','Полсотни доставок'],['Зуун захиалга','Сотня заказов'],['Эрхэмсэг уут','Пакетное величество']],n=>[`${n} захиалгыг гүйцэтгээрэй.`,n===1?'Завершите первый заказ.':`Завершите ${n} заказов.`]);
  milestones('stars','orders','perfect',[1,10,25,50],[['Гурван од','Три звезды'],['Одтой арав','Звёздная десятка'],['Тогтмол сайн','Стабильный результат'],['Сансарт гарсан уут','Пакет в космосе']],n=>[`${n} захиалгад гурван од аваарай.`,`Получите три звезды за ${n===1?'один заказ':n+' разных заказов'}.`]);
  add('clean-streak','orders','streak',5,'Таван цэвэр захиалга','Пять без промаха','Торгууль, гомдолгүй 5 захиалгыг дараалан гүйцэтгээрэй.','Завершите подряд пять заказов без штрафов и жалоб.');
  add('dates-any-1','quality','dates',1,'Хугацааг шалгалаа','Срок проверен','Нэг савлагааны хэрэглэх хугацааг шалгаарай.','Проверьте срок годности у любой упаковки.');
  add('dates-1','quality','dairyDates',1,'Сүүн мөрдөгч','Молочный детектив','Сүү эсвэл сүүн бүтээгдэхүүний нэг савлагааны хугацааг шалгаарай.','Проверьте срок годности у одной упаковки молока или молочного продукта.');
  milestones('dates','quality','dates',[10,50],[['Хиамны мөрдлөг','Колбасное следствие'],['Цаг мэддэг бяслаг','Сыр знает время']],n=>[`${n} өөр савлагааны хугацааг шалгаарай.`,`Проверьте срок годности у ${n} разных упаковок.`]);
  milestones('eggs','quality','eggs',[1,10],[['Бүтэн өндөг','Целая коробка'],['Өндөгний хамгаалалт','Яйца под защитой']],n=>[`${n} өөр хайрцгийг нээж өндөгний хальсыг шалгаарай.`,`Откройте и проверьте скорлупу в ${n===1?'одной коробке яиц':n+' разных коробках яиц'}.`]);
  milestones('disposal','quality','disposals',[1,10],[['Тэтгэвэрт гарсан гадил','Банан в отставке'],['Чанарыг хамгаална','На страже качества']],n=>[`${n} өөр муудсан барааны багцыг зориулалтын саванд хийгээрэй.`,`Отправьте в брак ${n===1?'одну испорченную партию':n+' разных испорченных партий'}.`]);
  milestones('checked','quality','checkedOrders',[1,10],[['Бүгдийг шалгалаа','Проверено всё'],['Чанартай арван захиалга','Десять проверенных заказов']],n=>[`${n} захиалгын бүх барааг үзэж, шаардлагатай огноо болон өндгийг шалгаад торгууль, гомдолгүй өгөөрэй.`,`В ${n===1?'одном заказе':n+' заказах'} осмотрите все товары, проверьте даты и яйца, затем завершите заказ без штрафа и жалоб.`]);
  milestones('weighed','weighing','weighed',[1,5,20,50],[['Эхний жинлэлт','Первое взвешивание'],['Жинтэй ажил','Дело на вес'],['Тэнцвэртэй гадил','Банан-эквилибрист'],['Төмсний шидтэн','Картофельный маг']],n=>[`${n} өөр порцыг жинлэж, жинг нь үсгээр бичээд уутыг зангидаж сагсанд хийгээрэй.`,`Взвесьте ${n===1?'одну порцию':n+' разных порций'}, запишите вес словами, завяжите пакеты и положите их в корзину.`]);
  milestones('weight-words','weighing','weightWords',[1,10],[['Жинг үсгээр','Вес словами'],['Тоонд итгэлтэй','Уверенно в числах']],n=>[`${n} порцын жинг монголоор тусламжгүй зөв бичээд сагсанд хийгээрэй.`,`Запишите вес ${n===1?'одной порции':n+' разных порций'} по-монгольски без подсказки и положите её в корзину.`]);
  add('produce-weighed','weighing','produceWeighed',5,'Жимс, ногоогоо жинлэе','Овощи на вес','Жимс, ногооны 5 өөр порцыг жинлэж, зангидсан ууттай нь сагсанд хийгээрэй.','Взвесьте пять разных порций фруктов или овощей и положите завязанные пакеты в корзину.');
  add('sweets-weighed','weighing','sweetsWeighed',5,'Амттаны жин','Сладкий вес','Задгай амттаны 5 өөр порцыг жинлэж, уутлаад сагсанд хийгээрэй.','Взвесьте пять разных порций развесных сладостей и положите завязанные пакеты в корзину.');
  milestones('heard','listening','heard',[1,10,50,100],[['Анхаарч сонслоо','Первое сообщение'],['Лууван эфирт','Морковь в эфире'],['Бяслаг сонсож байна','Сыр слушает'],['Сүүний радио','Молочная радиостанция']],n=>[`${n} өөр дуут захиалгыг дуустал нь сонсоорой.`,`Прослушайте до конца ${n===1?'одно аудиосообщение':n+' разных аудиосообщений с заказами'}.`]);
  milestones('audio-orders','listening','audioOrders',[1,10],[['Сонсоод цуглууллаа','Услышать и собрать'],['Сонсох дадал','Слушаем уверенно']],n=>[`${n} захиалгын дууг дуустал нь сонсоод торгууль, гомдолгүй гүйцэтгээрэй.`,`Прослушайте и завершите ${n===1?'один аудиозаказ':n+' аудиозаказов'} без штрафов и жалоб.`]);
  milestones('without-text','listening','withoutText',[1,10],[['Зөвхөн сонсоод','Только на слух'],['Сонсголоороо итгэлтэй','Уверенно на слух']],n=>[`${n} дуут захиалгыг дуустал сонсож, бичвэрийг нээлгүй торгууль, гомдолгүй гүйцэтгээрэй.`,`Прослушайте и завершите ${n===1?'один аудиозаказ':n+' аудиозаказов'} без открытия текста, штрафов и жалоб.`]);
  milestones('products','assortment','products',[10,25,50,100],[['Эхний арван бараа','Знакомые продукты'],['Өргөн сонголт','Широкий выбор'],['Тавин нэр төрөл','Пятьдесят названий'],['Дэлгүүрийн мэргэжилтэн','Знаток магазина']],n=>[`${n} өөр нэр төрлийн шинэ барааг захиалгаар хүргээрэй.`,`Доставьте ${n} разных видов свежих товаров в завершённых заказах.`]);
  milestones('departments','assortment','categories',[6,13],[['Хагас дэлгүүр','Половина магазина'],['Бүх төрлийн бараа','Весь магазин']],n=>[`${n} төрлийн тасгаас шинэ бараа хүргээрэй.`,`Доставьте свежие товары из ${n===6?'шести':'всех тринадцати'} товарных категорий.`]);
  milestones('text-orders','assortment','textOrders',[1,10],[['Уншаад цуглууллаа','Прочитать и собрать'],['Номын санч гадил','Банан-библиотекарь']],n=>[`${n} бичвэр захиалгыг гүйцэтгээрэй.`,`Завершите ${n===1?'один текстовый заказ':n+' текстовых заказов'}.`]);
  [['Танилцах түвшин','Знакомство пройдено'],['Хугацаа шалгах түвшин','Сроки под контролем'],['Тооцооч төмс','Картофельный математик'],['Нарийн сонголттой алим','Яблочный гурман']].forEach((title,i)=>add('level-'+i,'shifts','level'+i,1,...title,`${i+1}-р түвшний нэг ээлжийн бүх захиалгыг гүйцэтгээрэй.`,`Завершите все заказы уровня ${i+1} в течение одной игровой смены.`));
  add('full-shift','shifts','fullShifts',1,'Бүтэн ээлж','Полная смена','Тоглоомын нэг өдрийн дөрвөн түвшний бүх захиалгыг гүйцэтгээрэй.','Завершите все четыре уровня за один игровой день в одном формате заказов.');
  milestones('timed-orders','timing','timedOrders',[1,5,25],[['Амжлаа!','Успели!'],['Хурдан таван захиалга','Пакет на скорости'],['Шуурхай бэлтгэгч','Экспресс-сборщик']],n=>[`${n} захиалгыг цаг дуусахаас өмнө торгууль, гомдолгүй хүргээрэй.`,`Сдайте ${n===1?'один заказ':n+' заказов'} с таймером до окончания времени, без штрафов и жалоб.`]);
  add('timed-perfect','timing','timedPerfect',5,'Хурдан бөгөөд алдаагүй','Быстро и без ошибок','Цагтай 5 захиалгад хугацаандаа амжиж гурван од аваарай.','Получите три звезды за пять заказов с таймером, успев до окончания времени.');
  add('timed-reserve','timing','timedReserve',1,'Цагийн нөөцтэй','С запасом!','Цагийнхаа хагасыг ашиглахаас өмнө нэг захиалгыг алдаагүй хүргээрэй.','Сдайте заказ с таймером без штрафов и жалоб, использовав не больше половины времени.');
  add('timed-streak','timing','timedStreak',5,'Цагаас түрүүлэв','Обгоняя часы','Цагтай 5 өөр захиалгыг дараалан хугацаанд нь алдаагүй хүргээрэй.','В режиме с таймером сдайте пять разных заказов подряд без опозданий, штрафов и жалоб.');
  milestones('challenge','timing','challenges',[1,5],[['Галтай улаан лооль','Помидор в огне'],['Хурдны аварга','Повелитель челленджа']],n=>[`Челленжийн ${n} захиалгыг хугацаанд нь алдаагүй хүргээрэй.`,`Сдайте ${n===1?'один заказ':'пять заказов'} в режиме «Таймер-челлендж» до окончания времени, без штрафов и жалоб.`]);
  milestones('shelf-return','quality','shelfReturns',[1,5,20],[['Байраа оллоо','Место найдено'],['Тавиурын дэг журам','Полочный порядок'],['Тавиурын хамгаалагч','Хранитель стеллажей']],n=>[`Буруу тавиурт байсан ${n} барааг зөв хэсэгт нь аваачиж тавиарай.`,`Верните ${n===1?'один товар':n+' товаров'} с чужого стеллажа на правильный. Взять товар в руки недостаточно.`]);
  add('first-fine','quality','fines',1,'Эхний торгууль','Первый штраф','Эхний торгуулиа аваарай. Дараагийн удаа анхааралтай байгаарай.','Получите первый штраф. В следующий раз проверяйте внимательнее.');
  milestones('large-fine','quality','largestFine',[5001,15001,50001],[['Үнэтэй алдаа','Дорогая невнимательность'],['Том торгууль','Счёт с характером'],['Торгуулийн шуурга','Финансовый ураган']],n=>[`Нэг удаа ${n-1} ₮-өөс их торгууль аваарай.`,`Получите один штраф свыше ${(n-1).toLocaleString('ru-RU')} ₮.`]);
  add('biggest-fine','quality','largestFine',100001,'Торгуулийн аварга','Самый большой штраф','Нэг удаа 100 000 ₮-өөс их торгууль аваарай.','Получите один штраф свыше 100 000 ₮.');
  add('disorder-fine','quality','disorderFines',1,'Буруу тавиур','Бардак случился','Барааг өөр буруу тавиурт тавиад эмх замбараагүй байдлын торгууль аваарай.','Поставьте взятый товар на неправильный стеллаж и получите штраф за беспорядок.');
  add('first-salary','orders','paidOrders',1,'Эхний цалин','Первая зарплата','Дуусгасан захиалгын эхний хөлсөө аваарай.','Получите первую оплату за выполненный заказ.');
  milestones('earnings','orders','earnings',[5001,25001,100001],[['Эхний орлого','Пакет с доходом'],['Орлого өсөж байна','Сборка приносит'],['Зуун мянгаас дээш','Заработано больше']],n=>[`Нийт ${n-1} ₮-өөс их хөлс аваарай. Торгуулийг энэ дүнгээс хасахгүй.`,`Получите за заказы суммарно больше ${(n-1).toLocaleString('ru-RU')} ₮ до вычета штрафов.`]);
  add('earnings-big','orders','earnings',500001,'Хагас саяас дээш','Полмиллиона в пакете','Нийт 500 000 ₮-өөс их хөлс аваарай.','Получите за выполненные заказы суммарно больше 500 000 ₮ до вычета штрафов.');
  milestones('positive-review','orders','positiveReviews',[1,5,20,50,100],[['Эхний талархал','Первое спасибо'],['Талархлын таван зурвас','Пять тёплых SMS'],['Хэрэглэгчдийн дуртай','Любимчик покупателей'],['Тавин талархал','Полсотни благодарностей'],['Зуун талархал','Сто добрых SMS']],n=>[`${n} эерэг сэтгэгдлийг SMS-ээр аваарай.`,`Получите ${n===1?'первый положительный отзыв':n+' положительных отзывов'} от покупателей по SMS.`]);
  milestones('negative-review','quality','negativeReviews',[1,5,20,50,100],[['Эхний сануулга','Первый строгий отзыв'],['Сургамжтай зурвасууд','SMS с уроком'],['Дараагийн удаа дээр','Есть над чем работать'],['Тавин сургамж','Полсотни замечаний'],['Зуун сануулга','Сто поводов стать внимательнее']],n=>[`${n} сөрөг сэтгэгдлийг SMS-ээр аваарай.`,`Получите ${n===1?'первый отрицательный отзыв':n+' отрицательных отзывов'} от покупателей по SMS.`]);
  const BY_ID=Object.fromEntries(DEFINITIONS.map(d=>[d.id,d]));
  const LIMITS=Object.fromEntries(DEFINITIONS.filter(d=>!['products','categories'].includes(d.metric)&&!d.metric.startsWith('level')).map(d=>[d.metric,Math.max(d.target,...DEFINITIONS.filter(e=>e.metric===d.metric).map(e=>e.target))]));
  const CATEGORIES=['dairy','bread','produce','pantry','cold','meat','frozen','canned','ready','drinks','sweets','alcohol','household'];
  const NON_DAIRY=new Set(['eggs','quail-eggs','margarine']);
  const number=(v,max=1e9)=>Number.isSafeInteger(v)&&v>=0?Math.min(max,v):0;
  const strings=(v,max=250)=>[...new Set((Array.isArray(v)?v:[]).filter(s=>typeof s==='string'&&/^[a-z0-9:-]{1,160}$/.test(s)))].slice(0,max);
  function normalize(input={}){
    const v=input&&typeof input==='object'?input:{};
    const counters=Object.fromEntries(Object.entries(LIMITS).map(([key,max])=>[key,number(v.counters?.[key],max)]));
    const earned=Object.fromEntries(Object.entries(v.earned||{}).filter(([key,n])=>BY_ID[key]&&Number.isSafeInteger(n)&&n>0));
    if(v.version!==2){
      // Older date events did not identify the product: retain their general
      // award, and require a proven dairy check for the specialist award.
      if(earned['dates-1'])earned['dates-any-1']=earned['dates-any-1']||earned['dates-1'];
      delete earned['dates-1'];counters.dairyDates=0;
    }
    return {version:2,day:number(v.day)||1,counters,products:strings(v.products),categories:strings(v.categories).filter(s=>CATEGORIES.includes(s)),heardKeys:strings(v.heardKeys),timedKeys:strings(v.timedKeys),levels:[...new Set((Array.isArray(v.levels)?v.levels:[]).filter(n=>Number.isInteger(n)&&n>=0&&n<4))],earned,seen:strings(v.seen,2000)};
  }
  function value(state,definition){const m=definition.metric;return m==='products'?state.products.length:m==='categories'?state.categories.length:m.startsWith('level')?Number(state.levels.includes(Number(m.slice(5)))):state.counters[m]||0;}
  function unlock(state,now=Date.now()){
    const earned={...state.earned},newly=[];
    for(const d of DEFINITIONS)if(!earned[d.id]&&value(state,d)>=d.target){earned[d.id]=now;newly.push(d.id);}
    return {state:{...state,earned},newly};
  }
  function hydrate(input,history={}){
    const state=normalize(input),c=state.counters;
    c.delivered=Math.max(c.delivered,number(history.totalCompleted,LIMITS.delivered));
    c.perfect=Math.max(c.perfect,number(history.perfect,LIMITS.perfect));
    c.textOrders=Math.max(c.textOrders,number(history.textOrders,LIMITS.textOrders));
    c.heard=Math.max(c.heard,number(history.heard,LIMITS.heard));
    state.heardKeys=strings([...state.heardKeys,...(history.heardKeys||[])]);
    state.levels=[...new Set([...state.levels,...(history.levels||[]).filter(n=>Number.isInteger(n)&&n>=0&&n<4)])];
    if(history.fullShift)c.fullShifts=1;
    if(state.day!==(number(history.day)||1)){state.day=number(history.day)||1;state.seen=[];}
    state.seen=strings([...state.seen,...(history.completedKeys||[]).map(k=>'complete:'+k)],2000);
    return unlock(state).state;
  }
  function record(input,event,now=Date.now()){
    let state=normalize(input);const day=number(event?.day)||state.day;
    if(day!==state.day)state={...state,day,seen:[]};
    if(typeof event?.key!=='string'||!strings([event.key]).length)return {state,newly:[]};
    const token=event.type+':'+event.key;if(state.seen.includes(token))return {state,newly:[]};
    const inc=key=>{if(state.counters[key]<LIMITS[key])state.counters[key]++;};
    let relevant=false;
    const metric={date:'dates',egg:'eggs',discard:'disposals',heard:'heard','shelf-return':'shelfReturns'}[event.type];
    if(metric&&state.counters[metric]<LIMITS[metric]){
      const recording=event.recording||event.key;
      if(metric!=='heard'||!state.heardKeys.includes(recording)){inc(metric);relevant=true;if(metric==='heard')state.heardKeys=strings([...state.heardKeys,recording]);}
    }
    if(event.type==='date'&&event.category==='dairy'&&typeof event.productId==='string'&&!NON_DAIRY.has(event.productId)&&state.counters.dairyDates<LIMITS.dairyDates){inc('dairyDates');relevant=true;}
    if(event.type==='fine'&&Number.isSafeInteger(event.amount)&&event.amount>0){inc('fines');state.counters.largestFine=Math.max(state.counters.largestFine,Math.min(LIMITS.largestFine,event.amount));if(event.reason==='disorder')inc('disorderFines');relevant=true;}
    if(event.type==='salary'&&Number.isSafeInteger(event.amount)&&event.amount>0){inc('paidOrders');state.counters.earnings=Math.min(LIMITS.earnings,state.counters.earnings+event.amount);relevant=true;}
    if(event.type==='review'&&['positive','negative'].includes(event.reviewType)){inc(event.reviewType==='positive'?'positiveReviews':'negativeReviews');relevant=true;}
    if(event.type==='timed'&&event.timed===true&&['timer','challenge'].includes(event.timingMode)&&Number.isFinite(event.elapsedMs)&&event.elapsedMs>=0&&Number.isFinite(event.limitMs)&&event.limitMs>0&&strings([event.orderKey]).length&&Number.isInteger(event.stars)&&event.stars>=1&&event.stars<=3){
      relevant=true;
      if(!event.clean||event.elapsedMs>=event.limitMs)state.counters.timedStreak=0;
      else if(!state.timedKeys.includes(event.orderKey)){
        state.timedKeys=strings([...state.timedKeys,event.orderKey]);inc('timedOrders');inc('timedStreak');if(event.stars===3)inc('timedPerfect');if(event.elapsedMs<=event.limitMs/2)inc('timedReserve');if(event.timingMode==='challenge')inc('challenges');
      }
    }
    if(event.type==='weigh'&&event.grams>0&&event.tied===true&&event.spelled===true){
      relevant=['weighed','weightWords','produceWeighed','sweetsWeighed'].some(k=>state.counters[k]<LIMITS[k]);
      inc('weighed');if(event.withoutHint)inc('weightWords');if(event.category==='produce')inc('produceWeighed');if(event.category==='sweets')inc('sweetsWeighed');
    }
    if(event.type==='complete'&&Number.isInteger(event.stars)&&event.stars>=1&&event.stars<=3){
      relevant=true;inc('delivered');if(event.stars===3)inc('perfect');
      if(event.clean){inc('streak');if(event.checked)inc('checkedOrders');}else state.counters.streak=0;
      if(event.format==='audio'&&event.heard&&event.clean){inc('audioOrders');if(!event.revealed)inc('withoutText');}
      if(event.format==='text')inc('textOrders');
      state.products=strings([...state.products,...(event.products||[])]);
      state.categories=strings([...state.categories,...(event.categories||[])]).filter(s=>CATEGORIES.includes(s));
      state.levels=[...new Set([...state.levels,...(event.levels||[]).filter(n=>Number.isInteger(n)&&n>=0&&n<4)])];
      if(event.fullShift)inc('fullShifts');
    }
    if(relevant)state.seen=strings([...state.seen,token],2000);
    return unlock(state,now);
  }
  function progress(input){const state=normalize(input);return DEFINITIONS.map(d=>({...d,current:state.earned[d.id]?d.target:Math.min(d.target,value(state,d)),unlocked:!!state.earned[d.id],earnedAt:state.earned[d.id]||null}));}
  return {DEFINITIONS,GROUPS,LIMITS,normalize,hydrate,record,progress};
});
