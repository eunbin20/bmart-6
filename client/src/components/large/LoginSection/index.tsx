import React from 'react';
import * as S from './style';
import { Form, Field } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import { loginValidation } from '../../../utils/validation';
import { UserLogin } from '../../../types/data';
import { KEYBOARD } from '../../../commons/constants';
import UserPageInput from '../../small/UserInput';
import { Logo } from '../../../commons/svgs';

interface Props {
  onSubmit: (values: UserLogin) => void;
  prevPath: string;
}

export default function LoginForm({ onSubmit, prevPath }: Props) {
  const location = useLocation();
  const joinLink = {
    pathname: '/user/join',
    state: { from: location, customFrom: prevPath },
  };

  return (
    <>
      <S.LogoContainer>{Logo(140, 50)}</S.LogoContainer>
      <S.InputContainer>
        <Form
          onSubmit={onSubmit}
          validate={loginValidation}
          render={({ handleSubmit, submitError }) => (
            <>
              {prevPath && <S.NeedLogin>로그인이 필요한 서비스에요!</S.NeedLogin>}
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
                    onKeyUp={(e) => {
                      if (e.key !== KEYBOARD.ENTER) {
                        return;
                      }
                      handleSubmit();
                    }}
                  />
                )}
              </Field>
              <S.PushButton onClick={handleSubmit}>로그인</S.PushButton>
              <S.Text>
                혹시, B마트가 처음이신가요? <S.JoinButton to={joinLink}>회원가입</S.JoinButton>
              </S.Text>
            </>
          )}
        />
      </S.InputContainer>
    </>
  );
}
