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
  const routePage = (url: string) => history.push(url);

  return (
    <S.PageHeaderContainer>
      <S.PageHeader>
        <Framework7Icon iconName={'bars'} />
        <S.LogoContainer onClick={() => routePage('/')}>{Logo()}</S.LogoContainer>
        <Framework7Icon
          iconName={'person_alt_circle_fill'}
          onClick={() => routePage('/user/login')}
        />
      </S.PageHeader>
      {isHome && (
        <S.SearchBar to={'/search'}>
          <Framework7Icon iconName={'search'} fontSize={'16px'} />
          이곳에서 검색하세요!
        </S.SearchBar>
      )}
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
