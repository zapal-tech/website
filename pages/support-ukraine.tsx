import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { getSupportUkrainePage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { SupportUkraine, SupportUkraineProps } from 'views/SupportUkraine/SupportUkraine';

export const getStaticProps: GetStaticProps<SupportUkraineProps> = async ({ locale }) => {
  const page = (await getSupportUkrainePage(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.SupportUkraine])),
      locale,
      page,
    },
  };
};

export default function SupportUkrainePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <SupportUkraine {...props} />
    </>
  );
}
