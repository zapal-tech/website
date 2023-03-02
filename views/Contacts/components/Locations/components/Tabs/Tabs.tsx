import clsx, { ClassValue } from 'clsx';

import { useFlyToCurrentLocation } from 'hooks/useFlyToCurrentLocation';

import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCurrentLocation,
  selectCurrentLocationIndex,
  selectLocations,
  setCurrentLocationIndex,
} from 'store/mapSlice';

import { TabButton } from './components/TabButton/TabButton';
import { TabContent } from './components/TabContent/TabContent';

import styles from './Tabs.module.scss';

export type TabsProps = {
  className?: ClassValue | ClassValue[];
};

export const Tabs: React.FC<TabsProps> = ({ className }) => {
  const locations = useAppSelector(selectLocations);
  const currentLocation = useAppSelector(selectCurrentLocation);
  const currentLocationIndex = useAppSelector(selectCurrentLocationIndex);
  const dispatch = useAppDispatch();
  const flyToCurrentLocation = useFlyToCurrentLocation();

  const handleTabClick = (index: number) => {
    if (index === currentLocationIndex) return flyToCurrentLocation();

    dispatch(setCurrentLocationIndex(index));
  };

  return (
    <div className={clsx(styles.Tabs, className)}>
      <div className={styles.Tabs__ButtonsContainer}>
        {locations.map(({ name }, idx) => (
          <TabButton key={name} active={idx === currentLocationIndex} onClick={() => handleTabClick(idx)}>
            {name}
          </TabButton>
        ))}
      </div>

      <TabContent {...currentLocation} />
    </div>
  );
};
