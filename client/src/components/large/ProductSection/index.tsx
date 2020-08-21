import React from 'react';
import * as S from './style';
import { Product, Header, ProductGridColumns } from '../../../types/data';
import { SectionHeader, ProductCardGrid, ProductCardListView } from '../..';

interface Props {
  header: Header;
  products: Product[];
  viewType: 'grid' | 'listview';
  columns: ProductGridColumns;
}

function ProductSection({ header, products, viewType, columns }: Props): React.ReactElement {
  return (
    <S.ProductSection>
      <S.HeaderContainer>{<SectionHeader {...header} />}</S.HeaderContainer>

      {viewType === 'grid' ? (
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
