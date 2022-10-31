import axios from 'axios';
// @ts-ignore
import { API_URL, API_TOKEN } from '@env';

console.log(API_URL, API_TOKEN);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
    Authorization: API_TOKEN,
  },
});

export default api;
