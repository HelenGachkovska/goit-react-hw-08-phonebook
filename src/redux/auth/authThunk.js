import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from 'servise/apiAuth';

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
