import React from 'react';
import * as S from './style';
import { useHistory, useLocation } from 'react-router-dom';
import { Framework7Icon, BmartLogo } from '../..';
import { setLink } from '../../../utils/functions';

interface Props {
  isHome: boolean;
}

function PageHeader({ isHome }: Props): React.ReactElement {
  const history = useHistory();
  const location = useLocation();
  const routePage = (url: string) => history.push(url, { from: location });
  return (
    <S.PageHeaderContainer>
      <S.PageHeader>
        <S.IconContainer>
          {!isHome && (
            <Framework7Icon
              iconName="arrow_left"
              fontSize={'20px'}
              onClick={() => (location.state ? history.goBack() : routePage('/home'))}
            />
          )}
        </S.IconContainer>
        <S.LogoContainer onClick={() => routePage('/')}>
          <BmartLogo />
        </S.LogoContainer>
        <S.IconContainer>
          <Framework7Icon iconName={'bars'} onClick={() => routePage('/menu')} />
        </S.IconContainer>
      </S.PageHeader>
      {isHome && (
        <S.SearchBar to={setLink('/search', location)}>
          <Framework7Icon iconName={'search'} fontSize={'16px'} />
          이곳에서 검색하세요!
        </S.SearchBar>
      )}
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
