import clsx, { ClassValue } from 'clsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Text, TextProps } from 'components';

import styles from './AlternantText.module.scss';

export type AlternantTextProps = {
  baseText: string;
  alternantText: string[];
  className?: ClassValue | ClassValue[];
  baseTextClassName?: ClassValue | ClassValue[];
  carouselClassName?: ClassValue | ClassValue[];
  itemClassName?: ClassValue | ClassValue[];
  baseTextProps?: Omit<TextProps, 'children' | 'className'>;
  alternantTextProps?: Omit<TextProps, 'children' | 'className'>;
};

export const AlternantText: React.FC<AlternantTextProps> = ({
  className,
  baseTextClassName,
  carouselClassName,
  itemClassName,
  baseText,
  alternantText,
  baseTextProps,
  alternantTextProps,
}) => (
  <div className={clsx(styles.AlternantText, className)}>
    <Text className={clsx(styles.AlternantText__BaseText, baseTextClassName)} {...baseTextProps}>
      {baseText.trim()}
      {'\u00A0'}
    </Text>

    <Carousel
      className={clsx(styles.AlternantText__Carousel, carouselClassName)}
      axis="vertical"
      infiniteLoop
      interval={1500}
      autoPlay
      swipeable={false}
      transitionTime={700}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      {alternantText.map((word) => (
        <Text key={word} className={clsx(styles.AlternantText__CarouselItem, itemClassName)} {...alternantTextProps}>
          {word}
        </Text>
      ))}
    </Carousel>
  </div>
);
