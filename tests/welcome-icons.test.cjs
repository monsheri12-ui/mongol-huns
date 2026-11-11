const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync(require.resolve('../dist/index.html'),'utf8'),boot=fs.readFileSync(require.resolve('../dist/boot.js'),'utf8');
let checks=0;const ok=(v,m)=>{checks++;assert.ok(v,m);};
const context={window:{GroceryAchievements:require('../dist/achievements.js')}};vm.runInNewContext(fs.readFileSync(require.resolve('../dist/timer-art.js'),'utf8'),context);vm.runInNewContext(fs.readFileSync(require.resolve('../dist/achievement-art.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(require.resolve('../dist/choice-art.js'),'utf8'),context);
const atlas=context.window.GroceryChoiceArt;
ok(atlas.src.startsWith('data:image/webp;base64,'),'The selector atlas is embedded rather than requested when switching choices');
const bytes=Buffer.from(atlas.src.split(',')[1],'base64');
ok(bytes.length<50000,'The eight selector icons stay below 50 KB');
ok(bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP','Embedded bytes are a WebP image');
ok(Object.keys(atlas.items).length===8,'Only the eight selector illustrations are embedded');
const cells=new Set();
for(const id of ['full-shift','orders-1','audio-orders-1','text-orders-1','level-0','level-1','level-2','level-3']){
 const cell=atlas.items[id];ok(cell&&Number.isInteger(cell[0])&&cell[0]>=0&&cell[0]<atlas.columns&&Number.isInteger(cell[1])&&cell[1]>=0&&cell[1]<atlas.rows,'Each selector maps to a valid atlas cell');cells.add(cell.join(','));
}
ok(cells.size===8,'Each choice retains its own illustration');
ok(html.indexOf('choice-art.js')<html.indexOf('boot.js'),'The complete atlas is available before launch controls render');
for(const id of ['full-shift','orders-1','audio-orders-1','text-orders-1','level-0','level-1','level-2','level-3'])ok(context.window.GroceryAchievementArt[id],'Each choice has its corresponding generated illustration');
for(const id of ['welcome-scope','welcome-order-format','welcome-level']){
 ok(new RegExp('class="welcome-icon-select"[^]*?<select id="'+id+'"').test(html),'The select remains as the hidden form state source');
 ok(boot.includes("'"+id+"'"),'The matching illustration is updated with the current choice');
}
ok(html.includes('welcome-select-visual" aria-hidden="true"'),'Decorative illustrations and repeated captions do not duplicate accessible field labels');
const picker=fs.readFileSync(require.resolve('../dist/choice-picker.js'),'utf8');ok(picker.includes('selectedOptions[0]'),'The custom visible caption follows the actual selected option');ok(picker.includes("role','listbox")||picker.includes("role=\"listbox\""),'Choices expose an accessible custom listbox');
ok(boot.includes('renderChoiceIcons();'),'Icons update with mode, difficulty, format and language');
ok(!/assets\/achievements\//.test(html),'The HTML does not eagerly load the full sticker collection');
console.log(`PASS: ${checks} illustrated selector mapping, custom control and state preservation and deferred artwork checks.`);
