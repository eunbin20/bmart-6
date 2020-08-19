import React from 'react';

import * as S from './style';
import { SORTOPTIONS } from '../../commons/constants';

interface Props {
  changeSort: Function;
}

const generateSortOptions = (changeSort: Function) => {
  return Object.entries(SORTOPTIONS).map(([title, option]) => (
    <S.SortContainer onClick={() => changeSort(option)}>{title}</S.SortContainer>
  ));
};

function ProductCardGridHeader({ changeSort }: Props): React.ReactElement {
  return <S.CardGridHeaderContainer>{generateSortOptions(changeSort)}</S.CardGridHeaderContainer>;
}

export default ProductCardGridHeader;
