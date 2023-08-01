import clsx, { ClassValue } from 'clsx';
import React from 'react';

import styles from './Container.module.scss';

export type ContainerProps = {
  type?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'footer' | 'header';
  id?: string;
  className?: ClassValue | ClassValue[];
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ type = 'div', className, children, ...props }) =>
  React.createElement(type, { ...props, className: clsx(styles.Container, className) }, children);
