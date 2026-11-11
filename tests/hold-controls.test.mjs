import assert from 'node:assert/strict';
import {bindHoldControls} from '../src/hold-controls.js';
class Target extends EventTarget{
  constructor(code){super();this.dataset={walk:code};this.captured=new Set();}
  getBoundingClientRect(){return {left:0,right:50,top:0,bottom:50};}
  setPointerCapture(id){if(this.failCapture)throw Error('Capture unavailable');this.captured.add(id);}
  hasPointerCapture(id){return this.captured.has(id);}
  releasePointerCapture(id){this.captured.delete(id);}
}
const fire=(target,type,data={})=>{const event=new Event(type,{cancelable:true});Object.assign(event,{pointerId:1,pointerType:'touch',button:0,buttons:1,clientX:25,clientY:25,...data});target.dispatchEvent(event);};
let checks=0;
for(const code of ['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight']){
  const button=new Target(code),win=new Target(),doc=new Target(),held=new Set(),taps=[];let time=0;
  const controls=bindHoldControls({buttons:[button],held,onTap:c=>taps.push(c),windowTarget:win,documentTarget:doc,now:()=>time});
  const press=()=>{fire(button,'pointerdown');assert.ok(held.has(code));checks++;};
  const stopped=()=>{assert.equal(held.size,0,code+' must stop');checks++;};
  press();time+=40;fire(win,'pointerup');stopped();assert.deepEqual(taps,[code]);checks++;
  press();time+=400;fire(win,'pointerup');stopped();assert.equal(taps.length,1,'A hold does not add a second tap step');checks++;
  for(const event of ['pointercancel','lostpointercapture','pointerleave']){press();fire(event==='pointercancel'?win:button,event);stopped();}
  press();fire(win,'pointermove',{clientX:80});stopped();
  press();fire(win,'touchend',{touches:[]});stopped();
  press();fire(win,'touchcancel');stopped();
  press();fire(win,'contextmenu');stopped();
  press();fire(win,'blur');stopped();
  press();doc.hidden=true;fire(doc,'visibilitychange');stopped();doc.hidden=false;
  press();controls.release();stopped();
  button.failCapture=true;press();fire(win,'pointerup');stopped();
  fire(button,'keydown',{code:'Space'});assert.ok(held.has(code));fire(win,'keyup',{code:'Space'});stopped();
  fire(button,'keydown',{code:'Enter'});fire(button,'blur');stopped();
  controls.destroy();fire(button,'pointerdown');stopped();
}
const win=new Target(),doc=new Target(),left=new Target('ArrowLeft'),forward=new Target('KeyW'),held=new Set();
const controls=bindHoldControls({buttons:[left,forward],held,windowTarget:win,documentTarget:doc});
fire(left,'pointerdown',{pointerId:1});fire(forward,'pointerdown',{pointerId:2,isPrimary:false});
assert.equal(held.size,2);fire(win,'pointerup',{pointerId:1});assert.deepEqual([...held],['KeyW']);fire(win,'pointerup',{pointerId:2});assert.equal(held.size,0);checks+=3;
controls.destroy();
console.log(`PASS: ${checks} all-direction release, missed capture, outside release, cancellation, keyboard and multitouch checks.`);
