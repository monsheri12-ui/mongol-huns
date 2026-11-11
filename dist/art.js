(function () {
  'use strict';
  const stroke = '#35594a';
  const line = `stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
  const ellipse = '<ellipse cx="64" cy="115" rx="39" ry="5" fill="#284d36" opacity=".09"/>';
  const label = (text, x = 64, y = 76, color = stroke, size = 12) => `<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" font-weight="800">${text}</text>`;
  const leaf = (x, y, fill = '#568c54') => `<path d="M${x},${y} q-1,-19 21,-17 q-3,19 -21,17" fill="${fill}" ${line}/>`;
  const carton = (name, color, top = '#f4f5df') => `<path d="M43 14h35l11 21v73H36V35z" fill="${top}" ${line}/><path d="M43 14v16l-7 5h53L78 14" fill="${color}" ${line}/><path d="M78 30v78h11V35z" fill="${color}" opacity=".5"/><path d="M37 64q14 -10 27 0t24 0v38H37z" fill="${color}"/><path d="M43 21h22" fill="none" ${line}/>${label(name, 61, 83, '#fff', name.length > 5 ? 10 : 13)}<path d="M46 92h29" stroke="#fff" stroke-width="2" opacity=".65"/>`;
  const bag = (name, color, contents) => `<path d="M40 17q24 5 48 0l-5 20 9 61q2 13-12 13H46q-14 0-12-13l10-61z" fill="${color}" ${line}/><path d="M40 25h46M44 37h39" fill="none" ${line}/><path d="M37 58h51v35H37z" fill="#fff9eb" opacity=".85"/>${contents || ''}${label(name, 63, 80, stroke, name.length > 6 ? 9 : 12)}`;
  const apple = (color, green = false) => `<path d="M65 40c-21-18-44-2-43 23 1 26 19 43 29 42 9-1 12-5 20-1 13 7 35-20 34-44-1-22-25-33-40-20z" fill="${color}" ${line}/><path d="M64 43q-1-17 7-24" fill="none" ${line}/>${leaf(69, 29, green ? '#91af52' : '#7e9c50')}<path d="M35 58q-6 12-1 23" fill="none" stroke="#fff" stroke-width="5" opacity=".35" stroke-linecap="round"/>`;
  const drawings = {
    milk: carton('СҮҮ', '#6d9fb8'),
    yogurt: carton('ТАРАГ', '#9ca66c', '#faf6e9'),
    butter: `<path d="M23 53l60-13 24 16v46l-60 12-24-17z" fill="#ecc85c" ${line}/><path d="M23 53l24 15 60-12M47 68v46" fill="none" ${line}/><path d="M55 67l43-8v30l-43 9z" fill="#fff5d5"/>${label('ТОС', 76, 85, stroke, 12)}<path d="M38 42l8-14 38 5 5 9" fill="#ffe493" ${line}/>`,
    cheese: `<path d="M19 88L43 32l67 28v43H19z" fill="#efd078" ${line}/><path d="M19 88l91-28M19 88h91" fill="none" ${line}/><g fill="#d8a552"><circle cx="66" cy="66" r="6"/><circle cx="49" cy="84" r="4"/><circle cx="90" cy="92" r="5"/><circle cx="40" cy="99" r="4"/></g>`,
    eggs: `<path d="M14 68l15-17h70l15 17-8 39H22z" fill="#b8b68c" ${line}/><path d="M14 68h100M24 83h80" fill="none" ${line}/>${[35, 64, 93].map((x, i) => `<ellipse cx="${x}" cy="${62 + (i % 2) * 6}" rx="13" ry="20" fill="${i === 1 ? '#eddbc3' : '#fff4df'}" ${line}/>`).join('')}<path d="M21 85h86l-4 22H25z" fill="#ced0ac" ${line}/>${label('ӨНДӨГ', 64, 102, stroke, 8)}`,
    'white-bread': `<path d="M24 102V55C9 33 35 19 50 29c8-16 40-13 43 2 24-3 34 20 17 31v40q-45 13-86 0z" fill="#d9aa66" ${line}/><path d="M36 97V57c-12-15 4-21 15-15 10-17 28-14 34-1 17-4 24 12 11 20v36z" fill="#f7e5b8" ${line}/><path d="M51 62l4-8M66 70l4-8M81 59l4-7" stroke="#dabf82" stroke-width="3" stroke-linecap="round"/>`,
    'brown-bread': `<path d="M20 91q-7-40 33-54 34-14 54 22l4 32q-41 25-91 0z" fill="#956443" ${line}/><path d="M37 56l9 23M61 46l9 27M85 49l8 22" stroke="#d8b17c" stroke-width="7" stroke-linecap="round"/><path d="M27 93q39 12 75-1" fill="none" stroke="#bd8b5e" stroke-width="4"/>`,
    flour: bag('ГУРИЛ', '#ede1bb', '<path d="M55 47l10-12 10 12" fill="none" stroke="#b29a58" stroke-width="2"/>'),
    rice: bag('БУДАА', '#c1c9a0', '<path d="M50 49l5-4m8 4 5-4m8 4 5-4" stroke="#fff9eb" stroke-width="3"/>'),
    sugar: bag('ЭЛСЭН ЧИХЭР', '#e6b5b3'),
    salt: bag('ДАВС', '#bac0dc'),
    pasta: bag('ГОЙМОН', '#dfb06b', '<path d="M47 42v14m8-14v14m8-14v14m8-14v14m8-14v14" stroke="#f8e2a0" stroke-width="3"/>'),
    oil: `<path d="M52 15h26v17l9 14v60H41V46l11-14z" fill="#dbc36a" ${line}/><rect x="51" y="10" width="28" height="15" rx="3" fill="#68856b" ${line}/><path d="M42 61h44v32H42z" fill="#faf3d7"/>${label('ТОС', 64, 82)}<path d="M49 48v8" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
    water: `<path d="M52 19h24v17l12 17v49q0 10-12 10H51q-11 0-11-10V53l12-17z" fill="#cee6e6" ${line}/><rect x="51" y="12" width="27" height="13" rx="3" fill="#86b2c2" ${line}/><path d="M41 63h47v29H41z" fill="#74a5b7"/>${label('УС', 64, 82, '#fff')}<path d="M47 49v8m0 43v3" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
    'red-apple': apple('#d87b63'),
    'green-apple': apple('#acc568', true),
    banana: `<path d="M29 32c-8 35 18 65 56 46 10-5 17-15 20-25 2 31-25 61-56 48C20 90 11 53 29 32z" fill="#eaca69" ${line}/><path d="M28 34c-1 39 29 64 62 41" fill="none" stroke="#b5994c" stroke-width="2.5"/><path d="M24 34l1-10h8l-3 13m72 17 2-7h7l-3 11" fill="#816e49" ${line}/>`,
    orange: `<circle cx="64" cy="72" r="37" fill="#e7a45b" ${line}/><path d="M64 36l3-16" fill="none" ${line}/>${leaf(69, 32)}<path d="M39 55q-10 14-5 25" stroke="#f7cc89" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="#b77c40" opacity=".55"><circle cx="72" cy="90" r="1.5"/><circle cx="87" cy="75" r="1.5"/><circle cx="64" cy="57" r="1.5"/></g>`,
    carrot: `<path d="M54 44q23-9 31 7L31 112q-7 3-5-5z" fill="#dc9658" ${line}/><path d="M61 43q-15-27-7-29 11 1 18 22-2-28 9-28 8 6-2 29 17-20 23-11 0 9-20 21" fill="#86a16b" ${line}/><path d="M51 65l10 7m-21 9 9 5m20-35 9 6" fill="none" ${line}/>`,
    potato: `<path d="M27 57q3-31 30-25 26-16 42 9 17 6 7 39-5 29-34 27-25 12-43-8-17-14-2-42z" fill="#c7ad7d" ${line}/><g fill="#8f784d"><ellipse cx="46" cy="58" rx="3" ry="2"/><ellipse cx="80" cy="47" rx="2" ry="3"/><ellipse cx="87" cy="83" rx="3" ry="2"/><ellipse cx="49" cy="92" rx="2" ry="3"/><circle cx="65" cy="75" r="2"/></g>`,
    tomato: `<path d="M65 42c-36-19-62 17-42 47 16 26 59 25 78-1 20-29-3-61-36-46z" fill="#d47c68" ${line}/><path d="M63 46L46 29l4 18-19 5 26 5 7 15 7-17 26 2-18-13 7-15-19 12-4-18z" fill="#719767" ${line}/><path d="M35 67q-6 13 1 21" stroke="#efb6a1" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    cucumber: `<path d="M35 105q-17-4-9-24l43-53q12-14 24-3 15 10 2 27l-42 48q-9 9-18 5z" fill="#78965a" ${line}/><path d="M35 94l46-58" stroke="#aabd7b" stroke-width="5" stroke-linecap="round"/><g fill="#4a6f43"><circle cx="55" cy="79" r="2"/><circle cx="66" cy="61" r="2"/><circle cx="47" cy="73" r="2"/><circle cx="82" cy="48" r="2"/></g>`,
    onion: `<path d="M61 40q-25 14-33 36-8 33 37 35 43-3 35-35-8-22-33-36l4-17H58z" fill="#dcb686" ${line}/><path d="M62 44q-32 41-9 61m14-61q31 41 10 61M64 49v56" fill="none" stroke="#b58d5e" stroke-width="2"/><path d="M61 23l-5-11m9 11 4-14" fill="none" ${line}/>`,
    cabbage: `<circle cx="64" cy="74" r="38" fill="#a5b986" ${line}/><path d="M64 111q-48-14-35-52 33 10 35 52M64 111q48-14 35-52-33 10-35 52M64 82q-28-23-10-49 28-5 31 25" fill="#c0cea0" ${line}/><path d="M40 74l17 24m31-24-17 24M63 47l1 24" fill="none" stroke="#779466" stroke-width="2"/>`,
    icecream: `<path d="M29 66h70l-8 43H37z" fill="#adc9c8" ${line}/><path d="M25 62h78v10H25z" fill="#e8eee0" ${line}/><path d="M35 60c-16-15 3-30 15-24-1-22 33-22 35-1 18-4 25 19 9 25z" fill="#f5e6d0" ${line}/>${label('ЗАЙРМАГ', 64, 94, stroke, 10)}`
  };
  let spriteSerial = 0;
  function productRaw(id, extraClass = '', pack, photoId, original=false) {
    if(id==='eggs'&&window.EggArt)return window.EggArt.carton(false,false,extraClass);
    const source = window.ProducePhotos?.[photoId] || window.ProductPhotos?.[photoId] || window.ProductPhotos?.[`${id}-${pack}`] || window.ProductPhotos?.[id];
    const fast=!original&&window.FastAssets?.products?.[source?.id];
    if(fast)return `<img class="product-art ${extraClass}" src="${fast.small}" alt="" loading="lazy" decoding="async" width="${fast.width}" height="${fast.height}">`;
    if (source?.sprite) {
      const s = source.sprite;
      const clip = `produce-sprite-${++spriteSerial}`;
      return `<svg class="product-art ${extraClass}" viewBox="0 0 256 256" aria-hidden="true"><defs><clipPath id="${clip}"><path d="M0 0H256V256H0Z"/></clipPath></defs><image href="${source.path}" x="${-s.column*256}" y="${-s.row*256}" width="${s.columns*256}" height="${s.rows*256}" clip-path="url(#${clip})"/></svg>`;
    }
    if(source&&(source.render_crop||source.render_labels||source.render_polygon)&&source.source_size){
      const [w,h]=source.source_size,c=source.render_crop,crop=Array.isArray(c)?c:c?[c.x,c.y,c.x+c.width,c.y+c.height]:[0,0,1,1],clip=`source-photo-${++spriteSerial}`;
      const polygon=source.render_polygon?`<defs><clipPath id="${clip}"><polygon points="${source.render_polygon.map(([x,y])=>`${x*w},${y*h}`).join(' ')}"/></clipPath></defs>`:'';
      const stickers=(source.render_labels||[]).map(label=>{const [x,y,rw,rh]=label.rect;return `<g><rect x="${x*w}" y="${y*h}" width="${rw*w}" height="${rh*h}" rx="2" fill="#f7edcc" stroke="#beaa79" stroke-width=".7"/><text x="${(x+rw/2)*w}" y="${(y+rh*.72)*h}" font-family="Arial,sans-serif" font-size="${rh*h*.55}" fill="#5e7051" text-anchor="middle">${label.text}</text></g>`;}).join('');
      return `<svg class="product-art ${extraClass}" viewBox="${crop[0]*w} ${crop[1]*h} ${(crop[2]-crop[0])*w} ${(crop[3]-crop[1])*h}" aria-hidden="true">${polygon}<g ${source.render_polygon?`clip-path="url(#${clip})"`:''}><image href="${source.path}" width="${w}" height="${h}"/>${stickers}</g></svg>`;
    }
    if (source) return `<img class="product-art ${extraClass}" src="${source.path}" alt="" loading="lazy">`;
    return `<svg class="product-art ${extraClass}" viewBox="0 0 128 128" aria-hidden="true">${drawings[id] || drawings.rice}</svg>`;
  }
  function product(id, extraClass = '', pack, photoId, original=false) {
    const art=productRaw(id, extraClass, pack, photoId, original);
    const kind=window.GroceryGame?.BY_ID[id]?.shelfKind;
    if(kind==='punnet'||id==='chicken-breast')return `<span class="product-art clear-retail-pack ${kind==='punnet'?'berry-punnet':'fillet-tray'} ${extraClass}">${art}<span class="retail-pack-rim" aria-hidden="true"></span></span>`;
    return art;
  }
  const icons = {
    trophy:'<path d="M8 3h8v6a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 13v6m-4 2h8m-7-2h6"/>',
    bin: '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6m4-6v6"/>',
    basket: '<path d="M3 9h18l-2 12H5L3 9Zm4 0 5-7 5 7M8 13v5m4-5v5m4-5v5"/>',
    cart: '<path d="M2 3h3l3 13h11l3-10H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
    scale: '<path d="M3 8h18l-2 6H5L3 8Zm9-5v5M8 3h8M7 14v7h10v-7M9 18h6"/>',
    settings: '<path d="M4 7h16M4 17h16M8 4v6m8 4v6"/>',
    leaf: '<path d="M5 19C2 8 9 3 21 3c0 12-6 19-16 16Zm0 0L17 7"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    milk: '<path d="M8 3h8l3 5v13H5V8l3-5Zm-3 5h14M8 3v5m8-5v5M9 14h6"/>',
    bread: '<path d="M5 21V10C0 5 6 1 10 4c2-3 8-2 9 1 6 0 6 5 2 7v9H5Z"/>',
    apple: '<path d="M12 7C4 2 0 11 5 18c4 7 6 2 9 3 4 2 10-7 6-12-2-3-6-3-8-2Zm0 0c0-4 2-5 5-5"/>',
    jar: '<path d="M7 3h10v4l3 3v11H4V10l3-3V3Zm-3 10h16M7 7h10M8 17h8"/>',
    snow: '<path d="M12 2v20M3 7l18 10M3 17 21 7M8 4l4 3 4-3M8 20l4-3 4 3"/>',
    bag: '<path d="M4 7h16l1 14H3L4 7Zm4 0V5a4 4 0 0 1 8 0v2"/>',
    check: '<path d="m5 12 4 4L20 5"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
    back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 8.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18m-11 4h4"/>',
    star: '<path d="m12 2 3 6.5 7 .9-5.2 5 1.3 7.1L12 18l-6.1 3.5 1.3-7.1-5.2-5 7-.9L12 2Z"/>',
    truck: '<path d="M2 5h12v12H2V5Zm12 5h4l4 5v2h-8M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/>',
    sound: '<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
    mute: '<path d="m11 4-6 5H2v6h3l6 5V4Zm5 5 6 6m-6 0 6-6"/>',
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    alert: '<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3h.01"/>',
    rotate: '<path d="M20 8a8 8 0 1 0 0 8M20 2v6h-6"/>'
  };
  function icon(id, extraClass = '') {
    return `<svg class="icon ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[id] || icons.leaf}</svg>`;
  }
  window.GroceryArt = { product, icon };
})();
