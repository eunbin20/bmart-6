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
    <>
      <S.SelectManageContainer>
        <S.CheckBoxAll background={generateImageByActive(isAllActive)} />
        <S.CheckAllText onClick={() => toggleActive('all')}>선택해제</S.CheckAllText>
      </S.SelectManageContainer>
    </>
  );
}
