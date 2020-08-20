import React, { useState } from 'react';

import { TwoColumnCard, ThreeColumnCard, TwoHalfColumnCard } from './style';
import { Product, ProductGridColumns } from '../../../types/data';
import { LikeIcon } from '../../../commons/svgs';

interface Props extends Product {
  columns: ProductGridColumns;
  isLiked?: boolean;
  //   to: string;
  //   setRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const generateProductCards = (products: Product[], columns: ProductGridColumns) => {
  return products.map(({ id, ...rest }) => <ProductCard key={id} {...{ columns, ...rest }} />);
};

function selectStyle(columns: ProductGridColumns) {
  switch (columns) {
    case 2:
      return TwoColumnCard;
    case 2.5:
      return TwoHalfColumnCard;
    case 3:
      return ThreeColumnCard;
  }
}

function ProductCard({
  columns,
  isLiked = false,
  imageUrl,
  title,
  price,
  discountedPrice,
  discountedRate,
  isDiscounted,
}: Props): React.ReactElement {
  const S = selectStyle(columns);
  const [liked, setLiked] = useState(isLiked);

  const likeIconToggler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLiked((liked) => !liked);
  };

  return (
    <S.LinkWrapper to={'home'}>
      <S.ImgWrapper>
        <S.Image alt={'card'} src={imageUrl} />
        <S.LikeIconWrapper>{LikeIcon(liked, likeIconToggler)}</S.LikeIconWrapper>
      </S.ImgWrapper>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.PriceWrapper>
          {isDiscounted && (
            <>
              <S.DiscountedRate>{discountedRate}%</S.DiscountedRate>
              <S.DiscountedPrice>{price}원</S.DiscountedPrice>
            </>
          )}
          <S.Price>{discountedPrice}원</S.Price>
        </S.PriceWrapper>
      </S.ContentContainer>
    </S.LinkWrapper>
  );
}

export default ProductCard;
