import clsx, { ClassValue } from 'clsx';
import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  type?: 'div' | 'section' | 'ul' | 'li' | 'figure' | 'figcaption';
  className?: ClassValue | ClassValue[];
  cornerClassName?: ClassValue;
  frameType?: 'corner' | 'full';
  small?: boolean;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ type = 'div', className, cornerClassName, frameType, small, children }) =>
  React.createElement(
    type,
    {
      className: clsx(
        styles.Card,
        frameType === 'corner' && styles['Card--CornerFrame'],
        frameType === 'full' && styles['Card--FullFrame'],
        small && styles['Card--Small'],
        className,
      ),
    },
    <>
      {frameType === 'corner' && (
        <>
          <span
            className={clsx(
              styles.Card__Corner,
              cornerClassName,
              styles['Card__Corner--TopLeft'],
              small && styles['Card__Corner--Small'],
            )}
          />
          <span
            className={clsx(
              styles.Card__Corner,
              cornerClassName,
              styles['Card__Corner--TopRight'],
              small && styles['Card__Corner--Small'],
            )}
          />
          <span
            className={clsx(
              styles.Card__Corner,
              cornerClassName,
              styles['Card__Corner--BottomLeft'],
              small && styles['Card__Corner--Small'],
            )}
          />
          <span
            className={clsx(
              styles.Card__Corner,
              cornerClassName,
              styles['Card__Corner--BottomRight'],
              small && styles['Card__Corner--Small'],
            )}
          />
        </>
      )}

      {children}
    </>,
  );
