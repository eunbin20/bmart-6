import React from 'react';
import * as S from './style';
import { Framework7Icon } from '../../../components';

export default function QuantityCounter() {
  return (
    <S.CounterContainer>
      <Framework7Icon iconName="minus" font-size="18px" />
      <S.Count>5</S.Count>
      <Framework7Icon iconName="plus" fontSize="18px" />
    </S.CounterContainer>
  );
}
