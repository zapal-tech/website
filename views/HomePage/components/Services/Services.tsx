import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import BoxIcon from 'public/icons/box.svg';
import DesktopIcon from 'public/icons/desktop.svg';
import GridIcon from 'public/icons/grid.svg';
import HashtagIcon from 'public/icons/hashtag.svg';
import ShieldCheckIcon from 'public/icons/shield-check.svg';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

export const Services: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const services = useMemo(
    () => [
      { icon: DesktopIcon, title: t('services.webDev'), path: '/about#web-apps-development' },
      { icon: GridIcon, title: t('services.mobDev'), path: '/about#mobile-apps-development' },
      { icon: ShieldCheckIcon, title: t('services.techAudit'), path: '/about#technical-audit' },
      { icon: BoxIcon, title: t('services.DevOps'), path: '/about#devops-services' },
      { icon: HashtagIcon, title: t('services.UI/UX'), path: '/about#ui-ux-design' },
      { icon: HashtagIcon, title: t('services.QA'), path: '/about#quality-assurance-services' },
      { icon: HashtagIcon, title: t('services.ItConsult'), path: '/about#it-consulting' },
    ],
    [t],
  );

  return (
    <Container className={styles.Services}>
      <Text uppercase size="heading1">
        {t('services.title')}
      </Text>

      <div className={styles.Services__Icons}>
        {services.map(({ icon, title }) => (
          <ServiceItem key={title} icon={icon} title={title} href={path} />
        ))}
      </div>
    </Container>
  );
};
