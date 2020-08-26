import React, { useState } from 'react';
import * as S from './style';
import { ProductInCart } from '../../../types/data';
import { QuantityCoutner } from '../../../components';
import { COUNTER_KEY } from '../../../commons/constants';

// 여기서 카운트 업데이트 해주면 되겠네

interface Props {
  cart: ProductInCart;
  toggleCheckBoxActive: (id: number | 'all') => void;
  generateImageByActive: () => void;
}

export default function CartItem(props: Props) {
  const { count, toggleCheckBoxActive, generateImageByActive } = props;
  const [isCheckBoxActive, setIsCheckBoxActive] = useState<boolean>(true);
  const [quantityCount, setQuantityCount] = useState<number>(count);

  const onQuantityCount = (type: 'minus' | 'plus') => {
    if (type === COUNTER_KEY.MINUS) {
      setQuantityCount(quantityCount + 1);
      return;
    }
  };

  return (
    <S.ItemWrapper>
      <S.HeaderBox>
        <S.CheckBox
          onClick={() => toggleCheckBoxActive('all')}
          id="cart-checkobx-1"
          background={generateImageByActive(isCheckBoxActive)}
        />
        <S.HeaderText id="cart-checkobx-1">CJ 유부초밥 맛있고 짠 초밥</S.HeaderText>
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
            <QuantityCoutner count={quantityCount} setCount={setCount} />
          </S.QuantityCounterWrapper>
        </S.ContentPriceBox>
        <S.ItemDeleteButton onClick={() => {}}>삭제</S.ItemDeleteButton>
      </S.ContentBox>
    </S.ItemWrapper>
  );
}
