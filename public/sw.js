if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[n]) return;
    let o = {};
    const r = (e) => c(e, n),
      t = { module: { uri: n }, exports: o, require: r };
    s[n] = Promise.all(a.map((e) => t[e] || r(e))).then((e) => (i(...e), o));
  };
}
define(['./workbox-946f13af'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/515-c0cfae9489835e17.js', revision: 'c0cfae9489835e17' },
        { url: '/_next/static/chunks/framework-114634acb84f8baa.js', revision: '114634acb84f8baa' },
        { url: '/_next/static/chunks/main-4acf623bb9e99974.js', revision: '4acf623bb9e99974' },
        { url: '/_next/static/chunks/pages/404-6a09a0c1725fff10.js', revision: '6a09a0c1725fff10' },
        { url: '/_next/static/chunks/pages/500-79662f7c61b269b7.js', revision: '79662f7c61b269b7' },
        { url: '/_next/static/chunks/pages/_app-58ab03a980d72e76.js', revision: '58ab03a980d72e76' },
        { url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
        { url: '/_next/static/chunks/pages/cookies-policy-54bbeb6400649126.js', revision: '54bbeb6400649126' },
        { url: '/_next/static/chunks/pages/index-4d2f8da85f89ae59.js', revision: '4d2f8da85f89ae59' },
        { url: '/_next/static/chunks/pages/privacy-policy-9bbafbab45e1d8f6.js', revision: '9bbafbab45e1d8f6' },
        { url: '/_next/static/chunks/pages/terms-of-use-016f72cbf0cb7c68.js', revision: '016f72cbf0cb7c68' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-ee7e63bc15b31913.js', revision: 'ee7e63bc15b31913' },
        { url: '/_next/static/css/28c18edc0795793c.css', revision: '28c18edc0795793c' },
        { url: '/_next/static/css/71d5a2a0795282c5.css', revision: '71d5a2a0795282c5' },
        { url: '/_next/static/css/8540afcf6f3ade61.css', revision: '8540afcf6f3ade61' },
        { url: '/_next/static/css/97ebe2bbcf151c42.css', revision: '97ebe2bbcf151c42' },
        { url: '/_next/static/css/b1b9983adb5857c9.css', revision: 'b1b9983adb5857c9' },
        { url: '/_next/static/css/e6d13c443362c877.css', revision: 'e6d13c443362c877' },
        { url: '/_next/static/css/fa3cfaebf5fe4215.css', revision: 'fa3cfaebf5fe4215' },
        { url: '/_next/static/zlFyvusI_bCx2DIdr6U3x/_buildManifest.js', revision: 'e15adea9a728c116e7301752a3a6d4ef' },
        { url: '/_next/static/zlFyvusI_bCx2DIdr6U3x/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/android-chrome-192x192.png', revision: '3d82f327d490f7494dcbc7df938d39bd' },
        { url: '/android-chrome-512x512.png', revision: '88290e67fe35d9420c7a49b4e85ec888' },
        { url: '/apple-touch-icon.png', revision: '98bf48a916b4bec89cd9484a0396cff5' },
        { url: '/favicon-16x16.png', revision: '295f3c6e10eee5206bf5cdccd0333214' },
        { url: '/favicon-32x32.png', revision: '2c66a4a4f21034b281de8a07018811a6' },
        { url: '/favicon.ico', revision: 'f1eb1dd7921779ee1ad2a3382c3b84de' },
        { url: '/icons/box.svg', revision: '0d8e6944df51a6e8344f1d2062d0696f' },
        { url: '/icons/burger.svg', revision: '730e60c6ec0b7f4c9abb558d626a149e' },
        { url: '/icons/chevron.svg', revision: '7a3af39d29044816bd2ace7e9af74132' },
        { url: '/icons/close-btn.svg', revision: 'ce59e1b205547b3fef90894a4bfb821f' },
        { url: '/icons/desktop.svg', revision: '250d6f705e46788826cfba7d88f83e22' },
        { url: '/icons/doc-check.svg', revision: '38c7ef250df5cc1c4c5520e408e8b6a4' },
        { url: '/icons/facebook.svg', revision: '6ee765d571607550084c13faa9e15f91' },
        { url: '/icons/grid.svg', revision: '087bb06deeedc646bce8b71a9b5ed8b7' },
        { url: '/icons/hashtag.svg', revision: 'b145a8e386e6423cb0da65e20ef24fea' },
        { url: '/icons/instagram.svg', revision: '6200db8ab6a332b76e68dbb850b62923' },
        { url: '/icons/link.svg', revision: 'a8c1297aca826e3bfd78a5c98392fc4b' },
        { url: '/icons/linkedin.svg', revision: 'd93c4ecc6dc0291ca8c4e958c7bd1c16' },
        { url: '/icons/pin.svg', revision: 'b0f701d8c52fefdc03bd129dc6df1600' },
        { url: '/icons/shield-check.svg', revision: '5854fe494f237de2cfbad0888b0dfe67' },
        { url: '/icons/telegram.svg', revision: 'c965d1604c46f98e9da3f4a0cdbf2271' },
        { url: '/icons/trash.svg', revision: '0911da3992f7f75cc045506dbd0afb43' },
        { url: '/images/hero-bg.jpg', revision: '317d2202df30058ef0b4292f7782d4e6' },
        { url: '/locales/en/common.json', revision: 'e96b408903c6771820d30c57f8b7cae4' },
        { url: '/locales/en/home.json', revision: 'ed8fc5e31c4845d118d0b80241fd3497' },
        { url: '/locales/en/languages.json', revision: 'f23b36af396f5282a5c1642aa9e5c50a' },
        { url: '/locales/en/navigation.json', revision: '14d77bd7546f5e60b71bc41f2bf29ea0' },
        { url: '/locales/en/titles.json', revision: '2f82efb522c400bcf37bb6c4b6489a2a' },
        { url: '/locales/uk/common.json', revision: '0104e386f0c7fb8106f2c69816c7f01d' },
        { url: '/locales/uk/home.json', revision: 'ed8fc5e31c4845d118d0b80241fd3497' },
        { url: '/locales/uk/languages.json', revision: '9fea0e07296f3151eac8dbce4d463aba' },
        { url: '/locales/uk/navigation.json', revision: 'bfff70829a1b825c7a8dc7d7420d4075' },
        { url: '/locales/uk/titles.json', revision: 'aba784f5cf695ecf77d7f5568fd1c4a1' },
        { url: '/robots.txt', revision: '8cbf6d52f7d509a45d2aed1ca0ae031e' },
        { url: '/site.webmanifest', revision: '28313da77f97935cc091368b92cdc244' },
        { url: '/sitemap-0.xml', revision: '73f9a10998990bba2b7fc7facf62966d' },
        { url: '/sitemap.xml', revision: '2866d224a483ba55e6185267c5d1fda6' },
        { url: '/technologies/adobe-illustrator.svg', revision: '789b180ec483eedaad7b1d77b3a8ee4f' },
        { url: '/technologies/angular.svg', revision: '4125ad79f929c7895eafc65f64ef2dd7' },
        { url: '/technologies/animation.png', revision: '6288d1db9a52463dccbfdb1ef440428e' },
        { url: '/technologies/cSharp.svg', revision: '57e96782184305ec146ddfab2fea016a' },
        { url: '/technologies/code.svg', revision: '6a29e8030113d1c4dc3c3055df3580fe' },
        { url: '/technologies/figma.svg', revision: '770a6e00189797bab648b2236ef9b4b1' },
        { url: '/technologies/html-5.svg', revision: 'a7c1a3afa1c802928c79b196fbaad510' },
        { url: '/technologies/java.svg', revision: 'd574f138bd74ca4146d6ff9e066aae66' },
        { url: '/technologies/js.svg', revision: 'd86e43008726f0b151f195fcce307fb2' },
        { url: '/technologies/notion.svg', revision: 'db59a4ea4b5606959aab353e533e213c' },
        { url: '/technologies/python.svg', revision: 'c32f6462899cf7d2da8cd26c3efa4685' },
        { url: '/technologies/redux.svg', revision: '7c2f34a88dc0c838a774f4ad8481254c' },
        { url: '/technologies/swift.svg', revision: '90f4a9d6f920b02836953b69c5f74938' },
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
            cacheWillUpdate: async ({ request: e, response: s, event: c, state: a }) =>
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
