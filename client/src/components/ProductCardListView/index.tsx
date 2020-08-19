import React from 'react';

import * as S from './style';
import { generateProductCards } from '../ProductCard';
import { Product, ProductGridColumns } from '../../types/data';

interface Props {
  products: Product[];
  columns: ProductGridColumns;
}

function ProductCardListView({ products, columns }: Props) {
  return (
    <S.CardListViewContainer theme={{ length: products.length }}>
      {generateProductCards(products, columns)}
    </S.CardListViewContainer>
  );
}

export default ProductCardListView;
