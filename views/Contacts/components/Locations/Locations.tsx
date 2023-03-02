import clsx from 'clsx';
import { useMemo } from 'react';
import { MarkerProps } from 'react-map-gl';

import PinIcon from 'public/icons/pin.svg';

import { defaultZoom } from 'types/locations';

import { useFlyToCurrentLocation } from 'hooks/useFlyToCurrentLocation';

import { useAppDispatch, useAppSelector } from 'store';
import { selectCurrentLocation, selectLocations, setCurrentLocationIndex } from 'store/mapSlice';

import { Container } from 'components';

import { Map } from './components/Map/Map';
import { Tabs } from './components/Tabs/Tabs';

import styles from './Locations.module.scss';

export const Locations = () => {
  const currentLocation = useAppSelector(selectCurrentLocation);
  const locations = useAppSelector(selectLocations);
  const dispatch = useAppDispatch();
  const flyToCurrentLocation = useFlyToCurrentLocation();

  const markers: MarkerProps[] = useMemo(
    () =>
      locations.map(({ name, coordinates }, idx) => ({
        ...coordinates,
        children: (
          <PinIcon
            className={clsx(
              styles.Locations__Marker,
              name === currentLocation.name && styles['Locations__Marker--Active'],
            )}
          />
        ),
        anchor: 'bottom',
        onClick: () => {
          if (name === currentLocation.name) return flyToCurrentLocation();
          dispatch(setCurrentLocationIndex(idx));
        },
      })),
    [currentLocation.name, flyToCurrentLocation, locations, dispatch],
  );

  return (
    <Container className={styles.Locations}>
      <Map
        initialViewState={{ ...currentLocation.coordinates, zoom: defaultZoom }}
        className={styles.Locations__Map}
        markers={markers}
      >
        <Tabs className={styles.Locations__Tabs} />
      </Map>
    </Container>
  );
};
