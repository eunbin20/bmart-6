import React from 'react';

import * as S from './style';
import { Menu } from '../../../types/data';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

interface Props {
  menus: Menu[];
}

function MenuListGrid({ menus }: Props): React.ReactElement {
  const location = useLocation();
  return (
    <S.Grid>
      {menus.map((menu, index) => (
        <S.CardContainer key={index} to={setLink(`${menu.path}`, location)}>
          <S.Card>{menu.name}</S.Card>
        </S.CardContainer>
      ))}
    </S.Grid>
  );
}

export default MenuListGrid;
