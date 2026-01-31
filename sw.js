self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('valentine-v1').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'style.css',
        'script.js',
        'myLove.mp4',
        'pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',
        'pic6.jpg','pic7.jpg','pic8.jpg','pic9.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});