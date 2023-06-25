import { createSlice } from '@reduxjs/toolkit';
import { signUpThunk } from './authThunk';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLogin = true;
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
