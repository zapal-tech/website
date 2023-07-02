import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces } from 'configs/i18n';

import { getTermsOfUsePage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { TermsOfUse, TermsOfUseProps } from 'views/TermsOfUse/TermsOfUse';

export const getStaticProps: GetStaticProps<TermsOfUseProps> = async ({ locale }) => {
  const page = (await getTermsOfUsePage(locale)).data;

  return {
    props: { ...(await serverSideTranslations(locale!, globalNamespaces)), page },
  };
};

export default function TermsOfUsePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <TermsOfUse {...props} />
    </>
  );
}
