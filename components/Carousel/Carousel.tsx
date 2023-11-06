import React from 'react';

import clsx, { ClassValue } from 'clsx';
import { Carousel as CarouselComponent, CarouselProps as CarouselComponentProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './Carousel.module.scss';

export type CarouselProps = {
  className?: ClassValue | ClassValue[];
} & Partial<CarouselComponentProps>;

export const Carousel: React.FC<CarouselProps> = ({ className, ...props }) => (
  <CarouselComponent
    className={clsx(styles.Carousel, className)}
    swipeable
    useKeyboardArrows
    emulateTouch
    stopOnHover
    showArrows={false}
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    {...props}
  />
);
