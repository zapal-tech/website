import PythonIcon from '/public/technologies/python.svg';
import SwiftIcon from '/public/technologies/swift.svg';
import clsx, { ClassValue } from 'clsx';

import AiIcon from 'public/technologies/adobe-illustrator.svg';
import AngularIcon from 'public/technologies/angular.svg';
import CSharpIcon from 'public/technologies/cSharp.svg';
import CodeIcon from 'public/technologies/code.svg';
import FigmaIcon from 'public/technologies/figma.svg';
import HtmlIcon from 'public/technologies/html-5.svg';
import JavaIcon from 'public/technologies/java.svg';
import JsIcon from 'public/technologies/js.svg';
import NotionIcon from 'public/technologies/notion.svg';
import ReduxIcon from 'public/technologies/redux.svg';

import styles from './ItemsGrid.module.scss';

const itemsArray = [
  SwiftIcon,
  PythonIcon,
  CodeIcon,
  FigmaIcon,
  CSharpIcon,
  JsIcon,
  AiIcon,
  HtmlIcon,
  NotionIcon,
  ReduxIcon,
  JavaIcon,
  AngularIcon,
];

export type ItemsGridProps = {
  className?: ClassValue | ClassValue[];
};

export const ItemsGrid: React.FC<ItemsGridProps> = ({ className }) => (
  <div className={clsx(styles.Grid, className)}>
    {itemsArray.map((Icon, index) => (
      <Icon key={index} className={styles.Grid__Item} />
    ))}
  </div>
);
