import React, { useState, useEffect } from 'react';
import { SectionDivider, SinglePageHeader, OrderCardListView } from '../../components';
import * as S from './style';
import { getOrders } from '../../apis/order';

export default function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(({ data: orders }) => setOrders(orders));
  }, []);

  return (
    <S.OrderListPage>
      <SinglePageHeader />
      <SectionDivider />
      <OrderCardListView orders={orders} />
    </S.OrderListPage>
  );
}
