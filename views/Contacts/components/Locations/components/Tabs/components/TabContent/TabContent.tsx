import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';

import { Location } from 'types/locations';

import { createTimeString } from 'utils/time';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './TabContent.module.scss';

export const TabContent: React.FC<Location> = ({ address, contact, timeZone }) => {
  const { t } = useTranslation(Namespace.Contacts);
  const [currentLocationTime, setCurrentLocationTime] = useState('');

  const updateTime = useCallback(() => setCurrentLocationTime(createTimeString(timeZone)), [timeZone]);

  useEffect(() => {
    updateTime();

    const updateTimeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(updateTimeInterval);
  }, [updateTime]);

  return (
    <div className={styles.TabContent}>
      <a href={address.link} className={styles.TabContent__Link} rel="noreferrer">
        <Text size="small">{address.label}</Text>
      </a>

      <Text size="small" className={styles.TabContent__Time}>
        {t('locations.time')}: {currentLocationTime}
      </Text>

      <div className={styles.TabContent__ContactLinks}>
        {contact.email && (
          <a className={styles.TabContent__Link} href={'mailto:' + contact.email}>
            <Text size="small">{contact.email}</Text>
          </a>
        )}

        {contact.phone && (
          <a className={styles.TabContent__Link} href={'tel:' + contact.phone}>
            <Text size="small">{contact.phone}</Text>
          </a>
        )}
      </div>

      <div className={styles.TabContent__PersonInfo}>
        <Text size="small">{contact.fullName}</Text>
        <Text size="small">{contact.title}</Text>
      </div>
    </div>
  );
};
