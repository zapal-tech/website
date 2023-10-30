import { ImageLoaderProps } from 'next/image';

import { ApiImage } from 'types/api';

// { key: device width; value: image width }
export const deviceWidthSizes = {
  '1680': 700,
  '1920': 800,
  '2560': 1200,
  '3840': 1600,
} as const;

const getCorrectSizeUrl = (image: ApiImage, deviceWidth: number) => {
  const { sizes, mimeType, url } = image;

  if (!sizes || mimeType === 'image/svg+xml') return url;

  const matchedSize = Object.entries(deviceWidthSizes).find(
    ([deviceWidthMatch]) => Number(deviceWidthMatch) >= deviceWidth,
  );

  return matchedSize ? sizes[matchedSize[1].toString()].url : url;
};

export const imageLoader = ({ src, image, width: deviceWidth }: ImageLoaderProps & { image?: ApiImage }) =>
  image?.sizes ? getCorrectSizeUrl(image, deviceWidth) : src;
