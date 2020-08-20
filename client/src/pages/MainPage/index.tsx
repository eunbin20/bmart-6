import React from 'react';
import DefaultTemplate from '../Default';
import SectionDivider from '../../components/small/SectionDivider';
import {
  PageHeader,
  HotDealSection,
  ProductSection,
  CategoryProductSection,
} from '../../components';
import CategoryIconGrid from '../../components/medium/CategoryIconGrid';
import useProducts from '../../hooks/useProducts';
import BannerSlider from '../../components/medium/BannerSlider';
import { BANNERS } from '../../commons/constants';

function MainPage(): React.ReactElement {
  const [{ products: eatNowProducts }] = useProducts({ subcategoryId: 1, limit: 6 });
  const [{ products: forYouProducts }] = useProducts({ subcategoryId: 1, limit: 5 });
  const [{ products: bestSellerProducts }] = useProducts({ subcategoryId: 1, limit: 5 });
  return (
    <DefaultTemplate>
      <PageHeader isHome={true} />
      <BannerSlider banners={BANNERS} />
      {/* <CategoryIconGrid />
      <SectionDivider /> */}
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
      <CategoryProductSection />
    </DefaultTemplate>
  );
}

export default MainPage;
