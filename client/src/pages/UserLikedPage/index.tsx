import React from 'react';
import * as S from './style';
import DefaultTemplate from '../Default';
import { ProductCardGrid, PageHeader, SectionHeader, SectionDivider } from '../../components';
import useProducts from '../../hooks/useProducts';
import { Header } from '../../types/data';

function CategoryPage(): React.ReactElement {
  const [{ products }] = useProducts({});
  const sectionHeaderProps: Header = {
    title: '찜한상품',
    description: <S.ProductCount>{products ? products.length : '0'}개</S.ProductCount>,
  };

  return (
    <DefaultTemplate>
      <PageHeader isHome={false} />
      <SectionDivider />
      <S.HeaderContainer>{<SectionHeader {...sectionHeaderProps} />}</S.HeaderContainer>
      <S.ProductCardGridContainer>
        {products && <ProductCardGrid products={products} columns={2} />}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default CategoryPage;
