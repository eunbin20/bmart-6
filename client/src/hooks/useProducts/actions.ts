import { ACTION_GET_PRODUCTS, ACTION_GET_MORE_PRODUCTS } from './types';
import { ProductFilter } from '../../types/Data';

export const getProducts = (data: ProductFilter) => ({
  type: ACTION_GET_PRODUCTS,
  data: data,
});

export const getMoreProducts = (data: ProductFilter) => ({
  type: ACTION_GET_MORE_PRODUCTS,
  data: data,
});

export type Action = ReturnType<typeof getProducts> | ReturnType<typeof getMoreProducts>;
