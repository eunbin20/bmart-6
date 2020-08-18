import { Axios } from '../libs/axios';

export const getCategories = () => {
  return Axios.get('/category', {
    headers: { Accept: 'application/json' },
  });
};
