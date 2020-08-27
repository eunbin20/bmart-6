import React from 'react';
import * as S from './style';
import { Framework7Icon } from '../../../components';
import { useAuthContext } from '../../../contexts/user/index';
import { useLocation } from 'react-router-dom';
import { setLink } from '../../../utils/functions';

const getSuggestLink = (isAuthorized: boolean) => {
  return isAuthorized
    ? {
        url: '/user/logout',
        text: '로그아웃 하기',
      }
    : {
        url: '/user/login',
        text: '로그인 하기',
      };
};

function MenuUserSection(): React.ReactElement {
  const location = useLocation();
  const authContext = useAuthContext();
  const suggestLink = getSuggestLink(authContext?.state.isAuthorized || false);
  return (
    <S.SectionContainer>
      <S.SuggestLink to={suggestLink.url}>
        {suggestLink.text}
        <Framework7Icon iconName="chevron_right" fontSize={'3.200vw'} />
      </S.SuggestLink>
      <S.UserMenuContainer>
        <S.MenuLink to={setLink('/user/order', location)}>
          <Framework7Icon iconName="list_dash" fontSize={'4.267vw'} />
          <S.UserMenuText>주문내역</S.UserMenuText>
        </S.MenuLink>
        <S.UserMenuBar />
        <S.MenuLink to={setLink('/user/liked', location)}>
          <Framework7Icon iconName="heart_fill" color="var(--red)" fontSize={'4.267vw'} />
          <S.UserMenuText>찜한상품</S.UserMenuText>
        </S.MenuLink>
      </S.UserMenuContainer>
    </S.SectionContainer>
  );
}

export default MenuUserSection;
