import { ImageLoaderProps } from 'next/image';

import { ApiImage } from 'types/api';

// { key: device width; value: image width }
const sizes = {
  '1024': 700,
  '1280': 750,
  '1440': 800,
  '1680': 850,
  '1920': 900,
  '2560': 950,
  '3840': 1000,
} as const;

const getCorrectSizeUrl = (image: ApiImage, deviceWidth: number) => {
  const { formats, ext, url } = image.data.attributes;

  if (ext !== 'svg') {
    const matchedSize = Object.entries(sizes).find(([deviceWidthMatch]) => Number(deviceWidthMatch) >= deviceWidth);

    return matchedSize ? formats[matchedSize[1].toString()].url : url;
  }

  return url;
};

export const imageLoader = ({ src, image, width: deviceWidth }: ImageLoaderProps & { image?: ApiImage }) =>
  image ? getCorrectSizeUrl(image, deviceWidth) : src;
