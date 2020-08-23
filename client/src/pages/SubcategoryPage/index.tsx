import React, { useState } from 'react';
import * as S from './style';
import DefaultTemplate from '../Default';
import {
  ProductCardGridHeader,
  ProductCardGrid,
  PageHeader,
  SectionDivider,
} from '../../components';
import useProducts from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import { SORTOPTIONS } from '../../commons/constants';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  subcategoryId: string;
}

function SubcategoryPage({ match: { params } }: RouteComponentProps<Params>): React.ReactElement {
  const [{ products }, productDispatch] = useProducts({ subcategoryId: +params.subcategoryId });
  const [sortBy, setSortBy] = useState('기본 정렬순');

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
        {products && <ProductCardGrid products={products} columns={2} />}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default SubcategoryPage;
