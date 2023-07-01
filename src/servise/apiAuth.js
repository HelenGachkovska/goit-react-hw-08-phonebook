import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = BASE_URL;

export const token = {
  set(token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = async body => {
  const { data } = await axios.post('/users/signup', body);
  token.set(data.token);
  return data;
};

export const logIn = async body => {
  const { data } = await axios.post('/users/login', body);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  await axios.post('/users/logout');
}

export const fetchCurrentUser = async (persistedToken) => {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  console.log('data:', data)
  return data;
}