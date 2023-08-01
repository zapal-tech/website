import 'highlight.js/styles/monokai-sublime.css';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { Routes } from 'types/routes';

import { ARTICLE_REVALIDATE_TIME } from 'utils/constants';
import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';

import { getAllArticles, getArticle } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Article, ArticleProps } from 'views/Article/Article';
import { Error404 } from 'views/Error404/Error404';

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ locale, defaultLocale, params }) => {
  const article = Number.isNaN(Number(params?.slug))
    ? await getArticle(params?.slug as string, locale)
        .then((res) => res.data)
        .catch(() => null)
    : null;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces])),
      article: article!,
      locale,
      defaultLocale,
    },
    revalidate: ARTICLE_REVALIDATE_TIME,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async ({ defaultLocale, locales }) => {
  const paths = await getLocalizedSlugPaths(getAllArticles, locales!, defaultLocale);

  // We'll pre-render only these paths at build time.
  // fallback: 'blocking' will server-render pages on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default function ArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Navigation);
  const router = useRouter();

  if (!router.isFallback && !props.article) return <Error404 />;

  const getURL = (path = router.pathname): string => {
    const prefix = props.locale === props.defaultLocale ? '' : `/${props.locale}`;

    return new URL(prefix + path, process.env.NEXT_PUBLIC_SITE_URL).href;
  };

  return (
    <>
      <PageSeo
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.article.attributes.seo}
        breadcrumbs={[
          {
            position: 1,
            name: t('blog.title'),
            item: getURL(Routes.Blog),
          },
          {
            position: 2,
            name: props.article.attributes.title,
            item: getURL(),
          },
        ]}
      />
      <Article {...props} />

      <ArticleJsonLd
        type="BlogPosting"
        url={props.article.attributes.seo.canonicalURL!}
        title={props.article.attributes.title}
        description={props.article.attributes.seo.metaDescription}
        images={
          props.article.attributes.cover?.data.attributes.url
            ? [props.article.attributes.cover?.data.attributes.url]
            : []
        }
        datePublished={props.article.attributes.publishedAt}
        dateModified={props.article.attributes.updatedAt}
        publisherLogo={process.env.NEXT_PUBLIC_SITE_URL + '/logo.svg'}
        isAccessibleForFree
        authorName={{
          name: 'Zapal',
          type: 'Organization',
        }}
      />
    </>
  );
}
