import dynamic from 'next/dynamic';

import { ApiPage } from 'types/api';
import { Page } from 'types/page';
import { Partner } from 'types/partners';
import { Project } from 'types/projects';
import { Service } from 'types/services';
import { TeamMember } from 'types/team';
import { Technology } from 'types/technologies';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

import styles from './Home.module.scss';

const AboutUs = dynamic(() => import('./components/AboutUs/AboutUs').then((mod) => mod.AboutUs));
const Services = dynamic(() => import('./components/Services/Services').then((mod) => mod.Services));
const Technologies = dynamic(() => import('./components/Technologies/Technologies').then((mod) => mod.Technologies));
const Partners = dynamic(() => import('./components/Partners/Partners').then((mod) => mod.Partners));
const Projects = dynamic(() => import('./components/Projects/Projects').then((mod) => mod.Projects));
const Team = dynamic(() => import('./components/Team/Team').then((mod) => mod.Team));

export type HomeProps = Page<{
  page: ApiPage;
  partners: Partner[];
  projects: Project[];
  services: Service[];
  team: TeamMember[];
  technologies: Technology[];
}>;

export const Home: React.FC<HomeProps> = ({ partners, projects, services, team, technologies }) => (
  <AppLayout mainClassName={styles.Home__Main}>
    <Hero />
    <AboutUs />
    <Services services={services} />
    <Technologies technologies={technologies} />
    <Projects projects={projects} />
    <Partners partners={partners} />
    <Team team={team} />
  </AppLayout>
);
