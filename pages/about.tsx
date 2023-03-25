import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { TeamMember } from 'types/team';

import { getTeam } from 'services/firestore';

import { About } from 'views/About/About';

import { globalNamespaces, Namespace } from 'i18n';

type PageProps = {
  team: TeamMember[];
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const team = await getTeam(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.Contacts])),
      team,
    },
    revalidate: 10,
  };
};

export default function AboutPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('about') || undefined} />
      <About {...props} />
    </>
  );
}
