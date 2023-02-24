import { AppLayout } from 'layouts';

import { Calendly } from './components/Calendly/Calendly';
import { Hero } from './components/Hero/Hero';
import { Locations } from './components/Locations/Locations';

export const Contacts: React.FC = () => (
  <AppLayout>
    <Hero />
    <Locations />
    <Calendly />
  </AppLayout>
);
