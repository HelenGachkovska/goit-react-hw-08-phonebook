import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser, token } from 'servise/apiAuth';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  (data, { rejectWithValue }) => {
    try {
      alert('Sign Up successfully!!!');
      return signUp(data);
    } catch (error) {
      alert('Enter correct data!');
      return rejectWithValue(error);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  (data, { rejectWithValue }) => {
    try {
      alert('Log In successfully!!!');
      return logIn(data);
    } catch (error) {
      alert('Enter correct data!');
      return rejectWithValue(error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  (_, { rejectWithValue }) => {
    try {
      logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // token.set(persistedToken);
      return fetchCurrentUser(persistedToken);
      // const response = await axios.get('/users/current');
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);