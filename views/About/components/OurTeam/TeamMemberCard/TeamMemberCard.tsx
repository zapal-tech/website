import Image from 'next/image';
import Link from 'next/link';

import { Text } from 'components';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = {
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  sutitle: string;
  jobTitle: string;
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageSrc,
  imageAlt,
  name,
  jobTitle,
  sutitle,
  href,
}) => (
  <Link className={styles.TeamMemberCard} href={href}>
    <Image className={styles.TeamMemberCard__Image} src={imageSrc} alt={imageAlt} width={350} height={350} />
    <div className={styles.TeamMemberCard__TitleContainer}>
      <Text className={styles.TeamMemberCard__Name} size="heading3" type="h3">
        {name}
      </Text>
      <Text className={styles.TeamMemberCard__JobTitle}>{jobTitle}</Text>
      <Text className={styles.TeamMemberCard__Subtitle} size="small">
        {sutitle}
      </Text>
    </div>
  </Link>
);
