import { ProductsState } from '../../types/States';
import { ProductsAction } from '../../types/Actions';
import { ACTION_FETCH_PRODUCTS, ACTION_ERROR } from '../../commons/constants/string';

export const defaultProductsState: ProductsState = {
  products: [],
  status: 0,
};

export default function productsReducer(
  state: ProductsState,
  action: ProductsAction,
): ProductsState {
  switch (action.type) {
    case ACTION_FETCH_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products, ...state.products],
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
