import { useCallback, useEffect } from 'react';
import { useMap } from 'react-map-gl';

import { defaultZoom, mapId } from 'types/locations';

import { useAppSelector } from 'store';
import { selectCurrentLocation } from 'store/mapSlice';

export const useFlyToCurrentLocation = () => {
  const { [mapId]: map } = useMap();
  const currentLocation = useAppSelector(selectCurrentLocation);

  const flyToCurrentLocation = useCallback(
    () =>
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
