import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getAboutPage, getPartners, getServices, getTeam } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { About, AboutProps } from 'views/About/About';

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale, defaultLocale }) => {
  const page = await getAboutPage(locale);
  const partners = (await getPartners()).docs;
  const services = (await getServices(locale)).docs;
  const team = (await getTeam(locale)).docs;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.About])),
      page,
      partners,
      services,
      team,
      locale,
      defaultLocale,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function AboutPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.meta}
      />
      <About {...props} />
    </>
  );
}
