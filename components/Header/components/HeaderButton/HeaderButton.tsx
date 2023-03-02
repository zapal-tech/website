import clsx, { ClassValue } from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './HeaderButton.module.scss';

export type HeaderButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  className?: ClassValue | ClassValue[];
  children: React.ReactNode;
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx(styles.HeaderButton, className)} {...props}>
    {children}
  </button>
);
