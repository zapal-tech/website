import clsx from 'clsx';
import ImageComponent, { ImageProps as ImageComponentProps } from 'next/image';

import { imageLoader } from 'utils/imageLoader';

import styles from './Image.module.scss';

export type ImageProps = ImageComponentProps &
  React.PropsWithChildren & {
    className?: string;
    imageClassName?: string;
    noSize?: boolean;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Image: React.FC<ImageProps> = ({
  children,
  className,
  imageClassName,
  height,
  width,
  noSize,
  ...props
}) => (
  <div className={clsx(styles.Image, className)}>
    <ImageComponent
      className={clsx(styles.Image__Image, imageClassName)}
      loader={(loaderProps) => imageLoader({ ...loaderProps, noSize })}
      fill
      {...props}
    />
    {children}
  </div>
);
