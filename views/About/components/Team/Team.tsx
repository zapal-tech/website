import { useTranslation } from 'next-i18next';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';

import { AboutProps } from 'views/About/About';

import { Namespace } from 'i18n';

import { TeamMemberCard } from './TeamMemberCard/TeamMemberCard';

import styles from './Team.module.scss';

export const Team = () => {
  const { pageProps } = useGlobalContext<AboutProps>();

  const { t } = useTranslation(Namespace.About);

  return (
    <Container className={styles.Team}>
      <Text id="team" className={styles.Team__Title} size="heading1" uppercase>
        {t('aboutZapal.title')}
      </Text>
      <Text className={styles.Team__Subtitle} type="h5" size="small">
        {t('aboutZapal.subtitle')}
      </Text>

      <div className={styles.Team__CircleContainer}>
        <Text className={styles.Team__Description} size="heading3">
          {t('aboutZapal.description')}
        </Text>

        <div className={styles.Team__Circle} />
      </div>

      <div className={styles.Team__Members}>
        {pageProps.team.map((member) => (
          <TeamMemberCard key={member.firstName} {...member} />
        ))}
      </div>
    </Container>
  );
};
