import axios from 'axios';
// @ts-ignore
import { API_URL, API_KEY } from '@env';

console.log(API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
    api_key: API_KEY,
  },
});

export default api;
