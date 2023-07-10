import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

export const Services: React.FC = () => {
  const {
    pageProps: { services },
  } = useGlobalContext<HomeProps>();
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Services}>
      <Text uppercase size="heading1">
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
