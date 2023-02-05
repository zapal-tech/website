import clsx, { ClassValue } from 'clsx';

import styles from './Divider.module.scss';

export type DividerProps = {
  className?: ClassValue | ClassValue[];
};

export const Divider: React.FC<DividerProps> = ({ className }) => <hr className={clsx(styles.Divider, className)} />;
