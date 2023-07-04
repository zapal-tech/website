import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { getServices, getPartners, getTeam, getAboutPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { About, AboutProps } from 'views/About/About';

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale }) => {
  const page = (await getAboutPage(locale)).data;
  const partners = (await getPartners()).data;
  const services = (await getServices(locale)).data;
  const team = (await getTeam(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.About])),
      locale,
      page,
      partners,
      services,
      team,
    },
    revalidate: 3600,
  };
};

export default function AboutPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <About {...props} />
    </>
  );
}
