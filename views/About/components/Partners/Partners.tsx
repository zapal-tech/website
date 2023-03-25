import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Partners.module.scss';

export const Partners = () => {
  const { t } = useTranslation(Namespace.About);

  return (
    <Container className={styles.Partners}>
      <div className={styles.Partners__TextContainer}>
        <Text className={styles.Partners__Title} uppercase size="heading1" type="h2">
          {t('partners.title')}
        </Text>

        <Text className={styles.Partners__Subtitle} uppercase size="tiny">
          {t('partners.subtitle')}
        </Text>
      </div>

      <div className={styles.Partners__Slider} />
    </Container>
  );
};
