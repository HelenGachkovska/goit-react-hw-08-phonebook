import axios from 'axios';

axios.defaults.baseURL = 'https://6491669d2f2c7ee6c2c8264a.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async (newContact) => {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};