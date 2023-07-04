import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import Circle from 'public/icons/circle.svg';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Button, Container, Text } from 'components';
import { AlternantText } from 'components/AlternantText/AlternantText';
import { Ticker } from 'components/Ticker/Ticker';

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

        <div className={clsx(styles.Hero__SubtitleContainer, styles.Hero__Grid)}>
          <Circle className={styles.Hero__Circle} />

          <Text className={styles.Hero__Subtitle} type="h3" size="heading3">
            {t('hero.subtitle')}
          </Text>

          <Text className={styles.Hero__Description} size="small">
            {t('hero.description')}
          </Text>
        </div>
      </Container>

      <Ticker
        data={t('hero.tickerText', { returnObjects: true }) as string[]}
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

      <Container className={styles.Hero__UnderTicker}>
        <div className={styles.Hero__Grid}>
          <Text className={styles.Hero__UnderTickerSubtitle} type="h3" size="heading3">
            {t('hero.tickerSubtitle')}
          </Text>
        </div>

        <AlternantText
          className={styles.Hero__Alternant}
          itemClassName={styles.Hero__AlternantItem}
          baseText={t('hero.alternantText.base')}
          alternantText={t('hero.alternantText.alternant', { returnObjects: true }) as string[]}
        />

        <div className={styles.Hero__Grid}>
          <Text className={styles.Hero__ButtonSubtitle} type="h3" size="heading3">
            {t('hero.buttonSubtitle')}
          </Text>

          <Button className={styles.Hero__Button} onClick={openContactForm}>
            {t('becomeAClient', { ns: Namespace.Common })}
          </Button>
        </div>
      </Container>
    </div>
  );
};
