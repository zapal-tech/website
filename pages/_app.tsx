import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { DefaultSeo, PageLoader } from 'components';

import 'styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!navigator.userAgent.includes('Mac OS')) document.body.classList.add('CustomScrollbar');
  }, []);

  return (
    <>
      <DefaultSeo />

      <Component {...pageProps} />
      <PageLoader />
    </>
  );
};
export default appWithTranslation(App);
