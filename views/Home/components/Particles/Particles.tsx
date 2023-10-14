import { useCallback } from 'react';

import clsx, { ClassValue } from 'clsx';
import ReactParticles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadExternalAttractInteraction } from 'tsparticles-interaction-external-attract';
import { loadExternalGrabInteraction } from 'tsparticles-interaction-external-grab';
import { loadParticlesLinksInteraction } from 'tsparticles-interaction-particles-links';
import { loadBaseMover } from 'tsparticles-move-base';
import { loadParallaxMover } from 'tsparticles-move-parallax';
import { loadLineShape } from 'tsparticles-shape-line';
import { loadSquareShape } from 'tsparticles-shape-square';
import { loadColorUpdater } from 'tsparticles-updater-color';
import { loadLifeUpdater } from 'tsparticles-updater-life';
import { loadOpacityUpdater } from 'tsparticles-updater-opacity';
import { loadOutModesUpdater } from 'tsparticles-updater-out-modes';
import { loadRotateUpdater } from 'tsparticles-updater-rotate';
import { loadSizeUpdater } from 'tsparticles-updater-size';
import { loadStrokeColorUpdater } from 'tsparticles-updater-stroke-color';

import config from 'configs/particles';

import styles from './Particles.module.scss';

export type ParticlesProps = {
  id: string;
  className?: ClassValue | ClassValue[];
  onInit?: (engine: Engine) => void;
};

export const Particles: React.FC<ParticlesProps> = ({ id, className, onInit }) => {
  const particlesInit = useCallback(
    async (engine: Engine) => {
      await loadExternalGrabInteraction(engine);
      await loadExternalAttractInteraction(engine);
      await loadParticlesLinksInteraction(engine);

      await loadSquareShape(engine);
      await loadLineShape(engine);

      await loadRotateUpdater(engine);
      await loadSizeUpdater(engine);
      await loadStrokeColorUpdater(engine);
      await loadOutModesUpdater(engine);
      await loadLifeUpdater(engine);
      await loadColorUpdater(engine);
      await loadOpacityUpdater(engine);

      await loadBaseMover(engine);
      await loadParallaxMover(engine);

      onInit?.(engine);
    },
    [onInit],
  );

  return <ReactParticles id={id} className={clsx(styles.Particles, className)} options={config} init={particlesInit} />;
};
