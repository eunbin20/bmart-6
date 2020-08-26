import React, { useState } from 'react';
import * as S from './style';
import { ProductInCart } from '../../../types/data';
import { QuantityCoutner } from '../../../components';
import { COUNTER_KEY } from '../../../commons/constants';
import { storage } from '../../../utils/storage';
import { makeComma } from '../../../utils/functions';

// 여기서 카운트 업데이트 해주면 되겠네

interface Props {
  cart: ProductInCart;
  toggleCheckBoxActive: (id: number | 'all') => void;
  generateImageByActive: (isActive: boolean) => string;
  deleteCartItem: (id: number) => void;
}

export default function CartItem(props: Props) {
  const { cart, toggleCheckBoxActive, generateImageByActive, deleteCartItem } = props;
  const {
    id,
    title,
    count,
    quantity,
    imageUrl,
    price,
    discountedPrice,
    isDiscounted,
    isActive,
  } = cart;
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
    storage.updateCartById(id ?? 0, nextCount);
  };

  return (
    <S.ItemWrapper>
      <S.HeaderBox>
        <S.CheckBox
          onClick={() => toggleCheckBoxActive(id ?? 0)}
          id={`cart-checkobx-${id}`}
          background={generateImageByActive(isActive ?? true)}
        />
        <S.HeaderText id={`cart-checkobx-${id}`}>{title}</S.HeaderText>
      </S.HeaderBox>
      <S.ContentBox>
        <S.ContentImage src={imageUrl} />
        <S.ContentPriceBox>
          <S.Price>({makeComma(price)}) 원</S.Price>
          <S.DiscountedPriceWrapper>
            {isDiscounted && <S.StrikePrice>{makeComma(price)}원</S.StrikePrice>}
            <S.DiscountedPrice>
              {makeComma(isDiscounted ? discountedPrice : price)}원
            </S.DiscountedPrice>
          </S.DiscountedPriceWrapper>
          <S.QuantityCounterWrapper>
            <QuantityCoutner count={storageQuantity} setCount={onStorageCount} />
          </S.QuantityCounterWrapper>
        </S.ContentPriceBox>
        <S.ItemDeleteButton onClick={() => deleteCartItem(id ?? 0)}>삭제</S.ItemDeleteButton>
      </S.ContentBox>
    </S.ItemWrapper>
  );
}
