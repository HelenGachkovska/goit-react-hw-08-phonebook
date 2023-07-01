import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUserThunk,
  logInThunk,
  logOutThunk,
  signUpThunk,
} from './authThunk';

const initialState = {
  user: {name: null, email: null },
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const handleLogOutFulfilled = state => {
  state.user = {};
  state.isLoggedIn = false;
  state.token = null;
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const handleCurrentUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(logInThunk.fulfilled, handleFulfilled)      
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addCase(fetchCurrentUserThunk.fulfilled, handleCurrentUserFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
