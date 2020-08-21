import React from 'react';
import * as S from './style';
import { Product } from '../../../types/data';

interface Props {
  product: Product;
}

function HotDealBigProductCard({ product }: Props): React.ReactElement {
  return (
    <>
      <S.ImageWrapper>
        <S.DiscountedRateBadge>
          <span>{product.discountedRate}</span>%<br />
          할인
        </S.DiscountedRateBadge>
        <S.Image alt={'card'} src={product.imageUrl} />
      </S.ImageWrapper>
      <S.Title>{product.title}</S.Title>
      <S.PriceWrapper>
        {product.isDiscounted && (
          <>
            <S.DiscountedRate>{product.discountedRate}%</S.DiscountedRate>
            <S.DiscountedPrice>{product.price}원</S.DiscountedPrice>
          </>
        )}
        <S.Price>{product.isDiscounted ? product.discountedPrice : product.price}원</S.Price>
      </S.PriceWrapper>
    </>
  );
}

export default HotDealBigProductCard;
