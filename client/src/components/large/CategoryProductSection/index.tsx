import React, { useRef } from 'react';
import * as S from './style';
import { CategoryProducts } from '../../../types/data';
import { CategoryProductHeader, ProductSection, SectionDivider /* SectionHeader */ } from '../..';

interface Props {
  categoryProducts: CategoryProducts[];
}
function CategoryProductSection({ categoryProducts }: Props): React.ReactElement {
  const categoryRefs = useRef([]) as React.MutableRefObject<Array<HTMLDivElement>>;
  const bindCategoryRef = (ref: HTMLDivElement | null, index: number) => {
    if (ref !== null) {
      categoryRefs.current[index] = ref;
    }
  };
  return (
    <>
      <CategoryProductHeader
        categories={categoryProducts.map((categoryProduct) => categoryProduct.category)}
        categoryRefs={categoryRefs}
      />
      {categoryProducts.map((categoryProduct) => (
        <S.CategoryProductSection
          className={'category-product-section'}
          key={categoryProduct.category.id}
          ref={(ref) => bindCategoryRef(ref, categoryProduct.category.id)}
        >
          <ProductSection
            header={{ title: categoryProduct.category.name, isCategoryProductHeader: true }}
            products={categoryProduct.products}
            viewType={'grid'}
            columns={2}
          />
          <SectionDivider />
        </S.CategoryProductSection>
      ))}
    </>
  );
}

export default CategoryProductSection;
