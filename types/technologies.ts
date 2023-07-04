import { ApiImage } from './api';

export type TechnologyAttributes = {
  title: string;
  description: string;
  slug: string;
  icon: ApiImage;
};

export type Technology = {
  id: number;
  attributes: TechnologyAttributes;
};
