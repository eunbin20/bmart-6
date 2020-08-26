export interface User {
  email: string;
  nickname: string;
}
export interface UserJoin extends User {
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
}

export type Searches = { [key: string]: string };

export interface Subcategory extends Category {
  categoryId: number;
}

export interface Product {
  id: number;
  subcategoryId: number;
  title: string;
  price: number;
  discountedPrice: number;
  discountedRate: number;
  quantity: number;
  imageUrl?: string;
  isDiscounted: boolean;
  isSold: boolean;
  isLiked: boolean;
}

export interface ProductFilter {
  limit?: number;
  offset?: number;
  title?: string;
  categoryId?: number;
  subcategoryId?: number;
  id?: number;
  sortBy?: string;
  isLiked?: boolean;
}

export type ProductGridColumns = 2 | 2.5 | 3;
export type ProductViewType = 'grid' | 'listview';

export interface Banner {
  id: number;
  redirectUrl: string;
  imageUrl: string;
}

export interface Header {
  title?: string;
  description?: string | React.ReactElement;
  trailing?: React.ReactElement;
  isCategoryProductHeader?: boolean;
}

export interface CategoryProducts {
  category: Category;
  products: Product[];
}
