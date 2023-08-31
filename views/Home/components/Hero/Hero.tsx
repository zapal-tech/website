import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './Hero.module.scss';

const Particles = dynamic(() => import('../Particles/Particles').then((mod) => mod.Particles), { ssr: false });

export const Hero: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  const { scrollY } = useScroll();
  const translateYBackground = useTransform(scrollY, [0, 2000], [0, -300]);
  const translateYText = useTransform(scrollY, [0, 2000], [0, 400]);

  return (
    <div className={styles.Hero}>
      <motion.div style={{ translateY: translateYBackground }} className={styles.Hero__Background} />

      <Particles id="particles" className={styles.Hero__Particles} />

      <motion.div style={{ translateY: translateYText }} className={styles.Hero__Box}>
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
      </motion.div>
    </div>
  );
};
