import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces } from 'configs/i18n';

import { getPrivacyPolicyPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { PrivacyPolicy, PrivacyPolicyProps } from 'views/PrivacyPolicy/PrivacyPolicy';

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async ({ locale, defaultLocale }) => {
  const page = (await getPrivacyPolicyPage(locale)).data;

  return {
    props: { ...(await serverSideTranslations(locale!, globalNamespaces)), page, locale, defaultLocale },
  };
};

export default function PrivacyPolicyPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.attributes.seo}
      />
      <PrivacyPolicy {...props} />
    </>
  );
}
