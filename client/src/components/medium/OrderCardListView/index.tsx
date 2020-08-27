import React from 'react';
import * as S from './style';
import { Order } from '../../../types/data';
import { OrderCard } from '../..';

interface Props {
  orders: Order[];
}

function OrderCardListView({ orders }: Props): React.ReactElement {
  return (
    <S.OrderCardListView>
      {orders.reverse().map((order) => (
        <S.OrderCardContainer key={order.id}>
          <OrderCard order={order} />
        </S.OrderCardContainer>
      ))}
    </S.OrderCardListView>
  );
}

export default OrderCardListView;
