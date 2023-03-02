import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import CircleSvg from 'public/icons/projects-circle.svg';

import { ProjectPreview } from 'types/projects';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import { Namespace } from 'i18n';

import { ProjectCard } from './components/ProjectCard';

import styles from './Projects.module.scss';

export const Projects = () => {
  const { t } = useTranslation(Namespace.Projects);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get('/api/projects');

    setProjects(data as ProjectPreview[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};
