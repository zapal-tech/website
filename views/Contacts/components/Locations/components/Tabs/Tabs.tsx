import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCurrentLocation,
  selectCurrentLocationIndex,
  selectLocations,
  setCurrentLocationIndex,
} from 'store/mapSlice';

import { Link, Text } from 'components';

import styles from './Tabs.module.scss';

const createTimeString = (timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', { timeStyle: 'short', timeZone }).format(new Date());

export const Tabs = () => {
  const locations = useAppSelector(selectLocations);
  const currentLocation = useAppSelector(selectCurrentLocation);
  const currentLocationIndex = useAppSelector(selectCurrentLocationIndex);
  const dispatch = useAppDispatch();
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

  const handleTabClick = (index: number) => dispatch(setCurrentLocationIndex(index));

  return (
    <div className={styles.Tabs}>
      <div className={styles.Tabs__TabsContainer}>
        {locations.map((location, idx) => (
          <button key={location.name} className={styles.Tabs__Button} onClick={() => handleTabClick(idx)}>
            <Text
              className={[
                styles.Tabs__Button__Text,
                currentLocationIndex === idx && styles['Tabs__Button__Text--Active'],
              ]}
              type="h5"
              size="small"
            >
              {location.name}
            </Text>
          </button>
        ))}
      </div>

      <div className={styles.Tabs__InfoPlace}>
        <div className={styles.Tabs__UpperBox}>
          <Link
            className={styles.Tabs__Link}
            icon={false}
            uppercase={false}
            underline={false}
            href={currentLocation.address.link}
          >
            <Text size="small" className={styles.Tabs__LinkText}>
              {currentLocation.address.label}
            </Text>
          </Link>
          <Text size="small" className={styles.Tabs__Time}>
            time: {currentLocationTime}
          </Text>
        </div>
        <div className={styles.Tabs__LowerBox}>
          <div className={styles.Tabs__ContactLinks}>
            <Link
              className={styles.Tabs__ContactLink}
              icon={false}
              uppercase={false}
              underline={false}
              href={currentLocation.contact.email.link}
            >
              <Text size="small"> {currentLocation.contact.email.label}</Text>
            </Link>

            <Link
              className={styles.Tabs__ContactLink}
              icon={false}
              uppercase={false}
              underline={false}
              href={currentLocation.contact.phone.link}
            >
              <Text size="small">{currentLocation.contact.phone.label}</Text>
            </Link>
          </div>
          <div className={styles.Tabs__LowerRight}>
            <Text size="small">{currentLocation.contact.fullName}</Text>
            <Text size="small">{currentLocation.contact.title}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
