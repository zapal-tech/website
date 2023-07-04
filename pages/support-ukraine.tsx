import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces } from 'configs/i18n';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { SupportUkraine } from 'views/SupportUkraine/SupportUkraine';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale!, [...globalNamespaces])) },
});

export default function SupportUkrainePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <SupportUkraine {...props} />
    </>
  );
}
