import React from 'react';

import { Footer, Banner, Header } from 'components';

import styles from './AppLayout.module.scss';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles['app-layout']}>
      <Banner />
      <Header />

      <main className={styles['app-layout__main']}>{children}</main>

      <Footer />
    </div>
  );
};
