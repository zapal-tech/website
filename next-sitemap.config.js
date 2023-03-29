/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  exclude: ['*404', '*500'],
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/uk',
      hreflang: 'uk',
    },
  ],
};
