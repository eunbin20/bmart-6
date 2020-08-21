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
      <S.ModalContentContainer>
        <S.Image src={imageUrl} />
        <S.SectionContainer>
          <S.TitleWrapper>
            <S.Title>{title}</S.Title>
            <S.TitleDescription>6시간 안에 배송해드리는 상품입니다~</S.TitleDescription>
          </S.TitleWrapper>
          <S.PriceWrapper>
            <S.PriceRate>{discountedRate}%</S.PriceRate>
            <S.OriginalPrice>{makeComma(price)}원</S.OriginalPrice>
            <S.DiscountedPrice>{makeComma(discountedPrice)}원</S.DiscountedPrice>
          </S.PriceWrapper>
        </S.SectionContainer>
        <SectionDivider />
        <S.SectionContainer>
          <S.DescriptionWrapper>
            <S.DescriptionTerm>판매단위</S.DescriptionTerm>
            <S.DescriptionData>3박스</S.DescriptionData>
          </S.DescriptionWrapper>
          <S.DescriptionWrapper>
            <S.DescriptionTerm>중량/용량</S.DescriptionTerm>
            <S.DescriptionData>30g x 6개</S.DescriptionData>
          </S.DescriptionWrapper>
          <S.DescriptionWrapper>
            <S.DescriptionTerm>배송구분</S.DescriptionTerm>
            <S.DescriptionData>택배배송/직접배달</S.DescriptionData>
          </S.DescriptionWrapper>
          <S.DescriptionWrapper>
            <S.DescriptionTerm>포장타입</S.DescriptionTerm>
            <S.DescriptionData>상온/종이포장</S.DescriptionData>
          </S.DescriptionWrapper>
        </S.SectionContainer>
        <S.CartButtonContainer>
          나만 보고 있는 특별한 상품!
          <S.CartButton>장바구니 담기</S.CartButton>
        </S.CartButtonContainer>
      </S.ModalContentContainer>
    </Modal>
  );
};

export default ProductDetailModal;
