import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';

import { Routes } from 'types/routes';

import { Text } from 'components';

import styles from './Banner.module.scss';

export type BannerProps = {
  className?: ClassValue | ClassValue[];
};

export const Banner: React.FC<BannerProps> = ({ className }) => (
  <Link href={Routes.SupportUkraine} target="_blank" className={clsx(styles.Banner, className)}>
    <Text className={styles.Banner__Text}>SUPPORT UKRAINE ! STOP WAR</Text>
  </Link>
);
