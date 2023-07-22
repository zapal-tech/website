import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalNamespaces, Namespace } from 'configs/i18n';

import { DEFAULT_REVALIDATE_TIME } from 'utils/constants';

import { getContactsPage, getLocations } from 'services/api';

import { PageSeo } from 'components/PageSeo/PageSeo';

import { Contacts, ContactsProps } from 'views/Contacts/Contacts';

export const getStaticProps: GetStaticProps<ContactsProps> = async ({ locale }) => {
  const page = (await getContactsPage(locale)).data;
  const locations = (await getLocations(locale)).data;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Contacts])),
      locale,
      page,
      locations,
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default function ContactsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo locale={props.locale} {...props.page.attributes.seo} />
      <Contacts {...props} />
    </>
  );
}
