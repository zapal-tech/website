import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './OurPartners.module.scss';

export const OurPartners = () => {
  const { t } = useTranslation(Namespace.About);

  return (
    <Container className={styles.OurPartners}>
      <div className={styles.OurPartners__TextContainer}>
        <Text className={styles.OurPartners__Title} uppercase size="heading1" type="h2">
          {t('OurPartners.title')}
        </Text>
        <Text className={styles.OurPartners__Subtitle} uppercase size="tiny">
          {t('OurPartners.subtitle')}
        </Text>
      </div>

      <div className={styles.OurPartners__Slider}></div>
    </Container>
  );
};
