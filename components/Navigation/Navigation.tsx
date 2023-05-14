import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  const { closeMobileMenu } = useGlobalContext();
  const { t } = useTranslation(Namespace.Navigation);
  const router = useRouter();

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  useEffect(() => {
    const handleStart = () => closeMobileMenu();

    router.events.on('routeChangeStart', handleStart);

    return () => {
      router.events.off('routeChangeStart', handleStart);
    };
  }, [router.events, router.asPath, closeMobileMenu]);

  const navLinks = useMemo(
    () => [
      {
        title: t('home.title'),
        path: '/',
      },
      {
        title: t('about.title'),
        path: '/about',
      },
      {
        title: t('projects.title'),
        path: '/projects',
      },
      // {
      //   title: t('career.title'),
      //   path: '/career',
      // },
      {
        title: t('contacts.title'),
        path: '/contacts',
      },
      {
        title: t('supportUkraine.title'),
        path: '/support-ukraine',
      },
    ],
    [t],
  );

  return (
    <nav className={styles.Navigation}>
      <ul className={styles.Navigation__List}>
        {navLinks.map(({ path, title }) => (
          <li key={path} className={styles.Navigation__ListItem}>
            <Link href={path} className={styles.Navigation__Link} onClick={closeMobileMenu}>
              <Text size={isLaptop ? 'tiny' : 'heading3'} uppercase className={styles.Navigation__LinkText}>
                {title}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
