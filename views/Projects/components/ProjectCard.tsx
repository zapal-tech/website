import Image from 'next/image';
import Link from 'next/link';

import { ProjectPreview } from 'types/projects';

import { Text } from 'components';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<ProjectPreview> = ({ name, photoUrl }) => (
  <Link href={'/projects'} className={styles.ProjectCard}>
    <Image width={780} height={800} src={photoUrl} alt={name} className={styles.ProjectCard__Image} />
    <Text size="heading3" className={styles.ProjectCard__Title}>
      {name}
    </Text>

    <Text size="small" className={styles.ProjectCard__Subtitle}>
      Making online shopping a more sustainable experience
    </Text>
  </Link>
);
