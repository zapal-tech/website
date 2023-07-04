import { ApiImage } from './api';

export type Service = {
  id: number;
  attributes: ServiceAttributes;
};

export type ServiceAttributes = {
  slug: string;
  name: string;
  description: string;
  icon: ApiImage;
  order: number;
};
