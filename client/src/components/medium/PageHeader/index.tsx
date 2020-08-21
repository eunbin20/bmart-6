import React from 'react';
import * as S from './style';
import { Logo } from '../../../commons/svgs';
import { Framework7Icon } from '../..';

interface Props {
  isHome: boolean;
}

function PageHeader({ isHome }: Props): React.ReactElement {
  return (
    <S.PageHeaderContainer>
      <S.PageHeader>
        <Framework7Icon iconName={'bars'} />
        {Logo()}
        <Framework7Icon iconName={'person_alt_circle_fill'} />
      </S.PageHeader>
      {isHome && <S.SearchBar>이곳에서 검색하세요!</S.SearchBar>}
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
