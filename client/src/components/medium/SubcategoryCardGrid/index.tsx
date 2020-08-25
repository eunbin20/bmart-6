import React from 'react';

import * as S from './style';
import { Subcategory } from '../../../types/data';

interface Props {
  subcategories: Subcategory[];
}

function SubcategoryCardGrid({ subcategories }: Props) {
  return (
    <S.Grid>
      {subcategories.map((subcategory) => (
        <S.CardContainer key={subcategory.id} to={`/subcategory/${subcategory.id}`}>
          <S.Card>{subcategory.name}</S.Card>
        </S.CardContainer>
      ))}
    </S.Grid>
  );
}

export default SubcategoryCardGrid;
