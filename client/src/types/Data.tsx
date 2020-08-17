import { PRICEUP, PRICEDOWN } from '../utils/constants';

export interface User {
  id: number;
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

export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
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
