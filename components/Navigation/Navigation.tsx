import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Navigation.module.scss';

export type NavigationProps = {
  className?: ClassValue | ClassValue[];
};

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation(Namespace.Navigation);

  const navLinks = [
    {
      title: t('home.title'),
      path: '/',
    },
    {
      title: t('about.title'),
      path: '/about',
    },
  ];

  return (
    <nav className={clsx(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        {navLinks.map((navEl) => (
          <li key={navEl.path} className={styles.Navigation__ListItem}>
            <a href={navEl.path}>
              <Text>{navEl.title}</Text>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
