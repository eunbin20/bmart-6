import React, { useState } from 'react';
import * as S from './style';
import { Product, Header } from '../../../types/data';
import { SectionHeader, HotDealBigProductCard, HotDealTimer } from '../../../components';

interface Props {
  products: Product[];
  expiredDate: string;
}

function HotDealSection({ products, expiredDate }: Props): React.ReactElement {
  const sectionHeaderProps: Header = {
    title: '지금 사면',
    description: <S.HotDealSubtitle>깜짝 할인!</S.HotDealSubtitle>,
    trailing: <HotDealTimer expiredDate={expiredDate} />,
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <S.HotDealSection>
      <S.HeaderContainer>{<SectionHeader {...sectionHeaderProps} />}</S.HeaderContainer>
      <S.HotDealProductGrid>
        {products.map((product, index) => {
          return (
            <S.ImageContainer
              key={product.id}
              onClick={() => {
                setSelectedIndex(index);
              }}
              active={selectedIndex === index}
            >
              <S.Image alt={'card'} src={product.imageUrl} />
            </S.ImageContainer>
          );
        })}
      </S.HotDealProductGrid>
      <S.SelectedProductCard>
        {products[selectedIndex] && <HotDealBigProductCard product={products[selectedIndex]} />}
      </S.SelectedProductCard>
    </S.HotDealSection>
  );
}

export default HotDealSection;
