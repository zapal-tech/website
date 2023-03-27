import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Partners.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Partners = () => {
  const { openModal } = useGlobalContext();
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  const openContactForm = () => openModal(ContactForm);

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

      <Button className={styles.Partners__Button} onClick={openContactForm}>
        {t('becomeAClient', { ns: Namespace.Common })}
      </Button>
    </Container>
  );
};
