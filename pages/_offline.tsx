import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace } from 'configs/i18n';

import { Offline } from 'views/Offline/Offline';

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => ({
  props: { ...(await serverSideTranslations(locale!, [Namespace.Common])), locale, defaultLocale },
});

export default function OfflinePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Common);

  return (
    <>
      <NextSeo title={t('offline.metaTitle')} noindex nofollow />
      <Offline {...props} />
    </>
  );
}
