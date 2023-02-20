import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import { MetaPixel, Modal } from 'components';

import 'styles/index.scss';

const PageLoader = dynamic(() => import('components/PageLoader/PageLoader').then((mod) => mod.PageLoader));

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!navigator.userAgent.includes('Mac OS')) document.body.classList.add('CustomScrollbar');
  }, []);

  return (
    <>
      <DefaultSeo
        defaultTitle="Zapal | Unlock Your Tech Future"
        titleTemplate="Zapal - %s | Unlock Your Tech Future"
        description="Unlock Your Tech Future with Zapal! Hire Zapal for top-notch web application development services."
        additionalLinkTags={[
          { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'manifest', href: '/site.webmanifest' },
          {
            rel: 'preload',
            href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-ExtraBold.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-SemiBold.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-Medium.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: 'https://cdn.statically.io/gh/devesh111/Gilroy-Font/main/Gilroy-Regular.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Zapal,IT,dev,development,outsource,frontend,backend,web,react,js,typescript,javascript,QA,services,solutions,website,custom,software,full-stack,UI,UX,design',
          },
        ]}
        themeColor="#111"
      />
      <MetaPixel />

      <Provider store={store}>
        <Component {...pageProps} />
        <PageLoader />
        <Modal />
      </Provider>
    </>
  );
};
export default appWithTranslation(App);
