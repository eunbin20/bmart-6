import React from 'react';

import * as S from './style';
import ProductCard from '../ProductCard';
// import ROUTES from 'commons/constants/routes';
import { Product } from '../../types/Data';

interface Props {
  products: Product[];
}

function ProductCardGrid({ products }: Props): React.ReactElement {
  return (
    <>
      <S.CardGridContainer>
        {!products || !products.length ? (
          <></>
        ) : (
          products.map((product) => {
            const {
              id,
              imageUrl,
              title,
              price,
              discountedPrice,
              discountRate,
              isDiscounted,
            } = product;

            return (
              <ProductCard
                key={id}
                imageUrl={imageUrl}
                title={title}
                price={price}
                discountedPrice={discountedPrice}
                discountRate={discountRate}
                isDiscounted={isDiscounted}

                // to={`${ROUTES.EVENT_DETAIL}/${id}`}
              />
            );
          })
        )}
      </S.CardGridContainer>
    </>
  );
}

export default ProductCardGrid;
