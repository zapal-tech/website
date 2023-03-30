import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { projects } from 'utils/projects';

import { getPartners, getTeamPreview } from 'services/firestore';

import { Home, HomeProps } from 'views/Home/Home';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const partners = await getPartners();
  const team = await getTeamPreview(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Home])),
      partners,
      projects,
      team,
    },
    revalidate: 3600,
  };
};

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('home') || undefined} />
      <Home {...props} />
    </>
  );
}
