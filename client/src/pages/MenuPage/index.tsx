import React, { useState, useEffect } from 'react';
import * as S from './style';
import {
  SectionDivider,
  SinglePageHeader,
  MenuUserSection,
  MenuListGrid,
  MenuListGridHeader,
} from '../../components';
import { getCategories } from '../../apis';
import { Menu, Category } from '../../types/data';

export default function MenuPage(): React.ReactElement {
  const [categoryMenus, setCategoryMenus] = useState<Menu[]>([]);

  useEffect(() => {
    getCategories().then((categories) => {
      const menus = categories.data.map(
        (category: Category): Menu => {
          return {
            name: category.name,
            path: `/category/${category.id}`,
          };
        },
      );

      setCategoryMenus(menus);
    });
  }, []);

  return (
    <S.MenuPageContainer>
      <SinglePageHeader />
      <MenuUserSection />
      <SectionDivider />
      <MenuListGridHeader title="카테고리 목록" />
      <MenuListGrid menus={categoryMenus} />
      <SectionDivider />
    </S.MenuPageContainer>
  );
}
