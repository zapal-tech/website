import { Text } from 'components';

import styles from './Banner.module.scss';

export const Banner: React.FC = () => (
  <a href="https://u24.gov.ua/" rel="noreferrer" target="_blank" className={styles.Banner}>
    <Text className={styles.Banner__Text}>SUPPORT UKRAINE ! STOP WAR</Text>
  </a>
);
