import clsx, { ClassValue } from 'clsx';
import React from 'react';

import styles from './Text.module.scss';

export type TextProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'heading1' | 'heading2' | 'heading3' | 'default' | 'small' | 'tiny';
  uppercase?: boolean;
  className?: ClassValue | ClassValue[];
  children: React.ReactNode;
  id?: string;
} & React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement>;

export const Text: React.FC<TextProps> = ({
  type = 'p',
  size = 'default',
  className,
  children,
  uppercase = false,
  ...props
}) =>
  React.createElement(
    type,
    {
      ...props,
      className: clsx(
        styles.Text,
        uppercase && styles['Text--Uppercase'],
        size === 'heading1' && styles.Heading1,
        size === 'heading2' && styles.Heading2,
        size === 'heading3' && styles.Heading3,
        size === 'default' && styles.Body,
        size === 'small' && styles.Small,
        size === 'tiny' && styles.Tiny,
        className,
      ),
    },
    children,
  );
