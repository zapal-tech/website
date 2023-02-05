import { Text } from 'components';
import { Container } from 'components/Container/Container';

import { Animation } from './Animation/Animation';
import { ItemsGrid } from './ItemsGrid/ItemsGrid';

import styles from '../Technologies/Technologies.module.scss';

export const Technologies: React.FC = () => {
  return (
    <Container>
      <div className={styles.Technologies}>
        <Text size="heading1">WE USE</Text>
        <div className={styles.Technologies__TechBox}>
          <div className={styles.Technologies__Grid}>
            <ItemsGrid className={styles.Technologies__Grid__Items} />
          </div>
          <div className={styles.Technologies__Animation}>
            <Animation />
          </div>
        </div>
      </div>
    </Container>
  );
};
