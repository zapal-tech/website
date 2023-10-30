import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces } from 'configs/i18n';

import { getCookiesPolicyPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { CookiesPolicy } from 'views/CookiesPolicy/CookiesPolicy';
import { CookiesPolicyProps } from 'views/CookiesPolicy/CookiesPolicy';

export const getStaticProps: GetStaticProps<CookiesPolicyProps> = async ({ locale, defaultLocale }) => {
  const page = await getCookiesPolicyPage(locale);

  return {
    props: { ...(await serverSideTranslations(locale!, globalNamespaces)), page, locale, defaultLocale },
  };
};

export default function CookiesPolicyPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.meta}
      />
      <CookiesPolicy {...props} />
    </>
  );
}
