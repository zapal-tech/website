import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMemo } from 'react';

import { useMediaQuery } from 'hooks/useMediaQuery';

import { Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Navigation.module.scss';

export type NavigationProps = {
  className?: ClassValue | ClassValue[];
  closeMobileMenu?: () => void;
};

export const Navigation: React.FC<NavigationProps> = ({ className, closeMobileMenu }) => {
  const { t } = useTranslation(Namespace.Navigation);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

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
      // {
      //   title: t('supportUkraine.title'),
      //   path: '/supportUkraine',
      // },
    ],
    [t],
  );

  return (
    <nav className={clsx(styles.Navigation, className)}>
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
