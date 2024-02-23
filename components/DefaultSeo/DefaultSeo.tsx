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
          { rel: 'shortcut icon', href: '/favicon.ico?v=1', type: 'image/x-icon' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
          { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
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
