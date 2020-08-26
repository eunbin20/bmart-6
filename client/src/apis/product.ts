import { Axios } from '../libs/axios';
import { ProductFilter } from '../types/data';

export const getProducts = (params: ProductFilter) => {
  return Axios.get('/product', {
    params,
    headers: { Accept: 'application/json' },
  });
};

export const likeProduct = (productId: number) => Axios.get(`/user/product/${productId}`);
export const unlikeProduct = (productId: number) => Axios.delete(`/user/product/${productId}`);
