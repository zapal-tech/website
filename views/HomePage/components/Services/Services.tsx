import { useTranslation } from 'next-i18next';
import BoxIcon from 'public/icons/box.svg';
import DesktopIcon from 'public/icons/desktop.svg';
import GridIcon from 'public/icons/grid.svg';
import HashtagIcon from 'public/icons/hashtag.svg';
import ShieldCheckIcon from 'public/icons/shield-check.svg';
import { useMemo } from 'react';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ServiceItem } from './ServiceItem/ServiceItem';

import styles from './Services.module.scss';

export const Services: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const services = useMemo(
    () => [
      { icon: DesktopIcon, title: t('services.webDev') },
      { icon: GridIcon, title: t('services.mobDev') },
      { icon: ShieldCheckIcon, title: t('services.techAudit') },
      { icon: BoxIcon, title: t('services.DevOps') },
      { icon: HashtagIcon, title: t('services.UI/UX') },
      { icon: HashtagIcon, title: t('services.QA') },
      { icon: HashtagIcon, title: t('services.ItConsult') },
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
          <ServiceItem key={title} icon={icon} title={title} />
        ))}
      </div>
    </Container>
  );
};
