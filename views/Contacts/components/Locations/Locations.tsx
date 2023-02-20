import { Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

import { Coordinates } from 'types/locations';

import { useWindowSize } from 'hooks';

import { useAppSelector } from 'store';
import { selectCurrentLocation, selectLocations } from 'store/mapSlice';

import { Container } from 'components';

import { Map } from './components/Map/Map';
import { TabContent } from './components/TabContent/TabContent';
import { Tabs } from './components/Tabs/Tabs';

import media from 'styles/media.module.scss';

import styles from './Locations.module.scss';

const markerIconProps: google.maps.Icon = { url: 'icons/location-marker.svg' };

export const Locations = () => {
  const windowSize = useWindowSize();
  const currentLocation = useAppSelector(selectCurrentLocation);
  const locations = useAppSelector(selectLocations);

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  const centerCoordinates = useMemo<Coordinates>(() => {
    if (!windowSize) return currentLocation.coordinates;

    if (isLaptop) return { ...currentLocation.coordinates, lng: currentLocation.coordinates.lng - 0.02 };

    return { ...currentLocation.coordinates, lat: currentLocation.coordinates.lat - 0.005 };
  }, [currentLocation, windowSize, isLaptop]);

  return (
    <div className={styles.Locations}>
      <Map center={centerCoordinates} mapContainerClassName={styles.Locations__Map}>
        {locations.map(({ name, coordinates }) => (
          <Marker key={name} position={coordinates} icon={markerIconProps} />
        ))}
      </Map>

      <Container className={styles.Locations__TabContainer}>
        <Tabs />
        <TabContent />
      </Container>
    </div>
  );
};
