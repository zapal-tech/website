import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Ticker } from 'components/Ticker/Ticker';

import { HomeProps } from 'views/Home/Home';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Partners.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Partners = () => {
  const {
    pageProps: { partners },
    openModal,
  } = useGlobalContext<HomeProps>();
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });
  const openContactForm = () => openModal(ContactForm);

  return (
    <div>
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
            <Image
              key={item.id}
              className={clsx(styles.Partners__TickerItem, idx % 3 === 2 && styles['Partners__TickerItem--Wide'])}
              src={item.logoUrl}
              alt={item.name}
              noSize
            />
          </Fragment>
        )}
      />

      <Container>
        <Text className={styles.Partners__Text} size="heading3">
          {t('partners.text')}
        </Text>

        <Button className={styles.Partners__Button} onClick={openContactForm}>
          {t('becomeAClient', { ns: Namespace.Common })}
        </Button>
      </Container>
    </div>
  );
};
