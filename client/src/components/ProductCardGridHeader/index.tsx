import React from 'react';

import * as S from './style';
import { SORTOPTIONS } from '../../commons/constants';
import { DropIcon } from '../../commons/svgs';

interface Props {
  changeSort: Function;
}

const generateSortOptions = (changeSort: Function) => {
  return Object.entries(SORTOPTIONS).map(([title, option], index) => (
    <S.SortContainer key={index} onClick={() => changeSort(option)}>
      {title}
    </S.SortContainer>
  ));
};

function ProductCardGridHeader({ changeSort }: Props): React.ReactElement {
  return (
    <S.CardGridHeaderContainer>
      <S.SortContainer>기본 정렬순 {DropIcon()}</S.SortContainer>
    </S.CardGridHeaderContainer>
  );
}

export default ProductCardGridHeader;
