import React from 'react';

import * as S from './style';
import { generateProductCards } from '../../small/ProductCard';
import { Product, ProductGridColumns } from '../../../types/data';

interface Props {
  products: Product[];
  columns: ProductGridColumns;
  onLikeIconClick: Function;
}

function ProductCardListView({ products, columns, onLikeIconClick }: Props) {
  return (
    <S.CardListViewContainer theme={{ length: products.length }}>
      {generateProductCards(products, columns, onLikeIconClick)}
    </S.CardListViewContainer>
  );
}

export default ProductCardListView;
