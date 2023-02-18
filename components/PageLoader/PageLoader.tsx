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
    const timeout = setTimeout(() => setIsShow(false), 300);

    const handleStart = (path: string) => path !== router.asPath && setIsShow(true);
    const handleComplete = (path: string) => path === router.asPath && setIsShow(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);

      clearTimeout(timeout);
    };
  }, [router.events, router.asPath]);

  useEffect(() => {
    if (isShow) {
      setIsLoading(true);
    } else {
      const timeout = setTimeout(() => setIsLoading(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [isShow]);

  if (!isLoading && !isShow) return null;

  return (
    <div className={clsx(styles.PageLoader, isLoading && styles['PageLoader--Loading'])}>
      <Logo withName className={styles.PageLoader__Logo} />
    </div>
  );
};
