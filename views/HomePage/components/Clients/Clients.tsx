import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Clients.module.scss';

export const Clients = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation([Namespace.Home, Namespace.Navigation]);

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  return (
    <Container>
      <div className={styles.Clients}>
        <Text className={styles.Clients__Title} type="h1" size="heading1" uppercase>
          {t('clients.title')}
        </Text>
        {isLaptop ? (
          <Text className={styles.Clients__AfterTitleLaptopContent} size="default">
            {t('clients.titleAfter.upper')} <br />
            {t('clients.titleAfter.lower')}
          </Text>
        ) : (
          ''
        )}
      </div>
      <Text className={styles.Clients__Subtitle} type="h3" size="heading3">
        {t('clients.subtitle')}
      </Text>
      <div className={styles.Clients__Slider}>
        <Text className={styles.Clients__SliderText} type="h3" size="heading2">
          Slider
        </Text>
      </div>
      <Text className={styles.Clients__Text} type="h3" size="heading3">
        {t('clients.text')}
      </Text>
      <Button className={styles.Clients__Button}>{t('becomeAClient.title', { ns: Namespace.Navigation })}</Button>
    </Container>
  );
};
