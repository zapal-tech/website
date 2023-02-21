import type { IOptions, RecursivePartial } from 'tsparticles-engine';

const options: RecursivePartial<IOptions> = {
  fullScreen: false,
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: '#FFF' },
    shape: { type: 'square' },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: '#FFF',
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'none',
      center: {
        radius: 280,
      },
      random: true,
      outMode: 'out',
    },
  },
  interactivity: {
    detectOn: 'canvas',
    events: {
      onHover: { enable: true, mode: ['grab', 'attract'], parallax: { enable: true, force: 170, smooth: 120 } },
      resize: true,
    },
    modes: {
      grab: { distance: 200, lineLinked: { opacity: 1 } },
      attract: { distance: 150, size: 250, duration: 1, opacity: 0, speed: 0.6 },
    },
  },
  retinaDetect: true,
};

export default options;
