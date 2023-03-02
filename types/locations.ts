export const mapId = 'locations' as const;
export const defaultZoom = 14.2 as const;

export type Coordinates = {
  latitude: number;
  longitude: number;
};

type Contact = {
  fullName: string;
  title: string;
  email: { label: string; link: string };
  phone: { label: string; link: string };
};

export type Location = {
  name: string;
  address: { label: string; link: string };
  coordinates: Coordinates;
  timeZone: string;
  contact: Contact;
};
