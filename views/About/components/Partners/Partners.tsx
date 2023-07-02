import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import { Namespace } from 'configs/i18n';

import { Partner } from 'types/partners';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Ticker } from 'components/Ticker/Ticker';

import { AboutProps } from 'views/About/About';

import styles from './Partners.module.scss';

export const Partners = () => {
  const {
    pageProps: { partners },
  } = useGlobalContext<AboutProps>();
  const { t } = useTranslation(Namespace.About);

  return (
    <div>
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

      {
        <Ticker
          className={styles.Partners__Ticker}
          // TODO: remove this after adding more partners
          data={[...partners, ...partners]}
          renderItem={({ id, attributes: { image, name, website } }: Partner, idx) => (
            <Fragment key={idx}>
              {idx % 3 ? null : (
                <div className={clsx(styles.Partners__TickerItem, styles['Partners__TickerItem--Placeholder'])} />
              )}
              <a
                target="_blank"
                rel="noreferrer"
                href={website}
                className={clsx(styles.Partners__TickerItem, idx % 3 === 2 && styles['Partners__TickerItem--Wide'])}
              >
                <Image
                  className={styles.Partners__TickerImageContainer}
                  imageClassName={styles.Partners__TickerImage}
                  image={image}
                  alt={name}
                  unoptimized
                />
              </a>
            </Fragment>
          )}
        />
      }
    </div>
  );
};
