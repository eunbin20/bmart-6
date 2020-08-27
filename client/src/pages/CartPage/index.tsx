import React from 'react';
import { PageHeader, SectionDivider, CartSection } from '../../components';
import DefaultTemplate from '../Default';

export default function CartPage() {
  return (
    <DefaultTemplate>
      <PageHeader isHome={false} />
      <SectionDivider />
      <CartSection />
    </DefaultTemplate>
  );
}
