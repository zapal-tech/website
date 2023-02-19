import { useAppDispatch, useAppSelector } from 'store';
import { selectCurrentLocationIndex, selectLocations, setCurrentLocationIndex } from 'store/mapSlice';

import { Text } from 'components';

import styles from './Tabs.module.scss';

export const Tabs = () => {
  const locations = useAppSelector(selectLocations);
  const currentLocationIndex = useAppSelector(selectCurrentLocationIndex);
  const dispatch = useAppDispatch();

  const handleTabClick = (index: number) => dispatch(setCurrentLocationIndex(index));

  return (
    <div className={styles.Tabs}>
      <div className={styles.Tabs__Container}>
        {locations.map((location, idx) => (
          <button key={location.name} className={styles.Tabs__Button} onClick={() => handleTabClick(idx)}>
            <Text
              className={[styles.Tabs__Text, currentLocationIndex === idx && styles['Tabs--Active']]}
              type="h5"
              size="small"
            >
              {location.name}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
};
