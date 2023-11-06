import { ApiBaseProperties } from './api';

export const mapId = 'locations' as const;
export const defaultZoom = 14.2 as const;

export type Coordinates = [longitude: number, latitude: number];

export type Location = ApiBaseProperties<{
  slug: string;
  order: number;
  name: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  coordinates: Coordinates;
  timeZone: string;
}>;
