import dynamic from 'next/dynamic';
import { MapProvider } from 'react-map-gl';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

// TODO: Uncomment when we will have a Calendly pro account
// const Calendly = dynamic(() => import('./components/Calendly/Calendly').then((mod) => mod.Calendly));
const Locations = dynamic(() => import('./components/Locations/Locations').then((mod) => mod.Locations));

export const Contacts: React.FC = () => (
  <AppLayout>
    <MapProvider>
      <Hero />
      <Locations />
      {/* <Calendly /> */}
    </MapProvider>
  </AppLayout>
);
