import { Axios } from '../libs/axios';
import { ProductFilter } from '../types/data';

export const getProducts = (params: ProductFilter) => {
  return Axios.get('/product', {
    params,
    headers: { Accept: 'application/json' },
  });
};
