import React from 'react';
import * as S from './style';

export default function Join() {
  return (
    <>
      <S.Header>Bmart</S.Header>
      <S.InputContainer>
        <S.Input type="email" name="email" placeholder="이메일" />
        <S.Input type="text" name="name" placeholder="이름" />
        <S.Input type="nickname" name="nickname" placeholder="닉네임" />
        <S.Input type="password" name="password" placeholder="비밀번호" />
      </S.InputContainer>
      <S.PushButton>arrow_right</S.PushButton>
      <S.Footer />
    </>
  );
}
