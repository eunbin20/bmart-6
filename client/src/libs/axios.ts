import axios, { AxiosInstance } from 'axios';
import { storage } from '../utils/storage';
import { STORAGE_KEY, DEVELOPMENT_PORT } from '../commons/constants';

const REACT_APP_SERVER_URL =
  `//${document.domain}` +
  (process.env.NODE_ENV === 'development' ? `:${DEVELOPMENT_PORT}` : `:${window.location.port}`);

const axiosContainer: {
  key: null | string;
  instance: null | AxiosInstance;
} = {
  key: null,
  instance: null,
};

export const Axios = (): AxiosInstance => {
  const accessToken = storage.get(STORAGE_KEY.ACCESS_TOKEN);
  if (axiosContainer.instance === null || accessToken !== axiosContainer.key) {
    axiosContainer.key = accessToken;
    axiosContainer.instance = axios.create({
      baseURL: `${REACT_APP_SERVER_URL}/api`,
      headers: {
        'content-type': 'application/json',
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      },
      timeout: 5000,
      // withCredentials: true,
    });
  }

  return axiosContainer.instance;
};
