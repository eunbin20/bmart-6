import { ProductFilter } from '../../types/data';

export const ACTION_GET_PRODUCTS = 'GET_PRODUCTS';
export const ACTION_GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS';
export const ACTION_ERROR = 'ERROR';

export interface ProductAction {
  type: string;
  data: ProductFilter;
}

export const getProducts = (data: ProductFilter) => ({
  type: ACTION_GET_PRODUCTS,
  data,
});

export const getMoreProducts = (data: ProductFilter) => ({
  type: ACTION_GET_MORE_PRODUCTS,
  data,
});

export type Action = ReturnType<typeof getProducts> | ReturnType<typeof getMoreProducts>;
