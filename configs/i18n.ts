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
  Languages = 'language',
  Footer = 'footer',
  Home = 'home-page',
  Titles = 'titles',
  Contacts = 'contacts-page',
  ContactForm = 'contact-form',
  Projects = 'projects-page',
  About = 'about-page',
  Blog = 'blog-page',
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);
export const globalNamespaces = [
  Namespace.Common,
  // Namespace.Titles,
  Namespace.Languages,
  Namespace.Navigation,
  Namespace.Footer,
  Namespace.ContactForm,
];