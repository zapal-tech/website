import dynamic from 'next/dynamic';

import { Partner } from 'types/partners';
import { ProjectPreview } from 'types/projects';
import { TeamMemberPreview } from 'types/team';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const AboutUs = dynamic(() => import('./components/AboutUs/AboutUs').then((mod) => mod.AboutUs));
const Services = dynamic(() => import('./components/Services/Services').then((mod) => mod.Services));
const Technologies = dynamic(() => import('./components/Technologies/Technologies').then((mod) => mod.Technologies));
const Partners = dynamic(() => import('./components/Partners/Partners').then((mod) => mod.Partners));
const Projects = dynamic(() => import('./components/Projects/Projects').then((mod) => mod.Projects));
const Team = dynamic(() => import('./components/Team/Team').then((mod) => mod.Team));

export type HomeProps = {
  partners: Partner[];
  projectsPreview: ProjectPreview[];
  teamPreview: TeamMemberPreview[];
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
