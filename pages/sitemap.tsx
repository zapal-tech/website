import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getSitemapPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Sitemap, SitemapProps } from 'views/Sitemap/Sitemap';

export const getStaticProps: GetStaticProps<SitemapProps> = async ({ locale, defaultLocale }) => {
  const page = await getSitemapPage(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Sitemap])),
      page,
      locale,
      defaultLocale,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function SitemapPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.meta}
      />
      <Sitemap {...props} />
    </>
  );
}
