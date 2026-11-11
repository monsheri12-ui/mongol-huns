/* Fixed, game-assigned order limits. No editable duration is persisted. */
(function(root,factory){const G=typeof module==='object'&&module.exports?require('./game-core.js'):root.GroceryGame;const api=factory(G);if(typeof module==='object'&&module.exports)module.exports=api;else root.GroceryTimer=api;})(typeof globalThis!=='undefined'?globalThis:this,function(G){
  'use strict';
  const MODES=['off','timer','challenge'];
  const SECONDS=Object.freeze({timer:Object.freeze([360,480,600,720]),challenge:Object.freeze([150,210,270,330])});
  const mode=value=>MODES.includes(value)?value:'off';
  const validTime=n=>Number.isFinite(n)&&n>=0?Math.min(86400000,n):0;
  function limit(order,value='timer'){
    const selected=mode(value);if(selected==='off')return 0;
    const level=Math.max(0,Math.min(3,Number(order?.levelIndex)||0)),lines=Array.isArray(order?.lines)?order.lines:[];
    const weighed=lines.filter(l=>{const p=G.BY_ID[l.productId];return p?.measure==='weight'&&(p.category==='produce'&&p.shelfKind!=='punnet'||p.soldByWeight===true);}).length;
    const extraPacks=lines.reduce((n,l)=>{const p=G.BY_ID[l.productId];return n+(p?.pack>0?Math.max(0,Math.ceil(l.amount/p.pack)-1):0);},0);
    return 1000*(SECONDS[selected][level]+Math.max(0,lines.length-3)*(selected==='challenge'?15:30)+weighed*(selected==='challenge'?30:45)+Math.min(12,extraPacks)*(selected==='challenge'?10:20));
  }
  function create(order,selected='off',runId=''){
    return {version:1,mode:mode(selected),runId:/^[a-z0-9-]{1,32}$/.test(runId)?runId:'run',limitMs:limit(order,selected),elapsedMs:0,started:false,finished:false,warned:false};
  }
  function normalize(input,order,selected='off',runId=''){
    const base=create(order,selected,runId);if(!input||input.version!==1||input.mode!==base.mode)return base;
    return {...base,runId:/^[a-z0-9-]{1,32}$/.test(input.runId)?input.runId:base.runId,elapsedMs:base.mode==='off'?0:validTime(input.elapsedMs),started:base.mode!=='off'&&input.started===true,finished:base.mode!=='off'&&input.finished===true,warned:input.warned===true};
  }
  const start=run=>run.mode==='off'||run.started||run.finished?run:{...run,started:true};
  const advance=(run,delta)=>!run.started||run.finished||run.mode==='off'||!Number.isFinite(delta)||delta<=0?run:{...run,elapsedMs:validTime(run.elapsedMs+delta)};
  const finish=run=>run.mode==='off'||!run.started?run:{...run,finished:true};
  const remaining=run=>Math.max(0,run.limitMs-run.elapsedMs);
  const format=ms=>{const n=Math.ceil(Math.max(0,ms)/1000);return Math.floor(n/60)+':'+String(n%60).padStart(2,'0');};
  function outcome(run){return {timingMode:run.mode,timed:run.mode!=='off'&&run.started&&run.finished,elapsedMs:run.elapsedMs,limitMs:run.limitMs,onTime:run.mode!=='off'&&run.started&&run.finished&&run.elapsedMs<run.limitMs};}
  return {MODES,SECONDS,mode,limit,create,normalize,start,advance,finish,remaining,format,outcome};
});
