import React from 'react';
import * as S from './style';
import DefaultTemplate from '../Default';
import {
  ProductCardGrid,
  PageHeader,
  SectionHeader,
  SectionDivider,
  Empty,
} from '../../components';
import useProducts, { FILTER_TYPE } from '../../hooks/useProducts';
import { Header } from '../../types/data';

function UserLikedPage(): React.ReactElement {
  const [{ products }] = useProducts({ type: FILTER_TYPE.USER_LIKED });
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
        {products && products.length > 0 ? (
          <ProductCardGrid products={products} columns={2} />
        ) : (
          <Empty subtractHeight="52" text="찜한상품이 없어요..." />
        )}
      </S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default UserLikedPage;
