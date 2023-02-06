import python from '/public/technologies/python.svg';
import swift from '/public/technologies/swift.svg';
import clsx, { ClassValue } from 'clsx';
import ai from 'public/technologies/adobe-illustrator.svg';
import angular from 'public/technologies/angular.svg';
import cSharp from 'public/technologies/cSharp.svg';
import code from 'public/technologies/code.svg';
import figma from 'public/technologies/figma.svg';
import html from 'public/technologies/html-5.svg';
import java from 'public/technologies/java.svg';
import js from 'public/technologies/js.svg';
import notion from 'public/technologies/notion.svg';
import redux from 'public/technologies/redux.svg';

import styles from './ItemsGrid.module.scss';

const itemsArray = [swift, python, code, figma, cSharp, js, ai, html, notion, redux, java, angular];

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
