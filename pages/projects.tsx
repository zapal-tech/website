import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { ProjectPreview } from 'types/projects';

import { projects } from 'utils/projects';

import { Projects } from 'views/Projects/Projects';

import { globalNamespaces, Namespace } from 'i18n';

type PageProps = {
  projects: ProjectPreview[];
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Projects])),
    projects,
  },
  revalidate: 10,
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
