import React from 'react';
import * as S from './style';

interface Props {
  text: string;
  subtractHeight?: string;
}

export default function Empty({ text, subtractHeight }: Props) {
  return (
    <S.EmptyContainer subtractHeight={subtractHeight}>
      <S.EmptyImage src="/assets/cart-empty.png" />
      <S.EmptyText>{text} </S.EmptyText>
    </S.EmptyContainer>
  );
}
