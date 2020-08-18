import React, { useEffect, useState } from 'react';

import * as S from './style';
import { Product } from '../../types/data';

export interface Props extends Product {
  isLiked?: boolean;
  //   to: string;
  //   setRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

function ProductCard({
  imageUrl,
  title,
  price,
  discountedPrice,
  discountedRate,
  isDiscounted,
}: Props): React.ReactElement {
  return (
    <S.LinkWrapper to={'home'}>
      <S.ImgWrapper>
        <S.Image alt={'card'} src={imageUrl} />
      </S.ImgWrapper>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.PriceWrapper>
          {isDiscounted && (
            <>
              <S.DiscountedRate>{discountedRate}%</S.DiscountedRate>
              <S.DiscountedPrice>{discountedPrice}원</S.DiscountedPrice>
            </>
          )}
          <S.Price>{price}원</S.Price>
        </S.PriceWrapper>
      </S.ContentContainer>
    </S.LinkWrapper>
  );
}

export default ProductCard;
