self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(e) {
  // カレンダーは常にオンラインで最新情報を取るため、スルーして通信させる
  e.respondWith(fetch(e.request));
});
