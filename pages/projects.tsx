import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Projects } from 'views/Projects/Projects';

import { globalNamespaces, Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalNamespaces, Namespace.Projects])),
    },
  };
}

export default function PortfolioPage(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('portfolio') || undefined} />
      <Projects {...props} />
    </>
  );
}
