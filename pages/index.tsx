import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { getHomePage, getPartners, getProjects, getServices, getTeam, getTechnologies } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Home, HomeProps } from 'views/Home/Home';

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const page = (await getHomePage(locale)).data;
  const partners = (await getPartners()).data;
  const projects = (await getProjects(locale)).data;
  const services = (await getServices(locale)).data;
  const team = (await getTeam(locale, 5)).data;
  const technologies = (await getTechnologies(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Home])),
      locale,
      page,
      partners,
      projects,
      services,
      team,
      technologies,
    },
    revalidate: 3600,
  };
};

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <Home {...props} />
    </>
  );
}
