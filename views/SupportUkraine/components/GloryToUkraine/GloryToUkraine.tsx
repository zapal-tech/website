import GloryToUkraineSvg from 'public/icons/glory-to-ukraine.svg';

import styles from './GloryToUkraine.module.scss';

export const GloryToUkraine = () => {
  return (
    <div className={styles.GloryToUkraine__Box}>
      <GloryToUkraineSvg className={styles.GloryToUkraine__Svg} />
    </div>
  );
};
