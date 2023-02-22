import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { ProjectPreview } from 'types/projects';

import { useWindowSize } from 'hooks';

import { Card, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<ProjectPreview> = ({ name, photoUrl }) => {
  const { t } = useTranslation(Namespace.Home);
  const windowSize = useWindowSize();

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  return (
    <Link href={'/projects'} className={styles.ProjectCard}>
      <Image className={styles.ProjectCard__Image} width={500} height={400} src={photoUrl} alt={name} />
      <Card
        className={styles.ProjectCard__InnerCard}
        frameType="corner"
        cornerClassName={styles.ProjectCard__InnerCard__Dot}
      >
        <Text className={styles.ProjectCard__Name} type="h3" size="heading3">
          {name}

          {isLaptop && (
            <Link href={photoUrl} className={styles.ProjectCard__Button}>
              <Text className={styles.ProjectCard__ButtonText} size="small">
                {t('projects.button')}
              </Text>
            </Link>
          )}
        </Text>
      </Card>
    </Link>
  );
};
