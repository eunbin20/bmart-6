import React, { useState } from 'react';
import * as S from './style';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';
import { STORAGE_KEY } from '../../../commons/constants';
import { storage } from '../../../utils/storage';
import { Empty } from '../../../components';

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

  return (
    <S.CartWrapper>
      {carts ? (
        <>
          <S.SelectManageContainer>
            <S.ChekBoxContainer>
              <S.CheckBoxAll background={generateImageByActive(isAllActive)} />
              <S.CheckAllText onClick={() => toggleActive('all')}>선택해제</S.CheckAllText>
            </S.ChekBoxContainer>
            <S.Text>선택 비우기</S.Text>
          </S.SelectManageContainer>
          <S.MainContainer>
            <S.Title>장바구니</S.Title>
            <S.ItemContainer></S.ItemContainer>
          </S.MainContainer>
        </>
      ) : (
        <Empty text="장바구니가 텅 비어있어요🤔🤔🤔🤔" />
      )}
    </S.CartWrapper>
  );
}
