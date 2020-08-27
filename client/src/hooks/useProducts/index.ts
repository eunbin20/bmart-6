import React, { useReducer, useState, useEffect } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status';

import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../../hooks/useApiRequests';
import { Product, ProductFilter } from '../../types/data';
import { ProductsState } from '../../types/states';

import * as apis from '../../apis';

import {
  ProductAction,
  ACTION_GET_PRODUCTS,
  ACTION_ERROR,
  ACTION_LIKE_PRODUCT,
  ACTION_UNLIKE_PRODUCT,
  likeProduct,
  unlikeProduct,
} from './actions';
import { productsReducer } from './reducer';

export const FILTER_TYPE = {
  USER_LIKED: 'userliked',
  RECOMMEND: 'recommend',
  BESTSELLER: 'bestseller',
};

const defaultProductsState: ProductsState = {
  products: [],
  status: 0,
};

export const toggleProductIsLikedDispatcher = (
  productDispatch: (value: ProductAction) => void,
): Function => (productId: number, isLiked: boolean) => {
  productDispatch(isLiked ? likeProduct(productId) : unlikeProduct(productId));
};

export default function useProducts(
  data: ProductFilter,
): [ProductsState, React.Dispatch<ProductAction>] {
  const [state, dispatch] = useReducer(productsReducer, defaultProductsState);
  const [action, setAction] = useState<ProductAction>({
    type: ACTION_GET_PRODUCTS,
    data: data ?? {},
  });
  const [getProductsResponse, getProductsDispatch] = useApiRequest<Product[]>(apis.getProducts);

  useEffect(() => {
    switch (action.type) {
      case ACTION_GET_PRODUCTS:
        getProductsDispatch({
          type: REQUEST,
          body: action.data,
        });
        break;

      case ACTION_LIKE_PRODUCT:
        if (!action.data.id) break;
        apis
          .likeProduct(action.data.id)
          .then(() =>
            dispatch({
              type: action.type,
              value: {
                productId: action.data.id,
                status: OK,
              },
            }),
          )
          .catch(() =>
            dispatch({
              type: ACTION_ERROR,
              value: {
                status: UNAUTHORIZED,
              },
            }),
          ); // 401 에러 캐치하려고 추가
        break;

      case ACTION_UNLIKE_PRODUCT:
        if (!action.data.id) break;
        apis.unlikeProduct(action.data.id).then(() =>
          dispatch({
            type: action.type,
            value: {
              productId: action.data.id,
              status: OK,
            },
          }),
        );
        break;

      default:
        return;
    }
  }, [action, getProductsDispatch]);

  useEffect(() => {
    const { type, data, err } = getProductsResponse;
    switch (type) {
      case REQUEST:
        break;
      case SUCCESS:
        if (!data) return;
        dispatch({
          type: action.type,
          value: {
            products: data,
            status: OK,
          },
        });
        break;
      case FAILURE:
        if (err && err.response && err.response.status === NOT_FOUND)
          dispatch({
            type: ACTION_ERROR,
            value: {
              status: NOT_FOUND,
            },
          });
        else if (err)
          dispatch({
            type: ACTION_ERROR,
            value: {
              status: INTERNAL_SERVER_ERROR,
            },
          });
    }
  }, [getProductsResponse, action.type]);

  return [state, setAction];
}
