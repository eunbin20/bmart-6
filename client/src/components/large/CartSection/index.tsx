import React, { useState, useEffect } from 'react';
import * as S from './style';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';
import { ProductInCart } from '../../../types/data';
import { storage } from '../../../utils/storage';
import { STORAGE_KEY } from '../../../commons/constants';
import {
  Empty,
  CartItem,
  CartDeleteModal,
  TotalCartMoney,
  SectionDivider,
} from '../../../components';

export default function CartSection() {
  const [carts, setCarts] = useState<ProductInCart[]>(storage.getCarts());
  const [isAllActive, setIsAllActive] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const generateImageByActive = (isActive: boolean) => (isActive ? activeImage : defaultImage);

  const updateCarts = (nextCarts: ProductInCart[]) => {
    storage.set(STORAGE_KEY.CARTS, JSON.stringify(nextCarts));
    setCarts(nextCarts);
  };

  const toggleCheckBoxAll = () => {
    setIsAllActive(!isAllActive);
    const nextCarts = carts.map((cart: ProductInCart) => ({ ...cart, isActive: !isAllActive }));
    updateCarts(nextCarts);
  }; // 전체 토글

  const toggleCheckBox = (id: number, isActive: boolean) => {
    const targetIndex = carts.findIndex((cart: ProductInCart) => cart.id === id);
    const nextCarts = [
      ...carts.slice(0, targetIndex),
      { ...carts[targetIndex], isActive: !isActive },
      ...carts.slice(targetIndex + 1, carts.length),
    ];
    updateCarts(nextCarts);
  };

  const deleteCartItem = (id: number) => {
    const nextCarts = carts.filter((cart: ProductInCart) => cart.id !== id);
    updateCarts(nextCarts);
  };

  const deleteCartsByIsActive = () => {
    const nextCarts = carts.filter((cart: ProductInCart) => !cart.isActive);
    updateCarts(nextCarts);
  };

  const generateCarts = (carts: ProductInCart[]) => {
    return carts.map((cart: ProductInCart) => {
      return (
        <CartItem
          key={cart.id}
          cart={cart}
          toggleCheckBox={toggleCheckBox}
          generateImageByActive={generateImageByActive}
          deleteCartItem={deleteCartItem}
        />
      );
    });
  };

  const onModalVisible = () => setModalVisible(!modalVisible);

  useEffect(() => {
    const cartsWithIsActive = carts.map((cart: ProductInCart) => ({ ...cart, isActive: true }));
    setCarts(cartsWithIsActive);
  }, []); // 처음 렌더링 > 모두 active

  useEffect(() => {
    let isAllActive = true; // 모두가 active인지 체크
    carts.every((cart: ProductInCart) => {
      if (!cart.isActive) {
        isAllActive = false;
        return false;
      }
      return true;
    });
    setIsAllActive(isAllActive);
  }, [carts]);

  return (
    <S.CartWrapper>
      {carts.length ? (
        <>
          <S.SelectManageContainer>
            <S.ChekBoxContainer>
              <S.CheckBox
                onClick={toggleCheckBoxAll}
                id="cart-checkobx-all"
                background={generateImageByActive(isAllActive)}
              />
              <S.CheckAllText onClick={toggleCheckBoxAll}>
                {isAllActive ? '선택 해제' : '모두 선택'}
              </S.CheckAllText>
            </S.ChekBoxContainer>
            <S.Text onClick={onModalVisible}>선택 비우기</S.Text>
          </S.SelectManageContainer>
          <S.MainContainer>
            <S.Title>장바구니</S.Title>
            <S.ItemContainer>{generateCarts(carts)}</S.ItemContainer>
          </S.MainContainer>
          <TotalCartMoney />
          <CartDeleteModal
            visible={modalVisible}
            onVisible={onModalVisible}
            onDelete={deleteCartsByIsActive}
          />
        </>
      ) : (
        <Empty text="장바구니가 텅 비어있어요🤔🤔🤔🤔" />
      )}
    </S.CartWrapper>
  );
}
