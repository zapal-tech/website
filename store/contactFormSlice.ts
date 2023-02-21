import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContactFormState } from 'types/contactForm';

import { RootState } from 'store';

type ContactFormField = { name: keyof ContactFormState; value: string };

const initialState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    clearContactForm: () => initialState,
    setContactFormFieldValue: (state, { payload }: PayloadAction<ContactFormField>) => {
      state[payload.name] = payload.value;
    },
  },
});

export const { setContactFormFieldValue, clearContactForm } = contactFormSlice.actions;

export const selectContactFormState = (state: RootState) => state.contactForm;

export default contactFormSlice.reducer;
