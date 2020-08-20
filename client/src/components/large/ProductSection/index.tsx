import React from 'react';
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
    <>
      <SectionHeader {...header} />
      {viewType === 'grid' ? (
        <ProductCardGrid products={products} columns={columns} />
      ) : (
        <ProductCardListView products={products} columns={columns} />
      )}
    </>
  );
}

export default ProductSection;
