import Image from 'next/image';

import { TeamMember } from 'types/team';

import { Text } from 'components';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMember;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageUrl,
  firstName,
  lastName,
  title,
  description,
}) => (
  <div className={styles.TeamMemberCard} id={`${firstName.toLowerCase()}`}>
    <Image
      className={styles.TeamMemberCard__Image}
      src={imageUrl}
      alt={`${firstName} ${lastName} photo`}
      width={350}
      height={350}
    />
    <div className={styles.TeamMemberCard__TitleContainer}>
      <Text className={styles.TeamMemberCard__Name} size="heading3" type="h3">
        {firstName} {lastName}
      </Text>

      <Text className={styles.TeamMemberCard__Title}>{title}</Text>

      <Text className={styles.TeamMemberCard__Bio} size="small">
        {description}
      </Text>
    </div>
  </div>
);
