import React from 'react';

import { Footer, Header } from 'components';

import styles from './AppLayout.module.scss';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div className={styles.AppLayout}>
    {/* <Banner /> */}
    <Header />
    <main className={styles.AppLayout__Main}>{children}</main>
    <Footer />
  </div>
);
