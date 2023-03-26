import Link from 'next/link';

import LinkIcon from 'public/icons/link.svg';

import { TeamMemberPreview } from 'types/team';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMemberPreview;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ id, imageUrl, firstName, lastName, title }) => (
  <Link className={styles.TeamMemberCard} href={`/about#${id}`}>
    <Image
      className={styles.TeamMemberCard__Photo}
      src={imageUrl}
      alt={`${firstName} ${lastName} photo`}
      loading="eager"
    >
      <LinkIcon className={styles.TeamMemberCard__Icon} />
    </Image>

    <Text className={styles.TeamMemberCard__Name} size="heading3">
      {firstName} {lastName}
    </Text>

    <Text className={styles.TeamMemberCard__Title} size="small">
      {title}
    </Text>
  </Link>
);
