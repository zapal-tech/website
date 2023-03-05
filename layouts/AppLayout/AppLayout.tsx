import dynamic from 'next/dynamic';
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import { Footer, Header } from 'components';

import styles from './AppLayout.module.scss';

const Modal = dynamic(() => import('components/Modal/Modal').then((mod) => mod.Modal));
const MetaPixel = dynamic(() => import('components/MetaPixel/MetaPixel').then((mod) => mod.MetaPixel));

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <MetaPixel />

    <Provider store={store}>
      <div className={styles.AppLayout}>
        {/* <Banner /> */}
        <Header />
        <main className={styles.AppLayout__Main}>{children}</main>
        <Footer />
      </div>

      <Modal />
    </Provider>
  </>
);
