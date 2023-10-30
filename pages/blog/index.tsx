import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { ApiCollectionResponse } from 'types/api';

import { BLOG_REVALIDATE_TIME } from 'utils/constants';

import { getBlogPage, getBlogPosts } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Blog, BlogProps, OmitedBlogPost } from 'views/Blog/Blog';

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale, defaultLocale, params }) => {
  const page = await getBlogPage(locale);

  const currentPage = params?.page ? Number(params.page) : undefined;
  const blogPosts = await getBlogPosts(locale, currentPage);

  const omitedBlogPostsDocs = blogPosts.docs.map((blogPost) => {
    const omitedBlogPost: OmitedBlogPost = { ...blogPost };
    const omitedBlogPostContent: any = { ...blogPost.content };

    delete omitedBlogPostContent.content;
    delete omitedBlogPostContent.description;

    omitedBlogPost.content = omitedBlogPostContent;

    return omitedBlogPost as OmitedBlogPost;
  });

  const omitedBlogPosts: ApiCollectionResponse<OmitedBlogPost> = { ...blogPosts, docs: omitedBlogPostsDocs };

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Blog])),
      page,
      blogPosts: omitedBlogPosts,
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
        {...props.page.meta}
      />
      <Blog {...props} />

      <ArticleJsonLd
        type="Blog"
        url={props.page.meta.canonical!}
        title={props.page.meta.title!}
        description={props.page.meta.description!}
        images={props.page.meta.photo?.url ? [props.page.meta.photo?.url] : []}
        datePublished={props.page.createdAt}
        dateModified={props.page.updatedAt}
        authorName={{
          name: 'Zapal',
          type: 'Organization',
        }}
      />
    </>
  );
}
