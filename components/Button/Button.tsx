import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};
