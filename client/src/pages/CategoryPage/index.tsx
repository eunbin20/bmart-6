import React, { useState } from 'react';
import * as S from './style';
import DefaultTemplate from '../Default';
import { ProductCardGridHeader, ProductCardGrid, PageHeader } from '../../components';
import useProducts from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import { SORTOPTIONS } from '../../commons/constants';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  categoryId: string;
}

function CategoryPage({ match: { params } }: RouteComponentProps<Params>): React.ReactElement {
  const [productsState, productDispatch] = useProducts({ categoryId: +params.categoryId });
  const [sortBy, setSortBy] = useState('기본 정렬순');

  const { products } = productsState;

  function changeSort(sortBy: string) {
    productDispatch(
      getProducts({
        categoryId: +params.categoryId,
        ...(sortBy && { sortBy: SORTOPTIONS[sortBy] }),
      }),
    );
    setSortBy(sortBy);
  }

  return (
    <DefaultTemplate>
      <PageHeader isHome={false} />
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader sortBy={sortBy} changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>
        {products && <ProductCardGrid products={products} columns={2} />}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default CategoryPage;
