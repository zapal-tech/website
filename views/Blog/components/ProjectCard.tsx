// import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';

import { Project } from 'types/projects';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './ProjectCard.module.scss';

export type ProjectCardProps = Project & {
  photoLoading?: 'eager' | 'lazy';
  className?: ClassValue | ClassValue[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  photoLoading,
  className,
  attributes: { slug, shortName, shortDescription, thumbnailImage },
}) => (
  <div id={slug} className={clsx(styles.ProjectCard, className)}>
    <Image
      image={thumbnailImage}
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
