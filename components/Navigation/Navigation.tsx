import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Navigation.module.scss';

export type NavigationProps = {
  className?: ClassValue | ClassValue[];
};

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation(Namespace.Navigation);
  const windowSize = useWindowSize();

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

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
        title: t('portfolio.title'),
        path: '/portfolio',
      },
      {
        title: t('career.title'),
        path: '/career',
      },
      {
        title: t('contacts.title'),
        path: '/contacts',
      },
      {
        title: t('supportUkraine.title'),
        path: '/supportUkraine',
      },
    ],
    [t],
  );

  return (
    <nav className={clsx(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        {navLinks.map(({ path, title }) => (
          <li key={path} className={styles.Navigation__ListItem}>
            <Link href={path} className={styles.Navigation__Link}>
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
