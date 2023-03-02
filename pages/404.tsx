import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Error404Page } from 'views/Error404Page/Error404Page';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Common])) },
  };
}

export default function Error404(props: any) {
  return (
    <>
      <NextSeo title="404" />
      <Error404Page {...props} />
    </>
  );
}
