import { useTranslation } from 'next-i18next';

import { ProjectPreview } from 'types/projects';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';

import { HomeProps } from 'views/HomePage/HomePage';

import { Namespace } from 'i18n';

import { ProjectCard } from './components/ProjectCard/ProjectCard';

import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  const { pageProps } = useGlobalContext<HomeProps>();

  return (
    <Container className={styles.Projects}>
      <Text className={styles.Projects__Title} uppercase type="h2" size="heading1">
        {t('projects.title')}
      </Text>

      <div className={styles.Projects__List}>
        {pageProps.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Container>
  );
};
