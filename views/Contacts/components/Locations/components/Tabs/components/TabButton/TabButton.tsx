import clsx from 'clsx';

import { Text } from 'components';

import styles from './TabButton.module.scss';

export type TabButtonProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const TabButton: React.FC<TabButtonProps> = ({ active, children, onClick }) => (
  <button className={clsx(styles.TabButton, active && styles['TabButton--Active'])} onClick={onClick}>
    <Text type="h5" size="small" uppercase>
      {children}
    </Text>
  </button>
);
