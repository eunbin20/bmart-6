import React from 'react';
import * as S from './style';
import { Category } from '../../../types/data';

interface Props {
  categories: Category[];
}

function CategoryIconGrid({ categories }: Props): React.ReactElement {
  return (
    <S.CategoryIconGrid>
      {categories.map((category) => (
        <S.CategoryIconWrapper key={category.id} to={`/category/${category.id}`}>
          <S.CategoryIcon
            src={`assets/category-${category.id}.png`}
            alt={`Category-${category.id}`}
          ></S.CategoryIcon>
        </S.CategoryIconWrapper>
      ))}
      <S.CategoryIconWrapper key={99} to={'/'}>
        <S.CategoryIcon src={'assets/category-more.png'} alt={'Category-more'}></S.CategoryIcon>
      </S.CategoryIconWrapper>
    </S.CategoryIconGrid>
  );
}

export default CategoryIconGrid;
