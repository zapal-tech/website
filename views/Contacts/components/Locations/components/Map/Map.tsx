import { GoogleMap, GoogleMapProps, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { Coordinates } from 'types/locations';

export type MapProps = GoogleMapProps & {
  center: Coordinates;
};

const MapComponent: React.FC<MapProps> = ({ zoom = 15, children, ...props }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    preventGoogleFontsLoading: true,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const [map, setMap] = useState<google.maps.Map | null>(null);

  // const onLoad = useCallback((map: google.maps.Map) => {
  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(() => {
  //   setMap(null);
  // }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded && isMounted ? (
    <GoogleMap
      zoom={zoom}
      options={{
        disableDefaultUI: true,
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
        isFractionalZoomEnabled: true,
      }}
      {...props}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {children}
    </GoogleMap>
  ) : null;
};

export const Map = MapComponent;
