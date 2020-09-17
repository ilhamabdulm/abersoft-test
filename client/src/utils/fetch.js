import { BASE_URL } from '../config/server';
import axios from 'axios';

const fetch = (url, method, param1, param2) => {
  return new Promise((res, rej) => {
    axios[method](`${BASE_URL}${url}`, param1, param2)
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};

export const login = async (data) => await fetch('users/login', 'post', data);

export const register = async (data) =>
  await fetch('users/register', 'post', data);
