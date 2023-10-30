import { Fragment } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Partner } from 'types/partners';

import { Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Ticker } from 'components/Ticker/Ticker';

import { AboutProps } from 'views/About/About';

import styles from './Partners.module.scss';

type PartnersProps = Pick<AboutProps, 'partners'>;

export const Partners: React.FC<PartnersProps> = ({ partners }) => {
  const { t } = useTranslation(Namespace.About);

  return (
    <div className={styles.Partners}>
      <Container>
        <Text className={styles.Partners__Title} uppercase size="heading1" type="h2">
          {t('partners.title')}
        </Text>
      </Container>

      {
        <Ticker
          className={styles.Partners__Ticker}
          // TODO: remove this after adding more partners
          data={[...partners, ...partners]}
          renderItem={({ logo, name, url, viewType }: Partner, idx) => (
            <Fragment key={idx}>
              {idx % 3 ? null : (
                <div className={clsx(styles.Partners__TickerItem, styles['Partners__TickerItem--Placeholder'])} />
              )}

              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={url}
                className={clsx(
                  styles.Partners__TickerItem,
                  viewType === 'big' && styles['Partners__TickerItem--Wide'],
                )}
              >
                <Image
                  className={styles.Partners__TickerImageContainer}
                  imageClassName={styles.Partners__TickerImage}
                  image={logo}
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
