import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';
import { Ticker } from 'components/Ticker/Ticker';

import { AboutProps } from 'views/About/About';

import { Namespace } from 'i18n';

import styles from './Partners.module.scss';

export const Partners = () => {
  const {
    pageProps: { partners },
  } = useGlobalContext<AboutProps>();
  const { t } = useTranslation(Namespace.About);

  return (
    <div className="">
      <Container className={styles.Partners}>
        <div className={styles.Partners__Container}>
          <Text className={styles.Partners__Title} uppercase size="heading1" type="h2">
            {t('partners.title')}
          </Text>

          <Text className={styles.Partners__Subtitle} uppercase size="tiny">
            {t('partners.subtitle')}
          </Text>
        </div>
      </Container>

      <Ticker
        className={styles.Partners__Ticker}
        data={partners}
        duration={20000}
        renderItem={(item, idx) => (
          <Fragment key={item.id}>
            {idx % 3 ? null : (
              <div className={clsx(styles.Partners__TickerItem, styles['Partners__TickerItem--Placeholder'])} />
            )}
            <Text
              key={item.id}
              className={clsx(styles.Partners__TickerItem, idx % 3 === 2 && styles['Partners__TickerItem--Wide'])}
              uppercase
              size="tiny"
            >
              {item.name}
            </Text>
          </Fragment>
        )}
      />
    </div>
  );
};
