import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(item => item.id === payload.id);
  state.contacts.splice(index, 1);
  // state.contacts = state.contacts.filter(el => el.id !== payload);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
  reducers: {
    filtred: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { add, deleted, filtred } = contactSlice.actions;
