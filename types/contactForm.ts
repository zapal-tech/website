export type ContactFormState = {
  firstName: string;
  lastName?: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactFormDto = ContactFormState & {
  comeFromPage?: string;
  comeFromLanguage?: string;
};
