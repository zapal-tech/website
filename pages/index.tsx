import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { ProjectPreview } from 'types/projects';
import { TeamMemberPreview } from 'types/team';

import { projects } from 'utils/projects';

import { getTeamPreview } from 'services/firestore';

import { HomePage } from 'views/HomePage/HomePage';

import { globalNamespaces, Namespace } from 'i18n';

type PageProps = {
  projects: ProjectPreview[];
  team: TeamMemberPreview[];
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const team = await getTeamPreview(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Home])),
      projects,
      team,
    },
    revalidate: 10,
  };
};

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('home') || undefined} />
      <HomePage {...props} />
    </>
  );
}
