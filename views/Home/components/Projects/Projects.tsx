import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { ProjectCard } from './components/ProjectCard/ProjectCard';

import styles from './Projects.module.scss';

type ProjectsProps = Pick<HomeProps, 'projects'>;

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Projects}>
      <Text className={styles.Projects__Title} uppercase type="h2" size="heading1">
        {t('projects.title')}
      </Text>

      <div className={styles.Projects__List}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Container>
  );
};
