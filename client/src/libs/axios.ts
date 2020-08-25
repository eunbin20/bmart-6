import axios from 'axios';
import { storage } from '../utils/storage';
import { STORAGE_KEY, DEVELOPMENT_PORT } from '../commons/constants';

const REACT_APP_SERVER_URL =
  `//${document.domain}` +
  (process.env.NODE_ENV === 'development' ? `:${DEVELOPMENT_PORT}` : `:${window.location.port}`);
const accessToken = storage.get(STORAGE_KEY.ACCESS_TOKEN);

export const Axios = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/api`,
  headers: {
    'content-type': 'application/json',
    ...(accessToken && { authorization: `Bearer ${accessToken}` }),
  },
  timeout: 5000,
  // withCredentials: true,
});
