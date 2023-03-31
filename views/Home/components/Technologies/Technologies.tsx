import { useTranslation } from 'next-i18next';

import { useMediaQuery } from 'hooks/useMediaQuery';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { Animation } from './Animation/Animation';
import { ItemsGrid } from './ItemsGrid/ItemsGrid';

import media from 'styles/media.module.scss';

import styles from './Technologies.module.scss';

export const Technologies: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const isLargeTablet = useMediaQuery({ width: { min: parseInt(media.breakpointLargeTablet) } });

  return (
    <Container className={styles.Technologies}>
      <Text size="heading1" className={styles.Technologies__Title} uppercase>
        {t('technologies.title')}
      </Text>

      <div className={styles.Technologies__TechBox}>
        <ItemsGrid className={styles.Technologies__GridBlock} />

        {isLargeTablet && (
          <div className={styles.Technologies__AnimationBlock}>
            <Animation />
          </div>
        )}
      </div>
    </Container>
  );
};
