import React from 'react';
import * as S from './style';
import BasedTemplate from '../../BasedTemplate';

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
    <BasedTemplate>
      {/* <S.MainBannerContainer>{mainBanner}</S.MainBannerContainer> */}
      <S.ProductCardGridHeaderContainer>{productCardGridHeader}</S.ProductCardGridHeaderContainer>
      <S.ProductCardGridContainer>{productCardGrid}</S.ProductCardGridContainer>
    </BasedTemplate>
  );
}

export default SubcategoryTemplate;
