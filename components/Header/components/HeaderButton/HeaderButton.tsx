import clsx, { ClassValue } from 'clsx';

import styles from './HeaderButton.module.scss';

export type HeaderButtonProps = {
  className?: ClassValue | ClassValue[];
  children: React.ReactNode;
  onClick?: () => void;
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({ className, children, onClick }) => (
  <button className={clsx(styles.HeaderButton, className)} onClick={onClick}>
    {children}
  </button>
);
