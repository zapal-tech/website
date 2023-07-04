import { createContext, useEffect, useMemo, useState } from 'react';

import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';

type ModalState = {
  isOpen: boolean;
  content: React.ComponentType | null;
};

type ContactFormField = { name: keyof ContactFormState; value: string };

const initialModalState: ModalState = {
  isOpen: false,
  content: null,
};

const initialContactFormState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

export type GlobalContextProps<PageProps = Record<string, any>> = {
  pageProps: PageProps;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  modal: ModalState;
  openModal: (content: React.ComponentType) => void;
  closeModal: () => void;
  locations?: Location[];
  currentLocation?: Location;
  currentLocationId: number | null;
  setCurrentLocationId: (index: number) => void;
  contactForm: ContactFormState;
  clearContactForm: () => void;
  setContactFormFieldValue: (field: ContactFormField) => void;
};

export const GlobalContext = createContext<GlobalContextProps>({
  pageProps: {},
  isMobileMenuOpen: false,
  openMobileMenu: () => undefined,
  closeMobileMenu: () => undefined,
  modal: initialModalState,
  openModal: () => undefined,
  closeModal: () => undefined,
  locations: undefined,
  currentLocation: undefined,
  currentLocationId: 0,
  setCurrentLocationId: () => undefined,
  contactForm: initialContactFormState,
  clearContactForm: () => undefined,
  setContactFormFieldValue: () => undefined,
});

export const GlobalContextProvider: React.FC<{ pageProps: Record<string, any> } & React.PropsWithChildren> = ({
  children,
  pageProps,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modal, setModal] = useState(initialModalState);
  const [currentLocationId, setCurrentLocationId] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState(initialContactFormState);
  const currentLocation = useMemo<Location | undefined>(
    () =>
      typeof currentLocationId === 'number' && pageProps.locations
        ? (pageProps.locations as Location[]).find(({ id }) => id === currentLocationId)
        : undefined,
    [pageProps.locations, currentLocationId],
  );

  useEffect(() => {
    if (pageProps.locations?.[0]) setCurrentLocationId(pageProps.locations[0].id);
  }, [pageProps.locations]);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openModal = (content: React.ComponentType) => setModal({ isOpen: true, content });
  const closeModal = () => setModal({ isOpen: false, content: null });

  const clearContactForm = () => setContactForm(initialContactFormState);
  const setContactFormFieldValue = ({ name, value }: ContactFormField) =>
    setContactForm((state) => ({ ...state, [name]: value }));

  return (
    <GlobalContext.Provider
      value={{
        pageProps,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        modal,
        openModal,
        closeModal,
        locations: pageProps?.locations,
        currentLocation,
        currentLocationId,
        setCurrentLocationId,
        contactForm,
        clearContactForm,
        setContactFormFieldValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
