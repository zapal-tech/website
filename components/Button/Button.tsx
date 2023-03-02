import clsx, { ClassValue } from 'clsx';

import styles from './Button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  className?: ClassValue | ClassValue[];
  variant?: 'primary' | 'secondary';
  slider?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', slider = true, onClick }) => (
  <button
    className={clsx(
      styles.Button,
      variant === 'primary' && styles['Button--Primary'],
      variant === 'secondary' && styles['Button--Secondary'],
      slider && styles['Button--WithSlider'],
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
