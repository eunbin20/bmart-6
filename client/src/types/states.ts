import { Product } from './data';

export interface ProductsState {
  products?: Product[];
  status: number;
}
