import React, { useState, useEffect } from 'react';
import * as S from './style';
import {
  SearchBar,
  SectionDivider,
  ProductCardGrid,
  ProductCardGridHeader,
} from '../../components';
import { SORTOPTIONS, DEFAULT_SORT_OPTION } from '../../commons/constants';
import { RouteComponentProps } from 'react-router-dom';
import useProducts, { toggleProductIsLikedDispatcher } from '../../hooks/useProducts';
import { getProducts } from '../../hooks/useProducts/actions';
import { ERROR_STATUS } from '../../commons/constants';

interface Params {
  title: string;
}

function SearchResultPage({
  match: { params },
  history,
  location,
}: RouteComponentProps<Params>): React.ReactElement {
  const [{ products, status }, productDispatch] = useProducts({ title: params.title });
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_OPTION);

  function changeSort(sortBy: string) {
    productDispatch(
      getProducts({
        title: params.title,
        ...(sortBy && { sortBy: SORTOPTIONS[sortBy] }),
      }),
    );
    setSortBy(sortBy);
  }

  useEffect(() => {
    if (status === ERROR_STATUS.UNAUTHORIZED) {
      history.push('/user/login', { from: location });
    }
  }, [status]);

  return (
    <S.SearchResultPage>
      <S.SearchBarContainer>
        <SearchBar
          isSearchPage={false}
          history={history}
          createSearch={() => {}}
          presetTitle={params.title}
        />
      </S.SearchBarContainer>
      <SectionDivider />
      <S.ProductCardGridHeaderContainer>
        {<ProductCardGridHeader sortBy={sortBy} changeSort={changeSort} />}
      </S.ProductCardGridHeaderContainer>
      {status === ERROR_STATUS.SUCCESS && (!products || products.length === 0) ? (
        <S.ImageContainer>
          <S.NoProductImage src={'/assets/sad.png'} alt={'no-products'}></S.NoProductImage>
          <S.NoProductTitle>검색 결과가 없어요!</S.NoProductTitle>
        </S.ImageContainer>
      ) : (
        <S.ProductCardGridContainer>
          {products && (
            <ProductCardGrid
              products={products}
              columns={2}
              onLikeIconClick={toggleProductIsLikedDispatcher(productDispatch)}
            />
          )}
        </S.ProductCardGridContainer>
      )}
    </S.SearchResultPage>
  );
}

export default SearchResultPage;
