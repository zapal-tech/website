import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';

import LinkIcon from 'public/icons/link.svg';

import { Routes } from 'types/routes';
import { Service } from 'types/services';

import { Divider, Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './ServiceItem.module.scss';

export type ServiceItemProps = Service & {
  className?: ClassValue | ClassValue[];
};

export const ServiceItem: React.FC<ServiceItemProps> = ({ className, name, icon, slug }) => (
  <Link href={`${Routes.About}#${slug}`} className={clsx(styles.ServiceItem, className)}>
    <div className={styles.ServiceItem__Content}>
      <Image className={styles.ServiceItem__Icon} image={icon} alt="service decoration icon" unoptimized />

      <Text uppercase size="heading3" className={styles.ServiceItem__Text}>
        {name}
      </Text>

      <LinkIcon className={styles.ServiceItem__Link} />
    </div>

    <Divider className={styles.ServiceItem__Divider} />
  </Link>
);
