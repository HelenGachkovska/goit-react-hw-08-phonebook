import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser } from 'servise/apiAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  (data, { rejectWithValue }) => {
    try {
      toast.success('Sign Up successfully!!!', {
        position: 'top-right',
      });
      return signUp(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await logIn(data);
      toast.success('Successfully logOut!', {
        position: 'top-right',
      });
      return result;
    } catch (error) {
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
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      return fetchCurrentUser(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
