import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import { InlineWidget } from 'react-calendly';

import { getCalendlyInlineConfig } from 'configs/calendly';

import styles from './Calendly.module.scss';

export type CalendlyProps = {
  className?: ClassValue | ClassValue[];
};

// Only client-side rendering
export const Calendly: React.FC<CalendlyProps> = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <div id="calendly" className={clsx(styles.Calendly, className)}>
      <InlineWidget {...getCalendlyInlineConfig(i18n.language)} />
    </div>
  );
};
