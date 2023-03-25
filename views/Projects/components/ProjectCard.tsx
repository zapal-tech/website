import Image from 'next/image';
import Link from 'next/link';

import { ProjectPreview } from 'types/projects';

import { Text } from 'components';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<{ photoLoading?: 'eager' | 'lazy' } & ProjectPreview> = ({
  name,
  photoUrl,
  photoLoading,
}) => (
  <Link href={'/projects'} className={styles.ProjectCard}>
    <Image
      width={500}
      height={400}
      src={photoUrl}
      alt={name}
      className={styles.ProjectCard__Image}
      loading={photoLoading}
    />

    <Text size="heading3" className={styles.ProjectCard__Title}>
      {name}
    </Text>

    <Text size="small" className={styles.ProjectCard__Subtitle}>
      {/* TODO: Replace with real data */}
      Make your website work for you and your business
    </Text>
  </Link>
);
