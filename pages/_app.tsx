import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';

import { GlobalContextProvider } from 'contexts/GlobalContext';

import { DefaultSeo } from 'components/DefaultSeo/DefaultSeo';
import { PageLoader } from 'components/PageLoader/PageLoader';

import 'styles/index.scss';

const ronaldFont = localFont({
  adjustFontFallback: 'Arial',
  fallback: ['Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
  preload: true,
  variable: '--Ronald-font',
  style: 'normal',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/Ronald/Ronald-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Ronald/Ronald-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Ronald/Ronald-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/Ronald/Ronald-ExtraBold.woff2',
      weight: '800',
    },
  ],
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!navigator.userAgent.includes('Mac OS')) document.body.classList.add('CustomScrollbar');
  }, []);

  return (
    <div id="app" className={ronaldFont.className}>
      <DefaultSeo />

      <GlobalContextProvider pageProps={pageProps}>
        <Component {...pageProps} />
        <PageLoader />
      </GlobalContextProvider>
    </div>
  );
};

export default appWithTranslation(App);
