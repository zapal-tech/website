import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { projects } from 'utils/projects';

import { getTeamPreview } from 'services/firestore';

import { HomePage, HomeProps } from 'views/HomePage/HomePage';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
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
