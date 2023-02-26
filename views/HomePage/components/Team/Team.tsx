import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Card, Container, Text } from 'components';

import { Namespace } from 'i18n';

import { TeamMemberCard } from './components/TeamMemberCard/TeamMemberCard';

import styles from './Team.module.scss';

const teamMembers = [
  {
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
    imageAlt: 'Bohdan Kucheriavyi, Founder',
    name: 'Bohdan Kucheriavyi',
    title: 'Founder',
  },
  {
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
    imageAlt: 'Ivan Salata, CSO',
    name: 'Ivan Salata',
    title: 'CSO',
  },
  {
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
    imageAlt: "Ronald, Bohdan's dog and CEO of company",
    name: 'Ronald',
    title: 'CEO',
  },
];

export const Team = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Team}>
      <Text className={styles.Team__Title} uppercase type="h2" size="heading1">
        {t('team.title')}
      </Text>

      <div className={styles.Team__Members}>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} href={'/about'} {...member} />
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
