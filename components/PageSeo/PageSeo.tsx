import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { ItemListElements, MetaTag } from 'next-seo/lib/types';
import { useRouter } from 'next/router';

import { ApiMeta } from 'types/api';
import { Page } from 'types/page';

export type PageSeoProps = ApiMeta &
  Page<{
    generateTopLevelBreadcrumbs?: boolean;
    breadcrumbs?: ItemListElements[];
  }>;

export const PageSeo: React.FC<PageSeoProps> = ({
  locale,
  defaultLocale,
  title,
  description,
  photo,
  // robots,
  canonical,
  keywords,
  // structuredData,
  generateTopLevelBreadcrumbs = false,
  breadcrumbs,
}) => {
  const router = useRouter();

  const getAdditionalMetaTags = (): MetaTag[] | undefined => {
    const tags: MetaTag[] = [];

    if (keywords) tags.push({ name: 'keywords', content: keywords });
    tags.push({ name: 'robots', content: /* robots || */ 'index, follow' });

    tags.push(
      {
        name: 'og:title',
        content: title ? `Zapal - ${title} | Unlock Your Tech Future` : 'Zapal | Unlock Your Tech Future',
      },
      { name: 'og:description', content: description || '' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Zapal' },
      { name: 'og:locale', content: locale === 'uk' ? 'uk_UA' : 'en_US' },
    );

    if (canonical) tags.push({ name: 'og:url', content: canonical });

    tags.push(
      { name: 'twitter:card', content: photo?.url ? 'summary_large_image' : 'summary' },
      { name: 'twitter:site:id', content: '1607797381956771841' },
      { name: 'twitter:title', content: title || '' },
      { name: 'twitter:description', content: description || '' },
    );

    if (photo?.url) {
      tags.push(
        { name: 'og:image', content: photo.url },
        { name: 'og:image:width', content: `${photo.width}` },
        { name: 'og:image:height', content: `${photo.height}` },
        { name: 'og:image:type', content: photo.mimeType },
      );

      tags.push({ name: 'twitter:image', content: photo.url });

      if (photo?.alt) {
        tags.push({ name: 'og:image:alt', content: photo.alt });

        tags.push({ name: 'twitter:image:alt', content: photo.alt });
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
      name: title!,
      item: getURL(),
    },
  ];

  return (
    <>
      <NextSeo
        title={title}
        defaultTitle="Zapal | Unlock Your Tech Future"
        titleTemplate="Zapal - %s | Unlock Your Tech Future"
        description={description}
        canonical={canonical || undefined}
        additionalMetaTags={getAdditionalMetaTags()}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: new URL('/', process.env.NEXT_PUBLIC_SITE_URL).href,
          siteName: 'Zapal',
          images: photo?.url
            ? [
                {
                  url: photo.url,
                  width: photo.width,
                  height: photo.height,
                  alt: photo.alt || 'Zapal',
                },
              ]
            : undefined,
        }}
      />

      {generateTopLevelBreadcrumbs && !breadcrumbs?.length && (
        <BreadcrumbJsonLd itemListElements={topLevelBreadcrumbs} />
      )}

      {breadcrumbs?.length && <BreadcrumbJsonLd itemListElements={breadcrumbs} />}

      {/* {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }} 
          />
        </Head>
      )} */}
    </>
  );
};
