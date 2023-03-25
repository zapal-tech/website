import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { getServices, getTeam } from 'services/firestore';

import { About, AboutProps } from 'views/About/About';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale }) => {
  const team = await getTeam(locale);
  const services = await getServices(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.Contacts])),
      team,
      services,
    },
    revalidate: 3600,
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
