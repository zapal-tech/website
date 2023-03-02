import clsx, { ClassValue } from 'clsx';

import { ListItem, ListItemProps } from './components/ListItem/ListItem';

import styles from './OrderedList.module.scss';

export type OrderedListDataItem = ListItemProps & { id: string | number };

export type OrderedListProps = {
  data: OrderedListDataItem[];
  className?: ClassValue | ClassValue[];
};

export const OrderedList: React.FC<OrderedListProps> = ({ data, className }) => (
  <ol className={clsx(styles.OrderedList, className)}>
    {data.map(({ id, ...props }) => (
      <ListItem key={id} {...props} />
    ))}
  </ol>
);
