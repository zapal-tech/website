import Image from 'next/image';
import Link from 'next/link';

import LinkIcon from 'public/icons/link.svg';

import { TeamMemberPreview } from 'types/team';

import { Text } from 'components';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMemberPreview;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, firstName, lastName, title }) => (
  <Link className={styles.TeamMemberCard} href={`/about#${firstName.toLowerCase()}`}>
    <div className={styles.TeamMemberCard__PhotoContainer}>
      <Image
        className={styles.TeamMemberCard__Photo}
        src={imageUrl}
        alt={`${firstName} ${lastName} photo`}
        width={500}
        height={500}
        loading="eager"
      />

      <LinkIcon className={styles.TeamMemberCard__Icon} />
    </div>

    <Text className={styles.TeamMemberCard__Name} size="heading3">
      {firstName} {lastName}
    </Text>

    <Text className={styles.TeamMemberCard__Title} size="small">
      {title}
    </Text>
  </Link>
);
