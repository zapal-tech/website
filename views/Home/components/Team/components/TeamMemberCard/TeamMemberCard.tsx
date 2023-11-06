import Link from 'next/link';

import LinkIcon from 'public/icons/link.svg';

import { TeamMember } from 'types/team';

import { homePageTeamMemberPhotoSize } from 'utils/imageSizes';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMember;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ slug, photo, firstName, lastName, title }) => (
  <Link className={styles.TeamMemberCard} href={`/about#${slug}`}>
    <Image
      className={styles.TeamMemberCard__Photo}
      image={photo}
      alt={photo.alt ? `${photo.alt} photo` : `${firstName} ${lastName} photo`}
      sizes={homePageTeamMemberPhotoSize}
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
