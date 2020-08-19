import React from 'react';
import { Form, Field } from 'react-final-form';
import { createUserValidation } from '../../utils/validation';
import * as S from './style';
import { UserJoin } from '../../types/data';
import UserPageInput from '../UserPageInput';

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
                  <UserPageInput input={input} meta={meta} type="email" placeholder="이메일" />
                )}
              </Field>
              <Field name="name">
                {({ input, meta }) => (
                  <UserPageInput input={input} meta={meta} type="text" placeholder="이름" />
                )}
              </Field>
              <Field name="nickname">
                {({ input, meta }) => (
                  <UserPageInput input={input} meta={meta} type="text" placeholder="닉네임" />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <UserPageInput input={input} meta={meta} type="password" placeholder="비밀번호" />
                )}
              </Field>
              <Field name="passwordConfirm">
                {({ input, meta }) => (
                  <UserPageInput
                    input={input}
                    meta={meta}
                    type="password"
                    placeholder="비밀번호 확인"
                  />
                )}
              </Field>
              <S.PushButton onClick={handleSubmit}>arrow_right</S.PushButton>
            </>
          )}
        />
      </S.InputContainer>
      <S.Footer />
    </>
  );
}
