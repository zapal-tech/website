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
  const { locations, currentLocation, currentLocationId, setCurrentLocationId } = useGlobalContext();
  const flyToCurrentLocation = useFlyToCurrentLocation();

  const handleTabClick = (id: number) => {
    if (id === currentLocationId) return flyToCurrentLocation();

    setCurrentLocationId(id);
  };

  return (
    <div className={clsx(styles.Tabs, className)}>
      <div className={styles.Tabs__ButtonsContainer}>
        {locations?.map(({ id, attributes }) => (
          <TabButton key={id} active={id === currentLocationId} onClick={() => handleTabClick(id)}>
            {attributes.name}
          </TabButton>
        ))}
      </div>

      {currentLocation && <TabContent {...currentLocation} />}
    </div>
  );
};
