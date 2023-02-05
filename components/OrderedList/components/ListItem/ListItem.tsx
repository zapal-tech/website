import clsx, { ClassValue } from 'clsx';

import { Text } from 'components';

import styles from './ListItem.module.scss';

export type ListItemProps = {
  children: React.ReactNode;
  className?: ClassValue | ClassValue[];
};

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => (
  <li className={clsx(styles.ListItem, className)}>
    <Text type="span">{children}</Text>
  </li>
);
