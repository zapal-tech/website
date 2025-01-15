import { useMemo } from 'react';

import { useLivePreview } from '@payloadcms/live-preview-react';
import countries from 'assets/countries.json';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { ApiMeta } from 'types/api';
import { ProjectContent } from 'types/projects';
import { Routes } from 'types/routes';

import { BLOG_POST_REVALIDATE_TIME } from 'utils/constants';
import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';
import { parseProjectLayout } from 'utils/parseProject/parseLayout';

import { getAllProjects, getProjectBySlug, getProjectFooter } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Error404 } from 'views/Error404/Error404';
import { Project, ProjectProps } from 'views/Project/Project';

export const getStaticProps: GetStaticProps<{ project: ProjectProps }> = async ({ locale, defaultLocale, params }) => {
  const project = params?.slug ? await getProjectBySlug(params?.slug as string, locale) : null;
  const footer = await getProjectFooter(locale);

  const parsedCountry = countries.find((country) => country.value === project?.content.details.country)?.name[
    locale! as 'en' | 'uk' | 'fr'
  ];
  const layoutHtmlString = project?.content.layout.length ? parseProjectLayout(project.content.layout) : null;

  const data = {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Project])),
      project: {
        ...(project?.content as any as ProjectContent),
        layoutHtmlString,
        footer,
        locale,
        defaultLocale,
        meta: project?.meta || ({} as any as ApiMeta),
      },
    },
    revalidate: BLOG_POST_REVALIDATE_TIME,
  };

  if (data.props.project?.details && parsedCountry) data.props.project.details.country = parsedCountry;

  return data;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async ({ defaultLocale, locales }) => {
  const paths = await getLocalizedSlugPaths(getAllProjects, locales!, defaultLocale);

  // We'll pre-render only these paths at build time.
  // fallback: 'blocking' will server-render pages on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default function ProjectPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Navigation);
  const router = useRouter();

  const { data } = useLivePreview<any>({
    serverURL: process.env.NEXT_PUBLIC_CMS_URL || '',
    depth: 10,
    initialData: null,
  });

  const getURL = (path = router.pathname): string => {
    const prefix = props?.project.locale === props?.project.defaultLocale ? '' : `/${props?.project.locale}`;

    return new URL(prefix + path, process.env.NEXT_PUBLIC_SITE_URL).href;
  };

  const layoutHtmlString =
    data?.content?.layout && JSON.stringify(data?.content?.layout) !== JSON.stringify(props.project?.layout)
      ? parseProjectLayout(data.content.layout)
      : props?.project.layoutHtmlString;

  const passedData = useMemo(
    () => ({
      ...(props.project || {}),
      ...(data?.content ? data.content : {}),
      name: data?.content?.name || props.project?.name,
      description: data?.content?.description || props.project?.description,
      image: props.project?.image,
      meta: data?.meta || props.project?.meta,
      layoutHtmlString,
      footer: props.project?.footer,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.project, data?.content, data?.content?.name, data?.content?.description, data?.meta, layoutHtmlString],
  );

  if (!router.isFallback && !props?.project.name) return <Error404 />;

  return (
    <>
      <PageSeo
        locale={props.project.locale}
        defaultLocale={props.project.defaultLocale}
        {...{
          title: props.project.meta.title || props.project.name,
          description: props.project.meta.description || props.project.description,
          photo: props.project.meta.photo || props.project.image,
          canonical: props.project.meta.canonical,
          keywords: props.project.meta.keywords,
        }}
        breadcrumbs={[
          {
            position: 1,
            name: t('projects.title'),
            item: getURL(Routes.Blog),
          },
          {
            position: 2,
            name: props.project.meta.title || props.project.name,
            item: getURL(),
          },
        ]}
      />
      <Project {...passedData} />
      {/* 
      <ArticleJsonLd
        type="BlogPosting"
        url={project.meta.canonical!}
        title={project.content.title}
        description={project.meta.description!}
        images={project.content?.cover?.url ? [project.content.cover.url] : []}
        datePublished={project.createdAt}
        dateModified={project.updatedAt}
        publisherName="Zapal"
        publisherLogo={process.env.NEXT_PUBLIC_SITE_URL + '/logo.svg'}
        isAccessibleForFree
        authorName={{
          name: project.content.author.name,
          type: 'Person',
        }}
      /> */}
    </>
  );
}
