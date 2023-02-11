import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { Contacts } from 'views/Contacts/Contacts';

import { globalNamespaces, Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalNamespaces, Namespace.Contacts])),
    },
  };
}

export default function ContactsPage(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('contacts') || undefined} />
      <Contacts {...props} />
    </>
  );
}
