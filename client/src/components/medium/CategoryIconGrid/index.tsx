import React from 'react';
import * as S from './style';

function CategoryIconGrid(): React.ReactElement {
  return (
    <S.CategoryIconGrid>
      {Array(10)
        .fill(0)
        .map((category, index) => (
          <S.CategoryIconWrapper key={index + 1} to={`/category/${index + 1}`}>
            <S.CategoryIcon
              src={require(`../../../assets/category-${index + 1}.png`)}
              alt={`Category-${index + 1}`}
            ></S.CategoryIcon>
          </S.CategoryIconWrapper>
        ))}
    </S.CategoryIconGrid>
  );
}

export default CategoryIconGrid;
