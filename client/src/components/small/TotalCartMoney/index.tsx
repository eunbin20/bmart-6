import React from 'react';
import * as S from './style';
import { makeComma } from '../../../utils/functions';

interface Props {
  totalMoney: number;
}

export default function TotalCartMoney({ totalMoney }: Props) {
  return (
    <S.Wrapper>
      <S.PriceTotalBox>
        <S.Content>
          <S.Text>주문 금액</S.Text>
          <S.Text>{makeComma(totalMoney)}원</S.Text>
        </S.Content>
        <S.Content>
          <S.Text>배달팁</S.Text>
          <S.Text>0원</S.Text>
        </S.Content>
        {totalMoney < 5000 && <S.MinimizePrice>최소주문금액 5,000원</S.MinimizePrice>}
        <S.EventText hasMargin={true}>배달팁 할인 이벤트가 진행중 입니다.</S.EventText>
        <S.EventText> (~2020년 8월 31일까지)</S.EventText>
      </S.PriceTotalBox>
      <S.DiscriptionBox>
        <S.DiscriptionText>
          배달팁 할인 이벤트는 내부사정으로 예고 없이 조기 종료 될 수 있습니다.
        </S.DiscriptionText>
        <S.DiscriptionText>
          장바구니에 담긴 상품은 최대 7일 동안 저장됩니다. 판매 종료 상품은 장바구니에서 자동으로
          삭제됩니다.
        </S.DiscriptionText>
      </S.DiscriptionBox>
    </S.Wrapper>
  );
}
