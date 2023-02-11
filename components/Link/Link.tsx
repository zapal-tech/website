import clsx, { ClassValue } from 'clsx';
import LinkComponent, { LinkProps as LinkComponentProps } from 'next/link';
import LinkIcon from 'public/icons/link.svg';

import styles from './Link.module.scss';

export type LinkProps = LinkComponentProps & {
  children?: React.ReactNode;
  className?: ClassValue | ClassValue[];
  uppercase?: boolean;
  underline?: boolean;
  icon?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  className,
  uppercase = true,
  underline = true,
  icon = true,
  children,
  ...props
}) => (
  <LinkComponent
    className={clsx(
      styles.Link,
      uppercase && styles['Link--Uppercase'],
      underline && styles['Link--Underline'],
      icon && styles['Link--Icon'],
      className,
    )}
    {...props}
  >
    {icon && <LinkIcon className={styles.Link__Icon} />}
    {children}
  </LinkComponent>
);
