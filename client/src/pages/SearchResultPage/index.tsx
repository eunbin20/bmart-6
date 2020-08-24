import React, { useState } from 'react';
import * as S from './style';
import {
  SearchBar,
  SectionDivider,
  ProductCardGrid,
  ProductCardGridHeader,
} from '../../components';
import { SORTOPTIONS } from '../../commons/constants';
import { RouteComponentProps } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';

interface Params {
  title: string;
}

function SearchResultPage({
  match: { params },
  history,
}: RouteComponentProps<Params>): React.ReactElement {
  const [{ products }, productDispatch] = useProducts({ title: params.title });
  const [sortBy, setSortBy] = useState('기본 정렬순');

  function changeSort(sortBy: string) {
    productDispatch(
      getProducts({
        title: params.title,
        ...(sortBy && { sortBy: SORTOPTIONS[sortBy] }),
      }),
    );
    setSortBy(sortBy);
  }
  return (
    <S.SearchResultPage>
      <S.SearchBarContainer onClick={() => history.goBack()}>
        <SearchBar history={history} createSearch={() => {}} presetTitle={params.title} />
      </S.SearchBarContainer>
      <SectionDivider />
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader sortBy={sortBy} changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>

      <S.ProductCardGridContainer>
        <ProductCardGrid products={products} columns={2} />
      </S.ProductCardGridContainer>
    </S.SearchResultPage>
  );
}

export default SearchResultPage;
