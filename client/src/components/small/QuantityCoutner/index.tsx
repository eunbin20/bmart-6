import React from 'react';
import * as S from './style';
import { Framework7Icon } from '../../../components';

interface Props {
  count: number;
  setCount: (type: 'plus' | 'minus') => void;
}

export default function QuantityCounter({ count, setCount }: Props) {
  return (
    <S.CounterContainer>
      <Framework7Icon iconName="minus" font-size="18px" onClick={() => setCount('minus')} />
      <S.Count>{count}</S.Count>
      <Framework7Icon iconName="plus" fontSize="18px" onClick={() => setCount('plus')} />
    </S.CounterContainer>
  );
}
