if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[i]) return;
    let t = {};
    const o = (e) => a(e, i),
      r = { module: { uri: i }, exports: t, require: o };
    s[i] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (c(...e), t));
  };
}
define(['./workbox-946f13af'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/6ZjwXim-uHTCjZ5Qi5QXm/_buildManifest.js', revision: '2a31881239464dd021401f2fc6003743' },
        { url: '/_next/static/6ZjwXim-uHTCjZ5Qi5QXm/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/framework-114634acb84f8baa.js', revision: '114634acb84f8baa' },
        { url: '/_next/static/chunks/main-4acf623bb9e99974.js', revision: '4acf623bb9e99974' },
        { url: '/_next/static/chunks/pages/_app-f63f1251e1c45aa8.js', revision: 'f63f1251e1c45aa8' },
        { url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
        { url: '/_next/static/chunks/pages/index-e8a7904932536794.js', revision: 'e8a7904932536794' },
        { url: '/_next/static/chunks/pages/privacy-policy-55f0b9499192c750.js', revision: '55f0b9499192c750' },
        { url: '/_next/static/chunks/pages/terms-of-use-b42be7dcb7e01da4.js', revision: 'b42be7dcb7e01da4' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-ee7e63bc15b31913.js', revision: 'ee7e63bc15b31913' },
        { url: '/_next/static/css/47d49dbb2c36906d.css', revision: '47d49dbb2c36906d' },
        { url: '/_next/static/css/5b84c59e99275ea6.css', revision: '5b84c59e99275ea6' },
        { url: '/_next/static/css/fae711a782516a86.css', revision: 'fae711a782516a86' },
        { url: '/_next/static/css/fd341028b14f614c.css', revision: 'fd341028b14f614c' },
        { url: '/android-chrome-192x192.png', revision: '3d82f327d490f7494dcbc7df938d39bd' },
        { url: '/android-chrome-512x512.png', revision: '88290e67fe35d9420c7a49b4e85ec888' },
        { url: '/apple-touch-icon.png', revision: '98bf48a916b4bec89cd9484a0396cff5' },
        { url: '/favicon-16x16.png', revision: '295f3c6e10eee5206bf5cdccd0333214' },
        { url: '/favicon-32x32.png', revision: '2c66a4a4f21034b281de8a07018811a6' },
        { url: '/favicon.ico', revision: 'f1eb1dd7921779ee1ad2a3382c3b84de' },
        { url: '/locales/en/common.json', revision: 'e96b408903c6771820d30c57f8b7cae4' },
        { url: '/locales/en/languages.json', revision: 'f23b36af396f5282a5c1642aa9e5c50a' },
        { url: '/locales/en/navigation.json', revision: '52b9b401770b962dc59d5fa5c63acf4f' },
        { url: '/locales/uk/common.json', revision: '0104e386f0c7fb8106f2c69816c7f01d' },
        { url: '/locales/uk/languages.json', revision: '9fea0e07296f3151eac8dbce4d463aba' },
        { url: '/locales/uk/navigation.json', revision: '95a8c6ca57a7d54bf75b5304e776a142' },
        { url: '/robots.txt', revision: '8cbf6d52f7d509a45d2aed1ca0ae031e' },
        { url: '/site.webmanifest', revision: '28313da77f97935cc091368b92cdc244' },
        { url: '/sitemap-0.xml', revision: '66899f8a3ddcca79f3e62e959f55ecfb' },
        { url: '/sitemap.xml', revision: '2866d224a483ba55e6185267c5d1fda6' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
