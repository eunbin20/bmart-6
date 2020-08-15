import { ACTION_FETCH_PRODUCTS, ACTION_FETCH_MORE_PRODUCTS } from './types';
import { ProductFilter } from '../../types/Data';

export const fetchProducts = (data: ProductFilter) => ({
  type: ACTION_FETCH_PRODUCTS,
  data: data,
});

export const fetchMoreProducts = (data: ProductFilter) => ({
  type: ACTION_FETCH_MORE_PRODUCTS,
  data: data,
});

export type Action = ReturnType<typeof fetchProducts> | ReturnType<typeof fetchMoreProducts>;
