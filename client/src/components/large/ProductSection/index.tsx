import React from 'react';
import * as S from './style';
import { Product, Header, ProductGridColumns, ProductViewType } from '../../../types/data';
import { SectionHeader, ProductCardGrid, ProductCardListView } from '../..';
import { VIEW_TYPE_GRID } from '../../../commons/constants';

interface Props {
  header: Header;
  products: Product[];
  viewType: ProductViewType;
  columns: ProductGridColumns;
}

function ProductSection({ header, products, viewType, columns }: Props): React.ReactElement {
  return (
    <S.ProductSection>
      <S.HeaderContainer>{<SectionHeader {...header} />}</S.HeaderContainer>
      {products.length === 0 ? (
        <S.ProductGridContainer>검색 결과가 없습니다.😭</S.ProductGridContainer>
      ) : viewType === VIEW_TYPE_GRID ? (
        <S.ProductGridContainer>
          {<ProductCardGrid products={products} columns={columns} />}
        </S.ProductGridContainer>
      ) : (
        <S.ProductListViewContainer>
          {<ProductCardListView products={products} columns={columns} />}
        </S.ProductListViewContainer>
      )}
    </S.ProductSection>
  );
}

export default ProductSection;
