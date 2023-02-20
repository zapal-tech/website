import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';
import { Locations } from './components/Locations/Locations';

export const Contacts: React.FC = () => (
  <AppLayout>
    <Hero />
    <Locations />
  </AppLayout>
);
