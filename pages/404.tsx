import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace } from 'configs/i18n';

import { Error404 } from 'views/Error404/Error404';

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => ({
  props: { ...(await serverSideTranslations(locale!, [Namespace.Common])), locale, defaultLocale },
});

export default function Error404Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="404" noindex nofollow />
      <Error404 {...props} />
    </>
  );
}
