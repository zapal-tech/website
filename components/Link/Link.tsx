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
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const Link: React.FC<LinkProps> = ({
  className,
  uppercase,
  underline = true,
  icon = true,
  children,
  target = '_blank',
  ...props
}) => {
  const isExternal = typeof props.href === 'string' && props.href.startsWith('http');

  const Content: React.FC = () => (
    <>
      {icon && <LinkIcon className={styles.Link__Icon} />}
      {children}
    </>
  );

  return (
    <LinkComponent
      className={clsx(
        styles.Link,
        uppercase && styles['Link--Uppercase'],
        underline && styles['Link--Underline'],
        icon && styles['Link--Icon'],
        className,
      )}
      passHref={isExternal}
      legacyBehavior={isExternal}
      {...props}
    >
      {isExternal ? (
        <a
          className={clsx(
            styles.Link,
            uppercase && styles['Link--Uppercase'],
            underline && styles['Link--Underline'],
            icon && styles['Link--Icon'],
            className,
          )}
          target={target}
          rel="noopener noreferrer"
        >
          <Content />
        </a>
      ) : (
        <Content />
      )}
    </LinkComponent>
  );
};
