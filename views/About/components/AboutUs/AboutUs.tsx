import { useTranslation } from 'next-i18next';

import Circle from 'public/icons/circle.svg';

import { Button, Container, Text } from 'components';

import { Namespace } from 'i18n';

import { AlternantText } from './components/AlternantText/AlternantText';

import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { t } = useTranslation(Namespace.About);

  return (
    <Container className={styles.Hero}>
      <Text className={styles.Hero__Title} type="h1" size="heading1" uppercase>
        {t('hero.title')}
      </Text>
      <div className={styles.Hero__SubtitleContainer}>
        <div className={styles.Hero__Circle}>
          <Circle />
        </div>
        <Text className={styles.Hero__Subtitle} type="h3" size="heading3">
          {t('hero.subtitle')}
        </Text>
      </div>

      <div className={styles.Hero__BackgroundLight}></div>
      <Text className={styles.Hero__SubtitleDescription} type="h5" size="small">
        {t('hero.subtitleDescription')}
      </Text>

      <div className={styles.Hero__Slider}></div>

      <Text className={styles.Hero__SliderSubtitle} type="h3" size="heading3">
        {t('hero.slider.sliderSubtitle')}
      </Text>

      {/* <div className={styles.Hero__AlternantText}>
        <Text type="h4">{t('hero.slider.AlternantText.first')}</Text>
        <Text size="small" type="h4">
          {t('hero.slider.AlternantText.second')}
        </Text>
      </div> */}
      <AlternantText baseText={t('hero.slider.alternantText.first')} />
      <Text className={styles.Hero__SliderButtonSubtitle} type="h3" size="heading3">
        {t('hero.slider.button.subtitle')}
      </Text>

      <Button className={styles.Hero__Button}>BECOME A CLIENT</Button>
    </Container>
  );
};
