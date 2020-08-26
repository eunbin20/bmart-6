import React from 'react';
import * as S from './style';
import { makeComma } from '../../../utils/functions';

interface Props {
  totalMoney: number;
}

export default function TotalCartMoney({ totalMoney }: Props) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Text>주문 금액</S.Text>
        <S.Text>{makeComma(totalMoney)}원</S.Text>
      </S.Content>
      <S.Content>
        <S.Text>배달팁</S.Text>
        <S.Text>0원</S.Text>
      </S.Content>
      <S.MinimizePrice>최소주문금액 5,000원</S.MinimizePrice>
      <S.EventText hasMargin={true}>배달팁 할인 이벤트가 진행중 입니다.</S.EventText>
      <S.EventText> (~2020년 8월 31일까지)</S.EventText>
    </S.Wrapper>
  );
}
