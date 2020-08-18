import { ProductFilter } from '../../types/data';

export const ACTION_GET_PRODUCTS = 'GET_PRODUCTS';
export const ACTION_GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS';
export const ACTION_ERROR = 'ERROR';

export type Action = ReturnType<typeof getProducts> | ReturnType<typeof getMoreProducts>;

export interface ProductAction {
  type: string;
  data: ProductFilter;
}

export const getProducts = (data: ProductFilter) => ({
  type: ACTION_GET_PRODUCTS,
  data: data,
});

export const getMoreProducts = (data: ProductFilter) => ({
  type: ACTION_GET_MORE_PRODUCTS,
  data: data,
});
