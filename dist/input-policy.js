(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryInput=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const nativeShortcut=e=>!!(e.ctrlKey||e.metaKey||e.altKey);
  const editing=target=>!!target?.closest?.('input,textarea,select,[contenteditable="true"],[contenteditable=""]');
  const gameKey=e=>!nativeShortcut(e)&&!editing(e.target)&&!e.isComposing;
  const menuClick=e=>!nativeShortcut(e)&&(e.button===undefined||e.button===0);
  return {nativeShortcut,editing,gameKey,menuClick};
});
