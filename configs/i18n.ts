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
  Contacts = 'contacts-page',
  ContactForm = 'contact-form',
  Projects = 'projects-page',
  About = 'about-page',
  Blog = 'blog-page',
  SupportUkraine = 'support-ukraine-page',
  Sitemap = 'sitemap-page',
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);
export const globalNamespaces = [
  Namespace.Common,
  Namespace.Languages,
  Namespace.Navigation,
  Namespace.Footer,
  Namespace.ContactForm,
];
