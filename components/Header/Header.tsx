import { LanguageSwitch, Logo, Navigation } from 'components';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <a href="https://zapal.tech" rel="noreferrer noopener" target="_blank">
        <Logo />
      </a>

      <Navigation className={styles.Header__Navigation} />
      <LanguageSwitch />
    </header>
  );
};
