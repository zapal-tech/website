import clsx, { ClassValue } from 'clsx';
import dynamic from 'next/dynamic';

import styles from './Logo.module.scss';

export type LogoProps = {
  className?: ClassValue | ClassValue[];
  withName?: boolean;
};

const LogoIcon = dynamic<React.SVGProps<SVGSVGElement>>(() =>
  import('public/icons/logo.svg').then((mod) => mod.default),
);
const LogoWithNameIcon = dynamic<React.SVGProps<SVGSVGElement>>(() =>
  import('public/icons/logo-with-name.svg').then((mod) => mod.default),
);

export const Logo: React.FC<LogoProps> = ({ className, withName = false }) => (
  <div className={clsx(styles.Logo, withName && styles['Logo--WithName'], className)}>
    {withName ? (
      <LogoWithNameIcon className={clsx(styles.Logo__Svg, styles['Logo__Svg--Name'])} />
    ) : (
      <LogoIcon className={clsx(styles.Logo__Svg, styles['Logo__Svg--Clean'])} />
    )}
  </div>
);
