// import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';

import { ProjectPreview } from 'types/projects';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './ProjectCard.module.scss';

export type ProjectCardProps = ProjectPreview & {
  photoLoading?: 'eager' | 'lazy';
  className?: ClassValue | ClassValue[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  shortName,
  shortDescription,
  thumbnailImageUrl,
  photoLoading,
  className,
}) => (
  <div className={clsx(styles.ProjectCard, className)}>
    <Image
      src={thumbnailImageUrl}
      alt={`${shortName} project`}
      className={styles.ProjectCard__Image}
      loading={photoLoading}
    />

    <Text size="heading3" className={styles.ProjectCard__Title}>
      {shortName}
    </Text>

    <Text size="small" className={styles.ProjectCard__Subtitle}>
      {shortDescription}
    </Text>
  </div>
);
