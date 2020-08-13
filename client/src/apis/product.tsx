import { mainAxios } from '../libs/axios';
import { ProductFilter } from '../types/Data';

export const getProducts = (params: ProductFilter) => {
  return mainAxios.get('/product', {
    params,
    headers: { Accept: 'application/json' },
  });
};
