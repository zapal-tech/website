import { useLivePreview } from '@payloadcms/live-preview-react';
import countries from 'assets/countries.json';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { ApiMeta } from 'types/api';
import { ProjectContent, Project as ProjectType } from 'types/projects';
import { Routes } from 'types/routes';

import { BLOG_POST_REVALIDATE_TIME } from 'utils/constants';
import { getLocalizedSlugPaths } from 'utils/localizedSlugPaths';
import { parseProjectLayout } from 'utils/parseProject/parseLayout';

import { getAllProjects, getProjectBySlug, getProjectFooter } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Error404 } from 'views/Error404/Error404';
import { Project, ProjectProps } from 'views/Project/Project';

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ locale, defaultLocale, params }) => {
  const project = params?.slug ? await getProjectBySlug(params?.slug as string, locale) : null;
  const footer = await getProjectFooter(locale);

  const parsedCountry = countries.find((country) => country.value === project?.content.details.country)?.name[
    locale! as 'en' | 'uk'
  ];
  const layoutHtmlString = project?.content.layout.length ? parseProjectLayout(project.content.layout) : null;

  const data = {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Project])),
      ...(project?.content || ({} as any as ProjectContent))!,
      meta: project?.meta || ({} as any as ApiMeta),
      layoutHtmlString,
      footer,
      locale,
      defaultLocale,
    },
    revalidate: BLOG_POST_REVALIDATE_TIME,
  };

  if (data.props?.details && parsedCountry) data.props.details.country = parsedCountry;

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

  const { data } = useLivePreview<ProjectType | null>({
    serverURL: process.env.NEXT_PUBLIC_CMS_URL || '',
    depth: 5,
    initialData: null,
  });

  if (!router.isFallback && !props.name) return <Error404 />;

  const getURL = (path = router.pathname): string => {
    const prefix = props.locale === props.defaultLocale ? '' : `/${props.locale}`;

    return new URL(prefix + path, process.env.NEXT_PUBLIC_SITE_URL).href;
  };

  const layoutHtmlString =
    data?.content.layout && JSON.stringify(data?.content.layout) !== JSON.stringify(props.layout)
      ? parseProjectLayout(data.content.layout)
      : props.layoutHtmlString;

  const passedData = {
    footer: props.footer,
    details: data?.content.details || props.details,
    name: data?.content.name || props.name,
    description: data?.content.description || props.description,
    image: data?.content.image || props.image,
    layout: data?.content.layout || props.layout,
    meta: data?.meta || props.meta,
    layoutHtmlString,
  };

  return (
    <>
      <PageSeo
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...{
          title: props.meta.title || props.name,
          description: props.meta.description || props.description,
          photo: props.meta.photo || props.image,
          canonical: props.meta.canonical,
          keywords: props.meta.keywords,
        }}
        breadcrumbs={[
          {
            position: 1,
            name: t('projects.title'),
            item: getURL(Routes.Blog),
          },
          {
            position: 2,
            name: props.meta.title || props.name,
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
