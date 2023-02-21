import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';

import { ContactFormState } from 'types/contactForm';

import { app } from './firebase';

export const firestore = getFirestore(app);

export const addContact = async (contact: ContactFormState) => {
  const contactsRef = collection(firestore, 'contacts');
  const newContact = await addDoc(contactsRef, { ...contact, createdAt: serverTimestamp() });

  return newContact;
};
