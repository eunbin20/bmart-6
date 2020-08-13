import { ProductsState } from './States';

export interface ProductsAction {
  type: string;
  value: ProductsState;
}
