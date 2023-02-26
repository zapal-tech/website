import { useTranslation } from 'next-i18next';

import { useMediaQuery } from 'hooks';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Partners.module.scss';

export const Partners = () => {
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  return (
    <Container>
      <div className={styles.Partners}>
        <Text className={styles.Partners__Title} type="h2" size="heading1" uppercase>
          {t('partners.title')}
        </Text>

        {isLaptop ? (
          <Text className={styles.Partners__AfterTitle}>
            {t('partners.titleAfter.upper')} <br />
            {t('partners.titleAfter.lower')}
          </Text>
        ) : null}
      </div>

      <Text className={styles.Partners__Subtitle} type="h3" size="heading3">
        {t('partners.subtitle')}
      </Text>

      <div className={styles.Partners__Slider}>
        <Text className={styles.Partners__SliderText} size="heading2">
          Slider
        </Text>
      </div>

      <Text className={styles.Partners__Text} size="heading3">
        {t('partners.text')}
      </Text>

      <Button className={styles.Partners__Button}>{t('becomeAClient', { ns: Namespace.Common })}</Button>
    </Container>
  );
};
