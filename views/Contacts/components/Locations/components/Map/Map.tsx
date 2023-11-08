import { useCallback, useEffect, useRef, useState } from 'react';

import clsx, { ClassValue } from 'clsx';
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapbox, {
  FullscreenControl,
  MapRef,
  MapProps as MapboxProps,
  Marker,
  MarkerProps,
  NavigationControl,
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

  const isLargeTablet = useMediaQuery(`(min-width: ${media.breakpointLargeTablet})`);
  const isLaptop = useMediaQuery(`(min-width: ${media.breakpointLaptop})`);
  const isLargeLaptop = useMediaQuery(`(min-width: ${media.breakpointLargeLaptop})`);

  const setupPaddings = useCallback(
    (mapContainer: MapRef) => {
      setTimeout(() => {
        if (isFullscreen) return mapContainer.easeTo({ padding: { left: 0, right: 0, top: 0, bottom: 0 } }).resize();

        if (isLargeLaptop)
          return mapContainer
            .easeTo({ padding: { left: paddingLeftLargeLaptop, right: 0, top: 0, bottom: 0 } })
            .resize();

        if (isLaptop)
          return mapContainer.easeTo({ padding: { left: paddingLeftLaptop, right: 0, top: 0, bottom: 0 } }).resize();

        if (isLargeTablet)
          return mapContainer
            .easeTo({ padding: { left: paddingLeftLargeTablet, right: 0, top: 0, bottom: 0 } })
            .resize();

        mapContainer.easeTo({ padding: { left: 0, right: 0, top: 0, bottom: paddingBottomMobile } }).resize();
      }, 250);
    },
    [isLargeLaptop, isLaptop, isLargeTablet, isFullscreen],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const mapHTMLContainer = document.getElementById(mapId);

    // Prevent Lenis from scroll while zooming map
    mapHTMLContainer?.setAttribute('data-lenis-prevent', '');
  }, [isMounted, mapRef]);

  useEffect(() => {
    if (!isLoaded) return;

    const mapContainer = mapRef.current;

    if (!mapContainer) return;

    setupPaddings(mapContainer);
  }, [isLoaded, setupPaddings]);

  useEffect(() => {
    const mapContainer = mapRef.current;
    if (!mapContainer) return;

    if (!isFullscreen) setupPaddings(mapContainer);
  }, [mapRef, isFullscreen, setupPaddings]);

  useEffect(() => {
    const handleFullscreen = () => {
      const isFullscreen = mapRef.current ? document.fullscreenElement?.id === mapId : false;

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
        projection={{ name: isLaptop ? 'globe' : 'mercator' }}
        style={{ width: '100%', height: '100%' }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        attributionControl={false}
        onLoad={handleLoad}
        reuseMaps
        trackResize
        preserveDrawingBuffer
        {...props}
      >
        <CSSTransition addEndListener={() => void 0} classNames="Fade" in={!isFullscreen} timeout={300} unmountOnExit>
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
