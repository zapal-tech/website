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

  const widthMin = query.width?.min;
  const widthMax = query.width?.max;

  const heightMin = query.height?.min;
  const heightMax = query.height?.max;

  const widthMatch =
    (width && widthMin && widthMin <= width) || (width && widthMax && widthMax >= width) || (!widthMin && !widthMax);
  const heightMatch =
    (height && heightMin && heightMin <= height) ||
    (height && heightMax && heightMax >= height) ||
    (!heightMin && !heightMax);

  return Boolean(widthMatch && heightMatch);
};
