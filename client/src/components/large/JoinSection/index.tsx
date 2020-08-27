import React from 'react';
import * as S from './style';
import { Form, Field } from 'react-final-form';
import { createUserValidation } from '../../../utils/validation';
import { UserJoin } from '../../../types/data';
import { BmartLogo, UserPageInput } from '../..';

interface Props {
  onSubmit: (values: UserJoin) => void;
}

export default function JoinForm({ onSubmit }: Props) {
  return (
    <>
      <S.LogoContainer>
        <BmartLogo width={'37.333vw'} />
      </S.LogoContainer>
      <S.InputContainer>
        <Form
          onSubmit={onSubmit}
          validate={createUserValidation}
          render={({ handleSubmit, submitError }) => (
            <>
              <Field name="email">
                {({ input, meta }) => (
                  <UserPageInput
                    input={input}
                    meta={meta}
                    submitError={submitError}
                    type="email"
                    placeholder="이메일"
                  />
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
              <S.PushButton onClick={handleSubmit}>회원가입</S.PushButton>
            </>
          )}
        />
      </S.InputContainer>
    </>
  );
}
