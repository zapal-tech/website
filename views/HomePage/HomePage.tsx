import { Technologies } from 'components/Technologies/Technologies';

import { AppLayout } from 'layouts';

import { HeroSection } from './components/HeroSection/HeroSection';

export const HomePage = () => (
  <AppLayout>
    <HeroSection />
    <Technologies />
  </AppLayout>
);
