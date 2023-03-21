import { AppLayout } from 'layouts';

import { AboutUs } from './components/AboutUs/AboutUs';
import { OurPartners } from './components/OurPartners/OurPartners';
import { OurServices } from './components/OurServices/OurServices';
import { OurTeam } from './components/OurTeam/OurTeam';

import styles from './About.module.scss';

export const About: React.FC = () => (
  <AppLayout>
    <AboutUs />
    <OurTeam />
    <OurServices />
    <OurPartners />
  </AppLayout>
);
