/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [process.env.NEXT_PUBLIC_SITE_URL + '/server-sitemap-index.xml'],
  },
  exclude: ['/uk*', '/blog/*', '/projects/*', '*404', '*500', '*_offline', '/server-sitemap.xml'],
  changefreq: 'weekly',
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_SITE_URL,
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/en',
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/uk',
      hreflang: 'uk',
    },
    {
      href: process.env.NEXT_PUBLIC_SITE_URL + '/fr',
      hreflang: 'fr',
    },
  ],
};
