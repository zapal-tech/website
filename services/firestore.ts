import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore/lite';

import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { TeamMember, TeamMemberPreview } from 'types/team';

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

  return teamSnapshot.docs.map((doc) => {
    const { firstName, lastName, title, imageUrl } = doc.data()[locale || defaultLanguage];

    return { firstName, lastName, title, imageUrl };
  }) as TeamMemberPreview[];
};

export const getTeam = async (locale?: string): Promise<TeamMember[]> => {
  const teamRef = collection(firestore, 'team');
  const teamSnapshot = await getDocs(teamRef);

  return teamSnapshot.docs.map((doc) => doc.data()[locale || defaultLanguage]) as TeamMember[];
};

export const getLocations = async (locale?: string): Promise<Location[]> => {
  const locationsRef = collection(firestore, 'locations');
  const locationsSnapshot = await getDocs(locationsRef);

  return locationsSnapshot.docs.map((doc) => doc.data()[locale || defaultLanguage]) as Location[];
};
