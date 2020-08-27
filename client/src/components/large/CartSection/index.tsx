import React, { useState, useEffect, useMemo } from 'react';
import * as S from './style';
import { useHistory, useLocation } from 'react-router-dom';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';
import { ProductInCart } from '../../../types/data';
import { storage } from '../../../utils/storage';
import { STORAGE_KEY, ERROR_STATUS } from '../../../commons/constants';
import { Empty, CartItem, CartDeleteModal, TotalCartMoney, Loading } from '../../../components';
import { createOrder } from '../../../apis';

export default function CartSection() {
  const [carts, setCarts] = useState<ProductInCart[]>(storage.getCarts());
  const [isAllActive, setIsAllActive] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const totalMoney = useMemo(
    () =>
      carts.reduce((acc, cur) => {
        if (!cur.isActive) {
          return 0;
        }
        return acc + (cur.isDiscounted ? cur.discountedPrice : cur.price) * cur.count;
      }, 0),
    [carts],
  );

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

  const checkHasActiveAndShowModal = () => {
    const activeCarts = carts.filter((cart: ProductInCart) => cart.isActive);
    if (!activeCarts.length) {
      return;
    }
    onModalVisible();
  };

  const onCounter = () => {
    const nextCarts = storage.getCarts();
    setCarts(nextCarts);
  }; // QuantityCounter 클릭

  const onSubmit = async () => {
    const minimunMoney = 5000;
    if (totalMoney < minimunMoney) {
      return;
    }
    const isAuthenticated = storage.get(STORAGE_KEY.ACCESS_TOKEN);
    if (!isAuthenticated) {
      history.push('/user/login', { from: location });
    }

    interface CreateOrderBody {
      products: {
        id: number;
        quantity: number;
      }[];
    }

    const products = carts
      .filter((cart: ProductInCart) => cart.isActive)
      .map((cart: ProductInCart) => ({ id: cart.id, quantity: cart.count }));

    try {
      await createOrder({ products } as CreateOrderBody);
      storage.set(STORAGE_KEY.CARTS, '[]');
      setIsLoading(true);
      setTimeout(() => {
        history.push('/order/complete', { from: location });
      }, 2000);
    } catch (e) {
      if (e.response.status === ERROR_STATUS.UNAUTHORIZED) {
        history.push('/user/login', { from: location });
      }
    }
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
          onCounter={onCounter}
        />
      );
    });
  };

  const onModalVisible = () => setModalVisible(!modalVisible);

  useEffect(() => {
    const cartsWithIsActive = carts.map((cart: ProductInCart) => ({ ...cart, isActive: true }));
    updateCarts(cartsWithIsActive);
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
            <S.Text onClick={checkHasActiveAndShowModal}>선택 비우기</S.Text>
          </S.SelectManageContainer>
          <S.MainContainer>
            <S.Title>장바구니</S.Title>
            <S.ItemContainer>{generateCarts(carts)}</S.ItemContainer>
          </S.MainContainer>
          <TotalCartMoney totalMoney={totalMoney} />
          <S.SubmitButton onClick={onSubmit} canSubmit={totalMoney >= 5000}>
            {totalMoney >= 5000 ? '주문하기' : '최소주문금액을 채워주세요.'}
          </S.SubmitButton>
          <CartDeleteModal
            visible={modalVisible}
            onVisible={onModalVisible}
            onDelete={deleteCartsByIsActive}
          />
          <Loading visible={isLoading} />
        </>
      ) : (
        <Empty text="장바구니가 텅 비어있어요🤔🤔🤔🤔" />
      )}
    </S.CartWrapper>
  );
}
