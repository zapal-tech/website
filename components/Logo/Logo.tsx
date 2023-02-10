import clsx, { ClassValue } from 'clsx';

import { Text } from 'components';

import styles from './Logo.module.scss';

export type LogoProps = {
  className?: ClassValue | ClassValue[];
  withName?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ className, withName = false }) => (
  <div className={clsx(styles.Logo, withName && styles['Logo--WithName'], className)}>
    <svg
      className={clsx(styles.Logo__Svg, withName && styles['Logo__Svg--WithName'])}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155.8 144.94"
    >
      <path d="M108.89 126.18H68.15a.59.59 0 0 1-.47-.94L113 63.81a.59.59 0 0 0-.47-.94H96.69A15 15 0 0 1 84.63 39L113.22.24a.59.59 0 0 1 1 0l41.48 62.29a.6.6 0 0 1 0 .68l-46.32 62.73a.58.58 0 0 1-.49.24Z" />
      <path d="M46.74 18.32H89L42.21 81.63h17a15 15 0 0 1 12.09 23.91l-29.09 39.4L0 81.63Z" />
    </svg>

    {withName && (
      <Text size="heading2" className={styles.Logo__Name}>
        zapal
      </Text>
    )}
  </div>
);
