import { Footer } from 'components';

import { AppLayout } from 'layouts';

import { HeroSection } from './components/HeroSection/HeroSection';
import { Technologies } from './components/Technologies/Technologies';

export const HomePage = () => (
  <AppLayout>
    <HeroSection />
    <Technologies />
  </AppLayout>
);
