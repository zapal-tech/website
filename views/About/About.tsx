import { ApiPage } from 'types/api';
import { Page } from 'types/page';
import { Partner } from 'types/partners';
import { Service } from 'types/services';
import { TeamMember } from 'types/team';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { Services } from './components/Services/Services';
import { Team } from './components/Team/Team';

export type AboutProps = Page<{
  page: ApiPage;
  partners: Partner[];
  team: TeamMember[];
  services: Service[];
}>;

export const About: React.FC<AboutProps> = ({ partners, services, team }) => (
  <AppLayout>
    <Hero />
    <Team team={team} />
    <Services services={services} />
    <Partners partners={partners} />
  </AppLayout>
);
