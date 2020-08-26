import { ProductFilter } from '../../types/data';

export const ACTION_GET_PRODUCTS = 'GET_PRODUCTS';
export const ACTION_GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS';
export const ACTION_LIKE_PRODUCT = 'LIKE_PRODUCT';
export const ACTION_UNLIKE_PRODUCT = 'UNLIKE_PRODUCT';
export const ACTION_ERROR = 'ERROR';

export interface ProductAction {
  type: string;
  data: ProductFilter;
}

export const getProducts = (data: ProductFilter) => ({
  type: ACTION_GET_PRODUCTS,
  data,
});

export const getMoreProducts = (data: ProductFilter) => ({
  type: ACTION_LIKE_PRODUCT,
  data,
});

export const unlikeProduct = (productId: number) => ({
  type: ACTION_UNLIKE_PRODUCT,
  data: { id: productId },
});

export const likeProduct = (productId: number) => ({
  type: ACTION_LIKE_PRODUCT,
  data: { id: productId },
});
