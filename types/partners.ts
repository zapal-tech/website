import { ApiImage } from './api';

export type Partner = {
  id: number;
  attributes: PartnerAttributes;
};

export type PartnerAttributes = {
  name: string;
  website: string;
  order: number;
  slug: string;
  image: ApiImage;
};
