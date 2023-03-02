import { useTranslation } from 'next-i18next';

import { ProjectPreview } from 'types/projects';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ProjectCard } from './components/ProjectCard/ProjectCard';

import styles from './Projects.module.scss';

export type ProjectsProps = {
  projects: ProjectPreview[];
};

export const Projects = ({ projects }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Projects}>
      <Text className={styles.Projects__Title} uppercase type="h2" size="heading1">
        {t('projects.title')}
      </Text>

      <div className={styles.Projects__List}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Container>
  );
};
