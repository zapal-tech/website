import Sitemapper from 'sitemapper';

import { Routes } from 'types/routes';

const sitemapper = new Sitemapper({
  url: new URL('/sitemap.xml', process.env.NEXT_PUBLIC_SITE_URL).href,
});

const routesNotSuitableForRevalidation = [
  Routes.CookiesPolicy,
  Routes.PrivacyPolicy,
  Routes.TermsOfUse,
  Routes.SupportUkraine,
] as string[];

export const getAllRevalidationPages = async (): Promise<string[]> => {
  const { sites } = await sitemapper.fetch();

  const pages = sites
    .map((site) => new URL(site).pathname)
    .filter((site) => !routesNotSuitableForRevalidation.includes(site));

  return pages;
};

export const getMainRevalidationPages = async (): Promise<string[]> => {
  const pages = (await getAllRevalidationPages())
    .filter((site) => !site.includes(Routes.Projects + '/') || !site.includes(Routes.Blog + '/'))
    .map((site) => new URL(site).pathname);

  return pages;
};

export const getBlogRevalidationPages = async (): Promise<string[]> => {
  const pages = (await getAllRevalidationPages())
    .filter((site) => site.includes(Routes.Blog + '/'))
    .map((site) => new URL(site).pathname);

  return pages;
};

export const getProjectsRevalidationPages = async (): Promise<string[]> => {
  const pages = (await getAllRevalidationPages())
    .filter((site) => site.includes(Routes.Projects + '/'))
    .map((site) => new URL(site).pathname);

  return pages;
};
