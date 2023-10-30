import { ApiBaseProperties, ApiImage } from './api';

export type Technology = ApiBaseProperties<{
  name: string;
  description: string;
  slug: string;
  logo: ApiImage;
}>;
