import { ProductFilter } from '../../types/Data';

export const ACTION_GET_PRODUCTS = 'GET_PRODUCTS';
export const ACTION_GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS';
export const ACTION_ERROR = 'ERROR';

export interface ProductAction {
  type: string;
  data: ProductFilter;
}
