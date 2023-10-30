import { ApiBaseProperties, ApiImage } from './api';

export type Project = ApiBaseProperties<{
  order: number;
  slug: string;
  preview: ProjectPreview;
  content: ProjectContent;
}>;

export type ProjectPreview = {
  name: string;
  description: string;
  image: ApiImage;
};

export type ProjectContent = {
  name: string;
  description: string;
};
