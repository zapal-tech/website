import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import i18n, { LanguageOption, Language } from 'i18n';

import { RootState } from 'store';

export const changeLanguage = createAsyncThunk('i18n/changeLanguage', async (language: Language, { dispatch }) => {
  await i18n.changeLanguage(language);

  dispatch(setLanguage(language));

  return language;
});

type SliceState = {
  language: Language;
  languages: LanguageOption[];
};

const initialState: SliceState = {
  language: i18n.options.lng as Language,
  languages: [
    { id: Language.English, flag: 'US' },
    { id: Language.Ukrainian, flag: 'UA' },
  ],
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const selectLanguages = (state: RootState) => state.i18n.languages;
export const selectCurrentLanguage = (state: RootState) => state.i18n.language;

export const selectCurrentLanguageOption = createSelector([selectCurrentLanguage, selectLanguages], (id, languages) =>
  languages.find((lng) => lng.id === id),
);

export const { setLanguage } = i18nSlice.actions;

export default i18nSlice.reducer;
