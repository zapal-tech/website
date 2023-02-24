import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';
import LinkIcon from 'public/icons/link.svg';

import { Divider, Text } from 'components';

import styles from './ServiceItem.module.scss';

export type ServiceItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href?: string;
  className?: ClassValue | ClassValue[];
};

export const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, href, className }) => (
  <Link href={'/'} className={styles.ServiceItem}>
    <div className={styles.ServiceItem__Content}>
      <Icon className={clsx(styles.ServiceItem__Icon)} />

      <Text uppercase size="heading3" className={styles.ServiceItem__Text}>
        {title}
      </Text>

      <LinkIcon className={clsx(styles.ServiceItem__Icon, styles['ServiceItem__Icon--Link'])} />
    </div>

    <Divider className={styles.ServiceItem__Divider} />
  </Link>
);
