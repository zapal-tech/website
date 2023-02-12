import { ClassValue } from 'clsx';
import Link from 'public/icons/link.svg';

import { Divider, Text } from 'components';

import styles from './ServiceItem.module.scss';

export type ServiceItemProps = {
  Icon: any;
  title: string;
  link?: string;
  className?: ClassValue | ClassValue[];
};

export const ServiceItem: React.FC<ServiceItemProps> = ({ Icon, title }) => (
  <div className={styles.Item}>
    <div className={styles.Item__Block}>
      <div className={styles.Item__Content}>
        <Icon className={styles.Item__Icon} />

        <Text uppercase size="heading3">
          {title}
        </Text>
      </div>

      <Link className={styles.Item__Icon} />
    </div>

    <Divider className={styles.Item__Divider} />
  </div>
);
