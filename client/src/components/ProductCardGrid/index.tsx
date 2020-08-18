import React from 'react';

import * as S from './style';
import ProductCard from '../ProductCard';
// import ROUTES from 'commons/constants/routes';
import { Product } from '../../types/data';

interface Props {
  products: Product[];
}

function ProductCardGrid({ products }: Props) {
  const generateProductCards = (products: Product[]) => {
    if (!products || !products.length) {
      return;
    }
    return products.map(({ id, ...rest }) => <ProductCard key={id} {...rest} />);
  };
  return <S.CardGridContainer>{generateProductCards(products)}</S.CardGridContainer>;
}

export default ProductCardGrid;
