import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { addContact, deleteContact, fetchContacts } from 'servise/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  (_, { rejectWithValue }) => {
    try {
      return fetchContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  (newContact, { rejectWithValue }) => {
    try {
      return addContact(newContact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  (id, { rejectWithValue }) => {
    try {
      return deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

