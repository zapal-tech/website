import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { ReadMoreCard } from './components/ReadMoreCard/ReadMoreCard';
import { TeamMemberCard } from './components/TeamMemberCard/TeamMemberCard';

import styles from './Team.module.scss';

const Particles = dynamic(() => import('../Particles/Particles').then((mod) => mod.Particles), { ssr: false });

type TeamProps = Pick<HomeProps, 'team'>;

export const Team: React.FC<TeamProps> = ({ team }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <div id="team" className={styles.Team}>
      <Container className={styles.Team__Section}>
        <Particles id="team-particles" className={styles.Team__Particles} />

        <Text className={styles.Team__Title} uppercase type="h2" size="heading1">
          {t('team.title')}
        </Text>
      </Container>

      <div className={styles.Team__MembersContainer}>
        <Container className={styles.Team__Members}>
          {team.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}

          <ReadMoreCard className={clsx(styles.Team__ReadMoreCard, styles['Team__ReadMoreCard--Tablet'])} />
        </Container>
      </div>

      <Container className={clsx(styles.Team__Section, styles['Team__Section--Default'])}>
        <ReadMoreCard className={clsx(styles.Team__ReadMoreCard, styles['Team__ReadMoreCard--Default'])} />
      </Container>
    </div>
  );
};
