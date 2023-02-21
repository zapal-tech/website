import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { ProjectPreview } from 'types/projects';

import { Card, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<ProjectPreview> = ({ name, photoUrl }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Card key={name} className={styles.ProjectCard}>
      <Image className={styles.ProjectCard__Image} width={350} height={300} src={photoUrl} alt={name} />

      <Card
        className={styles.ProjectCard__InnerCard}
        frameType="corner"
        cornerClassName={styles.ProjectCard__InnerCard__Dot}
      >
        <Text className={styles.ProjectCard__Name} type="h3" size="heading3">
          {name}
        </Text>
      </Card>

      <button className={styles.ProjectCard__Button}>
        <Text className={styles.ProjectCard__ButtonText}>{t('projects.button')}</Text>
      </button>
    </Card>
  );
};
