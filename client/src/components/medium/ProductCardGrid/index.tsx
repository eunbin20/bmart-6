import React from 'react';

import * as S from './style';
import { Product, ProductGridColumns } from '../../../types/data';
import { generateProductCards } from '../../small/ProductCard';

interface Props {
  products: Product[];
  columns: ProductGridColumns;
  onLikeIconClick?: Function;
}

function ProductCardGrid({ products, columns, onLikeIconClick }: Props) {
  return (
    <S.CardGridContainer theme={{ columns }}>
      {generateProductCards(products, columns, onLikeIconClick)}
    </S.CardGridContainer>
  );
}

export default ProductCardGrid;
