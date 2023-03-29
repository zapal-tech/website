import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import Circle from 'public/icons/circle.svg';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Button, Container, Text } from 'components';
import { AlternantText } from 'components/AlternantText/AlternantText';
import { Ticker } from 'components/Ticker/Ticker';

import { Namespace } from 'i18n';

import styles from './Hero.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Hero = () => {
  const { openModal } = useGlobalContext();
  const { t } = useTranslation([Namespace.About, Namespace.Common]);

  const openContactForm = () => openModal(ContactForm);

  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__BackgroundLight} />

      <Container className={styles.Hero__Container}>
        <Text className={styles.Hero__Title} type="h1" size="heading1" uppercase>
          {t('hero.title')}
        </Text>
        <div className={styles.Hero__SubtitleContainer}>
          <Circle className={styles.Hero__Circle} />

          <Text className={styles.Hero__Subtitle} type="h3" size="heading3">
            {t('hero.subtitle')}
          </Text>
        </div>

        <Text className={styles.Hero__Description} type="h5" size="small">
          {t('hero.description')}
        </Text>
      </Container>

      <Ticker
        data={['creativity', 'passion', 'skills', 'quality']}
        renderItem={(item, idx) => (
          <Text
            key={item}
            uppercase
            size="heading1"
            className={clsx(styles.Hero__TickerText, idx % 2 ? null : styles['Hero__TickerText--Orange'])}
          >
            {item}
          </Text>
        )}
      />

      <div className={styles.Hero__Slider} />

      <Container className={styles.Hero__SliderContainer}>
        <Text className={styles.Hero__SliderSubtitle} type="h3" size="heading3">
          {t('hero.sliderSubtitle')}
        </Text>

        <AlternantText
          className={styles.Hero__Alternant}
          itemClassName={styles.Hero__AlternantItem}
          baseText={t('hero.alternantText.base')}
          alternantText={t('hero.alternantText.alternant', { returnObjects: true }) as string[]}
        />

        <Text className={styles.Hero__ButtonSubtitle} type="h3" size="heading3">
          {t('hero.buttonSubtitle')}
        </Text>

        <Button className={styles.Hero__Button} onClick={openContactForm}>
          {t('becomeAClient', { ns: Namespace.Common })}
        </Button>
      </Container>
    </div>
  );
};
