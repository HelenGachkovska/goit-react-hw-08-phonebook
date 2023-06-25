import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token)
  console.log("response", data.token)

  return data;
};

export const logIn = async body => {
  const response = await instance.post('/users/logout', body);

  return response;
};

