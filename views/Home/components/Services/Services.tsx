import { useTranslation } from 'next-i18next';

// import BoxIcon from 'public/icons/box.svg';
// import DesktopIcon from 'public/icons/desktop.svg';
// import GridIcon from 'public/icons/grid.svg';
// import HashtagIcon from 'public/icons/hashtag.svg';
// import ShieldCheckIcon from 'public/icons/shield-check.svg';
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

  // const services = useMemo(
  //   () => [
  //     { icon: DesktopIcon, title: t('services.webDev'), slug: 'web-apps-development' },
  //     { icon: GridIcon, title: t('services.mobDev'), slug: 'mobile-apps-development' },
  //     { icon: ShieldCheckIcon, title: t('services.techAudit'), slug: 'technical-audit' },
  //     { icon: BoxIcon, title: t('services.DevOps'), slug: 'devops-services' },
  //     { icon: HashtagIcon, title: t('services.UI/UX'), slug: 'ui-ux-design' },
  //     { icon: HashtagIcon, title: t('services.QA'), slug: 'quality-assurance-services' },
  //     { icon: HashtagIcon, title: t('services.ItConsult'), slug: 'it-consulting' },
  //   ],
  //   [t],
  // );

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
