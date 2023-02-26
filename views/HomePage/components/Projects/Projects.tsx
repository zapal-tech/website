import axios from 'axios';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ProjectPreview } from 'types/projects';

import { Card, Container, Text } from 'components';

import { Namespace } from 'i18n';

import { ProjectCard } from './components/ProjectCard/ProjectCard';

import styles from './Projects.module.scss';

export const Projects = () => {
  const { t } = useTranslation(Namespace.Home);
  const [projects, setProjects] = useState<ProjectPreview[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get('/api/projects');

    setProjects(data as ProjectPreview[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
