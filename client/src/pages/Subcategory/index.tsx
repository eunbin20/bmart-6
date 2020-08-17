import SubcategoryTemplate from '../../templates/Subcategory';
import React from 'react';

import ProductCardGrid from '../../components/ProductCardGrid';
import ProductCardGridHeader from '../../components/ProductCardGridHeader';
import { ProductSort } from '../../types/Data';
import useProducts from '../../hooks/useProducts';
import { fetchProducts } from '../../hooks/useProducts/actions';

function SubCategory(): React.ReactElement {
  const [productsState, productsDispatch] = useProducts({ subcategoryId: 1 });
  const { products } = productsState;

  function changeSort(sortBy: ProductSort) {
    productsDispatch(
      fetchProducts({
        subcategoryId: 1,
        ...(sortBy && { sortBy }),
      }),
    );
  }

  return (
    <SubcategoryTemplate
      productCardGridHeader={<ProductCardGridHeader changeSort={changeSort} />}
      productCardGrid={products ? <ProductCardGrid products={products} /> : <></>}
    />
  );
}

export default SubCategory;
