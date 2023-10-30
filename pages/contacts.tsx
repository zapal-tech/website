import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Namespace, globalNamespaces } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getContactsPage, getLocations } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Contacts, ContactsProps } from 'views/Contacts/Contacts';

export const getStaticProps: GetStaticProps<ContactsProps> = async ({ locale, defaultLocale }) => {
  const page = await getContactsPage(locale);
  const locations = (await getLocations(locale)).docs;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Contacts])),
      page,
      locations,
      locale,
      defaultLocale,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function ContactsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo
        generateTopLevelBreadcrumbs
        locale={props.locale}
        defaultLocale={props.defaultLocale}
        {...props.page.meta}
      />
      <Contacts {...props} />
    </>
  );
}
