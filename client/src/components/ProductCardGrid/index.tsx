import React from 'react';

import * as S from './style';
import ProductCard from '../ProductCard';
import { Product } from '../../types/data';

interface Props {
  products: Product[];
  columns: 2 | 3;
}

const generateProductCards = (products: Product[], columns: 2 | 3) => {
  return (
    products &&
    products.map(({ id, ...rest }) => <ProductCard key={id} {...{ columns, ...rest }} />)
  );
};

function ProductCardGrid({ products, columns }: Props) {
  return (
    <S.CardGridContainer theme={{ columns }}>
      {generateProductCards(products, columns)}
    </S.CardGridContainer>
  );
}

export default ProductCardGrid;
