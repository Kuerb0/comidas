const C = 'comidas-v2';
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']))));
// red primero (así llegan las actualizaciones), caché si no hay conexión
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).then(r => { const k = r.clone(); caches.open(C).then(c => c.put(e.request, k)); return r; })
    .catch(() => caches.match(e.request))
));
