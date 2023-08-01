import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { ItemListElements, MetaTag } from 'next-seo/lib/types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ApiSeo } from 'types/api';
import { Page } from 'types/page';

export type PageSeoProps = ApiSeo &
  Page<{
    generateTopLevelBreadcrumbs?: boolean;
    breadcrumbs?: ItemListElements[];
  }>;

export const PageSeo: React.FC<PageSeoProps> = ({
  locale,
  defaultLocale,
  metaTitle,
  metaDescription,
  metaImage,
  metaRobots,
  metaViewport,
  canonicalURL,
  keywords,
  metaSocial,
  structuredData,
  generateTopLevelBreadcrumbs = false,
  breadcrumbs,
}) => {
  const router = useRouter();

  const getAdditionalMetaTags = (): MetaTag[] | undefined => {
    const tags: MetaTag[] = [];

    if (keywords) tags.push({ name: 'keywords', content: keywords });
    if (metaRobots) tags.push({ name: 'robots', content: metaRobots });
    if (metaViewport) tags.push({ name: 'viewport', content: metaViewport });

    tags.push(
      {
        name: 'og:title',
        content: metaTitle ? `Zapal - ${metaTitle} | Unlock Your Tech Future` : 'Zapal | Unlock Your Tech Future',
      },
      { name: 'og:description', content: metaDescription },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Zapal' },
      { name: 'og:locale', content: locale === 'uk' ? 'uk_UA' : 'en_US' },
    );

    if (canonicalURL) tags.push({ name: 'og:url', content: canonicalURL });

    if (metaImage?.data.attributes)
      tags.push(
        { name: 'og:image', content: metaImage.data.attributes.url },
        { name: 'og:image:width', content: `${metaImage.data.attributes.width}` },
        { name: 'og:image:height', content: `${metaImage.data.attributes.height}` },
        { name: 'og:image:type', content: metaImage.data.attributes.mime },
      );

    if (metaImage?.data.attributes.alternativeText)
      tags.push({ name: 'og:image:alt', content: metaImage.data.attributes.alternativeText });

    // TODO: Implement same flow for Facebook
    const twitter = metaSocial?.find(({ socialNetwork }) => socialNetwork === 'Twitter');

    if (twitter) {
      tags.push(
        { name: 'twitter:card', content: twitter.image?.data ? 'summary_large_image' : 'summary' },
        { name: 'twitter:site:id', content: '1607797381956771841' },
        { name: 'twitter:description', content: twitter.description },
        { name: 'twitter:title', content: twitter.title },
      );

      if (twitter.image?.data) {
        tags.push({ name: 'twitter:image', content: twitter.image.data.attributes.url });

        if (twitter.image?.data.attributes.alternativeText)
          tags.push({ name: 'twitter:image:alt', content: twitter.image.data.attributes.alternativeText });
      }
    }

    return tags.length ? tags : undefined;
  };

  const getURL = (): string => {
    const prefix = locale === defaultLocale ? '' : `/${locale}`;

    return new URL(prefix + router.pathname, process.env.NEXT_PUBLIC_SITE_URL).href;
  };

  const topLevelBreadcrumbs: ItemListElements[] = [
    {
      position: 1,
      name: metaTitle,
      item: getURL(),
    },
  ];

  return (
    <>
      <NextSeo
        title={metaTitle}
        defaultTitle="Zapal | Unlock Your Tech Future"
        titleTemplate="Zapal - %s | Unlock Your Tech Future"
        description={metaDescription}
        canonical={canonicalURL || undefined}
        additionalMetaTags={getAdditionalMetaTags()}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: new URL('/', process.env.NEXT_PUBLIC_SITE_URL).href,
          siteName: 'Zapal',
          images: metaImage?.data?.attributes
            ? [
                {
                  url: metaImage.data.attributes.url,
                  width: metaImage.data.attributes.width,
                  height: metaImage.data.attributes.height,
                  alt: metaImage.data.attributes.alternativeText || 'Zapal',
                },
              ]
            : undefined,
        }}
      />

      {generateTopLevelBreadcrumbs && !breadcrumbs?.length && (
        <BreadcrumbJsonLd itemListElements={topLevelBreadcrumbs} />
      )}

      {breadcrumbs?.length && <BreadcrumbJsonLd itemListElements={breadcrumbs} />}

      {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>
      )}
    </>
  );
};
