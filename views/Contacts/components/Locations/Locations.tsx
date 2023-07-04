import clsx from 'clsx';
import { useMemo } from 'react';
import { MarkerProps } from 'react-map-gl';

import PinIcon from 'public/icons/pin.svg';

import { defaultZoom } from 'types/locations';

import { useFlyToCurrentLocation } from 'hooks/useFlyToCurrentLocation';
import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container } from 'components';

import { ContactsProps } from 'views/Contacts/Contacts';

import { Map } from './components/Map/Map';
import { Tabs } from './components/Tabs/Tabs';

import styles from './Locations.module.scss';

export const Locations = () => {
  const { locations, currentLocation, setCurrentLocationId } = useGlobalContext<ContactsProps>();
  const flyToCurrentLocation = useFlyToCurrentLocation();

  const markers: MarkerProps[] | undefined = useMemo(
    () =>
      locations?.map(({ id, attributes: { name, coordinates } }) => ({
        ...coordinates,
        children: (
          <PinIcon
            className={clsx(
              styles.Locations__Marker,
              name === currentLocation?.attributes.name && styles['Locations__Marker--Active'],
            )}
          />
        ),
        anchor: 'bottom',
        onClick: () => {
          if (name === currentLocation?.attributes.name) return flyToCurrentLocation();
          setCurrentLocationId(id);
        },
      })),
    [currentLocation?.attributes.name, flyToCurrentLocation, locations, setCurrentLocationId],
  );

  if (!currentLocation) return null;

  return (
    <Container className={styles.Locations}>
      <Map
        initialViewState={{ ...currentLocation.attributes.coordinates, zoom: defaultZoom }}
        className={styles.Locations__Map}
        markers={markers}
      >
        <Tabs className={styles.Locations__Tabs} />
      </Map>
    </Container>
  );
};
