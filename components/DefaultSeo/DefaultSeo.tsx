import {
  DefaultSeo as DefaultSeoComponent,
  DefaultSeoProps,
  OrganizationJsonLd,
  ImageJsonLd,
  BrandJsonLd,
  BreadcrumbJsonLd,
} from 'next-seo';

const baseUrl = 'https://zapal.tech';
const getAbsoluteUrl = (path?: string) => new URL(path || '/', baseUrl).href;

const breadcrumbs = [
  {
    position: 1,
    name: 'Home',
    item: getAbsoluteUrl(),
  },
  {
    position: 2,
    name: 'About Us',
    item: getAbsoluteUrl('/about'),
  },
  {
    position: 3,
    name: 'Services',
    item: getAbsoluteUrl('/about#services'),
  },
  {
    position: 4,
    name: 'Projects',
    item: getAbsoluteUrl('/Projects'),
  },
  {
    position: 5,
    name: 'Contacts',
    item: getAbsoluteUrl('/contacts'),
  },
];

export const DefaultSeo: React.FC<DefaultSeoProps> = () => (
  <>
    <DefaultSeoComponent
      defaultTitle="Zapal | Unlock Your Tech Future"
      titleTemplate="Zapal - %s | Unlock Your Tech Future"
      description="Unlock Your Tech Future with Zapal! Hire Zapal for top-notch web application development services."
      themeColor="#111"
      canonical={getAbsoluteUrl()}
      languageAlternates={[
        { hrefLang: 'en', href: getAbsoluteUrl() },
        { hrefLang: 'uk', href: getAbsoluteUrl('/uk') },
      ]}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: getAbsoluteUrl(),
        siteName: 'Zapal',
        images: [
          {
            url: getAbsoluteUrl('/images/og-image.webp'),
            width: 1200,
            height: 630,
            alt: 'Zapal',
          },
        ],
      }}
      twitter={{
        handle: '@ZapalTech',
        site: '@ZapalTech',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://cdn.statically.io' },
        // {
        //   rel: 'preload',
        //   href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-ExtraBold.woff',
        //   as: 'font',
        //   type: 'font/woff',
        //   crossOrigin: 'anonymous',
        // },
        // {
        //   rel: 'preload',
        //   href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-SemiBold.woff',
        //   as: 'font',
        //   type: 'font/woff',
        //   crossOrigin: 'anonymous',
        // },
        // {
        //   rel: 'preload',
        //   href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-Medium.woff',
        //   as: 'font',
        //   type: 'font/woff',
        //   crossOrigin: 'anonymous',
        // },
        // {
        //   rel: 'preload',
        //   href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-Regular.woff',
        //   as: 'font',
        //   type: 'font/woff',
        //   crossOrigin: 'anonymous',
        // },
      ]}
      additionalMetaTags={[
        {
          name: 'keywords',
          content:
            'Zapal,IT,dev,development,outsource,frontend,backend,web,react,js,typescript,javascript,QA,services,solutions,website,custom,software,full-stack,UI,UX,design',
        },
        { name: 'msapplication-TileColor', content: '#111' },
      ]}
    />

    <OrganizationJsonLd
      type="Organization"
      name="Zapal"
      legalName="Zapal"
      contactPoint={[
        {
          email: 'hello@zapal.tech',
          url: getAbsoluteUrl('/contacts'),
          contactType: 'customer support',
          availableLanguage: ['English', 'Ukrainian'],
        },
      ]}
      url={getAbsoluteUrl()}
      logo={getAbsoluteUrl('/logo.webp')}
      founders={[
        {
          name: 'Bohdan Kucheriavyi',
          url: 'https://linkedin.com/in/bohdan-kucheriavyi/',
        },
        {
          name: 'Ivan Salata',
          url: 'https://linkedin.com/in/ivan-salata737/',
        },
      ]}
      foundingLocation={{
        type: 'Place',
        address: {
          type: 'PostalAddress',
          addressLocality: 'Kyiv',
          addressRegion: 'UA',
          postalCode: '02000',
          addressCountry: 'Ukraine',
        },
      }}
      sameAs={[
        'https://github.com/zapal-tech',
        'https://linkedin.com/company/zapal',
        'https://twitter.com/ZapalTech',
        'https://instagram.com/zapal.tech',
        'https://facebook.com/zapal.tech',
      ]}
      address={{
        type: 'PostalAddress',
        streetAddress: 'Mechnykova St, 2, Parus Business Centre',
        addressLocality: 'Kyiv',
        addressRegion: 'UA',
        postalCode: '01601',
        addressCountry: 'Ukraine',
      }}
    />

    <BreadcrumbJsonLd itemListElements={breadcrumbs} />

    <BrandJsonLd
      id="zapal"
      slogan="Unlock Your Tech Future"
      name="Zapal"
      logo={getAbsoluteUrl('/logo.webp')}
      aggregateRating={{
        ratingValue: '4.9',
        ratingCount: '21',
        bestRating: '5',
      }}
      url={getAbsoluteUrl()}
    />

    <ImageJsonLd
      images={[
        { contentUrl: getAbsoluteUrl('/logo.svg') },
        { contentUrl: getAbsoluteUrl('/logo.webp') },
        { contentUrl: getAbsoluteUrl('/logo.png') },
      ]}
    />
  </>
);
