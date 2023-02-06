import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomePage } from 'views/HomePage/HomePage';

import { Namespace } from 'i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        Namespace.Common,
        Namespace.Languages,
        Namespace.Navigation,
        Namespace.Home,
      ])),
    },
  };
}

export default function Home(props: any) {
  return <HomePage {...props} />;
}
