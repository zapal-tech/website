/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/en',
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/uk',
      hreflang: 'uk',
    },
  ],
};
