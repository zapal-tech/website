import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { getLocations } from 'services/firestore';

import { Contacts, ContactsProps } from 'views/Contacts/Contacts';

import { globalNamespaces, Namespace } from 'i18n';

export const getStaticProps: GetStaticProps<ContactsProps> = async ({ locale }) => {
  const locations = await getLocations(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [...globalNamespaces, Namespace.Contacts])),
      locations,
    },
  };
};

export default function ContactsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('contacts') || undefined} />
      <Contacts {...props} />
    </>
  );
}
