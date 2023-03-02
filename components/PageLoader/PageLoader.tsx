import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './PageLoader.module.scss';

const Logo = dynamic(() => import('components/Logo/Logo').then((mod) => mod.Logo));

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);

    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events, router.asPath]);

  useEffect(() => {
    if (isLoading) {
      setIsShow(true);
    } else {
      const timeout = setTimeout(() => setIsShow(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!isLoading && !isShow) return null;

  return (
    <div className={clsx(styles.PageLoader, isLoading && styles['PageLoader--Loading'])}>
      <Logo withName className={styles.PageLoader__Logo} />
    </div>
  );
};
