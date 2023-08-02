import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { BLOG_REVALIDATE_TIME } from 'utils/constants';

import { getArticles, getBlogPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Blog, BlogProps } from 'views/Blog/Blog';

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale, defaultLocale, params }) => {
  const page = (await getBlogPage(locale)).data;

  const currentPage = params?.page ? Number(params.page) : undefined;
  const articles = await getArticles(locale, currentPage);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Blog])),
      page,
      articles,
      locale,
      defaultLocale,
      revalidate: BLOG_REVALIDATE_TIME,
    },
  };
};

export default function BlogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.attributes.seo}
      />
      <Blog {...props} />

      <ArticleJsonLd
        type="Blog"
        url={props.page.attributes.seo.canonicalURL!}
        title={props.page.attributes.seo.metaTitle}
        description={props.page.attributes.seo.metaDescription}
        images={
          props.page.attributes.seo.metaImage.data.attributes.url
            ? [props.page.attributes.seo.metaImage.data.attributes.url]
            : []
        }
        datePublished={props.page.attributes.createdAt}
        dateModified={props.page.attributes.updatedAt}
        authorName={{
          name: 'Zapal',
          type: 'Organization',
        }}
      />
    </>
  );
}
