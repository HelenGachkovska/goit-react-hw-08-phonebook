import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.success('Сontact added!', {
        position: 'top-right',
      });
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
      toast.success('Сontact deleted!', {
        position: 'top-right',
      });
      return deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
