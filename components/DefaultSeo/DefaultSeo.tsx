import {
  DefaultSeo as DefaultSeoComponent,
  DefaultSeoProps,
  OrganizationJsonLd,
  ImageJsonLd,
  LocalBusinessJsonLd,
} from 'next-seo';

const baseUrl = 'https://zapal.tech';
const getAbsoluteUrl = (path?: string) => new URL(path || '/', baseUrl).href;

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
      hasOfferCatalog={{
        type: 'OfferCatalog',
        url: getAbsoluteUrl('/services'),
        name: 'Zapal Services',
      }}
      slogan="Unlock Your Tech Future"
      url={getAbsoluteUrl()}
      logo={getAbsoluteUrl('/logo.webp')}
      logoWidth={156}
      logoHeight={145}
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
        streetAddress: 'Parus Business Centre, build. 2, Mechnykova St',
        addressLocality: 'Kyiv',
        addressRegion: 'UA',
        postalCode: '01001',
        addressCountry: 'Ukraine',
      }}
    />
    <LocalBusinessJsonLd
      type="IT"
      id={getAbsoluteUrl()}
      name="Zapal"
      description="Unlock Your Tech Future"
      url={getAbsoluteUrl()}
      geo={{
        latitude: 50.4376,
        longitude: 30.52733,
      }}
      address={{
        type: 'PostalAddress',
        streetAddress: 'Parus Business Centre, build. 2, Mechnykova St',
        addressLocality: 'Kyiv',
        addressRegion: 'UA',
        postalCode: '01001',
        addressCountry: 'Ukraine',
      }}
      openingHours={[
        {
          opens: '10:00',
          closes: '18:00',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          validFrom: '2023-01-01',
        },
      ]}
      rating={{
        ratingValue: 4.8,
        ratingCount: 3,
        bestRating: 5,
        worstRating: 1,
      }}
      review={[
        {
          author: {
            type: 'Person',
            name: 'Oliver Brooks',
          },
          itemReviewed: {
            type: 'Product',
            name: 'UI/UX Design Services',
            offers: {
              type: 'Offer',
              price: '5000',
              priceCurrency: 'USD',
            },
          },
          reviewRating: {
            type: 'Rating',
            ratingValue: 4,
          },
          datePublished: '2023-02-05',
          description:
            'Zapal provided great UI/UX design services for my web application. The team was very creative and produced a beautiful design that exceeded my expectations. The only downside was that the project took longer than expected to complete.',
        },
        {
          author: {
            type: 'Person',
            name: 'Emily Davis',
          },
          datePublished: '2022-12-08',
          name: 'Quality-first approach',
          reviewBody:
            'I had a great experience working with Zapal. They provided top-notch IT outsourcing services and were very responsive to my needs. Highly recommended!',
          reviewRating: {
            type: 'Rating',
            ratingValue: 5,
          },
        },
        {
          author: {
            type: 'Person',
            name: 'Jane Prudeus',
          },
          itemReviewed: {
            type: 'SoftwareApplication',
            name: 'Mobile App Development',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'iOS, Android',
            offers: {
              type: 'Offer',
              price: '8000',
              priceCurrency: 'USD',
            },
          },
          datePublished: '2022-11-02',
          name: 'Great mobile app development services',
          reviewBody:
            'Zapal provided excellent mobile app development services. The team was very professional and delivered high-quality work on time and within budget.',
          reviewRating: {
            type: 'Rating',
            ratingValue: 5,
          },
        },
      ]}
      makesOffer={[
        {
          name: 'Web apps development',
          description:
            'We provide web app development services to create powerful, custom web applications that meet your business needs.',
          url: getAbsoluteUrl('/about#web-apps-development'),
        },
        {
          name: 'Mobile apps development',
          description:
            'We develop mobile applications for iOS and Android platforms to help your business reach new heights.',
          url: getAbsoluteUrl('/about#mobile-apps-development'),
        },
        {
          name: 'Technical audit',
          description:
            'We perform a technical audit of your website or application to identify any issues and provide recommendations for improvement.',
          url: getAbsoluteUrl('/about#technical-audit'),
        },
        {
          name: 'DevOps services',
          description:
            'We provide DevOps services to automate your software delivery process, increase efficiency, and reduce time-to-market.',
          url: getAbsoluteUrl('/about#devops-services'),
        },
        {
          name: 'UI/UX Design',
          description:
            'We design beautiful and intuitive user interfaces for web and mobile applications to enhance user experience and satisfaction.',
          url: getAbsoluteUrl('/about#ui-ux-design'),
        },
        {
          name: 'Quality Assurance services',
          description:
            'We provide quality assurance services to ensure that your web or mobile application meets the highest quality standards.',
          url: getAbsoluteUrl('/about#quality-assurance-services'),
        },
        {
          name: 'IT Consulting',
          description:
            'We provide IT consulting services to help businesses optimize their IT infrastructure and processes for maximum efficiency and performance.',
          url: getAbsoluteUrl('/about#it-consulting'),
        },
      ]}
    />
    <ImageJsonLd
      images={[
        {
          contentUrl: getAbsoluteUrl('/logo.svg'),
        },
        {
          contentUrl: getAbsoluteUrl('/logo.webp'),
        },
        {
          contentUrl: getAbsoluteUrl('/logo.png'),
        },
      ]}
    />
  </>
);
