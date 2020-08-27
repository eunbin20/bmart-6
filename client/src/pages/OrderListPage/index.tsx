import React, { useState, useEffect } from 'react';
import { SectionDivider, PageHeader, OrderCardListView, Empty } from '../../components';
import * as S from './style';
import { getOrders } from '../../apis/order';

export default function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(({ data: orders }) => setOrders(orders));
  }, []);

  return (
    <S.PageContainer>
      <PageHeader isHome={false} />
      <SectionDivider />
      <S.OrderListContainer>
        {orders && orders.length > 0 ? (
          <OrderCardListView orders={orders} />
        ) : (
          <Empty text="주문내역이 없어요..." />
        )}
      </S.OrderListContainer>
    </S.PageContainer>
  );
}
