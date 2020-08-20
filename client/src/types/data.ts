import { PRICEUP, PRICEDOWN } from '../commons/constants';

export interface User {
  id: number;
  email: string;
  nickname: string;
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
  id?: number;
  subcategoryId: number;
  title: string;
  price: number;
  discountedPrice: number;
  discountedRate: number;
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
  sortBy?: string;
}

export type ProductGridColumns = 2 | 2.5 | 3;

export interface Banner {
  id: number;
  redirectUrl: string;
  imageUrl: string;
}

export interface Header {
  title?: string;
  description?: React.ReactElement;
  trailing?: React.ReactElement;
}
