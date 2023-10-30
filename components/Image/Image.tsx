import clsx from 'clsx';
import ImageComponent, { ImageProps as ImageComponentProps, StaticImageData } from 'next/image';
import { createPngDataUri } from 'unlazy/blurhash';

import { ApiImage } from 'types/api';

import { imageLoader } from 'utils/imageLoader';

import styles from './Image.module.scss';

// Types from next/image
interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticImageData | StaticRequire;

export type ImageProps = Omit<ImageComponentProps, 'src' | 'alt'> &
  React.PropsWithChildren & {
    image?: ApiImage;
    className?: string;
    imageClassName?: string;
    src?: string | StaticImport;
    alt?: string;
  };

export const Image: React.FC<ImageProps> = ({
  children,
  className,
  imageClassName,
  // height,
  // width,
  image,
  src,
  unoptimized,
  alt,
  ...props
}) => (
  <div className={clsx(styles.Image, className)}>
    <ImageComponent
      className={clsx(styles.Image__Image, imageClassName)}
      loader={(loaderProps) => imageLoader({ ...loaderProps, image })}
      fill
      src={image?.url || src || ''}
      alt={alt || image?.alt || ''}
      unoptimized={image?.mimeType === 'image/svg+xml' || unoptimized}
      placeholder={image?.blurhash ? 'blur' : 'empty'}
      blurDataURL={image?.blurhash ? createPngDataUri(image.blurhash) : undefined}
      {...props}
    />
    {children}
  </div>
);
