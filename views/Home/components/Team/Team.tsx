import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { ReadMoreCard } from './components/ReadMoreCard/ReadMoreCard';
import { TeamMemberCard } from './components/TeamMemberCard/TeamMemberCard';

import media from 'styles/media.module.scss';

import styles from './Team.module.scss';

const Particles = dynamic(() => import('../Particles/Particles').then((mod) => mod.Particles), { ssr: false });

type TeamProps = Pick<HomeProps, 'team'>;

export const Team: React.FC<TeamProps> = ({ team }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Team}>
      <Particles id="team-particles" className={styles.Team__Particles} />

      <Text className={styles.Team__Title} uppercase type="h2" size="heading1">
        {t('team.title')}
      </Text>

      <div className={styles.Team__Members}>
        {team.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}

        <ReadMoreCard className={clsx(styles.Team__ReadMoreCard, styles['Team__ReadMoreCard--Tablet'])} />
      </div>

      <ReadMoreCard className={clsx(styles.Team__ReadMoreCard, styles['Team__ReadMoreCard--Default'])} />
    </Container>
  );
};
