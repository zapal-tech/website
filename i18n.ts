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
  Home = 'home',
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);
