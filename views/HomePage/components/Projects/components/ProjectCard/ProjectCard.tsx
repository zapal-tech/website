import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectPreview } from 'types/projects';

import { useMediaQuery } from 'hooks/useMediaQuery';

import { Card, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<ProjectPreview> = ({ name, photoUrl }) => {
  const { t } = useTranslation(Namespace.Home);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  return (
    <Link href={'/projects'} className={styles.ProjectCard} tabIndex={isLaptop ? -1 : undefined}>
      <Image className={styles.ProjectCard__Image} width={500} height={400} src={photoUrl} alt={name} loading="eager" />
      <Card
        className={styles.ProjectCard__InnerCard}
        frameType="corner"
        cornerClassName={styles.ProjectCard__InnerCard__Dot}
      >
        <Text className={styles.ProjectCard__Name} type="span" size="heading3">
          {name}

          {isLaptop && (
            <button className={styles.ProjectCard__Button}>
              <Text className={styles.ProjectCard__ButtonText} type="span" size="small">
                {t('projects.cardButton')}
              </Text>
            </button>
          )}
        </Text>
      </Card>
    </Link>
  );
};
