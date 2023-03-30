import clsx, { ClassValue } from 'clsx';
import Marquee from 'react-fast-marquee';

import styles from './Ticker.module.scss';

export type TickerProps<T = any> = {
  speed?: number;
  className?: ClassValue | ClassValue[];
  data: T[];
  renderItem: (item: T, idx: number, arr: T[]) => React.ReactNode;
};

export const Ticker: React.FC<TickerProps> = ({ className, speed = 100, data, renderItem }) => (
  <Marquee className={clsx(styles.Ticker, className)} gradient={false} speed={speed}>
    {data.map(renderItem)}
  </Marquee>
);
