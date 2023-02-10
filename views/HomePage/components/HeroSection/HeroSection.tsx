import { useTranslation } from 'next-i18next';
import { Fragment, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.Hero}>
      <Particles
        id="particles"
        className={styles.Hero__Particles}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#FFF' },
            shape: { type: 'circle' },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: '#FFF',
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'bubble' },
              resize: true,
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 3, duration: 1, opacity: 0, speed: 3 },
              repulse: { distance: 300, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
        init={particlesInit}
      />

      <div className={styles.Hero__Box}>
        <Text type="h1" size="heading1" className={styles.Hero__Title}>
          {t('hero.title.unlock')}
          {'\u00A0'}
          <span className={styles.Hero__SelectionBg}>{t('hero.title.your')}</span>

          <br />

          <span className={styles.Hero__SelectionBg}>{t('hero.title.tech')}</span>
          {'\u00A0'}
          {t('hero.title.future')}
        </Text>

        <Text size="small" className={styles.Hero__Subtitle}>
          {t('hero.subtitle')}
        </Text>
      </div>
    </div>
  );
};
