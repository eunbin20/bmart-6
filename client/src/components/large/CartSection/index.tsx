import React, { useState } from 'react';
import * as S from './style';
import activeImage from './aseets/checkbox-active.png';
import defaultImage from './aseets/checkbox-default.png';

export default function CartSection() {
  const [isAllActive, setIsAllActive] = useState(true);

  const generateImageByActive = (isActive: boolean) => (isActive ? activeImage : defaultImage);
  const toggleActive = (target: number | 'all') => {
    if (target === 'all') {
      setIsAllActive(!isAllActive);
      return;
    }
  };

  return (
    <React.Fragment>
      <S.SelectManageContainer>
        <S.ChekBoxContainer>
          <S.CheckBoxAll background={generateImageByActive(isAllActive)} />
          <S.CheckAllText onClick={() => toggleActive('all')}>선택해제</S.CheckAllText>
        </S.ChekBoxContainer>
        <S.Text>선택 비우기</S.Text>
      </S.SelectManageContainer>
    </React.Fragment>
  );
}
