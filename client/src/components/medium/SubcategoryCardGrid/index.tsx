import React from 'react';

import * as S from './style';
import { Subcategory } from '../../../types/data';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

interface Props {
  subcategories: Subcategory[];
}

function SubcategoryCardGrid({ subcategories }: Props) {
  const location = useLocation();
  return (
    <S.Grid>
      {subcategories.map((subcategory) => (
        <S.CardContainer
          key={subcategory.id}
          to={setLink(`/subcategory/${subcategory.id}`, location)}
        >
          <S.Card>{subcategory.name}</S.Card>
        </S.CardContainer>
      ))}
    </S.Grid>
  );
}

export default SubcategoryCardGrid;
