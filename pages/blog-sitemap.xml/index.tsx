import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';
import { join } from 'path';

import { Routes } from 'types/routes';

import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';

import { getAllArticles } from 'services/api';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const paths = await getLocalizedSlugPaths(getAllArticles, ctx.locales!, ctx.defaultLocale);

  const slugAvailableLocales = paths.reduce<Record<string, Array<string | undefined>>>((acc, { params, locale }) => {
    if (!acc[params.slug] || !acc[params.slug].includes(locale)) {
      acc[params.slug] = [...(acc[params.slug] || []), locale];
    }

    return acc;
  }, {});

  const { data: entities } = await getAllArticles(ctx.locale);

  const fields: ISitemapField[] = Object.entries(slugAvailableLocales).map(([slug, locales]) => {
    const entity = entities.find((entity) => entity.attributes.slug === slug);

    const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL + join('/', Routes.Blog, slug);

    return {
      loc: defaultUrl,
      lastmod: entity?.attributes.updatedAt
        ? new Date(entity.attributes.updatedAt).toISOString()
        : new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
      alternateRefs: locales.map((locale) => {
        const href = locale ? process.env.NEXT_PUBLIC_SITE_URL + join('/', locale, Routes.Blog, slug) : defaultUrl;

        return { href, hreflang: locale || ctx.defaultLocale! };
      }),
      news: entity
        ? {
            publicationName: 'Zapal',
            publicationLanguage: entity?.attributes.locale,
            date: entity.attributes.createdAt
              ? new Date(entity.attributes.createdAt).toISOString()
              : new Date().toISOString(),
            title: entity.attributes.title!,
          }
        : undefined,
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
