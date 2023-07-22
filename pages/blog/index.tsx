import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getArticles, getBlogPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Blog, BlogProps } from 'views/Blog/Blog';

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  const page = (await getBlogPage(locale)).data;
  const articles = (await getArticles(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Blog])),
      locale,
      page,
      articles,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function BlogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <Blog {...props} />
    </>
  );
}
