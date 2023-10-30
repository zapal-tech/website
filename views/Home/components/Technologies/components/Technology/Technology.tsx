import { Technology as TechnologyType } from 'types/technologies';

import { Card, Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './Technology.module.scss';

export const Technology: React.FC<TechnologyType> = ({ logo, name, description }) => (
  <li className={styles.Technology} tabIndex={0}>
    <div className={styles.Technology__InnerContainer}>
      <div className={styles.Technology__Icon}>
        <Image
          className={styles.Technology__ImageContainer}
          imageClassName={styles.Technology__Image}
          image={logo}
          unoptimized
        />
      </div>

      <Card
        type="figcaption"
        className={styles.Technology__DescriptionContainer}
        cornerClassName={styles.Technology__Corner}
        frameType="corner"
        small
      >
        <Text className={styles.Technology__Title} size="small">
          {name}
        </Text>

        <Text className={styles.Technology__Description} size="tiny">
          {description}
        </Text>
      </Card>
    </div>
  </li>
);
