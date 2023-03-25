import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { TeamMemberPreview } from 'types/team';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Card, Container, Text } from 'components';

import { HomeProps } from 'views/HomePage/HomePage';

import { Namespace } from 'i18n';

import { TeamMemberCard } from './components/TeamMemberCard/TeamMemberCard';

import styles from './Team.module.scss';

export const Team = () => {
  const { pageProps } = useGlobalContext<HomeProps>();
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Team}>
      <Text className={styles.Team__Title} uppercase type="h2" size="heading1">
        {t('team.title')}
      </Text>

      <div className={styles.Team__Members}>
        {pageProps.team.map((member) => (
          <TeamMemberCard key={member.firstName} href={'/about'} {...member} />
        ))}

        <div className={styles.Team__MoreContainer}>
          <Link className={styles.Team__MoreContainer} href={'/about'}>
            <Card className={styles.Team__More} frameType="corner">
              <Text uppercase>{t('team.readMore')}</Text>
            </Card>
          </Link>
        </div>
      </div>
    </Container>
  );
};
