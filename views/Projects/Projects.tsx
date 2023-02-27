import axios from 'axios';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CircleSvg from 'public/icons/projects-circle.svg';

import { ProjectPreview } from 'types/projects';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import { Namespace } from 'i18n';

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
        <div className={styles.Projects__SubtitleBlock}>
          <Text className={styles.Projects__SubtitleText} size="heading3">
            {t('subtitle')}
          </Text>

          <CircleSvg className={styles.Projects__Svg} />
        </div>
        <div className={styles.Projects__List}>
          {projects.map((project) => (
            <Link href={'/projects'} className={styles.Projects__Link} key={project.name}>
              <Image
                width={780}
                height={800}
                src={project.photoUrl}
                alt={project.name}
                className={styles.Projects__Image}
              />
              <Text size="heading3" className={styles.Projects__ImageTitle}>
                {project.name}
              </Text>
              <Text size="small" className={styles.Projects__ImageSubtitle}>
                Making online shopping a more sustainable experience
              </Text>
            </Link>
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};
