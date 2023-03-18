import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';

type ContentType = React.ComponentType;

export type State = {
  isOpen: boolean;
  content: ContentType | null;
};

const initialState: State = {
  isOpen: false,
  content: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (_state, action: PayloadAction<ContentType>) => ({
      isOpen: true,
      content: action.payload,
    }),
    closeModal: () => ({
      isOpen: false,
      content: null,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectModalContent = (state: RootState) => state.modal.content;

export default modalSlice.reducer;
