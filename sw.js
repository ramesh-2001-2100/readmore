self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method==='POST')event.respondWith((async()=>{const form=await event.request.formData();const file=form.get('epub');if(file instanceof File){const cache=await caches.open('shared-epubs');await cache.put('./shared-book.epub',new Response(file,{headers:{'content-type':'application/epub+zip'}}))}return Response.redirect('./?shared=1',303)})())});
