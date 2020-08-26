import React from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import { UserLogin } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userActions from '../../contexts/user/actions';
import * as userApis from '../../apis/user';
import { LoginSection, UserFooter, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE, STORAGE_KEY } from '../../commons/constants';
import { storage } from '../../utils/storage';

function LoginPage({ history }: RouteComponentProps) {
  const userContext = useAuthContext();

  const onSubmitLogin = async (values: UserLogin) => {
    if (userContext === null) {
      return;
    }
    try {
      const { data } = await userApis.loginUser(values);
      storage.set(STORAGE_KEY.ACCESS_TOKEN, data.accessToken);
      userContext.setAction(userActions.setLoginSuccess());
      history.push('/');
    } catch (e) {
      if (e.response.status === ERROR_STATUS.UNAUTHORIZED) {
        // 비밀번호 틀림
        return { [FORM_ERROR]: ERROR_MESSAGE.LOGIN_FAILED };
      }
    }
  };

  return (
    <>
      <UserHeader />
      <LoginSection onSubmit={onSubmitLogin} />
      <UserFooter />
    </>
  );
}

export default LoginPage;
