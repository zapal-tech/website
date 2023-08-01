import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace } from 'configs/i18n';

import { Error500 } from 'views/Error500/Error500';

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => ({
  props: { ...(await serverSideTranslations(locale!, [Namespace.Common])), locale, defaultLocale },
});

export default function Error500Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="500" noindex nofollow />
      <Error500 {...props} />
    </>
  );
}
