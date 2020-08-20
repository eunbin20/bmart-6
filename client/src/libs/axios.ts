import axios from 'axios';
import { storage } from '../utils/storage';
import { ACCESS_TOKEN } from '../commons/constants';

const REACT_APP_SERVER_URL = 'http://localhost:4000';
const accessToken = storage.get(ACCESS_TOKEN);

export const Axios = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/api`,
  headers: {
    'content-type': 'application/json',
    ...(accessToken && { authorization: `Bearer ${accessToken}` }),
  },
  timeout: 5000,
  // withCredentials: true,
});
