import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';

type State = {
  isMobileMenuOpen: boolean;
};

const initialState: State = {
  isMobileMenuOpen: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { setIsMobileMenuOpen } = generalSlice.actions;

export const selectIsMobileMenuOpen = ({ general }: RootState) => general.isMobileMenuOpen;

export default generalSlice.reducer;
