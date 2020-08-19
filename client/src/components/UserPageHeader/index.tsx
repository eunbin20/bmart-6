import React from 'react';
import * as S from './style';

type SubPath = 'login' | 'join';

export default function UserPageHeader({ subPath }: { subPath: SubPath }) {
  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <S.Navigation to="/user/login" isActive={subPath === 'login'}>
          Sign In
        </S.Navigation>
        <S.Navigation to="/user/join" isActive={subPath === 'join'}>
          Sign Up
        </S.Navigation>
      </S.NavigationWrapper>
    </S.Wrapper>
  );
}
