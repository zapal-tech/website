import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore/lite';

import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { Service } from 'types/services';
import { TeamMember, TeamMemberPreview } from 'types/team';

import { sortByOrder } from 'utils/order';

import { defaultLanguage } from 'i18n';

import { app } from './firebase';

export const firestore = getFirestore(app);

export const addContact = async (contact: ContactFormState) => {
  const contactsRef = collection(firestore, 'contacts');
  const newContact = await addDoc(contactsRef, { ...contact, createdAt: serverTimestamp() });

  return newContact;
};

export const getTeamPreview = async (locale?: string): Promise<TeamMemberPreview[]> => {
  const teamRef = collection(firestore, 'team');
  const teamSnapshot = await getDocs(teamRef);

  const team = teamSnapshot.docs.map((doc) => {
    const { id, firstName, lastName, title, imageUrl, order } = doc.data()[locale || defaultLanguage];

    return { id, firstName, lastName, title, imageUrl, order };
  }) as TeamMemberPreview[];

  return team.sort(sortByOrder);
};

export const getTeam = async (locale?: string): Promise<TeamMember[]> => {
  const teamRef = collection(firestore, 'team');
  const teamSnapshot = await getDocs(teamRef);

  const team = teamSnapshot.docs.map((doc) => doc.data()[locale || defaultLanguage]) as TeamMember[];

  return team.sort(sortByOrder);
};

export const getLocations = async (locale?: string): Promise<Location[]> => {
  const locationsRef = collection(firestore, 'locations');
  const locationsSnapshot = await getDocs(locationsRef);

  const locations = locationsSnapshot.docs.map((doc) => doc.data()[locale || defaultLanguage]) as Location[];

  return locations.sort(sortByOrder);
};

export const getServices = async (locale?: string): Promise<Service[]> => {
  const servicesRef = collection(firestore, 'services');
  const servicesSnapshot = await getDocs(servicesRef);

  const services = servicesSnapshot.docs.map((doc) => doc.data()[locale || defaultLanguage]) as Service[];

  return services.sort(sortByOrder);
};

export const getPartners = async (): Promise<Service[]> => {
  const partnersRef = collection(firestore, 'partners');
  const partnersSnapshot = await getDocs(partnersRef);

  const partners = partnersSnapshot.docs.map((doc) => doc.data()) as Service[];

  return partners.sort(sortByOrder);
};
