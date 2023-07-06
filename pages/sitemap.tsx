import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace } from 'configs/i18n';

import { SiteMapPage } from 'views/SitemapPage/SitemapPage';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale!, [Namespace.Common])) },
});

export default function Sitemap(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="sitemap" noindex nofollow />
      <SiteMapPage {...props} />
    </>
  );
}
