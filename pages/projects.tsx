import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { projects } from 'utils/projects';

import { Projects, ProjectsProps } from 'views/Projects/Projects';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Projects])),
    projects,
  },
  revalidate: 3600,
});

export default function ProjectsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('projects') || undefined} />
      <Projects {...props} />
    </>
  );
}
