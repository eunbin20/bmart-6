import React from 'react';

import * as S from './style';
import { Menu } from '../../../types/data';

interface Props {
  menus: Menu[];
}

function MenuListGrid({ menus }: Props): React.ReactElement {
  return (
    <S.Grid>
      {menus.map((menu, index) => (
        <S.CardContainer key={index} to={`${menu.path}`}>
          <S.Card>{menu.name}</S.Card>
        </S.CardContainer>
      ))}
    </S.Grid>
  );
}

export default MenuListGrid;
