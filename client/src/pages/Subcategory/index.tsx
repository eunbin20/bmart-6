import SubcategoryTemplate from './template';
import React from 'react';

import ProductCardGrid from '../../components/ProductCardGrid';
import ProductCardGridHeader from '../../components/ProductCardGridHeader';
import { Subcategory, ProductSort } from '../../types/Data';
import useProducts from '../../hooks/useProducts';
import { ACTION_FETCH_PRODUCTS } from '../../commons/constants/string';

function SubCategory(): React.ReactElement {
  const [state, setState] = useProducts({ subcategoryId: 1 });

  const { products } = state;
  if (!products || !products) {
    return (
      <SubcategoryTemplate
        productCardGridHeader={<ProductCardGridHeader />}
        productCardGrid={<></>}
      />
    );
  }

  return (
    <SubcategoryTemplate
      //   categoryBanner={<SubCategoryBanner />}
      productCardGridHeader={<ProductCardGridHeader />}
      productCardGrid={<ProductCardGrid products={products} />}
    />
  );
}

export default SubCategory;
