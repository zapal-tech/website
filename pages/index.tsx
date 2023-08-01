import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getHomePage, getPartners, getProjects, getServices, getTeam, getTechnologies } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Home, HomeProps } from 'views/Home/Home';

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale, defaultLocale }) => {
  const page = (await getHomePage(locale)).data;
  const partners = (await getPartners()).data;
  const projects = (await getProjects(locale)).data;
  const services = (await getServices(locale)).data;
  const team = (await getTeam(locale, 5)).data;
  const technologies = (await getTechnologies(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Home])),
      page,
      partners,
      projects,
      services,
      team,
      technologies,
      locale,
      defaultLocale,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.attributes.seo}
      />
      <Home {...props} />
    </>
  );
}
