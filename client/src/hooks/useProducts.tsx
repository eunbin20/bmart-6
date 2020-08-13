import React, { useReducer, useState, useEffect } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status';

import { Product, ProductFilter } from '../types/Data';
import { ProductsState } from '../types/States';
import { ProductsAction } from '../types/Actions';
import {
  ACTION_FETCH_PRODUCTS,
  ACTION_ERROR,
  ACTION_FETCH_MORE_PRODUCTS,
} from '../commons/constants/string';
import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../hooks/useApiRequests';
import { getProducts } from '../apis';

interface ProductFetch {
  type: string;
  data: ProductFilter;
}

const defaultProductsState: ProductsState = {
  products: [],
  status: 0,
};

function productsReducer(state: ProductsState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ACTION_FETCH_PRODUCTS:
      if (!state.products || !action.value.products) return state;
      return {
        products: [...action.value.products],
        status: action.value.status,
      };

    case ACTION_FETCH_MORE_PRODUCTS:
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

export default function useProducts(
  data: ProductFilter,
): [ProductsState, React.Dispatch<React.SetStateAction<ProductFetch>>] {
  const [productsState, productsDispatcher] = useReducer(productsReducer, defaultProductsState);
  const [productFetch, productFetchDispatcher] = useState<ProductFetch>({
    type: ACTION_FETCH_PRODUCTS,
    data: data ?? {},
  });
  const [fetchResult, fetchProduct] = useApiRequest<Product[]>(getProducts);

  useEffect(() => {
    switch (productFetch.type) {
      case ACTION_FETCH_PRODUCTS:
        fetchProduct({
          type: REQUEST,
          body: productFetch.data,
        });
        break;
      default:
        return;
    }
  }, [productFetch, fetchProduct]);

  useEffect(() => {
    const { type, data, err } = fetchResult;
    switch (type) {
      case REQUEST:
        break;
      case SUCCESS:
        if (!data) return;
        productsDispatcher({
          type: productFetch.type,
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
  }, [fetchResult, productFetch.type]);
  return [productsState, productFetchDispatcher];
}
