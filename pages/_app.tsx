import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from 'store';

import { MetaPixel } from 'components';

import 'styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      defaultTitle="Zapal | Unlock Your Tech Future"
      titleTemplate="Zapal - %s | Unlock Your Tech Future"
      description="Zapal is a Ukrainian IT company founded in 2022. We specializes in software development and IT services."
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
        { name: 'description', content: 'Hire Zapal for top-notch web application dev services. Get a quote today!' },
      ]}
      themeColor="#111"
    />
    <MetaPixel />

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default appWithTranslation(App);
