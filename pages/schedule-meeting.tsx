import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { getScheduleMeetingPage } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { ScheduleMeeting, ScheduleMeetingProps } from 'views/ScheduleMeeting/ScheduleMeeting';

export const getStaticProps: GetStaticProps<ScheduleMeetingProps> = async ({ locale, defaultLocale }) => {
  const page = await getScheduleMeetingPage(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.ScheduleMeeting])),
      page,
      locale,
      defaultLocale,
    },
  };
};
export default function ScheduleMeetingPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.meta}
      />
      <ScheduleMeeting {...props} />
    </>
  );
}
