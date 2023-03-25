import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { PrivacyPolicy } from 'views/PrivacyPolicy/PrivacyPolicy';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale!, [...globalNamespaces])) },
});

export default function PrivacyPolicyPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('privacyPolicy') || undefined} />
      <PrivacyPolicy {...props} />
    </>
  );
}
