import SubcategoryTemplate from './template';
import React from 'react';

import ProductCardGrid from '../../components/ProductCardGrid';
import ProductCardGridHeader from '../../components/ProductCardGridHeader';
import { Subcategory, ProductSort } from '../../types/Data';
import useProducts from '../../hooks/useProducts';
import { ACTION_FETCH_PRODUCTS } from '../../commons/constants/string';

function SubCategory(): React.ReactElement {
  const [state, setState] = useProducts({ subcategoryId: 1 });

  function changeSort(sortBy: ProductSort) {
    setState({
      type: ACTION_FETCH_PRODUCTS,
      data: {
        subcategoryId: 1,
        ...(sortBy && { sortBy }),
      },
    });
  }

  const { products } = state;
  if (!products || !products) {
    return (
      <SubcategoryTemplate
        productCardGridHeader={<ProductCardGridHeader changeSort={changeSort} />}
        productCardGrid={<></>}
      />
    );
  }

  return (
    <SubcategoryTemplate
      //   categoryBanner={<SubCategoryBanner />}
      productCardGridHeader={<ProductCardGridHeader changeSort={changeSort} />}
      productCardGrid={<ProductCardGrid products={products} />}
    />
  );
}

export default SubCategory;
