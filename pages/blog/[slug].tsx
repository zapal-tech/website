import { useMemo } from 'react';

import { useLivePreview } from '@payloadcms/live-preview-react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { BlogPost as BlogPostType } from 'types/blog';
import { Routes } from 'types/routes';

import { BLOG_POST_REVALIDATE_TIME } from 'utils/constants';
import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';
import { parseLexicalState } from 'utils/parseLexicalState';

import { getAllBlogPosts, getBlogPostBySlug } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { BlogPost, BlogPostProps } from 'views/BlogPost/BlogPost';
import { Error404 } from 'views/Error404/Error404';

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ locale, defaultLocale, params }) => {
  const blogPost = params?.slug ? await getBlogPostBySlug(params?.slug as string, locale) : null;

  const blogPostStringifiedHTML = blogPost?.content.content ? parseLexicalState(blogPost.content.content) : null;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces])),
      blogPost,
      blogPostStringifiedHTML,
      locale,
      defaultLocale,
    },
    revalidate: BLOG_POST_REVALIDATE_TIME,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async ({ defaultLocale, locales }) => {
  const paths = await getLocalizedSlugPaths(getAllBlogPosts, locales!, defaultLocale);

  // We'll pre-render only these paths at build time.
  // fallback: 'blocking' will server-render pages on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default function BlogPostPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Navigation);
  const router = useRouter();

  const { data } = useLivePreview<any>({
    serverURL: process.env.NEXT_PUBLIC_CMS_URL || '',
    depth: 10,
    initialData: null,
  });

  const getURL = (path = router.pathname): string => {
    const prefix = props.locale === props.defaultLocale ? '' : `/${props.locale}`;

    return new URL(prefix + path, process.env.NEXT_PUBLIC_SITE_URL).href;
  };

  const blogPostStringifiedHTML = useMemo(
    () =>
      data?.content.content && JSON.stringify(data?.content.content) !== JSON.stringify(props.blogPost?.content.content)
        ? parseLexicalState(data.content.content)
        : props.blogPostStringifiedHTML,
    [data, props.blogPostStringifiedHTML, props.blogPost?.content.content],
  );

  const passedData = useMemo(
    () => ({
      ...props.blogPost,
      ...data,
    }),
    [props.blogPost, data],
  );

  if (!router.isFallback && !props.blogPost?.id) return <Error404 />;

  return (
    <>
      <PageSeo
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...{
          title: props.blogPost?.meta.title || props.blogPost?.content.title,
          description: props.blogPost?.meta.description || props.blogPost?.content.title,
          photo: props.blogPost?.meta.photo || props.blogPost?.content.cover,
          canonical: props.blogPost?.meta.canonical,
          keywords: props.blogPost?.meta.keywords,
        }}
        breadcrumbs={[
          {
            position: 1,
            name: t('blog.title'),
            item: getURL(Routes.Blog),
          },
          {
            position: 2,
            name: props.blogPost?.content.title || '',
            item: getURL(),
          },
        ]}
      />
      <BlogPost blogPost={passedData} blogPostStringifiedHTML={blogPostStringifiedHTML} />

      <ArticleJsonLd
        type="BlogPosting"
        url={props.blogPost?.meta.canonical || ''}
        title={props.blogPost?.content.title || ''}
        description={props.blogPost?.meta.description || ''}
        images={props.blogPost?.content?.cover?.url ? [props.blogPost?.content.cover.url] : []}
        datePublished={props.blogPost?.createdAt || ''}
        dateModified={props.blogPost?.updatedAt}
        publisherName="Zapal"
        publisherLogo={process.env.NEXT_PUBLIC_SITE_URL + '/logo.svg'}
        isAccessibleForFree
        authorName={{
          name: props.blogPost?.content.author.name,
          type: 'Person',
        }}
      />
    </>
  );
}
