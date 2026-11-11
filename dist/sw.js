/* Requested immutable previews survive repeat visits; no bulk precaching. */
const CACHE='mongol-huns-previews-v1',MAX_ENTRIES=540;
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin||!\/assets\/(?:fast|achievements)\/[^/]+\.[a-f0-9]{16}\.\d+\.webp$/.test(url.pathname))return;
  event.respondWith((async()=>{
    let cache;try{cache=await caches.open(CACHE);const hit=await cache.match(event.request);if(hit)return hit;}catch{}
    const response=await fetch(event.request);
    if(response.ok&&cache)try{await cache.put(event.request,response.clone());const keys=await cache.keys();for(const key of keys.slice(0,Math.max(0,keys.length-MAX_ENTRIES)))await cache.delete(key);}catch{}
    return response;
  })());
});
