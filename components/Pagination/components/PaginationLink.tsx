import clsx from 'clsx';

import styles from '../Pagination.module.scss';

type PaginationLinkProps = React.PropsWithChildren<{
  children: React.ReactNode;
  current?: boolean;
  disabled?: boolean;
  [key: string]: any;
}>;

export const PaginationLink: React.FC<PaginationLinkProps> = ({ children, current, disabled, ...props }) => (
  <a
    className={clsx(styles.Pagination__Link, {
      [styles['Pagination__Link--Current']]: current,
      [styles['Pagination__Link--Disabled']]: disabled,
    })}
    aria-current={current}
    aria-disabled={disabled}
    {...props}
  >
    {children}
  </a>
);
