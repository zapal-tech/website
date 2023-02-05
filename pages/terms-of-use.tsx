import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TermsOfUse } from 'views/TermsOfUse/TermsOfUse';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, [Namespace.Languages, Namespace.Navigation])) },
  };
}

export default function TermsOfUsePage(props) {
  return <TermsOfUse {...props} />;
}
