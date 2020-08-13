import axios from 'axios';

const REACT_APP_SERVER_URL = 'http://localhost:3000';

export const mainAxios = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/api`,
  // withCredentials: true,
});
