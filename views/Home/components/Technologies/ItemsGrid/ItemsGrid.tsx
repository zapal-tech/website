import clsx, { ClassValue } from 'clsx';

import AngularIcon from 'public/technologies/angular.svg';
import CssIcon from 'public/technologies/css.svg';
import FastifyIcon from 'public/technologies/fastify.svg';
import HtmlIcon from 'public/technologies/html.svg';
import JavaScriptIcon from 'public/technologies/javascript.svg';
import NestJsIcon from 'public/technologies/nest-js.svg';
import NextJsIcon from 'public/technologies/next-js.svg';
import NodeJsIcon from 'public/technologies/node-js.svg';
import ReactIcon from 'public/technologies/react.svg';
import ReduxIcon from 'public/technologies/redux.svg';
import TypeScriptIcon from 'public/technologies/typescript.svg';
import VueIcon from 'public/technologies/vue.svg';

import styles from './ItemsGrid.module.scss';

const technologies = [
  TypeScriptIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  NextJsIcon,
  ReactIcon,
  AngularIcon,
  VueIcon,
  NodeJsIcon,
  NestJsIcon,
  FastifyIcon,
  ReduxIcon,
];

export type ItemsGridProps = {
  className?: ClassValue | ClassValue[];
};

export const ItemsGrid: React.FC<ItemsGridProps> = ({ className }) => (
  <div className={clsx(styles.Grid, className)}>
    {technologies.map((Icon, index) => (
      <Icon key={index} className={styles.Grid__Item} />
    ))}
  </div>
);
