import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Text } from 'components';

import styles from './AlternantText.module.scss';

export type AlternantTextProps = {
  baseText: string;
};

export const AlternantText: React.FC<AlternantTextProps> = ({ baseText }) => (
  <div className={styles.AlternantText}>
    <Text>{baseText}</Text>
    <Carousel
      className={styles.AlternantText__Carousel}
      axis="vertical"
      infiniteLoop
      interval={3000}
      autoPlay
      transitionTime={400}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
    >
      <CarouselItem text={'satisfaction'} />
      <CarouselItem text={'performance'} />
      <CarouselItem text={'outstanding'} />
    </Carousel>
  </div>
);

const CarouselItem: React.FC<{ text: string }> = ({ text }) => (
  <Text size="small" type="h4" className={styles.AlternantText__CarouselItem}>
    {text}
  </Text>
);
