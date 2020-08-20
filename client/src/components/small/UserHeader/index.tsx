import React from 'react';
import * as S from './style';

type SubPath = 'login' | 'join';

export default function UserHeader({ subPath }: { subPath: SubPath }) {
  const setStyle = (type: SubPath) => {
    if (subPath !== type) {
      return {};
    }
    return { borderBottom: '2px solid var(--gray)' };
  };
  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <S.Navigation to="/user/login" activeStyle={setStyle('login')}>
          Sign In
        </S.Navigation>
        <S.Navigation to="/user/join" activeStyle={setStyle('join')}>
          Sign Up
        </S.Navigation>
      </S.NavigationWrapper>
    </S.Wrapper>
  );
}
