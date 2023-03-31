import { useTranslation } from 'next-i18next';

import CircleSvg from 'public/icons/projects-circle.svg';

import { ProjectPreview } from 'types/projects';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import { Namespace } from 'i18n';

import { ProjectCard } from './components/ProjectCard';

import styles from './Projects.module.scss';

export type ProjectsProps = {
  projects: ProjectPreview[];
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
            <ProjectCard key={project.shortName} {...project} className={styles.Projects__ProjectCard} />
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};
