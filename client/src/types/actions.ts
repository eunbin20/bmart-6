import { ProductsState } from './states';

export interface ProductsAction {
  type: string;
  value: ProductsState;
}
