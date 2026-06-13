// Minimal service worker — required by Android Chrome for PWA installability.
// This app doesn't need offline caching, so this file intentionally does nothing.
self.addEventListener('fetch', function(event) {});
