import { ApiPage } from 'types/api';
import { Partner } from 'types/partners';
import { Service } from 'types/services';
import { TeamMember } from 'types/team';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { Services } from './components/Services/Services';
import { Team } from './components/Team/Team';

export type AboutProps = {
  locale?: string;
  page: ApiPage;
  partners: Partner[];
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
