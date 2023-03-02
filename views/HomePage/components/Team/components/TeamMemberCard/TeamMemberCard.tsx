import Image from 'next/image';
import Link from 'next/link';

import LinkIcon from 'public/icons/link.svg';

import { Text } from 'components';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = {
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  title: string;
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, imageAlt, href, name, title }) => (
  <Link className={styles.TeamMemberCard} href={href}>
    <div className={styles.TeamMemberCard__PhotoContainer}>
      <Image className={styles.TeamMemberCard__Photo} src={imageSrc} alt={imageAlt} width={500} height={500} />

      <LinkIcon className={styles.TeamMemberCard__Icon} />
    </div>

    <Text className={styles.TeamMemberCard__Name} size="heading3">
      {name}
    </Text>

    <Text className={styles.TeamMemberCard__Title} size="small">
      {title}
    </Text>
  </Link>
);
