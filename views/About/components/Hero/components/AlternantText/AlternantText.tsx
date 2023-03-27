import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './AlternantText.module.scss';

export type AlternantTextProps = {
  baseText: string;
};

export const AlternantText: React.FC<AlternantTextProps> = ({ baseText }) => {
  const { t } = useTranslation(Namespace.About);

  return (
    <div className={styles.AlternantText}>
      <Text>{baseText}</Text>

      <Carousel
        className={styles.AlternantText__Carousel}
        axis="vertical"
        infiniteLoop
        interval={1500}
        autoPlay
        swipeable
        transitionTime={700}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        {(t('hero.alternantText.alternantWords', { returnObjects: true }) as string[]).map((word) => (
          <CarouselItem key={word}>{word}</CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

const CarouselItem: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Text type="h4" className={styles.AlternantText__CarouselItem}>
    {children}
  </Text>
);
