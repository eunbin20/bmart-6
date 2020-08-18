import React from 'react';
import * as S from './style';
import DefaultTemplate from '../../pages/Default';

interface Props {
  // mainBanner: React.ReactNode;
  productCardGridHeader: React.ReactNode;
  productCardGrid: React.ReactNode;
}

function SubcategoryTemplate({
  productCardGridHeader,
  productCardGrid,
}: Props): React.ReactElement {
  return (
    <DefaultTemplate>
      {/* <S.MainBannerContainer>{mainBanner}</S.MainBannerContainer> */}
      <S.ProductCardGridHeaderContainer>{productCardGridHeader}</S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>{productCardGrid}</S.ProductCardGridContainer>
    </DefaultTemplate>
  );
}

export default SubcategoryTemplate;
