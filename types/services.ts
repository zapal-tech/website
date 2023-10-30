import { ApiBaseProperties, ApiImage } from './api';

export type Service = ApiBaseProperties<{
  order: number;
  slug: string;
  name: string;
  description: string;
  icon: ApiImage;
}>;
