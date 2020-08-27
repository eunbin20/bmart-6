import React from 'react';
import * as S from './style';
import { Order } from '../../../types/data';
import { formatDate } from '../../../utils/functions';

interface Props {
  order: Order;
}

function OrderCard({ order }: Props): React.ReactElement {
  const { createdAt, totalDiscountedPrice, products } = order;
  return (
    <S.OrderCard>
      <S.DataContainer>
        <S.DateContainer>{formatDate(createdAt)}</S.DateContainer>
        <S.TitleContainer>
          {products[0].title} {products.length != 1 && `외 ${products.length - 1}개`}
        </S.TitleContainer>
        <S.PriceContainer>{totalDiscountedPrice}원</S.PriceContainer>
      </S.DataContainer>
      <S.ImageContainer>
        <S.Image src={products[0].imageUrl}></S.Image>
      </S.ImageContainer>
    </S.OrderCard>
  );
}

export default OrderCard;
