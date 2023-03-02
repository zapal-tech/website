import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { projects } from 'utils/projects';

import { HomePage } from 'views/HomePage/HomePage';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.Home])),
    projects,
  },
  revalidate: 10,
});

export default function Home(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('home') || undefined} />
      <HomePage {...props} />
    </>
  );
}
