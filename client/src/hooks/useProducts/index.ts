import React, { useReducer, useState, useEffect } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status';

import { Product, ProductFilter } from '../../types/Data';
import { ProductsState } from '../../types/States';
import { ACTION_GET_PRODUCTS, ACTION_ERROR } from './types';
import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../../hooks/useApiRequests';
import { getProducts } from '../../apis';
import { productsReducer } from './reducer';
import { ProductAction } from './types';
import { Action } from './actions';

const defaultProductsState: ProductsState = {
  products: [],
  status: 0,
};

export default function useProducts(data: ProductFilter): [ProductsState, React.Dispatch<Action>] {
  const [state, dispatch] = useReducer(productsReducer, defaultProductsState);
  const [action, setAction] = useState<ProductAction>({
    type: ACTION_GET_PRODUCTS,
    data: data ?? {},
  });
  const [apiResponse, getProductsDispatch] = useApiRequest<Product[]>(getProducts);

  useEffect(() => {
    switch (action.type) {
      case ACTION_GET_PRODUCTS:
        getProductsDispatch({
          type: REQUEST,
          body: action.data,
        });
        break;
      default:
        return;
    }
  }, [action, getProductsDispatch]);

  useEffect(() => {
    const { type, data, err } = apiResponse;
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
  }, [apiResponse, action.type]);
  return [state, setAction];
}
