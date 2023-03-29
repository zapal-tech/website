import clsx, { ClassValue } from 'clsx';
import { HorizontalTicker } from 'react-infinite-ticker';

import styles from './Ticker.module.scss';

export type TickerProps<T = any> = {
  duration?: number;
  className?: ClassValue | ClassValue[];
  data: T[];
  renderItem: (item: T, idx: number, arr: T[]) => React.ReactNode;
};

export const Ticker: React.FC<TickerProps> = ({ className, duration = 15000, data, renderItem }) => (
  <div className={clsx(styles.Ticker, className)}>
    <HorizontalTicker duration={duration}>{data.map(renderItem)}</HorizontalTicker>
  </div>
);
