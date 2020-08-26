import React, { useState, useEffect } from 'react';
import * as S from './style';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';
import { ProductInCart } from '../../../types/data';
import { storage } from '../../../utils/storage';
import { Empty, CartItem } from '../../../components';

export default function CartSection() {
  const [carts, setCarts] = useState<ProductInCart[]>(storage.getCarts());
  const [isAllActive, setIsAllActive] = useState(true);

  const generateImageByActive = (isActive: boolean) => (isActive ? activeImage : defaultImage);

  const toggleCheckBoxActive = (target: number | 'all') => {
    if (target === 'all') {
      setIsAllActive(!isAllActive);
      const nextCarts = carts.map((cart: ProductInCart) => ({ ...cart, isActive: !isAllActive }));
      setCarts(nextCarts);

      return;
    }
  };

  const deleteCartItem = (id: number) => {
    const nextCarts = carts.filter((cart: ProductInCart) => cart.id !== id);
    storage.deleteCartItem(nextCarts);
    setCarts(nextCarts);
  };

  const generateCarts = (carts: ProductInCart[]) => {
    return carts.map((cart: ProductInCart) => {
      return (
        <CartItem
          key={cart.id}
          cart={cart}
          toggleCheckBoxActive={toggleCheckBoxActive}
          generateImageByActive={generateImageByActive}
          deleteCartItem={deleteCartItem}
        />
      );
    });
  };

  useEffect(() => {
    const cartsWithIsActive = carts.map((cart: ProductInCart) => ({ ...cart, isActive: true }));
    setCarts(cartsWithIsActive);
  }, []);

  return (
    <S.CartWrapper>
      {carts.length ? (
        <>
          <S.SelectManageContainer>
            <S.ChekBoxContainer>
              <S.CheckBox
                onClick={() => toggleCheckBoxActive('all')}
                id="cart-checkobx-all"
                background={generateImageByActive(isAllActive)}
              />
              <S.CheckAllText onClick={() => toggleCheckBoxActive('all')}>
                {isAllActive ? '선택 해제' : '모두 선택'}
              </S.CheckAllText>
            </S.ChekBoxContainer>
            <S.Text>선택 비우기</S.Text>
          </S.SelectManageContainer>
          <S.MainContainer>
            <S.Title>장바구니</S.Title>
            <S.ItemContainer>{generateCarts(carts)}</S.ItemContainer>
          </S.MainContainer>
        </>
      ) : (
        <Empty text="장바구니가 텅 비어있어요🤔🤔🤔🤔" />
      )}
    </S.CartWrapper>
  );
}
