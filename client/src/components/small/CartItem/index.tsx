import React, { useState } from 'react';
import * as S from './style';
import { ProductInCart } from '../../../types/data';
import { QuantityCoutner } from '../../../components';
import { COUNTER_KEY } from '../../../commons/constants';
import { storage } from '../../../utils/storage';

// 여기서 카운트 업데이트 해주면 되겠네

interface Props {
  cart: ProductInCart;
  toggleCheckBoxActive: (id: number | 'all') => void;
  generateImageByActive: (isActive: boolean) => string;
}

export default function CartItem(props: Props) {
  const { cart, toggleCheckBoxActive, generateImageByActive } = props;
  const { id, count, quantity } = cart;
  const [isCheckBoxActive, setIsCheckBoxActive] = useState<boolean>(true);
  const [storageQuantity, setStorageQuantity] = useState<number>(count);

  const onStorageCount = (type: 'minus' | 'plus') => {
    let nextCount = 0;
    if (type === COUNTER_KEY.PLUS) {
      nextCount = storageQuantity === quantity ? storageQuantity : storageQuantity + 1;
    } else if (type === COUNTER_KEY.MINUS) {
      nextCount = storageQuantity - 1 === 1 ? 1 : storageQuantity - 1;
    }
    setStorageQuantity(nextCount);
    storage.updateCart(id ?? 0, nextCount);
  };

  return (
    <S.ItemWrapper>
      <S.HeaderBox>
        <S.CheckBox
          onClick={() => toggleCheckBoxActive('all')}
          id={`cart-checkobx-${id}`}
          background={generateImageByActive(isCheckBoxActive)}
        />
        <S.HeaderText id={`cart-checkobx-${id}`}>CJ 유부초밥 맛있고 짠 초밥</S.HeaderText>
      </S.HeaderBox>
      <S.ContentBox>
        <S.ContentImage src="" />
        <S.ContentPriceBox>
          <S.Price>(3,000원)</S.Price>
          <S.DiscountedPriceWrapper>
            <S.StrikePrice>3,000원</S.StrikePrice>
            <S.DiscountedPrice>4,900원</S.DiscountedPrice>
          </S.DiscountedPriceWrapper>
          <S.QuantityCounterWrapper>
            <QuantityCoutner count={storageQuantity} setCount={onStorageCount} />
          </S.QuantityCounterWrapper>
        </S.ContentPriceBox>
        <S.ItemDeleteButton onClick={() => {}}>삭제</S.ItemDeleteButton>
      </S.ContentBox>
    </S.ItemWrapper>
  );
}
