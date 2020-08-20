import React from 'react';
import DefaultTemplate from '../Default';
import SectionDivider from '../../components/smalls/SectionDivider';
import {
  PageHeader,
  EatNowSection,
  HotDealSection,
  ForYouSection,
  BestSellerSection,
  CategoryProductSection,
} from '../../components';
import CategoryIconGrid from '../../components/mediums/CategoryIconGrid';

function MainPage(): React.ReactElement {
  return (
    <DefaultTemplate>
      <PageHeader />
      {/* <Banner /> */}
      <CategoryIconGrid />
      <SectionDivider />
      <EatNowSection />
      <SectionDivider />
      <HotDealSection />
      <SectionDivider />
      <ForYouSection />
      <SectionDivider />
      <BestSellerSection />
      <SectionDivider />
      <CategoryProductSection />
    </DefaultTemplate>
  );
}

export default MainPage;
