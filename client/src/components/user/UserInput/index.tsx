import React from 'react';
import { FieldInputProps } from 'react-final-form';
import * as S from './style';

interface Props {
  input: FieldInputProps<any, HTMLElement>;
  meta: any;
  type: 'email' | 'text' | 'password' | 'passwordConrifm';
  placeholder: '이메일' | '이름' | '닉네임' | '비밀번호' | '비밀번호 확인';
}

export default function UserInput({ input, meta, type, placeholder }: Props) {
  return (
    <S.InputWrapper>
      <S.Input {...input} type={type} placeholder={placeholder} />
      <S.InputError visible={meta.touched && meta.error ? true : false}>{meta.error}</S.InputError>
    </S.InputWrapper>
  );
}
