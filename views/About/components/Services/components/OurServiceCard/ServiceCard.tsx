import { Service } from 'types/services';

import { Text } from 'components';

import styles from './ServiceCard.module.scss';

export type OurServiceCardProps = Service;

export const ServiceCard: React.FC<OurServiceCardProps> = ({ order, slug, name, description }) => (
  <div id={slug} className={styles.ServiceCard}>
    <div className={styles.ServiceCard__TitleContainer}>
      <Text size="heading3" className={styles.ServiceCard__Order}>
        {order.toString().padStart(2, '0')}
      </Text>

      <Text uppercase size="heading3" className={styles.ServiceCard__Title}>
        {name}
      </Text>
    </div>

    <Text size="small" className={styles.ServiceCard__Description}>
      {description}
    </Text>
  </div>
);
