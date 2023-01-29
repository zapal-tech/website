import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from 'store';

import 'styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      defaultTitle="Zapal | Unlock Your Tech Future"
      titleTemplate="Zapal - %s | Unlock Your Tech Future"
      description="Zapal is a Ukrainian IT company founded in 2022. We specializes in software development and IT services."
      themeColor="#f84c0b"
    />

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default appWithTranslation(App);
