import clsx, { ClassValue } from 'clsx';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import Mapbox, {
  MapProps as MapboxProps,
  NavigationControl,
  FullscreenControl,
  MapRef,
  MarkerProps,
  Marker,
} from 'react-map-gl';
import { CSSTransition } from 'react-transition-group';

import { mapId } from 'types/locations';

import { useMediaQuery } from 'hooks/useMediaQuery';

import media from 'styles/media.module.scss';

import styles from './Map.module.scss';

export interface MapProps extends Omit<MapboxProps, 'initialViewState' | 'fog' | 'terrain' | 'children'> {
  initialViewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  className?: ClassValue | ClassValue[];
  markers?: MarkerProps[];
  children?: React.ReactNode;
  childrenContainerNodeRef?: React.RefObject<HTMLDivElement>;
}

const paddingBottomMobile = 365;
const paddingLeftLargeTablet = 560;
const paddingLeftLaptop = 720;
const paddingLeftLargeLaptop = 960;

export const Map: React.FC<MapProps> = ({ className, children, markers, ...props }) => {
  const mapRef = useRef<MapRef>(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isLargeTablet = useMediaQuery({ width: { min: parseInt(media.breakpointLargeTablet) } });
  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });
  const isLargeLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLargeLaptop) } });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const mapContainer = mapRef.current;

    if (!mapContainer) return;

    const setupPaddings = () => {
      if (isFullscreen) return mapContainer.easeTo({ padding: { left: 0, right: 0, top: 0, bottom: 0 } });

      if (isLargeLaptop)
        return mapContainer.easeTo({ padding: { left: paddingLeftLargeLaptop, right: 0, top: 0, bottom: 0 } });

      if (isLaptop) return mapContainer.easeTo({ padding: { left: paddingLeftLaptop, right: 0, top: 0, bottom: 0 } });

      if (isLargeTablet)
        return mapContainer.easeTo({ padding: { left: paddingLeftLargeTablet, right: 0, top: 0, bottom: 0 } });

      mapContainer.easeTo({ padding: { left: 0, right: 0, top: 0, bottom: paddingBottomMobile } });
    };

    setupPaddings();
  }, [isLoaded, isLargeLaptop, isLaptop, isLargeTablet, isFullscreen]);

  useEffect(() => {
    const handleFullscreen = () => {
      const mapContainer = mapRef.current;
      const isFullscreen = document.fullscreenElement?.id === mapId;

      if (!mapContainer) return;

      setIsFullscreen(isFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreen);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreen);
    };
  }, []);

  const handleLoad = () => setIsLoaded(true);

  return isMounted ? (
    <div className={clsx(styles.Map, className)}>
      <Mapbox
        ref={mapRef}
        id={mapId}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE}
        projection={isLaptop ? 'globe' : 'mercator'}
        style={{ width: '100%', height: '100%' }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        attributionControl={false}
        onLoad={handleLoad}
        {...props}
      >
        <CSSTransition addEndListener={() => void 0} classNames={'Fade'} in={!isFullscreen} unmountOnExit>
          {children}
        </CSSTransition>

        {markers && markers.map((props) => <Marker key={`${props.latitude} ${props.longitude}`} {...props} />)}
        {isLargeTablet && (
          <>
            <FullscreenControl position="bottom-right" />
            <NavigationControl position="bottom-right" visualizePitch />
          </>
        )}
      </Mapbox>
    </div>
  ) : null;
};
