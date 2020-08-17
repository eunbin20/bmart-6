import React from 'react';

import * as S from './style';
import { PRICEUP, PRICEDOWN } from '../../utils/constants';

export interface Props {
  changeSort: Function;
}

function ProductCardGridHeader({ changeSort }: Props): React.ReactElement {
  return (
    <>
      <S.CardGridHeaderContainer>
        <S.SortContainer onClick={() => changeSort()}>기본 정렬 순</S.SortContainer>
        <S.SortContainer onClick={() => changeSort(PRICEUP)}>높은 가격 순</S.SortContainer>
        <S.SortContainer onClick={() => changeSort(PRICEDOWN)}>낮은 가격 순</S.SortContainer>
      </S.CardGridHeaderContainer>
    </>
  );
}

export default ProductCardGridHeader;
