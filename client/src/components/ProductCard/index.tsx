import React from 'react';

import * as S from './style';

export interface Props {
  imageUrl?: string;
  title: string;
  price: number;
  discountedPrice?: number;
  discountRate?: number;
  isDiscounted: boolean;
  //   to: string;
  //   setRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

function ProductCard({
  imageUrl,
  title,
  price,
  discountedPrice,
  isDiscounted,
}: Props): React.ReactElement {
  const sampleImg =
    'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/04/10/16/9/26943073-90de-487a-bcf9-974a31db6607.jpg';
  return (
    <S.LinkWrapper to={'home'} data-testid={'main-card'}>
      <S.ImgWrapper>
        <S.Image alt={'card'} src={sampleImg} />
      </S.ImgWrapper>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.PriceWrapper>{price}원</S.PriceWrapper>
      </S.ContentContainer>
    </S.LinkWrapper>
  );
}

export default ProductCard;
