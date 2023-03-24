import dynamic from 'next/dynamic';

import { Header } from 'components/Header/Header';

import styles from './AppLayout.module.scss';

const Footer = dynamic(() => import('components/Footer/Footer').then((mod) => mod.Footer));
const Modal = dynamic(() => import('components/Modal/Modal').then((mod) => mod.Modal));
// const MetaPixel = dynamic(() => import('components/MetaPixel/MetaPixel').then((mod) => mod.MetaPixel));

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <div className={styles.AppLayout}>
      {/* <Banner /> */}
      <Header />
      <main className={styles.AppLayout__Main}>{children}</main>
      <Footer />

      {/* <MetaPixel /> */}
      <Modal />
    </div>
  </>
);
