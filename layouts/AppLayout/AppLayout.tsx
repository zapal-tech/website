import { useEffect } from 'react';

import { useLenis } from '@studio-freight/react-lenis';
import clsx, { ClassValue } from 'clsx';
import dynamic from 'next/dynamic';
import Router from 'next/router';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Header } from 'components/Header/Header';

import styles from './AppLayout.module.scss';

const Footer = dynamic(() => import('components/Footer/Footer').then((mod) => mod.Footer));
const Modal = dynamic(() => import('components/Modal/Modal').then((mod) => mod.Modal));
// const MetaPixel = dynamic(() => import('components/MetaPixel/MetaPixel').then((mod) => mod.MetaPixel));

export type AppLayoutProps = React.PropsWithChildren<{
  className?: ClassValue | ClassValue[];
  mainClassName?: ClassValue | ClassValue[];
}>;

export const AppLayout: React.FC<AppLayoutProps> = ({ children, className, mainClassName }) => {
  const { isMobileMenuOpen, modal } = useGlobalContext();
  const lenis = useLenis();

  useEffect(() => {
    function onHashChangeStart(url: string) {
      url = '#' + url.split('#').pop();

      lenis.scrollTo(url);
    }

    Router.events.on('hashChangeStart', onHashChangeStart);

    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart);
    };
  }, [lenis]);

  useEffect(() => {
    if (isMobileMenuOpen || modal.isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, isMobileMenuOpen, modal.isOpen]);

  return (
    <div className={clsx(styles.AppLayout, className)}>
      <Header />
      <main className={clsx(styles.AppLayout__Main, mainClassName)}>{children}</main>
      <Footer />

      {/* <MetaPixel /> */}
      <Modal />
    </div>
  );
};
