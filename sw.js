
const CACHE_NAME = 'bycom-cache-v2';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // CRITICAL: Bypass the service worker for the CMS and media uploads
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/images/uploads')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
