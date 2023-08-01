import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Namespace } from 'configs/i18n';

import { Project } from 'types/projects';

import { Card, Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<Project> = ({ attributes: { slug, name, shortName, thumbnailImage } }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Link href={`/projects#${slug}`} className={styles.ProjectCard}>
      <Image
        className={styles.ProjectCard__Image}
        image={thumbnailImage}
        alt={`${shortName || name} project`}
        loading="eager"
      />

      <Card
        className={styles.ProjectCard__InnerCard}
        frameType="corner"
        cornerClassName={styles.ProjectCard__InnerCard__Dot}
      >
        <Text className={styles.ProjectCard__Name} type="span" size="heading3">
          {shortName || name}

          <button className={styles.ProjectCard__Button} tabIndex={-1}>
            <Text className={styles.ProjectCard__ButtonText} type="span" size="small">
              {t('projects.cardButton')}
            </Text>
          </button>
        </Text>
      </Card>
    </Link>
  );
};
