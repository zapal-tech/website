import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { Animation } from './Animation/Animation';
import { ItemsGrid } from './ItemsGrid/ItemsGrid';

import media from 'styles/media.module.scss';

import styles from './Technologies.module.scss';

export const Technologies: React.FC = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation(Namespace.Home);

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  return (
    <Container>
      <section className={styles.Technologies}>
        <Text size="heading1" uppercase>
          {t('technologies.title')}
        </Text>

        <div className={styles.Technologies__TechBox}>
          <div className={styles.Technologies__GridBlock}>
            <ItemsGrid />
          </div>

          {isLaptop && (
            <div className={styles.Technologies__AnimationBlock}>
              <Animation />
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};
