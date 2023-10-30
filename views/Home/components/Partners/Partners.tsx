import { Fragment } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { Partner } from 'types/partners';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Button, Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Ticker } from 'components/Ticker/Ticker';

import { HomeProps } from 'views/Home/Home';

import styles from './Partners.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

type PartnersProps = Pick<HomeProps, 'partners'>;

export const Partners: React.FC<PartnersProps> = ({ partners }) => {
  const { openModal } = useGlobalContext();
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  const openContactForm = () => openModal(ContactForm);

  return (
    <div className={styles.Partners}>
      <Container>
        <Text className={styles.Partners__Title} type="h2" size="heading1" uppercase>
          {t('partners.title')}
        </Text>
      </Container>

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
              className={clsx(styles.Partners__TickerItem, viewType === 'big' && styles['Partners__TickerItem--Wide'])}
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
