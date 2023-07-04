import clsx from 'clsx';
import ImageComponent, { ImageProps as ImageComponentProps, StaticImageData } from 'next/image';

import { ApiImage } from 'types/api';

import { imageLoader } from 'utils/imageLoader';

import styles from './Image.module.scss';

// Types from next/image
interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticImageData | StaticRequire;

export type ImageProps = Omit<ImageComponentProps, 'src'> &
  React.PropsWithChildren & {
    image?: ApiImage;
    className?: string;
    imageClassName?: string;
    src?: string | StaticImport;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Image: React.FC<ImageProps> = ({
  children,
  className,
  imageClassName,
  // height,
  // width,
  image,
  src,
  unoptimized,
  ...props
}) => (
  <div className={clsx(styles.Image, className)}>
    <ImageComponent
      className={clsx(styles.Image__Image, imageClassName)}
      loader={(loaderProps) => imageLoader({ ...loaderProps, image })}
      fill
      src={image?.data?.attributes?.url || src || ''}
      unoptimized={image?.data?.attributes?.ext === 'svg' || unoptimized}
      {...props}
    />
    {children}
  </div>
);
