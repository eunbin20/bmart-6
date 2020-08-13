import React, { createContext, Dispatch, useReducer, useState, useEffect } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status';

import { Product, ProductFilter } from '../../types/Data';
import { ProductsState } from '../../types/States';
import { ProductsAction } from '../../types/Actions';
import productsReducer, { defaultProductsState } from './reducer';
import { ACTION_FETCH_PRODUCTS, ACTION_ERROR } from '../../commons/constants/string';
import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../../hooks/useApiRequests';
import { getProducts } from '../../apis';

interface ProductFetch {
  type: string;
  data: ProductFilter;
}

export const ProductsStoreState = createContext<ProductsState>(defaultProductsState);
export const ProductsStoreAction = createContext<Dispatch<ProductFetch>>(() => {});

const ProductsProvider: React.FC = (children): JSX.Element => {
  const [productsState, productsDispatcher] = useReducer(productsReducer, defaultProductsState);
  const [productFetch, productFetchDispatcher] = useState<ProductFetch>({
    type: ACTION_FETCH_PRODUCTS,
    data: {},
  });
  const [fetchResult, fetchProduct] = useApiRequest<Product[]>(getProducts);

  useEffect(() => {
    switch (productFetch.type) {
      case ACTION_FETCH_PRODUCTS:
        fetchProduct({
          type: REQUEST,
          body: {
            //여기에 조건 추가 가능
          },
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

  return (
    <ProductsStoreState.Provider value={productsState}>
      <ProductsStoreAction.Provider value={productFetchDispatcher}>
        {/* {children} */}
      </ProductsStoreAction.Provider>
    </ProductsStoreState.Provider>
  );
};

export default ProductsProvider;
