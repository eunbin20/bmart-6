import React from 'react';
import { Form, Field } from 'react-final-form';
import { createUserValidation } from '../../utils/validation';
import * as S from './style';
import { UserJoin } from '../../types/Data';

interface Props {
  onSubmit: (values: UserJoin) => void;
}

export default function Join({ onSubmit }: Props) {
  return (
    <>
      <S.Header>Bmart</S.Header>
      <S.InputContainer>
        <Form
          onSubmit={onSubmit}
          validate={createUserValidation}
          render={({ handleSubmit }) => (
            <>
              <Field name="email">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="email" placeholder="이메일" />
                    <S.InputError visible={meta.touched && meta.error ? true : false}>
                      {meta.error}
                    </S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="name">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="text" placeholder="이름" />
                    <S.InputError visible={meta.touched && meta.error ? true : false}>
                      {meta.error}
                    </S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="nickname">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="nickname" placeholder="닉네임" />
                    <S.InputError visible={meta.touched && meta.error ? true : false}>
                      {meta.error}
                    </S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="password" placeholder="비밀번호" />
                    <S.InputError visible={meta.touched && meta.error ? true : false}>
                      {meta.error}
                    </S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <Field name="passwordConfirm">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <S.Input {...input} type="password" placeholder="비밀번호 확인" />
                    <S.InputError visible={meta.touched && meta.error ? true : false}>
                      {meta.error}
                    </S.InputError>
                  </S.InputWrapper>
                )}
              </Field>
              <S.PushButton onClick={() => handleSubmit()}>arrow_right</S.PushButton>
            </>
          )}
        />
      </S.InputContainer>
      <S.Footer />
    </>
  );
}
