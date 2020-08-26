import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { ProductDetailModal, AddCartModal } from '../../components';
import { storage } from '../../utils/storage';
import { delay } from '../../utils/functions';

export default function ProductDetailPage({
  history,
  match: { params },
}: RouteComponentProps<{ productId: string }>) {
  const [cartModalVisible, setCartModalVisible] = useState<boolean>(false);
  const [state] = useProducts({ limit: 1, id: Number(params?.productId) });
  const { products } = state;

  const onCartModalVisible = () => {
    // 장바구니 추가 모달
    setCartModalVisible(!cartModalVisible);
  };

  const onAddCart = async (id: number, quantity: number) => {
    storage.addCart(id, quantity);
    onCartModalVisible(); // modal off
    await delay(500); // 부드러운 ux를 위에 추가
    history.goBack(); // 뒤로가기
  };

  useEffect(() => {
    if (!params?.productId) {
      history.push('/');
      return;
    }
  }, []);

  if (!products || !products.length) return null;
  return (
    <>
      <ProductDetailModal product={products[0]} onCartModalVisible={onCartModalVisible} />
      <AddCartModal
        product={products[0]}
        isOpen={cartModalVisible}
        onCartModalVisible={onCartModalVisible}
        onAddCart={onAddCart}
      />
    </>
  );
}
