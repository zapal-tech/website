import dynamic from 'next/dynamic';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const AboutUs = dynamic(() => import('./components/AboutUs/AboutUs').then((mod) => mod.AboutUs));
const Services = dynamic(() => import('./components/Services/Services').then((mod) => mod.Services));
const Technologies = dynamic(() => import('./components/Technologies/Technologies').then((mod) => mod.Technologies));
const Clients = dynamic(() => import('./components/Clients/Clients').then((mod) => mod.Clients));
const Projects = dynamic(() => import('./components/Projects/Projects').then((mod) => mod.Projects));

export const HomePage = () => (
  <AppLayout>
    <Hero />
    <AboutUs />
    <Services />
    <Technologies />
    <Projects />
    <Clients />
  </AppLayout>
);
