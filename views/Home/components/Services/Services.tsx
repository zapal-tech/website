import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

type ServicesProps = Pick<HomeProps, 'services'>;

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Services}>
      <Text id="services" uppercase size="heading1">
        {t('services.title')}
      </Text>

      <div className={styles.Services__Icons}>
        {services.map((service) => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </div>
    </Container>
  );
};
