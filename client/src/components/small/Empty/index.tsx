import React from 'react';
import * as S from './style';

interface Props {
  text: string;
}

export default function Empty({ text }: Props) {
  return (
    <S.EmptyContainer>
      <S.EmptyImage src="/assets/cart-empty.png" />
      <S.EmptyText>{text} </S.EmptyText>
    </S.EmptyContainer>
  );
}
