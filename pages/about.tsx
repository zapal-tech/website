import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { About } from 'views/About/About';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.Contacts])),
    },
  };
};

export default function AboutPage(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('about') || undefined} />
      <About {...props} />
    </>
  );
}
