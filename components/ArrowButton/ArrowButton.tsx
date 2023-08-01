import clsx, { ClassValue } from 'clsx';

import ChevronIcon from 'public/icons/chevron.svg';

import styles from './ArrowButton.module.scss';

export type ArrowButtonProps = {
  className?: ClassValue | ClassValue[];
  direction?: 'left' | 'right' | 'up' | 'down';
  disabled?: boolean;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({ className, direction = 'right', ...props }) => (
  <button
    className={clsx(
      styles.ArrowButton,
      {
        [styles['ArrowButton--Left']]: direction === 'left',
        [styles['ArrowButton--Right']]: direction === 'right',
        [styles['ArrowButton--Up']]: direction === 'up',
        [styles['ArrowButton--Down']]: direction === 'down',
      },
      className,
    )}
    {...props}
  >
    <ChevronIcon />
  </button>
);
