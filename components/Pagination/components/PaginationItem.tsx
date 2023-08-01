import { Text } from 'components/Text/Text';

import styles from '../Pagination.module.scss';

type PaginationItemProps = React.PropsWithChildren<{
  [key: string]: any;
}>;

export const PaginationItem: React.FC<PaginationItemProps> = ({ children }) => (
  <li className={styles.Pagination__Item}>
    <Text>{children}</Text>
  </li>
);
