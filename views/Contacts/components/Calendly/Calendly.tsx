import { useEffect, useMemo, useState } from 'react';
import { InlineWidget } from 'react-calendly';

import { calendlyInlineConfig } from 'configs/calendly';

// import { useMediaQuery } from 'hooks';
// import { Card } from 'components';
// import media from 'styles/media.module.scss';
import styles from './Calendly.module.scss';

export const Calendly = () => {
  const [mount, setMount] = useState(false);
  // const isLaptop = useMediaQuery({ width: { min: parseInt(media.laptop) } });

  useEffect(() => {
    setMount(true);
  }, []);

  // const calendlyStyles: React.CSSProperties = {
  // height: 1000,
  // overflow: 'hidden',
  // };

  return mount ? (
    <div className={styles.Calendly}>
      <InlineWidget {...calendlyInlineConfig} />
    </div>
  ) : null;
};
