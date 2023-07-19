import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

import { Namespace } from 'configs/i18n';

import { Partner } from 'types/partners';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Ticker } from 'components/Ticker/Ticker';

import { HomeProps } from 'views/Home/Home';

import media from 'styles/media.module.scss';

import styles from './Partners.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Partners = () => {
  const {
    pageProps: { partners },
    openModal,
  } = useGlobalContext<HomeProps>();
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  const isLaptop = useMediaQuery(`(min-width: ${media.breakpointLaptop})`);
  const openContactForm = () => openModal(ContactForm);

  return (
    <div>
      <Container>
        <div className={styles.Partners}>
          <Text className={styles.Partners__Title} type="h2" size="heading1" uppercase>
            {t('partners.title')}
          </Text>
        </div>

        <Text className={styles.Partners__Subtitle} type="h3" size="heading3">
          {t('partners.subtitle')}
        </Text>
      </Container>

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
