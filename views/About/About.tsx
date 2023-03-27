import { Service } from 'types/services';
import { TeamMember } from 'types/team';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { Services } from './components/Services/Services';
import { Team } from './components/Team/Team';

// import styles from './About.module.scss';

export type AboutProps = {
  team: TeamMember[];
  services: Service[];
};

export const About: React.FC<AboutProps> = () => (
  <AppLayout>
    <Hero />
    <Team />
    <Services />
    <Partners />
  </AppLayout>
);
