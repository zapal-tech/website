import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Error500Page } from 'views/Error500Page/Error500Page';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Common])) },
  };
}

export default function Error500(props: any) {
  return (
    <>
      <NextSeo title="500" />
      <Error500Page {...props} />
    </>
  );
}
