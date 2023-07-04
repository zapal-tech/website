import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace } from 'configs/i18n';

import { Error500Page } from 'views/Error500Page/Error500Page';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale!, [Namespace.Common])) },
});

export default function Error500(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="500" noindex nofollow />
      <Error500Page {...props} />
    </>
  );
}
