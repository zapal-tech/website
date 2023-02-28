export enum Language {
  English = 'en',
  Ukrainian = 'uk',
}

export type LanguageOption = {
  id: Language;
  flag: string;
};

export const defaultLanguage = Language.English;
export const supportedLanguages = Object.values(Language);

export enum Namespace {
  Common = 'common',
  Navigation = 'navigation',
  Languages = 'languages',
  Footer = 'footer',
  Home = 'home',
  Titles = 'titles',
  Contacts = 'contacts',
  ContactForm = 'contactForm',
  Projects = 'projects',
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);
export const globalNamespaces = [
  Namespace.Common,
  Namespace.Titles,
  Namespace.Languages,
  Namespace.Navigation,
  Namespace.Footer,
  Namespace.ContactForm,
];
