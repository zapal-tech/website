import { ApiBaseProperties, ApiImage } from './api';

export type Partner = ApiBaseProperties<{
  slug: string;
  order: number;
  name: string;
  url: string;
  logo: ApiImage;
  viewType: 'default' | 'big';
}>;
