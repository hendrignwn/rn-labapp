import axios from 'axios';
// @ts-ignore
import { API_URL } from '@env';

console.log(API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
  },
});

export default api;
