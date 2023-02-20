import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import { Particles } from '../Particles/Particles';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <div className={styles.Hero}>
      <Particles id="particles" className={styles.Hero__Particles} />

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
