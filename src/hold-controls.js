// Pointer capture is an optimization; releasing a control must not depend on it.
export function bindHoldControls({buttons,held,onPress=()=>{},onTap=()=>{},windowTarget=window,documentTarget=document,now=()=>performance.now()}){
  const active=new Map(),keyboard=new Set(),listeners=[];
  const listen=(target,type,handler,options)=>{target.addEventListener(type,handler,options);listeners.push(()=>target.removeEventListener(type,handler,options));};
  const inside=(button,event)=>{const r=button.getBoundingClientRect();return Number.isFinite(event.clientX)&&Number.isFinite(event.clientY)&&event.clientX>=r.left&&event.clientX<=r.right&&event.clientY>=r.top&&event.clientY<=r.bottom;};
  function releaseCode(code,tap=false){const press=active.get(code);if(!press)return;active.delete(code);if(!keyboard.has(code))held.delete(code);try{if(press.button.hasPointerCapture?.(press.id))press.button.releasePointerCapture(press.id);}catch{}if(tap&&now()-press.at<130)onTap(code);}
  function release(){for(const code of [...active.keys()])releaseCode(code);for(const code of keyboard)held.delete(code);keyboard.clear();}
  function end(event,tap){for(const [code,press] of [...active])if(press.id===event.pointerId)releaseCode(code,tap&&inside(press.button,event));}
  // Capture phase also receives a release outside the original button.
  listen(windowTarget,'pointerup',event=>end(event,true),true);
  listen(windowTarget,'pointercancel',event=>end(event,false),true);
  listen(windowTarget,'pointermove',event=>{
    for(const [code,press] of [...active])if(press.id===event.pointerId&&(!inside(press.button,event)||event.pointerType!=='touch'&&event.buttons===0))releaseCode(code);
  },true);
  listen(windowTarget,'pointerdown',event=>{if(event.isPrimary!==false)for(const [code,press] of [...active])if(press.id!==event.pointerId)releaseCode(code);},true);
  listen(windowTarget,'touchend',event=>{if(!event.touches?.length)for(const [code,press] of [...active])if(press.type==='touch')releaseCode(code);},true);
  listen(windowTarget,'touchcancel',release,true);
  listen(windowTarget,'blur',release);
  listen(windowTarget,'contextmenu',release,true);
  listen(documentTarget,'visibilitychange',()=>{if(documentTarget.hidden)release();});
  listen(windowTarget,'keyup',event=>{if(['Space','Enter'].includes(event.code)){for(const code of keyboard)if(!active.has(code))held.delete(code);keyboard.clear();}},true);
  for(const button of buttons){
    const code=button.dataset.walk;
    listen(button,'pointerdown',event=>{
      if(event.button!==undefined&&event.button!==0)return;
      event.preventDefault();releaseCode(code);
      active.set(code,{id:event.pointerId,type:event.pointerType,at:now(),button});held.add(code);onPress(code);
      try{button.setPointerCapture(event.pointerId);}catch{}
    });
    listen(button,'pointerup',event=>end(event,true));
    listen(button,'pointercancel',event=>end(event,false));
    listen(button,'lostpointercapture',event=>end(event,false));
    listen(button,'pointerleave',event=>end(event,false));
    listen(button,'keydown',event=>{if(!event.ctrlKey&&!event.metaKey&&!event.altKey&&['Space','Enter'].includes(event.code)){event.preventDefault();keyboard.add(code);held.add(code);onPress(code);}});
    listen(button,'keyup',event=>{if(['Space','Enter'].includes(event.code)){keyboard.delete(code);if(!active.has(code))held.delete(code);}});
    listen(button,'blur',()=>{keyboard.delete(code);if(!active.has(code))held.delete(code);});
  }
  return {release,destroy(){release();listeners.forEach(dispose=>dispose());}};
}
