// Shared by product, pouch and panorama textures. Walking toward a shelf can
// promote its pending work without launching hundreds of network requests.
export function createAssetQueue(limit=4){
  const entries=new Map();let running=0,sequence=0,scheduled=false;
  function pump(){
    scheduled=false;
    while(running<limit){
      const next=[...entries.values()].filter(e=>e.state==='pending').sort((a,b)=>b.priority-a.priority||a.sequence-b.sequence)[0];
      if(!next)break;next.state='running';running++;
      Promise.resolve().then(next.run).then(value=>{next.state='done';next.resolve(value);},error=>{next.state='failed';next.reject(error);}).finally(()=>{running--;schedule();});
    }
  }
  function schedule(){if(!scheduled){scheduled=true;queueMicrotask(pump);}}
  return {
    enqueue(key,run,priority=0){
      const prior=entries.get(key);if(prior&&prior.state!=='failed'){prior.priority=Math.max(prior.priority,priority);return prior.promise;}
      const entry={key,run,priority,sequence:sequence++,state:'pending'};
      entry.promise=new Promise((resolve,reject)=>{entry.resolve=resolve;entry.reject=reject;});entries.set(key,entry);schedule();return entry.promise;
    },
    promote(key,priority=10){const entry=entries.get(key);if(entry&&entry.state==='pending'){entry.priority=Math.max(entry.priority,priority);schedule();}},
    forget(key){const entry=entries.get(key);if(entry&&entry.state!=='running'&&entry.state!=='pending')return entries.delete(key);return false;},
    stats(){const list=[...entries.values()];return {running,pending:list.filter(e=>e.state==='pending').length,done:list.filter(e=>e.state==='done').length,failed:list.filter(e=>e.state==='failed').length};}
  };
}
export const assetQueue=createAssetQueue(4);
export function queuedImage(key,path,priority=0,timeout=12000){
  return assetQueue.enqueue(key,()=>new Promise((resolve,reject)=>{
    const image=new Image();let timer;
    const finish=(ok)=>{clearTimeout(timer);image.onload=image.onerror=null;if(ok)resolve(image);else{image.src='';reject(new Error('Image unavailable: '+key));}};
    image.onload=()=>finish(true);image.onerror=()=>finish(false);image.decoding='async';
    timer=setTimeout(()=>finish(false),timeout);image.src=path;
  }),priority);
}
