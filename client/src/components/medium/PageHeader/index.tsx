import React from 'react';
import * as S from './style';
import { Logo } from '../../../commons/svgs';
import Icon from '../../small/Icon';

interface Props {
  isHome: boolean;
}

function PageHeader({ isHome }: Props): React.ReactElement {
  return (
    <S.PageHeaderContainer>
      <S.PageHeader>
        <Icon iconName={'bars'} />
        {Logo()}
        <Icon iconName={'person_alt_circle_fill'} />
      </S.PageHeader>
      {isHome && <S.SearchBar>이곳에서 검색하세요!</S.SearchBar>}
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
