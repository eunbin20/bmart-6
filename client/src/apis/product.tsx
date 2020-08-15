import { Axios } from '../libs/axios';
import { ProductFilter } from '../types/Data';

export const getProducts = (params: ProductFilter) => {
  return Axios.get('/product', {
    params,
    headers: { Accept: 'application/json' },
  });
};
