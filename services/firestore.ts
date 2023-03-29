import { getFirestore, collection, addDoc, serverTimestamp, getDocs, orderBy, limit, query } from 'firebase/firestore';

import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { MadeByZapalWith } from 'types/madeByZapalWith';
import { Service } from 'types/services';
import { TeamMember, TeamMemberPreview } from 'types/team';

import { mapLocaleObject } from 'utils/firestore';

import { defaultLanguage } from 'i18n';

import { app } from './firebase';

const getLocale = (locale?: string) => locale || defaultLanguage;

export const firestore = getFirestore(app);

export const addContact = async (contact: ContactFormState) => {
  const contactsRef = collection(firestore, 'contacts');
  const newContact = await addDoc(contactsRef, { ...contact, createdAt: serverTimestamp() });

  return newContact;
};

export const getTeamPreview = async (locale?: string): Promise<TeamMemberPreview[]> => {
  const lng = getLocale(locale);

  const teamRef = collection(firestore, 'team');
  const teamQuery = query(teamRef, orderBy(`${lng}.order`), limit(3));
  const teamSnapshot = await getDocs(teamQuery);

  const team = teamSnapshot.docs.map((doc) => {
    const { id, firstName, lastName, title, imageUrl, order } = doc.data()[lng];

    return { id, firstName, lastName, title, imageUrl, order };
  }) as TeamMemberPreview[];

  return team;
};

export const getTeam = async (locale?: string): Promise<TeamMember[]> => {
  const lng = getLocale(locale);

  const teamRef = collection(firestore, 'team');
  const teamQuery = query(teamRef, orderBy(`${lng}.order`));
  const teamSnapshot = await getDocs(teamQuery);

  const team = teamSnapshot.docs.map(mapLocaleObject(lng)) as TeamMember[];

  return team;
};

export const getLocations = async (locale?: string): Promise<Location[]> => {
  const lng = getLocale(locale);

  const locationsRef = collection(firestore, 'locations');
  const locationsQuery = query(locationsRef, orderBy(`${lng}.order`));
  const locationsSnapshot = await getDocs(locationsQuery);

  const locations = locationsSnapshot.docs.map(mapLocaleObject(lng)) as Location[];

  return locations;
};

export const getServices = async (locale?: string): Promise<Service[]> => {
  const lng = getLocale(locale);

  const servicesRef = collection(firestore, 'services');
  const servicesQuery = query(servicesRef, orderBy(`${lng}.order`));
  const servicesSnapshot = await getDocs(servicesQuery);

  const services = servicesSnapshot.docs.map(mapLocaleObject(lng)) as Service[];

  return services;
};

export const getPartners = async (): Promise<Service[]> => {
  const partnersRef = collection(firestore, 'partners');
  const partnersSnapshot = await getDocs(partnersRef);

  const partners = partnersSnapshot.docs.map((doc) => doc.data()) as Service[];

  return partners;
};

export const getMadeByZapalWith = async (locale?: string): Promise<MadeByZapalWith[]> => {
  const lng = getLocale(locale);

  const madeByZapalWithRef = collection(firestore, 'madeByZapalWith');
  const madeByZapalWithQuery = query(madeByZapalWithRef, orderBy(`${lng}.order`));
  const madeByZapalWithSnapshot = await getDocs(madeByZapalWithQuery);

  const madeByZapalWith = madeByZapalWithSnapshot.docs.map(mapLocaleObject(lng)) as MadeByZapalWith[];

  return madeByZapalWith;
};
