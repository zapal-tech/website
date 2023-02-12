import Application from '/public/services/application.svg';
import Backend from '/public/services/backend.svg';
import Frontend from '/public/services/frontend.svg';
import Software from '/public/services/software.svg';
import Website from '/public/services/website.svg';
import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

const serviceIconsArray = [
  { icon: Website, title: 'WEBSITES' },
  { icon: Application, title: 'MOBILE & WEB APPS' },
  { icon: Software, title: 'SOFTWARE AUDIT' },
  { icon: Frontend, title: 'BACK-END' },
  { icon: Backend, title: 'BACK-END' },
];

export const Services: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  return (
    <Container>
      <section className={styles.Services}>
        <Text uppercase size="heading1">
          {t('services.title')}
        </Text>

        <div className={styles.Services__Icons}>
          {serviceIconsArray.map((Icon, index) => (
            <ServiceItem Icon={Icon.icon} title={Icon.title} key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
};
