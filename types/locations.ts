export const mapId = 'locations' as const;
export const defaultZoom = 14.2 as const;

export type Address = {
  id: number;
  label: string;
  link: string;
};

export type Coordinates = {
  id: number;
  latitude: number;
  longitude: number;
};

type Contact = {
  id: number;
  fullName: string;
  title: string;
  email: string;
  number: string;
};

export type LocationAttributes = {
  name: string;
  slug: string;
  address: Address;
  contact: Contact;
  coordinates: Coordinates;
  timeZone: string;
  order: number;
};

export type Location = {
  id: number;
  attributes: LocationAttributes;
};
