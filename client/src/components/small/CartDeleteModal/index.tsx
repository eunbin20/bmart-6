import React from 'react';
import * as S from './style';

interface Props {
  visible: boolean;
  onVisible: () => void;
  onDelete: () => void;
}

export default function CartDeleteModal({ visible, onVisible, onDelete }: Props) {
  if (!visible) return null;
  return (
    <S.GrayBg onClick={onVisible}>
      <S.ModalWrapper>
        <S.Title>선택하신 항목을 모두 삭제하시겠습니까?</S.Title>
        <S.Button onClick={onVisible} hasBorder={true}>
          취소
        </S.Button>
        <S.Button onClick={onDelete}>확인</S.Button>
      </S.ModalWrapper>
    </S.GrayBg>
  );
}
