import { AppLayout } from 'layouts';

import { AboutUs } from './components/AboutUs/AboutUs';
import { Hero } from './components/Hero/Hero';
import { Technologies } from './components/Technologies/Technologies';

export const HomePage = () => (
  <AppLayout>
    <Hero />
    <AboutUs />
    <Technologies />
  </AppLayout>
);
