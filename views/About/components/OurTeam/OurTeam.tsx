import { useTranslation } from 'next-i18next';

import TeamCircle from 'public/icons/team-circle.svg';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { TeamMemberCard } from './TeamMemberCard/TeamMemberCard';

import styles from './OurTeam.module.scss';

export const OurTeam = () => {
  const teamMembers = [
    {
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
      imageAlt: 'Bohdan Kucheriavyi, Founder',
      name: 'Bohdan Kucheriavyi',
      jobTitle: 'Founder',
      sutitle: 'Lorem ipsum dolor sit amet consectetur. Facilisi felis purus sed gravida erat volutpat ac.',
      socialLinks: {
        instagram: '',
        linkedIn: '',
        facebook: '',
      },
    },
    {
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
      imageAlt: 'Ivan Salata, Founder',
      name: 'Ivan Salata',
      jobTitle: 'Founder, CSO',
      sutitle: 'Lorem ipsum dolor sit amet consectetur. Facilisi felis purus sed gravida erat volutpat ac.',
      socialLinks: {
        instagram: '',
        linkedIn: '',
        facebook: '',
      },
    },
    {
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
      imageAlt: 'Ron, CEO',
      name: 'Ronald',
      jobTitle: 'CEO',
      sutitle: 'Lorem ipsum dolor sit amet consectetur. Facilisi felis purus sed gravida erat volutpat ac.',
      socialLinks: {
        instagram: '',
        linkedIn: '',
        facebook: '',
      },
    },
  ];

  const { t } = useTranslation(Namespace.About);
  return (
    <Container className={styles.OurTeam}>
      <Text className={styles.OurTeam__Title} type="h1" size="heading1">
        {t('AboutZapal.title')}
      </Text>
      <Text className={styles.OurTeam__Subtitle} type="h5" size="small">
        {t('AboutZapal.subtitle')}
      </Text>

      <div className={styles.OurTeam__CircleContainer}>
        <Text className={styles.OurTeam__CircleTitle} type="h3" size="heading3">
          {t('AboutZapal.circleTitle')}
        </Text>
        <div className={styles.OurTeam__Circle}></div>
      </div>

      <div className={styles.OurTeam__Members}>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} href={'/about'} {...member} />
        ))}
      </div>
    </Container>
  );
};
