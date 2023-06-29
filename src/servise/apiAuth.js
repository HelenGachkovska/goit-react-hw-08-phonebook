import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  token.set(data.token);
  return data;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  await instance.post('/users/logout');
}

export const fetchCurrentUser = async (persistedToken) => {
  token.set(persistedToken);
  const { data } = await instance.get('/users/current');
  console.log('data:', data)
  return data;
}