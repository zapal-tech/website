import clsx from 'clsx';

// import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';
// import { Path } from 'router/path';
// import { Namespace } from 'i18n';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  // const { t } = useTranslation(Namespace.Navigation);

  const navLinks = [
    {
      title: 'home.title',
      path: '/',
    },
    {
      title: 'about.title',
      path: '/about',
    },
  ];

  return (
    <nav className={clsx(styles.navigation, className)}>
      <ul className={styles.navigation__list}>
        {navLinks.map((navEl) => (
          <li key={navEl.path} className={styles['navigation__list-item']}>
            <a href={navEl.path}>{navEl.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
