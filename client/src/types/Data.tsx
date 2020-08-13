export interface User {
  id: number;
  email: string;
  nickname: string;
}

export interface Category {
  name: string;
}

export interface SubCategory {
  categoryId: number;
  name: string;
}

export interface Product {
  id: number;
  subcategoryId: number;
  title: string;
  price: number;
  discountedPrice: number;
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
  sortBy?: 'priceup' | 'pricedown' | 'recent' | 'discount';
}
