import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Navigation.module.scss';

export interface NavigationProps {
  className?: string;
}

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
    <nav className={clsx(styles.navigation, className)}>
      <ul className={styles.navigation__list}>
        {navLinks.map((navEl) => (
          <li key={navEl.path} className={styles['navigation__list-item']}>
            <a href={navEl.path}>
              <Text>{navEl.title}</Text>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
