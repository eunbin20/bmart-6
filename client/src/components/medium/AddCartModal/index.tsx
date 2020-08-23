import React from 'react';
import Modal from 'react-modal';
import * as S from './style';
import { Product } from '../../../types/data';
import { makeComma } from '../../../utils/functions';
import { SectionDivider, QuantityCoutner } from '../../../components';

const customStyle = {
  overlay: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,0.16)',
    zIndex: 100,
  },

  content: {
    width: '100%',
    height: '250px',
    top: 'auto',
    right: 'auto',
    left: 'auto',
    bottom: 0,
    background: 'var(--white)',
    padding: 0,
    borderRadius: '15px 15px 0px 0px',
  },
};

interface Props {
  product: Product;
  isOpen: boolean;
  onCartModalVisible: () => void;
}
function AddCartModal(props: Props) {
  const { product, isOpen, onCartModalVisible } = props;
  const { title, imageUrl, quantity, price } = product;
  return (
    <Modal
      isOpen={true}
      closeTimeoutMS={500}
      style={customStyle}
      onRequestClose={onCartModalVisible}
    >
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.CloseButton>닫기</S.CloseButton>
      </S.TitleContainer>
      <SectionDivider />
      <S.MainContainer>
        <S.Image src={imageUrl} />
        <S.DescriptionContainer>
          <S.DesciptionTitle>{title}</S.DesciptionTitle>
          <S.DesciptionQuantity>최대 구매수량 {quantity} 개</S.DesciptionQuantity>
          <S.DescriptionPrice>{makeComma(price)} 원</S.DescriptionPrice>
        </S.DescriptionContainer>
        <QuantityCoutner />
      </S.MainContainer>
    </Modal>
  );
}

export default AddCartModal;
