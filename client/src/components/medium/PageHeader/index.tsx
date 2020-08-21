import React from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../../commons/svgs';
import { Framework7Icon } from '../..';

interface Props {
  isHome: boolean;
}

function PageHeader({ isHome }: Props): React.ReactElement {
  const history = useHistory();
  const routeLoginPage = () => {
    history.push('/user/login');
  };
  return (
    <S.PageHeaderContainer>
      <S.PageHeader>
        <Framework7Icon iconName={'bars'} />
        {Logo()}
        <Framework7Icon iconName={'person_alt_circle_fill'} onClick={routeLoginPage} />
      </S.PageHeader>
      {isHome && (
        <S.SearchBar>
          <Framework7Icon iconName={'search'} fontSize={'16px'} />
          이곳에서 검색하세요!
        </S.SearchBar>
      )}
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
