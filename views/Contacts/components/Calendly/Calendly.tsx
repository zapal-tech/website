import { InlineWidget } from 'react-calendly';

import { calendlyInlineConfig } from 'configs/calendly';

import styles from './Calendly.module.scss';

// Only client-side rendering
export const Calendly = () => (
  <div className={styles.Calendly}>
    <InlineWidget {...calendlyInlineConfig} />
  </div>
);
