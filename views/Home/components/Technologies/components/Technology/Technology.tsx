import { Technology as TechnologyType } from 'types/technologies';

import { Card, Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './Technology.module.scss';

export const Technology: React.FC<TechnologyType> = ({ attributes: { icon, title, description } }) => (
  <li className={styles.Technology} tabIndex={0}>
    <div className={styles.Technology__InnerContainer}>
      <div className={styles.Technology__Icon}>
        <Image
          className={styles.Technology__ImageContainer}
          imageClassName={styles.Technology__Image}
          image={icon}
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
          {title}
        </Text>

        <Text className={styles.Technology__Description} size="tiny">
          {description}
        </Text>
      </Card>
    </div>
  </li>
);
