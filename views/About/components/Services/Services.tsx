import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Button, Container, Text } from 'components';

import { AboutProps } from 'views/About/About';

import { ServiceCard } from './components/OurServiceCard/ServiceCard';

import styles from './Services.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

type ServicesProps = Pick<AboutProps, 'services'>;

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const { t } = useTranslation([Namespace.About, Namespace.Common]);
  const { openModal } = useGlobalContext();

  const openContactForm = () => openModal(ContactForm);

  return (
    <Container>
      <Text id="services" className={styles.Services__Title} size="heading1" type="h2" uppercase>
        {t('services.title')}
      </Text>

      <div className={styles.Services__List}>
        {services.map((service, idx) => (
          <ServiceCard key={service.id} order={idx + 1} {...service} />
        ))}
      </div>

      <Button className={styles.Services__Button} onClick={openContactForm}>
        {t('becomeAClient', { ns: Namespace.Common })}
      </Button>
    </Container>
  );
};
