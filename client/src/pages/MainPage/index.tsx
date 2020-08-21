import React from 'react';
import DefaultTemplate from '../Default';
import {
  SectionDivider,
  BannerSlider,
  PageHeader,
  // HotDealSection,
  ProductSection,
  CategoryIconGrid,
  CategoryProductSection,
} from '../../components';
import useProducts from '../../hooks/useProducts';
import { BANNERS, CATEGORIES } from '../../commons/constants';

function MainPage(): React.ReactElement {
  const [{ products: eatNowProducts }] = useProducts({ limit: 6 });
  const [{ products: forYouProducts }] = useProducts({ limit: 5 });
  const [{ products: bestSellerProducts }] = useProducts({ limit: 5 });
  const [{ products: dummy }] = useProducts({ limit: 4 });

  const dummyProducts = CATEGORIES.map((category, index) => ({
    category: { id: index + 1, name: category },
    products: dummy ?? [],
  }));

  return (
    <DefaultTemplate>
      <PageHeader isHome={true} />
      <BannerSlider banners={BANNERS} />
      <CategoryIconGrid />
      <SectionDivider />
      <ProductSection
        {...{
          products: eatNowProducts ?? [],
          viewType: 'grid',
          columns: 2,
          header: {
            title: '지금 뭐먹지?',
            description: '#간식시간',
          },
        }}
      />
      {/* <SectionDivider />
      <HotDealSection /> */}
      <SectionDivider />
      <ProductSection
        {...{
          products: forYouProducts ?? [],
          viewType: 'listview',
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
          viewType: 'listview',
          columns: 2.5,
          header: {
            title: '요즘 잘 팔려요',
          },
        }}
      />
      <SectionDivider />
      <BannerSlider banners={BANNERS} />
      <CategoryProductSection categoryProducts={dummyProducts} />
    </DefaultTemplate>
  );
}

export default MainPage;
