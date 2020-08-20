import React from 'react';

import * as S from './style';
import { Product, ProductGridColumns } from '../../../types/data';
import { generateProductCards } from '../../small/ProductCard';

interface Props {
  products: Product[];
  columns: ProductGridColumns;
}

function ProductCardGrid({ products, columns }: Props) {
  return (
    <S.CardGridContainer theme={{ columns }}>
      {generateProductCards(products, columns)}
    </S.CardGridContainer>
  );
}

export default ProductCardGrid;
