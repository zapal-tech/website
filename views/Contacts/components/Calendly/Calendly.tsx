import { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

import { calendlyInlineConfig } from 'configs/calendly';

import styles from './Calendly.module.scss';

export const Calendly = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <div className={styles.Calendly}>
      <InlineWidget {...calendlyInlineConfig} />
    </div>
  ) : null;
};
