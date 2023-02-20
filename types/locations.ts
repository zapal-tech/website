export type Coordinates = {
  lat: number;
  lng: number;
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
