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
  General = 'general',
  Navigation = 'navigation',
  Languages = 'languages',
  Footer = 'footer',
  Home = 'home-page',
  Contacts = 'contacts-page',
  ContactForm = 'contact-form',
  Projects = 'projects-page',
  Project = 'project-page',
  About = 'about-page',
  Blog = 'blog-page',
  SupportUkraine = 'support-ukraine-page',
  Sitemap = 'sitemap-page',
  ScheduleMeeting = 'schedule-meeting-page',
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);
export const globalNamespaces = [
  Namespace.Common,
  Namespace.General,
  Namespace.Languages,
  Namespace.Navigation,
  Namespace.Footer,
  Namespace.ContactForm,
];
