import { useTranslation } from 'next-i18next';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Button, Container, Text } from 'components';

import { AboutProps } from 'views/About/About';

import { Namespace } from 'i18n';

import { ServiceCard } from './components/OurServiceCard/ServiceCard';

import styles from './Services.module.scss';

const servicesList = [
  {
    name: 'Web apps development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sed mauris interdum vulputate mattis ultricies. Donec nam lorem enim adipiscing dolor ipsum lacus risus semper. Euismod ut dictum in massa etiam integer malesuada leo varius',
  },
  {
    name: 'Mobile apps development',
    description:
      'ipsum dolor sit amet consectetur. Elementum volutpat sit blandit pulvinar quis blandit. ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur. Elementum volutpat sit blandit ',
  },
  {
    name: 'Technical AUDIT',
    description:
      'if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna',
  },
  {
    name: 'DevOps Services',
    description:
      'if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna text text text text if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna if your tku dolor sit amet  ',
  },
  {
    name: 'UI/UX Design',
    description:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
  {
    name: 'Quality Assurance Services',
    description:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
  {
    name: 'IT Consulting',
    description:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
];

export const Services = () => {
  const { t } = useTranslation([Namespace.About, Namespace.Common]);
  const { pageProps } = useGlobalContext<AboutProps>();

  return (
    <Container>
      <Text className={styles.Services__Title} size="heading1" type="h2" uppercase>
        {t('services.title')}
      </Text>

      <div className={styles.Services__List}>
        {pageProps.services.map((service) => (
          <ServiceCard key={service.order} {...service} />
        ))}
      </div>

      <Button className={styles.Services__Button}>{t('becomeAClient', { ns: Namespace.Common })}</Button>
    </Container>
  );
};
