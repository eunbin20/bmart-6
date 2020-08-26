import React from 'react';
import * as S from './style';

interface Props {
  count: number;
}

export default function CartBadge({ count }: Props) {
  return (
    <S.Circle to="/cart">
      <S.Count>{count}</S.Count>
      <S.Image src="/assets/cart.png" />
    </S.Circle>
  );
}
