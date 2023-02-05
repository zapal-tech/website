import React from 'react';

import styles from '../Container/Container.module.scss';

type Container = {
  children: React.ReactNode;
};
export const Container: React.FC<Container> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
