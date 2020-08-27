import React from 'react';
import * as S from './style';

interface Props {
  title: string;
}

function MenuListGridHeader({ title }: Props): React.ReactElement {
  return (
    <S.GridHeaderContainer>
      <S.GridHeaderTitle>{title}</S.GridHeaderTitle>
    </S.GridHeaderContainer>
  );
}

export default MenuListGridHeader;
