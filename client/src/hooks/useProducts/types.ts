import { ProductFilter } from '../../types/Data';

export const ACTION_FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ACTION_FETCH_MORE_PRODUCTS = 'FETCH_MORE_PRODUCTS';
export const ACTION_ERROR = 'ERROR';

export interface ProductFetch {
  type: string;
  data: ProductFilter;
}
