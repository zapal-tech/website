/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zapal.tech',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://zapal.tech/en',
      hreflang: 'en',
    },
    {
      href: 'https://zapal.tech/uk',
      hreflang: 'uk',
    },
  ],
};
