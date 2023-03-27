import clsx from 'clsx';
import ImageComponent, { ImageProps as ImageComponentProps } from 'next/image';

import styles from './Image.module.scss';

export type ImageProps = ImageComponentProps &
  React.PropsWithChildren & {
    className?: string;
    imageClassName?: string;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Image: React.FC<ImageProps> = ({ children, className, imageClassName, height, width, ...props }) => (
  <div className={clsx(styles.Image, className)}>
    <ImageComponent className={clsx(styles.Image__Image, imageClassName)} fill {...props} />
    {children}
  </div>
);
