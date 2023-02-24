import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectPreview } from 'types/projects';

import { useMediaQuery } from 'hooks';

import { Card, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<ProjectPreview> = ({ name, photoUrl }) => {
  const { t } = useTranslation(Namespace.Home);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  return (
    <Link href={'/projects'} className={styles.ProjectCard} tabIndex={-1}>
      <Image className={styles.ProjectCard__Image} width={500} height={400} src={photoUrl} alt={name} />
      <Card
        className={styles.ProjectCard__InnerCard}
        frameType="corner"
        cornerClassName={styles.ProjectCard__InnerCard__Dot}
      >
        <Text className={styles.ProjectCard__Name} type="h4" size="heading3">
          {name}

          {isLaptop && (
            <Link href={'/projects'} className={styles.ProjectCard__Button}>
              <Text className={styles.ProjectCard__ButtonText} size="small">
                {t('projects.cardButton')}
              </Text>
            </Link>
          )}
        </Text>
      </Card>
    </Link>
  );
};
