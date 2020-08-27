import React from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

interface Props {
  count: number;
}

export default function CartBadge({ count }: Props) {
  const location = useLocation();
  return (
    <S.Circle to={setLink('/cart', location)}>
      <S.Count>{count}</S.Count>
      <S.Image src="/assets/cart.png" />
    </S.Circle>
  );
}
