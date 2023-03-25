import { useTranslation } from 'next-i18next';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ServiceCard } from './components/OurServiceCard/ServiceCard';

import styles from './Services.module.scss';

const servicesList = [
  {
    title: 'WEB APPS DEVELOPMENT',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur. Sed mauris interdum vulputate mattis ultricies. Donec nam lorem enim adipiscing dolor ipsum lacus risus semper. Euismod ut dictum in massa etiam integer malesuada leo varius',
  },
  {
    title: 'MOBILE APPS Development',
    subtitle:
      'ipsum dolor sit amet consectetur. Elementum volutpat sit blandit pulvinar quis blandit. ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur. Elementum volutpat sit blandit ',
  },
  {
    title: 'Technical AUDIT',
    subtitle:
      'if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna',
  },
  {
    title: 'Devops Services',
    subtitle:
      'if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna text text text text if your tku dolor sit amet consectetur. Elementum volutpat sit blandit magna if your tku dolor sit amet  ',
  },
  {
    title: 'UI/UX Design',
    subtitle:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
  {
    title: 'Quality Assurance Services',
    subtitle:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
  {
    title: 'IT Consulting',
    subtitle:
      'tku dolor sit amet consectetur. Elementum volutpat sit blandit magna sit blandit magna pulvinar quis blandit. Enim elit in tku dolor sit amet consectetur. Elementum tku dolor  consectetur. text some',
  },
];

export const Services = () => {
  const { t } = useTranslation(Namespace.About);

  const getOrder = (index: number) => `${index + 1}`.padStart(2, '0');

  return (
    <Container>
      <Text className={styles.Services__Title} size="heading1" type="h2" uppercase>
        {t('services.title')}
      </Text>

      <div className={styles.Services__List}>
        {servicesList.map((service, idx) => (
          <ServiceCard key={service.title} href={'/about'} {...service} order={getOrder(idx)} />
        ))}
      </div>
      <Button className={styles.Services__Button}>BECOME A CLIENT</Button>
    </Container>
  );
};