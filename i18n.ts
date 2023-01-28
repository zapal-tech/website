import i18next, { InitOptions } from 'i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';
// import { initReactI18next } from 'react-i18next';

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
}

export const defaultNamespace = Namespace.Common;
export const namespaces = Object.values(Namespace);

export const langPath = '/locales/{{lng}}/{{ns}}.json' as const;

i18next
  // .use(LanguageDetector)
  // .use(initReactI18next)
  // .use(Backend)
  .init({
    lng: defaultLanguage,
    defaultNS: defaultNamespace,
    ns: namespaces,
    debug: false,
    supportedLngs: supportedLanguages,
    partialBundledLanguages: true,
    resources: {},
    // detection: {},
    backend: { loadPath: langPath },
  } as InitOptions);

export default i18next;
