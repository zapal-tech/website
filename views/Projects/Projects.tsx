import { useTranslation } from 'next-i18next';

import CircleSvg from 'public/icons/projects-circle.svg';

import { Namespace } from 'configs/i18n';

import { ApiPage } from 'types/api';
import { Project } from 'types/projects';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import { ProjectCard } from './components/ProjectCard';

import styles from './Projects.module.scss';

export type ProjectsProps = {
  locale?: string;
  page: ApiPage;
  projects: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useTranslation(Namespace.Projects);

  return (
    <AppLayout>
      <Container className={styles.Projects}>
        <Text className={styles.Projects__Title} type="h2" size="heading1" uppercase>
          {t('title')}
        </Text>
        <div className={styles.Projects__SubtitleContainer}>
          <Text className={styles.Projects__Subtitle} size="heading3">
            {t('subtitle')}
          </Text>

          <CircleSvg className={styles.Projects__CircleSvg} />
        </div>

        <div className={styles.Projects__Grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} className={styles.Projects__ProjectCard} />
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};
