import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import BoxIcon from 'public/icons/box.svg';
import DesktopIcon from 'public/icons/desktop.svg';
import GridIcon from 'public/icons/grid.svg';
import HashtagIcon from 'public/icons/hashtag.svg';
import ShieldCheckIcon from 'public/icons/shield-check.svg';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

export const Services: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const services = useMemo(
    () => [
      { icon: DesktopIcon, title: t('services.webDev'), slug: 'web-apps-development' },
      { icon: GridIcon, title: t('services.mobDev'), slug: 'mobile-apps-development' },
      { icon: ShieldCheckIcon, title: t('services.techAudit'), slug: 'technical-audit' },
      { icon: BoxIcon, title: t('services.DevOps'), slug: 'devops-services' },
      { icon: HashtagIcon, title: t('services.UI/UX'), slug: 'ui-ux-design' },
      { icon: HashtagIcon, title: t('services.QA'), slug: 'quality-assurance-services' },
      { icon: HashtagIcon, title: t('services.ItConsult'), slug: 'it-consulting' },
    ],
    [t],
  );

  return (
    <Container className={styles.Services}>
      <Text uppercase size="heading1">
        {t('services.title')}
      </Text>

      <div className={styles.Services__Icons}>
        {services.map(({ icon, title, slug }) => (
          <ServiceItem key={title} icon={icon} title={title} href={`/about#${slug}`} />
        ))}
      </div>
    </Container>
  );
};
