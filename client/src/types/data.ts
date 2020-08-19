import { PRICEUP, PRICEDOWN } from '../common/constants';

export interface User {
  email: string;
  nickname: string;
}
export interface UserJoin extends User {
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Subcategory extends Category {
  categoryId: number;
}

export interface Product {
  id: number;
  subcategoryId: number;
  title: string;
  price: number;
  discountedPrice: number;
  discountRate: number;
  quantity: number;
  imageUrl?: string;
  isDiscounted: boolean;
  isSold: boolean;
}

export interface ProductFilter {
  limit?: number;
  offset?: number;
  title?: string;
  subcategoryId?: number;
  sortBy?: ProductSort;
}

export type ProductSort = typeof PRICEUP | typeof PRICEDOWN;
