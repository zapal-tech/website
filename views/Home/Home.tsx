import dynamic from 'next/dynamic';

import { ApiPage } from 'types/api';
import { Partner } from 'types/partners';
import { Project } from 'types/projects';
import { TeamMember } from 'types/team';
import { Technology } from 'types/technologies';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const AboutUs = dynamic(() => import('./components/AboutUs/AboutUs').then((mod) => mod.AboutUs));
const Services = dynamic(() => import('./components/Services/Services').then((mod) => mod.Services));
const Technologies = dynamic(() => import('./components/Technologies/Technologies').then((mod) => mod.Technologies));
const Partners = dynamic(() => import('./components/Partners/Partners').then((mod) => mod.Partners));
const Projects = dynamic(() => import('./components/Projects/Projects').then((mod) => mod.Projects));
const Team = dynamic(() => import('./components/Team/Team').then((mod) => mod.Team));

export type HomeProps = {
  locale?: string;
  page: ApiPage;
  partners: Partner[];
  projects: Project[];
  team: TeamMember[];
  technologies: Technology[];
};

export const Home: React.FC<HomeProps> = () => (
  <AppLayout>
    <Hero />
    <AboutUs />
    <Services />
    <Technologies />
    <Projects />
    <Partners />
    <Team />
  </AppLayout>
);
