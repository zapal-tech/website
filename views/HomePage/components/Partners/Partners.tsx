import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Partners.module.scss';

export const Partners = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation([Namespace.Home, Namespace.Navigation]);

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  return (
    <Container>
      <div className={styles.Partners}>
        <Text className={styles.Partners__Title} type="h1" size="heading1" uppercase>
          {t('partners.title')}
        </Text>
        {isLaptop ? (
          <Text className={styles.Partners__AfterTitleLaptopContent} size="default">
            {t('partners.titleAfter.upper')} <br />
            {t('partners.titleAfter.lower')}
          </Text>
        ) : (
          ''
        )}
      </div>
      <Text className={styles.Partners__Subtitle} type="h3" size="heading3">
        {t('partners.subtitle')}
      </Text>
      <div className={styles.Partners__Slider}>
        <Text className={styles.Partners__SliderText} type="h3" size="heading2">
          Slider
        </Text>
      </div>
      <Text className={styles.Partners__Text} type="h3" size="heading3">
        {t('partners.text')}
      </Text>
      <Button className={styles.Partners__Button}>{t('becomeAClient.title', { ns: Namespace.Navigation })}</Button>
    </Container>
  );
};
