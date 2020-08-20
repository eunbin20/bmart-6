import React from 'react';
import * as S from './style';

type SubPath = 'login' | 'join';

export default function UserPageHeader({ subPath }: { subPath: SubPath }) {
  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <S.NavigationBox isActive={subPath === 'login'}>
          <S.Navigation to="/user/login">Sign In</S.Navigation>
        </S.NavigationBox>
        <S.NavigationBox isActive={subPath === 'join'}>
          <S.Navigation to="/user/join">Sign Up</S.Navigation>
        </S.NavigationBox>
      </S.NavigationWrapper>
    </S.Wrapper>
  );
}
