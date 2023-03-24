import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { GlobalContextProvider } from 'contexts/GlobalContext';

import { DefaultSeo } from 'components/DefaultSeo/DefaultSeo';
import { PageLoader } from 'components/PageLoader/PageLoader';

import 'styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!navigator.userAgent.includes('Mac OS')) document.body.classList.add('CustomScrollbar');
  }, []);

  return (
    <>
      <DefaultSeo />

      <GlobalContextProvider pageProps={pageProps}>
        <Component {...pageProps} />
        <PageLoader />
      </GlobalContextProvider>
    </>
  );
};
export default appWithTranslation(App);
