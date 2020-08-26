import React from 'react';
import * as S from './style';

export default function CartDeleteModal() {
  return (
    <S.GrayBg>
      <S.ModalWrapper>
        <S.Title>선택하신 항목을 모두 삭제하시겠습니까?</S.Title>
        <S.Button onClick={() => {}} hasBorder={true}>
          취소
        </S.Button>
        <S.Button onClick={() => {}}>확인</S.Button>
      </S.ModalWrapper>
    </S.GrayBg>
  );
}
