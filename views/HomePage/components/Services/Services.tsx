import DesktopIcon from 'public/icons/desktop.svg';
import GridIcon from 'public/icons/grid.svg';
import ShieldCheckIcon from 'public/icons/shield-check.svg';
import BoxIcon from 'public/icons/box.svg';
import HashtagIcon from 'public/icons/hashtag.svg';
import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

const services = [
  { icon: DesktopIcon, title: 'Websites' },
  { icon: GridIcon, title: 'Mobile & web apps' },
  { icon: ShieldCheckIcon, title: 'Software audit' },
  { icon: BoxIcon, title: 'Back-end' },
  { icon: HashtagIcon, title: 'Front-end' },
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
          {services.map(({ icon, title }) => (
            <ServiceItem key={title} Icon={icon} title={title} />
          ))}
        </div>
      </section>
    </Container>
  );
};
