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
    loadPath: `${process.env.API_URL}/globals/{{ns}}?locale={{lng}}&depth=10`,
    crossDomain: true,
    customHeaders: { Authorization: process.env.API_KEY },
    parse: (data) => {
      const parsedData = JSON.parse(data);

      if (parsedData.globalType === 'general') {
        const general = { ...parsedData };

        delete general._status;
        delete general.globalType;
        delete general.id;
        delete general.createdAt;
        delete general.updatedAt;

        return general;
      }

      if (parsedData.translation) return parsedData.translation;

      for (const key in parsedData) {
        if (parsedData[key]?.translation) return parsedData[key].translation;
      }
    },
  },
  use: [I18NextHttpBackend],
};
