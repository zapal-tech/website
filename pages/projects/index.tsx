import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getProjects, getProjectsPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Projects, ProjectsProps } from 'views/Projects/Projects';

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({ locale, defaultLocale }) => {
  const page = (await getProjectsPage(locale)).data;
  const projects = (await getProjects(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Projects])),
      page,
      projects,
      locale,
      defaultLocale,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function ProjectsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.attributes.seo}
      />
      <Projects {...props} />
    </>
  );
}
