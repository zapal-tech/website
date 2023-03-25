import { useTranslation } from 'next-i18next';
import {
  DefaultSeo as DefaultSeoComponent,
  DefaultSeoProps,
  OrganizationJsonLd,
  ImageJsonLd,
  BrandJsonLd,
  BreadcrumbJsonLd,
} from 'next-seo';
import { ItemListElements } from 'next-seo/lib/types';

import { Namespace, defaultLanguage } from 'i18n';

export const DefaultSeo: React.FC<DefaultSeoProps> = () => {
  const { t, i18n } = useTranslation([Namespace.Titles, Namespace.Common]);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const langPath = i18n.language === defaultLanguage ? '' : `/${i18n.language}`;

  const getAbsoluteUrl = (path?: string, includeLangPath = true) =>
    new URL((includeLangPath ? langPath : '') + (path || '/'), baseUrl).href;

  const breadcrumbs: ItemListElements[] = [
    {
      position: 1,
      name: t('home'),
      item: getAbsoluteUrl(),
    },
    {
      position: 1,
      name: t('about'),
      item: getAbsoluteUrl('/about'),
    },
    {
      position: 2,
      name: t('services'),
      item: getAbsoluteUrl('/about#services'),
    },
    {
      position: 1,
      name: t('projects'),
      item: getAbsoluteUrl('/projects'),
    },
    {
      position: 1,
      name: t('contacts'),
      item: getAbsoluteUrl('/contacts'),
    },
  ];

  return (
    <>
      <DefaultSeoComponent
        defaultTitle="Zapal | Unlock Your Tech Future"
        titleTemplate="Zapal - %s | Unlock Your Tech Future"
        description={t('description', { ns: Namespace.Common })!}
        themeColor="#111"
        canonical={getAbsoluteUrl()}
        languageAlternates={[
          { hrefLang: 'en', href: getAbsoluteUrl(undefined, false) },
          { hrefLang: 'en', href: getAbsoluteUrl('/en', false) },
          { hrefLang: 'uk', href: getAbsoluteUrl('/uk', false) },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: getAbsoluteUrl(),
          siteName: 'Zapal',
          images: [
            {
              url: getAbsoluteUrl('/images/og-image.webp', false),
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
          { rel: 'manifest', href: '/manifest.json' },
        ]}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: t('keywords', { ns: Namespace.Common }),
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
        url={getAbsoluteUrl(undefined, false)}
        logo={getAbsoluteUrl('/logo.webp', false)}
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
        slogan={t('slogan', { ns: Namespace.Common })!}
        name="Zapal"
        logo={getAbsoluteUrl('/logo.webp', false)}
        aggregateRating={{
          ratingValue: '4.9',
          ratingCount: '21',
          bestRating: '5',
        }}
        url={getAbsoluteUrl(undefined, false)}
      />

      <ImageJsonLd
        images={[
          { contentUrl: getAbsoluteUrl('/logo.svg', false) },
          { contentUrl: getAbsoluteUrl('/logo.webp', false) },
          { contentUrl: getAbsoluteUrl('/logo.png', false) },
        ]}
      />
    </>
  );
};
