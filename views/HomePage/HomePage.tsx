import { AppLayout } from 'layouts';

import { AboutUs } from './components/AboutUs/AboutUs';
import { Clients } from './components/Clients/Clients';
import { Hero } from './components/Hero/Hero';
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
    <Clients />
  </AppLayout>
);
