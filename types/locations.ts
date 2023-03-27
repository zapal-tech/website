export const mapId = 'locations' as const;
export const defaultZoom = 14.2 as const;

export type Coordinates = {
  latitude: number;
  longitude: number;
};

type Contact = {
  fullName: string;
  title: string;
  email: string;
  phone: string;
};

export type Location = {
  id: string;
  name: string;
  address: { label: string; link: string };
  coordinates: Coordinates;
  timeZone: string;
  contact: Contact;
  order: number;
};
