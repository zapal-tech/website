import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { getProjects, getProjectsPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Projects, ProjectsProps } from 'views/Projects/Projects';

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({ locale }) => {
  const page = (await getProjectsPage(locale)).data;
  const projects = (await getProjects(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Projects])),
      locale,
      page,
      projects,
    },
    revalidate: 3600,
  };
};

export default function ProjectsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <Projects {...props} />
    </>
  );
}
