import Link from 'next/link';

import { Button, Text } from 'components';

import styles from './OurServiceCard.module.scss';

export type OurServiceCardProps = {
  order: string;
  title: string;
  subtitle: string;
  href: string;
};

export const OurServiceCard: React.FC<OurServiceCardProps> = ({ order, title, subtitle, href }) => (
  <Link href={href} className={styles.OurServiceCard}>
    <div className={styles.OurServiceCard__TitleContainer}>
      <Text size="heading3" className={styles.OurServiceCard__Order}>
        {order}
      </Text>
      <Text uppercase size="heading3" className={styles.OurServiceCard__Title}>
        {title}
      </Text>
    </div>
    <Text size="small" className={styles.OurServiceCard__Subtitle}>
      {subtitle}
    </Text>
  </Link>
);
