import React, { useEffect } from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import { UserJoin, UserLogin } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userActions from '../../contexts/user/actions';
import * as userApis from '../../apis/user';
import { JoinSection, LoginSection, UserFooter, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE, STORAGE_KEY } from '../../commons/constants';
import { storage } from '../../utils/storage';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function UserPage({ match: { params }, history }: RouteComponentProps<Params>) {
  const userContext = useAuthContext();

  const onSubmitJoin = async (values: UserJoin) => {
    if (userContext === null) {
      return;
    }
    delete values.passwordConfirm;
    try {
      await userApis.createUser(values);
      history.push('/user/login');
    } catch (e) {
      if (e.response.status === ERROR_STATUS.DUPLICATED) {
        return { [FORM_ERROR]: ERROR_MESSAGE.DUPLICATED_EMAIL };
      }
    }
  };

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

  const renderBySubPath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <JoinSection onSubmit={onSubmitJoin} />;
    }
    return <LoginSection onSubmit={onSubmitLogin} />;
  };

  return (
    <>
      <UserHeader subPath={params.subPath} />
      {renderBySubPath(params.subPath)}
      <UserFooter />
    </>
  );
}

export default UserPage;
