import python from '/public/technologies/python.svg';
import swift from '/public/technologies/swift.svg';
import Image from 'next/image';
import ai from 'public/technologies/adobe_illustrator.svg';
import angular from 'public/technologies/angular.svg';
import cSharp from 'public/technologies/cSharp.svg';
import code from 'public/technologies/code.svg';
import figma from 'public/technologies/figma.svg';
import html from 'public/technologies/html_5.svg';
import java from 'public/technologies/java.svg';
import js from 'public/technologies/js.svg';
import notion from 'public/technologies/notion.svg';
import redux from 'public/technologies/redux.svg';
import React from 'react';

import styles from '../ItemsGrid/ItemsGrid.module.scss';

const itemsArray: string[] = [swift, python, code, figma, cSharp, js, ai, html, notion, redux, java, angular];
type ItemsGrid = {
  className: string;
};
export const ItemsGrid: React.FC<ItemsGrid> = ({ className }) => (
  <div className={styles.Grid}>
    {itemsArray.map((value, index) => (
      <Image key={index} className={className} src={value} alt="item" />
    ))}
  </div>
);
