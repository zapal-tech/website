import styles from './Container.module.scss';

export type ContainerProps = {
  children: React.ReactNode;
};
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
