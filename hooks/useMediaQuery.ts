import { useWindowSize } from './useWindowSize';

type QueryDetails = {
  min?: number;
  max?: number;
};

type Query = {
  width?: QueryDetails;
  height?: QueryDetails;
};

export const useMediaQuery = (query: Query): boolean => {
  const { width, height } = useWindowSize();

  if (!width || !height) return true;

  const widthMin = query.width?.min;
  const widthMax = query.width?.max;

  const heightMin = query.height?.min;
  const heightMax = query.height?.max;

  const widthMatch = (widthMin ? width >= widthMin : true) && (widthMax ? width <= widthMax : true);
  const heightMatch = (heightMin ? height >= heightMin : true) && (heightMax ? height <= heightMax : true);

  return Boolean(widthMatch && heightMatch);
};
