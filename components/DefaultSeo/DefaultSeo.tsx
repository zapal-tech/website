import { useTranslation } from 'next-i18next';
import {
  DefaultSeo as DefaultSeoComponent,
  DefaultSeoProps,
  ImageJsonLd,
  LocalBusinessJsonLd,
  OrganizationJsonLd,
} from 'next-seo';

import { Namespace, defaultLanguage } from 'configs/i18n';

import { Routes } from 'types/routes';

import colors from 'styles/colors.module.scss';

export const DefaultSeo: React.FC<DefaultSeoProps> = (props) => {
  const { t, i18n } = useTranslation([Namespace.Common, Namespace.General]);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const langPath = i18n.language === defaultLanguage ? '' : `/${i18n.language}`;

  const getAbsoluteUrl = (path?: string, includeLangPath = true) =>
    new URL((includeLangPath ? langPath : '') + (path || '/'), baseUrl).href;

  return (
    <>
      <DefaultSeoComponent
        // defaultTitle="Zapal | Unlock Your Tech Future"
        titleTemplate="Zapal - %s | Unlock Your Tech Future"
        description={t('description')!}
        themeColor={colors.defaultBackgroundColor}
        languageAlternates={[{ hrefLang: 'uk', href: getAbsoluteUrl('/uk', false) }]}
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
        additionalLinkTags={[
          { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'manifest', href: '/manifest.json' },
        ]}
        additionalMetaTags={[{ name: 'msapplication-TileColor', content: colors.defaultBackgroundColor }]}
        {...props}
      />

      <ImageJsonLd
        images={[
          { contentUrl: getAbsoluteUrl('/logo.svg', false) },
          { contentUrl: getAbsoluteUrl('/logo.webp', false) },
          { contentUrl: getAbsoluteUrl('/logo.png', false) },
        ]}
      />

      <OrganizationJsonLd
        type="Organization"
        name="Zapal"
        legalName="Zapal"
        slogan={t('slogan')}
        email={t('email', { ns: Namespace.General })}
        telephone={t('phone', { ns: Namespace.General })}
        contactPoint={[
          {
            email: t('email', { ns: Namespace.General }),
            url: getAbsoluteUrl(Routes.Contacts),
            contactType: 'customer support',
            availableLanguage: ['English', 'Ukrainian'],
            telephone: t('phone', { ns: Namespace.General }),
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
        hasMap={
          'https://www.google.com/maps/place/Zapal/@50.4486861,30.4807515,14z/data=!4m6!3m5!1s0x40d4cf1e30b79a8f:0xded51b7b7e3e05a2!8m2!3d50.4376149!4d30.5273295!16s%2Fg%2F11vb6h63yb'
        }
        latitude={50.43761674349085}
        longitude={30.527328695563476}
        sameAs={[
          'https://github.com/zapal-tech',
          'https://linkedin.com/company/zapal',
          'https://twitter.com/ZapalTech',
          'https://instagram.com/zapal.tech',
          'https://facebook.com/zapal.tech',
        ]}
        address={{
          type: 'PostalAddress',
          streetAddress: 'Mechnykova St, 2, Kyiv',
          addressLocality: 'Kyiv',
          addressRegion: 'UA',
          postalCode: '01601',
          addressCountry: 'Ukraine',
        }}
      />
    </>
  );
};
