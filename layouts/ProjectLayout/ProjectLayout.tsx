import clsx, { ClassValue } from 'clsx';

import { AppLayout } from 'layouts/AppLayout/AppLayout';

import styles from './ProjectLayout.module.scss';

export type ProjectLayoutProps = React.PropsWithChildren<{
  className?: ClassValue | ClassValue[];
  mainClassName?: ClassValue | ClassValue[];
}>;

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, className, mainClassName }) => (
  <AppLayout
    className={clsx(styles.ProjectLayout, className)}
    mainClassName={clsx(styles.ProjectLayout__Main, mainClassName)}
  >
    {children}
  </AppLayout>
);
