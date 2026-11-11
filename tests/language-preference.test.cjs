'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync(require.resolve('../dist/interface-language.js'),'utf8');
function language(saved,blocked=false){
  const root={localStorage:{getItem(){if(blocked)throw new Error('Storage unavailable');return saved;}}};
  vm.runInNewContext(source,{globalThis:root});
  return root.GroceryLanguage;
}
assert.equal(language(null).current(),'ru','A first visit uses Russian');
assert.equal(language('{}').current(),'ru','Existing progress without a language uses Russian');
assert.equal(language('{"uiLanguage":"ru","drafts":{"kept":true}}').current(),'ru');
assert.equal(language('{"uiLanguage":"mn","introSeen":false}').current(),'ru','A legacy automatic default before starting a shift migrates to Russian');
assert.equal(language('{"uiLanguage":"mn","uiLanguageChosen":true,"drafts":{"kept":true}}').current(),'mn','An explicit Mongolian choice survives before starting a shift');
assert.equal(language('{"uiLanguage":"mn","introSeen":true,"drafts":{"kept":true}}').current(),'mn','An existing played Mongolian profile survives');
assert.equal(language('{broken').current(),'ru','Corrupt storage does not break launch');
assert.equal(language('null').current(),'ru');
assert.equal(language(null,true).current(),'ru','Restricted iframe storage still has a Russian default');
const api=language(null);assert.equal(api.wasChosen(),false);api.set('mn');assert.equal(api.current(),'mn');assert.equal(api.wasChosen(),true);api.set('ru');assert.equal(api.current(),'ru');
console.log('PASS: Russian first visit, explicit language preservation, corrupt and restricted storage.');
