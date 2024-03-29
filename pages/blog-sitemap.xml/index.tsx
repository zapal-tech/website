import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';
import { join } from 'path';

import { Routes } from 'types/routes';

import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';

import { getAllBlogPosts } from 'services/api';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const paths = await getLocalizedSlugPaths(getAllBlogPosts, ctx.locales!, ctx.defaultLocale);

  const slugAvailableLocales = paths.reduce<Record<string, Array<string | undefined>>>((acc, { params, locale }) => {
    if (!acc[params.slug] || !acc[params.slug].includes(locale)) {
      acc[params.slug] = [...(acc[params.slug] || []), locale];
    }

    return acc;
  }, {});

  const entities = await getAllBlogPosts(ctx.locale);

  const fields: ISitemapField[] = Object.entries(slugAvailableLocales).map(([slug, locales]) => {
    const entity = entities.docs.find((entity) => entity.slug === slug);

    const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL + join('/', Routes.Blog, slug);

    return {
      loc: defaultUrl,
      lastmod: entity?.updatedAt ? new Date(entity.updatedAt).toISOString() : new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.8,
      alternateRefs: locales.map((locale) => {
        const href = locale ? process.env.NEXT_PUBLIC_SITE_URL + join('/', locale, Routes.Blog, slug) : defaultUrl;

        return { href, hreflang: locale || ctx.defaultLocale! };
      }),
      news: entity
        ? {
            publicationName: 'Zapal',
            publicationLanguage: ctx.locale!,
            date: entity.createdAt ? new Date(entity.createdAt).toISOString() : new Date().toISOString(),
            title: entity.content.title!,
          }
        : undefined,
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
