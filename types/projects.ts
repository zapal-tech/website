import { ApiImage } from './api';

export type Project = {
  id: number;
  attributes: ProjectAttributes;
};

export type ProjectAttributes = {
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  shortDescription?: string;
  thumbnailImage: ApiImage;
  order: number;
};
