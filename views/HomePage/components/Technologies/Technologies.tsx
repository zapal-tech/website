import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { Animation } from './Animation/Animation';
import { ItemsGrid } from './ItemsGrid/ItemsGrid';

import styles from './Technologies.module.scss';

export const Technologies: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container>
      <div className={styles.Technologies}>
        <Text size="heading1" uppercase>
          {t('technologies.title')}
        </Text>

        <div className={styles.Technologies__TechBox}>
          <div className={styles.Technologies__GridBlock}>
            <ItemsGrid />
          </div>

          <div className={styles.Technologies__AnimationBlock}>
            <Animation />
          </div>
        </div>
      </div>
    </Container>
  );
};
