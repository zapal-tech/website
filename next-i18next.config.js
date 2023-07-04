/* eslint-disable @typescript-eslint/no-var-requires */
const I18NextHttpBackend = require('i18next-http-backend/cjs');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  /** @type {import('i18next-http-backend').HttpBackendOptions} **/
  backend: {
    // load: 'languageOnly',
    loadPath: `${process.env.API_URL}/{{ns}}?locale={{lng}}&populate=deep`,
    crossDomain: true,
    customHeaders: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    parse: (data) => JSON.parse(data).data.attributes.translation,
  },
  use: [I18NextHttpBackend],
};
