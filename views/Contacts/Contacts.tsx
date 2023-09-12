import dynamic from 'next/dynamic';
import { MapProvider } from 'react-map-gl';

import { ApiPage } from 'types/api';
import { Location } from 'types/locations';
import { Page } from 'types/page';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const Calendly = dynamic(() => import('components/Calendly/Calendly').then((mod) => mod.Calendly), { ssr: false });
const Locations = dynamic(() => import('./components/Locations/Locations').then((mod) => mod.Locations));

export type ContactsProps = Page<{
  page: ApiPage;
  locations: Location[];
}>;

export const Contacts: React.FC<ContactsProps> = () => (
  <AppLayout>
    <MapProvider>
      <Hero />
      <Locations />
      <Calendly />
    </MapProvider>
  </AppLayout>
);
