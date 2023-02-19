import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';

export type State = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

type ContactFormField = Record<keyof State, string>;

const initialState: State = {
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
    setContactFormFieldValue: (state, action: PayloadAction<ContactFormField>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setContactFormFieldValue } = contactFormSlice.actions;

export const selectContactFormState = (state: RootState) => state.contactForm;

export default contactFormSlice.reducer;