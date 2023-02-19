import { useCallback, useEffect, useState } from 'react';

import { useAppSelector } from 'store';
import { selectCurrentLocation } from 'store/mapSlice';

import { Text, Link } from 'components';

import styles from './TabContent.module.scss';

const createTimeString = (timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', { timeStyle: 'short', timeZone }).format(new Date());

export const TabContent = () => {
  const currentLocation = useAppSelector(selectCurrentLocation);
  const [currentLocationTime, setCurrentLocationTime] = useState('');

  const updateTime = useCallback(
    () => setCurrentLocationTime(createTimeString(currentLocation.timeZone)),
    [currentLocation.timeZone],
  );

  useEffect(() => {
    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className={styles.TabContent__InfoPlace}>
      <div className={styles.TabContent__Container}>
        <Link
          className={styles.TabContent__Link}
          icon={false}
          uppercase={false}
          underline={false}
          href={currentLocation.address.link}
        >
          <Text size="small" className={styles.TabContent__LinkText}>
            {currentLocation.address.label}
          </Text>
        </Link>
        <Text size="small" className={styles.TabContent__Time}>
          time: {currentLocationTime}
        </Text>
      </div>
      <div className={styles.TabContent__Container}>
        <div className={styles.TabContent__ContactLinks}>
          <Link
            className={styles.TabContent__Link}
            icon={false}
            uppercase={false}
            underline={false}
            href={currentLocation.contact.email.link}
          >
            <Text size="small"> {currentLocation.contact.email.label}</Text>
          </Link>

          <Link
            className={styles.TabContent__Link}
            icon={false}
            uppercase={false}
            underline={false}
            href={currentLocation.contact.phone.link}
          >
            <Text size="small">{currentLocation.contact.phone.label}</Text>
          </Link>
        </div>
        <div className={styles.TabContent__PersonInfo}>
          <Text size="small">{currentLocation.contact.fullName}</Text>
          <Text size="small">{currentLocation.contact.title}</Text>
        </div>
      </div>
    </div>
  );
};
