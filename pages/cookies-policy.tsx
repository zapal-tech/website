import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces } from 'configs/i18n';

import { getCookiesPolicyPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { CookiesPolicy } from 'views/CookiesPolicy/CookiesPolicy';
import { CookiesPolicyProps } from 'views/CookiesPolicy/CookiesPolicy';

export const getStaticProps: GetStaticProps<CookiesPolicyProps> = async ({ locale }) => {
  const page = (await getCookiesPolicyPage(locale)).data;

  return {
    props: { ...(await serverSideTranslations(locale!, globalNamespaces)), page },
  };
};

export default function CookiesPolicyPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <CookiesPolicy {...props} />
    </>
  );
}
