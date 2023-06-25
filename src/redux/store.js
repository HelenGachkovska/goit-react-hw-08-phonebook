import { authReducer } from './auth/authSlice';
import { contactReducer } from './contactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
  },
});
