import React from 'react';

import { TwoColumnCard, ThreeColumnCard, TwoHalfColumnCard } from './style';
import { Product, ProductGridColumns } from '../../../types/data';
import { ProductLikeIcon } from '../..';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

interface Props extends Product {
  columns: ProductGridColumns;
  onLikeIconClick?: Function;
  //   to: string;
  //   setRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const generateProductCards = (
  products: Product[],
  columns: ProductGridColumns,
  onLikeIconClick?: Function,
) => {
  return products.map(({ id, ...rest }) => (
    <ProductCard key={id} {...{ id, columns, onLikeIconClick, ...rest }} />
  ));
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
  onLikeIconClick,
  id,
  imageUrl,
  title,
  price,
  discountedPrice,
  discountedRate,
  isDiscounted,
  isLiked,
}: Props): React.ReactElement {
  const S = selectStyle(columns);
  const location = useLocation();
  return (
    <S.LinkWrapper to={setLink(`/detail/${id}`, location)}>
      <S.ImgWrapper>
        <S.Image alt={'card'} src={imageUrl} />
        {onLikeIconClick && (
          <S.LikeIconWrapper>
            <ProductLikeIcon productId={id} isLiked={isLiked} onClick={onLikeIconClick} />
          </S.LikeIconWrapper>
        )}
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
