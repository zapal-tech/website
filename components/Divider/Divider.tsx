import clsx, { ClassValue } from 'clsx';

import styles from './Divider.module.scss';

export type DividerProps = {
  className?: ClassValue | ClassValue[];
};

export const Divider: React.FC<DividerProps> = ({ className }) => (
  <div className={clsx(styles.Divider, className)}>
    <hr />
  </div>
);
