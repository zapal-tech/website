import clsx, { ClassValue } from 'clsx';

import styles from './Card.module.scss';

export type CardProps = {
  className?: ClassValue | ClassValue[];
  frameType?: 'corner' | 'full';
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, frameType, children }) => (
  <div
    className={clsx(
      styles.Card,
      frameType === 'corner' && styles['Card--CornerFrame'],
      frameType === 'full' && styles['Card--FullFrame'],
      className,
    )}
  >
    {frameType === 'corner' && (
      <>
        <span className={clsx(styles.Card__Corner, styles['Card__Corner--TopLeft'])} />
        <span className={clsx(styles.Card__Corner, styles['Card__Corner--TopRight'])} />
        <span className={clsx(styles.Card__Corner, styles['Card__Corner--BottomLeft'])} />
        <span className={clsx(styles.Card__Corner, styles['Card__Corner--BottomRight'])} />
      </>
    )}

    {children}
  </div>
);
