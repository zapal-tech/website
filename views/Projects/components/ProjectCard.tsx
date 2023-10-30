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
  slug,
  preview: { name, description, image },
  content,
  photoLoading,
  className,
}) => (
  <div id={slug} className={clsx(styles.ProjectCard, className)}>
    <Image
      image={image}
      alt={`${name || content.name} project`}
      className={styles.ProjectCard__Image}
      loading={photoLoading}
    />

    <Text size="heading3" className={styles.ProjectCard__Title}>
      {name || content.name}
    </Text>

    <Text size="small" className={styles.ProjectCard__Subtitle}>
      {description || content.description}
    </Text>
  </div>
);
