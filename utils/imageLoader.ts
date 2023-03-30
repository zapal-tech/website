import { ImageLoader, ImageLoaderProps } from 'next/image';

// { key: device width; value: [image width, image height] }
const sizes = {
  '768': [300, 375],
  '1024': [360, 450],
  '1280': [400, 500],
  '1440': [520, 650],
  '1680': [600, 750],
  '1920': [680, 850],
  '2560': [720, 900],
  '3840': [760, 950],
} as const;

const getFirebaseStorageUrl = (src: string, deviceWidth?: number, noSize?: boolean) => {
  const normalizedPath = (src.startsWith('/') ? src.slice(1) : src).replaceAll('/', '%2F');
  const [fileName, fileExtension] = normalizedPath.split('.');

  let path = normalizedPath;

  if (deviceWidth && !noSize && fileExtension !== 'svg') {
    const imageSizeArr = Object.entries(sizes).find(([key]) => Number(key) >= deviceWidth)?.[1] || sizes['768'];

    const size = `${imageSizeArr[0]}x${imageSizeArr[1]}`;

    path = `${fileName}_${size}.${fileExtension}`;
  }

  return `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_GOOGLE_FIREBASE_PROJECT_ID}.appspot.com/o/${path}?alt=media`;
};

export const imageLoader = ({ src, width, noSize }: ImageLoaderProps & { noSize?: boolean }) => {
  const isExternal = src.startsWith('http');
  const source = isExternal ? src : getFirebaseStorageUrl(src, width, noSize);

  return source;
};
