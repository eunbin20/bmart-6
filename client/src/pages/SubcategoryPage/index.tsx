import React, { useState } from 'react';
import * as S from './style';
import ProductCardGrid from '../../components/ProductCardGrid';
import ProductCardGridHeader from '../../components/ProductCardGridHeader';
import useProducts from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import DefaultTemplate from '../Default';
import { SORTOPTIONS } from '../../commons/constants';

function SubcategoryPage(): React.ReactElement {
  const [productsState, productDispatch] = useProducts({ subcategoryId: 1 });
  const [sortBy, setSortBy] = useState('기본 정렬순');

  const { products } = productsState;

  function changeSort(sortBy: string) {
    productDispatch(
      getProducts({
        subcategoryId: 1,
        ...(sortBy && { sortBy: SORTOPTIONS[sortBy] }),
      }),
    );
    setSortBy(sortBy);
  }

  return (
    <DefaultTemplate>
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader sortBy={sortBy} changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>
        {products && <ProductCardGrid products={products} columns={3} />}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default SubcategoryPage;
