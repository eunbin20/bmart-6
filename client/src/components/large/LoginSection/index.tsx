import React from 'react';
import * as S from './style';
import { Form, Field } from 'react-final-form';
import { loginValidation } from '../../../utils/validation';
import { UserLogin } from '../../../types/data';
import UserPageInput from '../../small/UserInput';
import { Logo } from '../../../commons/svgs';

interface Props {
  onSubmit: (values: UserLogin) => void;
}

export default function LoginForm({ onSubmit }: Props) {
  return (
    <>
      <S.LogoContainer>{Logo(200, 100)}</S.LogoContainer>
      <S.InputContainer>
        <Form
          onSubmit={onSubmit}
          validate={loginValidation}
          render={({ handleSubmit, submitError }) => (
            <>
              <Field name="email">
                {({ input, meta }) => (
                  <UserPageInput input={input} meta={meta} type="email" placeholder="이메일" />
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <UserPageInput
                    input={input}
                    meta={meta}
                    submitError={submitError}
                    type="password"
                    placeholder="비밀번호"
                  />
                )}
              </Field>

              <S.PushButton onClick={handleSubmit}>arrow_right</S.PushButton>
            </>
          )}
        />
      </S.InputContainer>
    </>
  );
}
