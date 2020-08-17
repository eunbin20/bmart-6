import axios from 'axios';

const REACT_APP_SERVER_URL = 'http://localhost:3000';
const ACCESS_TOKEN = window.localStorage.getItem('accessToken');

export const Axios = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/api`,
  headers: {
    'content-type': 'application/json',
    ...(ACCESS_TOKEN && { authorization: `Bearer ${ACCESS_TOKEN}` }),
  },
  timeout: 5000,
  // withCredentials: true,
});
