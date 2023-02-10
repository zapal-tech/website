import clsx, { ClassValue } from 'clsx';

import { Text } from 'components';

import styles from './Banner.module.scss';

export type BannerProps = {
  className?: ClassValue | ClassValue[];
};

export const Banner: React.FC<BannerProps> = ({ className }) => (
  <a href="https://u24.gov.ua/" rel="noreferrer" target="_blank" className={clsx(styles.Banner, className)}>
    <Text className={styles.Banner__Text}>SUPPORT UKRAINE ! STOP WAR</Text>
  </a>
);
