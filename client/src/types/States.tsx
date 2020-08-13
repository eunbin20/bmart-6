import { Product } from './Data';

export interface ProductsState {
  products?: Product[];
  status: number;
}
