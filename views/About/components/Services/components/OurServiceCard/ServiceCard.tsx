import Link from 'next/link';

import { Button, Text } from 'components';

import styles from './ServiceCard.module.scss';

export type OurServiceCardProps = {
  order: string;
  title: string;
  subtitle: string;
  href: string;
};

export const ServiceCard: React.FC<OurServiceCardProps> = ({ order, title, subtitle, href }) => (
  <Link href={href} className={styles.ServiceCard}>
    <div className={styles.ServiceCard__TitleContainer}>
      <Text size="heading3" className={styles.ServiceCard__Order}>
        {order}
      </Text>
      <Text uppercase size="heading3" className={styles.ServiceCard__Title}>
        {title}
      </Text>
    </div>
    <Text size="small" className={styles.ServiceCard__Subtitle}>
      {subtitle}
    </Text>
  </Link>
);
