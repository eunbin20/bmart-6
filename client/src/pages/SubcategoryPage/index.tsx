import React, { useState } from 'react';
import * as S from './style';
import DefaultTemplate from '../Default';
import {
  ProductCardGridHeader,
  ProductCardGrid,
  PageHeader,
  SectionDivider,
} from '../../components';
import useProducts, { toggleProductIsLikedDispatcher } from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import { SORTOPTIONS, DEFAULT_SORT_OPTION } from '../../commons/constants';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  subcategoryId: string;
}

function SubcategoryPage({ match: { params } }: RouteComponentProps<Params>): React.ReactElement {
  const [{ products }, productDispatch] = useProducts({ subcategoryId: +params.subcategoryId });
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_OPTION);

  function changeSort(sortBy: string) {
    productDispatch(
      getProducts({
        subcategoryId: +params.subcategoryId,
        ...(sortBy && { sortBy: SORTOPTIONS[sortBy] }),
      }),
    );
    setSortBy(sortBy);
  }

  return (
    <DefaultTemplate>
      <PageHeader isHome={false} />
      <SectionDivider />
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader sortBy={sortBy} changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>
        {products && (
          <ProductCardGrid
            products={products}
            columns={2}
            onLikeIconClick={toggleProductIsLikedDispatcher(productDispatch)}
          />
        )}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default SubcategoryPage;
