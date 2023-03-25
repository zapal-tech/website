import clsx, { ClassValue } from 'clsx';

import { useFlyToCurrentLocation } from 'hooks/useFlyToCurrentLocation';
import { useGlobalContext } from 'hooks/useGlobalContext';

import { TabButton } from './components/TabButton/TabButton';
import { TabContent } from './components/TabContent/TabContent';

import styles from './Tabs.module.scss';

export type TabsProps = {
  className?: ClassValue | ClassValue[];
};

export const Tabs: React.FC<TabsProps> = ({ className }) => {
  const { locations, currentLocation, currentLocationIndex, setCurrentLocationIndex } = useGlobalContext();
  const flyToCurrentLocation = useFlyToCurrentLocation();

  const handleTabClick = (index: number) => {
    if (index === currentLocationIndex) return flyToCurrentLocation();

    setCurrentLocationIndex(index);
  };

  return (
    <div className={clsx(styles.Tabs, className)}>
      <div className={styles.Tabs__ButtonsContainer}>
        {locations?.map(({ name }, idx) => (
          <TabButton key={name} active={idx === currentLocationIndex} onClick={() => handleTabClick(idx)}>
            {name}
          </TabButton>
        ))}
      </div>

      {currentLocation && <TabContent {...currentLocation} />}
    </div>
  );
};
