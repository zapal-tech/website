import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PrivacyPolicy } from 'views/PrivacyPolicy/PrivacyPolicy';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Languages, Namespace.Navigation])) },
  };
}

export default function PrivacyPolicyPage(props: any) {
  return <PrivacyPolicy {...props} />;
}
