import React from 'react';
import * as S from './style';
import { Category } from '../../../types/data';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

interface Props {
  categories: Category[];
}

function CategoryIconGrid({ categories }: Props): React.ReactElement {
  const location = useLocation();
  return (
    <S.CategoryIconGrid>
      {categories.map((category) => (
        <S.CategoryIconWrapper key={category.id} to={setLink(`/category/${category.id}`, location)}>
          <S.CategoryIcon
            src={`assets/category-${category.id}.png`}
            alt={`Category-${category.id}`}
          ></S.CategoryIcon>
        </S.CategoryIconWrapper>
      ))}
      <S.CategoryIconWrapper key={99} to={setLink('/', location)}>
        <S.CategoryIcon src={'assets/category-more.png'} alt={'Category-more'}></S.CategoryIcon>
      </S.CategoryIconWrapper>
    </S.CategoryIconGrid>
  );
}

export default CategoryIconGrid;
