import React from 'react';

import { Footer, Banner, Header } from 'components';

import './AppLayout.scss';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Banner />
      <Header />

      <main className="app-layout__main">{children}</main>

      <Footer />
    </div>
  );
};
