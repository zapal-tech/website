import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import contactForm from './contactFormSlice';
import general from './generalSlice';
import modal, { openModal } from './modalSlice';

const rootReducer = combineReducers({
  general,
  modal,
  contactForm,
});

const middlewares: Middleware[] = [];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [openModal.type],
      },
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
