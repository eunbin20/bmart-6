import React from 'react';
import * as S from './style';

export default function CartBadge() {
  return (
    <S.Circle>
      <S.Count>3</S.Count>
      <S.Image src="/assets/cart.png" />
    </S.Circle>
  );
}
