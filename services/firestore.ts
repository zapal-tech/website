import { getFirestore, collection, addDoc, serverTimestamp, getDocs, orderBy, limit, query } from 'firebase/firestore';

import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { Partner } from 'types/partners';
import { Project, ProjectPreview } from 'types/projects';
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

export const getProjectsPreview = async (locale?: string): Promise<ProjectPreview[]> => {
  const lng = getLocale(locale);

  const projectsRef = collection(firestore, 'projects');
  const projectsQuery = query(projectsRef, orderBy(`${lng}.order`), limit(4));
  const projectsSnapshot = await getDocs(projectsQuery);

  const projects = projectsSnapshot.docs.map((doc) => {
    const { id, shortName, shortDescription, thumbnailImageUrl, order } = doc.data()[lng];

    return { id, shortName, shortDescription, thumbnailImageUrl, order };
  }) as ProjectPreview[];

  return projects;
};

export const getProjects = async (locale?: string): Promise<Project[]> => {
  const lng = getLocale(locale);

  const projectsRef = collection(firestore, 'projects');
  const projectsQuery = query(projectsRef, orderBy(`${lng}.order`));
  const projectsSnapshot = await getDocs(projectsQuery);

  const projects = projectsSnapshot.docs.map(mapLocaleObject(lng)) as Project[];

  return projects;
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

export const getPartners = async (): Promise<Partner[]> => {
  const partnersRef = collection(firestore, 'partners');
  const partnersQuery = query(partnersRef, orderBy('order'));
  const partnersSnapshot = await getDocs(partnersQuery);

  const partners = partnersSnapshot.docs.map((doc) => doc.data()) as Partner[];
  return partners;
};
