import React from 'react';
import Modal from 'react-modal';
import * as S from './style';
import { Product } from '../../../types/data';

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
    // borderRadius: '15px 15px 0px 0px',
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
          <S.OriginalPrice>{price}</S.OriginalPrice>
          <S.DiscountedPrice>{discountedPrice}</S.DiscountedPrice>
        </S.PriceWrapper>
      </S.TopContainer>
    </Modal>
  );
};

export default ProductDetailModal;
