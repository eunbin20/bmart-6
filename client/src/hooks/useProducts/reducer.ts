import { Product } from '../../types/data';
import { ProductsState } from '../../types/states';
import { ProductsAction } from '../../types/actions';
import {
  ACTION_GET_PRODUCTS,
  ACTION_GET_MORE_PRODUCTS,
  ACTION_ERROR,
  ACTION_LIKE_PRODUCT,
  ACTION_UNLIKE_PRODUCT,
} from './actions';

function getProductsAfterLike(products: Product[], productId: number, isLiked: boolean) {
  const newProducts = [...products];
  const index = newProducts.findIndex((product) => product.id === productId);
  newProducts[index].isLiked = isLiked;
  console.log(newProducts);
  return newProducts;
}

export function productsReducer(state: ProductsState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ACTION_GET_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products],
        status: action.value.status,
      };

    case ACTION_GET_MORE_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products, ...state.products],
        status: action.value.status,
      };

    case ACTION_LIKE_PRODUCT:
      if (!state.products || !action.value.productId) return state;
      console.log('hi');
      console.log(state);
      console.log(action.value);
      return {
        products: getProductsAfterLike(state.products, action.value.productId, true),
        status: action.value.status,
      };

    case ACTION_UNLIKE_PRODUCT:
      if (!state.products || !action.value.productId) return state;
      return {
        products: getProductsAfterLike(state.products, action.value.productId, false),
        status: action.value.status,
      };
    case ACTION_ERROR:
      return {
        ...state,
        status: action.value.status,
      };

    default:
      throw new Error(`unexpected action.type: ${action.type}`);
  }
}
