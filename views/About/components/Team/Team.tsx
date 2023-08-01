import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { AboutProps } from 'views/About/About';

import { TeamMemberCard } from './TeamMemberCard/TeamMemberCard';

import styles from './Team.module.scss';

type TeamProps = Pick<AboutProps, 'team'>;

export const Team: React.FC<TeamProps> = ({ team }) => {
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
        {team.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </Container>
  );
};
