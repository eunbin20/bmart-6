import React from 'react';
import { FieldInputProps } from 'react-final-form';
import * as S from './style';

interface Props {
  input: FieldInputProps<any, HTMLElement>;
  meta: any;
  type: 'email' | 'text' | 'password' | 'passwordConrifm';
  placeholder: '이메일' | '이름' | '닉네임' | '비밀번호' | '비밀번호 확인';
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  submitError?: string;
}

export default function UserInput({ input, meta, type, placeholder, submitError, onKeyUp }: Props) {
  const defaultOnKeyCallback = () => {};
  return (
    <S.InputWrapper>
      <S.Input
        {...input}
        type={type}
        placeholder={placeholder}
        onKeyUp={onKeyUp ?? defaultOnKeyCallback}
      />
      <S.InputError visible={meta.touched && meta.error ? true : false}>{meta.error}</S.InputError>
      <S.InputError
        visible={!meta.error && submitError && !meta.dirtySinceLastSubmit ? true : false}
      >
        {submitError}
      </S.InputError>
    </S.InputWrapper>
  );
}
