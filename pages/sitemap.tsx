import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { getSitemapPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Sitemap, SitemapProps } from 'views/Sitemap/Sitemap';

export const getStaticProps: GetStaticProps<SitemapProps> = async ({ locale }) => {
  const page = (await getSitemapPage(locale)).data;

  return {
    props: { ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Sitemap])), locale, page },
  };
};

export default function SitemapPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <Sitemap {...props} />
    </>
  );
}
