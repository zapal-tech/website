import clsx, { ClassValue } from 'clsx';

import { useWindowSize } from 'hooks';

import { Text } from 'components';

import media from 'styles/media.module.scss';

import styles from './Button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  className?: ClassValue | ClassValue[];
  variant?: 'primary' | 'secondary';
  slider?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', slider = true, onClick }) => {
  const windowSize = useWindowSize();

  return (
    <button
      className={clsx(
        styles.Button,
        variant === 'primary' && styles['Button--Primary'],
        variant === 'secondary' && styles['Button--Secondary'],
        className,
      )}
      onClick={onClick}
    >
      <Text
        size={
          windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop)
            ? variant === 'primary'
              ? 'heading2'
              : 'tiny'
            : 'small'
        }
        className={[styles.Button__Text, slider && styles['Button__Text--WithSlider']]}
      >
        {children}
      </Text>
    </button>
  );
};
