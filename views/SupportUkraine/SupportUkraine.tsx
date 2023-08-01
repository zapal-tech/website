import { ApiPage } from 'types/api';
import { Page } from 'types/page';

import { Container } from 'components';

import { AppLayout } from 'layouts';

import { AboutZapal } from './components/AboutZapal/AboutZapal';
import { BanRussianBusiness } from './components/BanRussianBusiness/BanRussianBusiness';
import { Conclusion } from './components/Conclusion/Conclusion';
import { Foreword } from './components/Foreword/Foreword';
import { GloryToUkraine } from './components/GloryToUkraine/GloryToUkraine';
import { HelpRefugees } from './components/HelpRefugees/HelpRefugees';
import { Hero } from './components/Hero/Hero';
import { InformationCards } from './components/InformationCards/InformationCards';
import { SupportUkrainianBusiness } from './components/SupportUkrainianBusiness/SupportUkrainianBusiness';
import { WarCrimes } from './components/WarCrimes/WarCrimes';
import { WaysToHelp } from './components/WaysToHelp/WaysToHelp';

export type SupportUkraineProps = Page<{
  page: ApiPage;
}>;

export const SupportUkraine: React.FC<SupportUkraineProps> = () => (
  <AppLayout>
    <Container>
      <Hero />
      <Foreword />
      <AboutZapal />
      <WaysToHelp />
      <InformationCards />
      <WarCrimes />
      <BanRussianBusiness />
      <SupportUkrainianBusiness />
      <HelpRefugees />
      <Conclusion />
      <GloryToUkraine />
    </Container>
  </AppLayout>
);
