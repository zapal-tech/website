import { useCallback, useEffect, useMemo } from 'react';
import { useMap } from 'react-map-gl';

import { Location, defaultZoom, mapId } from 'types/locations';

import { useGlobalContext } from './useGlobalContext';

export const useFlyToCurrentLocation = () => {
  const { [mapId]: map } = useMap();
  const { currentLocation } = useGlobalContext<{ locations: Location[] }>();

  const flyToCurrentLocation = useCallback(
    () =>
      currentLocation &&
      map?.flyTo({
        center: [currentLocation.coordinates.longitude, currentLocation.coordinates.latitude],
        zoom: defaultZoom,
      }),
    [currentLocation, map],
  );

  useEffect(() => {
    flyToCurrentLocation();
  }, [flyToCurrentLocation]);

  return flyToCurrentLocation;
};
