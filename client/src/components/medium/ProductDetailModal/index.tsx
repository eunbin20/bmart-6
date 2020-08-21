import React from 'react';
import Modal from 'react-modal';
import * as S from './style';
import SectionDivider from '../../small/SectionDivider';
import { Product } from '../../../types/data';
import { makeComma } from '../../../utils/functions';

interface Props {
  product: Product;
}

const customStyle = {
  overlay: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,0.16)',
  },

  content: {
    width: '375px',
    height: 'calc(100% - 52px)',
    top: 'auto',
    right: 'auto',
    left: 'auto',
    bottom: 0,
    background: 'var(--white)',
    padding: 0,
  },
};

const ProductDetailModal = (props: Props) => {
  const {
    product: { imageUrl, title, discountedRate, price, discountedPrice },
  } = props;

  return (
    <Modal isOpen={true} style={customStyle}>
      <S.Image src={imageUrl} />
      <S.TopContainer>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.TitleDescription>설명 입니당..</S.TitleDescription>
        </S.TitleWrapper>
        <S.PriceWrapper>
          <S.PriceRate>{discountedRate}%</S.PriceRate>
          <S.OriginalPrice>{makeComma(price)}원</S.OriginalPrice>
          <S.DiscountedPrice>{makeComma(discountedPrice)}원</S.DiscountedPrice>
        </S.PriceWrapper>
      </S.TopContainer>
      <SectionDivider />
    </Modal>
  );
};

export default ProductDetailModal;
