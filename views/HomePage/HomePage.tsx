import { AppLayout } from 'layouts';

import { AboutUs } from './components/AboutUs/AboutUs';
import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { Projects } from './components/Projects/Projects';
import { Services } from './components/Services/Services';
import { Technologies } from './components/Technologies/Technologies';

export const HomePage = () => (
  <AppLayout>
    <Hero />
    <AboutUs />
    <Services />
    <Technologies />
    <Projects />
    <Partners />
  </AppLayout>
);
