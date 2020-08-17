import React, { useReducer, useState, useEffect } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status';

import { Product, ProductFilter } from '../../types/Data';
import { ProductsState } from '../../types/States';
import { ACTION_FETCH_PRODUCTS, ACTION_ERROR } from './types';
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
  const [productsState, productsDispatcher] = useReducer(productsReducer, defaultProductsState);
  const [productAction, setProductAction] = useState<ProductAction>({
    type: ACTION_FETCH_PRODUCTS,
    data: data ?? {},
  });
  const [apiResponse, apiRequestDispatcher] = useApiRequest<Product[]>(getProducts);

  useEffect(() => {
    switch (productAction.type) {
      case ACTION_FETCH_PRODUCTS:
        apiRequestDispatcher({
          type: REQUEST,
          body: productAction.data,
        });
        break;
      default:
        return;
    }
  }, [productAction, apiRequestDispatcher]);

  useEffect(() => {
    const { type, data, err } = apiResponse;
    switch (type) {
      case REQUEST:
        break;
      case SUCCESS:
        if (!data) return;
        productsDispatcher({
          type: productAction.type,
          value: {
            products: data,
            status: OK,
          },
        });
        break;
      case FAILURE:
        if (err && err.response && err.response.status === NOT_FOUND)
          productsDispatcher({
            type: ACTION_ERROR,
            value: {
              status: NOT_FOUND,
            },
          });
        else if (err)
          productsDispatcher({
            type: ACTION_ERROR,
            value: {
              status: INTERNAL_SERVER_ERROR,
            },
          });
    }
  }, [apiResponse, productAction.type]);
  return [productsState, setProductAction];
}
