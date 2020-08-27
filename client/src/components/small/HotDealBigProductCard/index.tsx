import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import { Product } from '../../../types/data';
import { makeComma, setLink } from '../../../utils/functions';

interface Props {
  product: Product;
}

function HotDealBigProductCard({ product }: Props): React.ReactElement {
  const location = useLocation();

  return (
    <>
      <S.LinkWrapper to={setLink(`/detail/${product.id}`, location)}>
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
              <S.DiscountedPrice>{makeComma(product.price)}원</S.DiscountedPrice>
            </>
          )}
          <S.Price>
            {product.isDiscounted ? makeComma(product.discountedPrice) : makeComma(product.price)}원
          </S.Price>
        </S.PriceWrapper>
      </S.LinkWrapper>
    </>
  );
}

export default HotDealBigProductCard;
