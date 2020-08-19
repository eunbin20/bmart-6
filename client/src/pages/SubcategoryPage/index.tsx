import React from 'react';
import * as S from './style';
import ProductCardGrid from '../../components/ProductCardGrid';
import ProductCardGridHeader from '../../components/ProductCardGridHeader';
import { ProductSort } from '../../types/data';
import useProducts from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import DefaultTemplate from '../Default';

function SubcategoryPage(): React.ReactElement {
  const [productsState, productDispatch] = useProducts({ subcategoryId: 1 });
  const { products } = productsState;

  function changeSort(sortBy: ProductSort) {
    productDispatch(
      getProducts({
        subcategoryId: 1,
        ...(sortBy && { sortBy }),
      }),
    );
  }

  return (
    <DefaultTemplate>
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>
        {products && <ProductCardGrid products={products} columns={3} />}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default SubcategoryPage;
