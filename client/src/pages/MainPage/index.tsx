import React, { useEffect, useState } from 'react';
import DefaultTemplate from '../Default';
import {
  SectionDivider,
  BannerSlider,
  PageHeader,
  HotDealSection,
  ProductSection,
  CategoryProductSection,
  CategoryIconGrid,
  CartBadge,
} from '../../components';
import useProducts from '../../hooks/useProducts';
import { BANNERS, SORT_BY, VIEW_TYPE_GRID, VIEW_TYPE_LISTVIEW } from '../../commons/constants';
import { getCategories } from '../../apis';
import { Category } from '../../types/data';
import { storage } from '../../utils/storage';

function MainPage(): React.ReactElement {
  const [categories, setCategories] = useState<Category[]>([]);
  const [{ products: hotDealProducts }] = useProducts({ limit: 4, sortBy: SORT_BY.DISCOUNTEDRATE });
  const [{ products: eatNowProducts }] = useProducts({ limit: 6 });
  const [{ products: forYouProducts }] = useProducts({ limit: 5 });
  const [{ products: bestSellerProducts }] = useProducts({ limit: 5 });
  const [{ products: dummy }] = useProducts({ limit: 4 });
  const [cartCount, setCartCount] = useState(storage.getProductTotalCount()); // 장바구니에 렌더할 Product Count 개수

  const dummyProducts = categories.map((category, index) => ({
    category,
    products: dummy ?? [],
  }));

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories.data);
    });
  }, []);

  return (
    <DefaultTemplate>
      <PageHeader isHome={true} />
      <BannerSlider banners={BANNERS} />
      <CategoryIconGrid categories={categories} />
      <SectionDivider />
      <ProductSection
        {...{
          products: eatNowProducts ?? [],
          viewType: VIEW_TYPE_GRID,
          columns: 3,
          header: {
            title: '지금 뭐먹지?',
            description: '#간식시간',
          },
        }}
      />
      <SectionDivider />
      <HotDealSection
        {...{
          products: hotDealProducts ?? [],
          expiredDate: '2020-08-22 11:00:00',
        }}
      />
      <SectionDivider />
      <ProductSection
        {...{
          products: forYouProducts ?? [],
          viewType: VIEW_TYPE_LISTVIEW,
          columns: 2.5,
          header: {
            title: '관형님을 위해 준비한 상품',
          },
        }}
      />
      <SectionDivider />
      <ProductSection
        {...{
          products: bestSellerProducts ?? [],
          viewType: VIEW_TYPE_LISTVIEW,
          columns: 2.5,
          header: {
            title: '요즘 잘 팔려요',
          },
        }}
      />
      <SectionDivider />
      <BannerSlider banners={BANNERS} />
      <CategoryProductSection categoryProducts={dummyProducts} />
      <CartBadge count={cartCount} />
    </DefaultTemplate>
  );
}

export default MainPage;
