import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getHomePage, getPartners, getProjects, getServices, getTeam, getTechnologies } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Home, HomeProps } from 'views/Home/Home';

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale, defaultLocale }) => {
  const page = await getHomePage(locale);
  const partners = (await getPartners()).docs;
  const projects = (await getProjects(locale)).docs;
  const services = (await getServices(locale)).docs;
  const team = (await getTeam(locale, 5)).docs;
  const technologies = (await getTechnologies(locale)).docs;

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
        {...props.page.meta}
      />
      <Home {...props} />
    </>
  );
}
