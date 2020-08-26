import React, { useState } from 'react';
import * as S from './style';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';
import { STORAGE_KEY } from '../../../commons/constants';
import { storage } from '../../../utils/storage';
import { Empty } from '../../../components';
import QuantityCounter from '../../small/QuantityCoutner';

export default function CartSection() {
  const [carts, setCarts] = useState(storage.get(STORAGE_KEY.CARTS));
  const [isAllActive, setIsAllActive] = useState(true);

  const generateImageByActive = (isActive: boolean) => (isActive ? activeImage : defaultImage);

  const toggleActive = (target: number | 'all') => {
    if (target === 'all') {
      setIsAllActive(!isAllActive);
      return;
    }
  };

  const setCount = () => {};

  return (
    <S.CartWrapper>
      {carts ? (
        <>
          <S.SelectManageContainer>
            <S.ChekBoxContainer>
              <S.CheckBox
                onClick={() => toggleActive('all')}
                id="cart-checkobx-all"
                background={generateImageByActive(isAllActive)}
              />
              <S.CheckAllText onClick={() => toggleActive('all')}>선택해제</S.CheckAllText>
            </S.ChekBoxContainer>
            <S.Text>선택 비우기</S.Text>
          </S.SelectManageContainer>
          <S.MainContainer>
            <S.Title>장바구니</S.Title>
            <S.ItemContainer>
              <S.ItemWrapper>
                <S.HeaderBox>
                  <S.CheckBox
                    onClick={() => toggleActive('all')}
                    id="cart-checkobx-1"
                    background={generateImageByActive(isAllActive)}
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
                      <QuantityCounter count={1} setCount={setCount} />
                    </S.QuantityCounterWrapper>
                  </S.ContentPriceBox>
                  <S.ItemDeleteButton onClick={() => {}}>삭제</S.ItemDeleteButton>
                </S.ContentBox>
              </S.ItemWrapper>
            </S.ItemContainer>
          </S.MainContainer>
        </>
      ) : (
        <Empty text="장바구니가 텅 비어있어요🤔🤔🤔🤔" />
      )}
    </S.CartWrapper>
  );
}
