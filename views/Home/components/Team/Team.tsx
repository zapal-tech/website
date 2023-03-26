import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { TeamMemberPreview } from 'types/team';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Card, Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { Namespace } from 'i18n';

import { ReadMoreCard } from './components/ReadMoreCard/ReadMoreCard';
import { TeamMemberCard } from './components/TeamMemberCard/TeamMemberCard';

import media from 'styles/media.module.scss';

import styles from './Team.module.scss';

export const Team = () => {
  const { pageProps } = useGlobalContext<HomeProps>();
  const { t } = useTranslation(Namespace.Home);

  const isTablet = useMediaQuery({ width: { min: parseInt(media.breakpointTablet) } });

  return (
    <Container className={styles.Team}>
      <Text className={styles.Team__Title} uppercase type="h2" size="heading1">
        {t('team.title')}
      </Text>

      <div className={styles.Team__Members}>
        {pageProps.team.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}

        {isTablet && <ReadMoreCard />}
      </div>

      {!isTablet && <ReadMoreCard />}
    </Container>
  );
};
