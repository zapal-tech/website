import { Lenis } from '@studio-freight/react-lenis';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import { GlobalContextProvider } from 'contexts/GlobalContext';

import { DefaultSeo } from 'components/DefaultSeo/DefaultSeo';
import { PageLoader } from 'components/PageLoader/PageLoader';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import nextI18NextConfig from '../next-i18next.config';

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

if (typeof window !== 'undefined') {
  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo />

    <Lenis root>
      <div id="app" className={clsx(ronaldFont.className, ronaldFont.variable)}>
        <GlobalContextProvider pageProps={pageProps}>
          <Component {...pageProps} />
          <PageLoader />
        </GlobalContextProvider>
      </div>
    </Lenis>

    <Analytics />
    <SpeedInsights />
  </>
);

export default appWithTranslation(App, nextI18NextConfig);
