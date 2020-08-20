import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import JoinForm from '../../components/user/JoinForm';
import { useAuthContext } from '../../contexts/user';
import { UserJoin, UserLogin } from '../../types/data';
import * as userApis from '../../apis/user';
import * as userActions from '../../contexts/user';
import UserPageHeader from '../../components/user/UserHeader';
import LoginForm from '../../components/user/LoginForm';
import { ERROR_STATUS, ERROR_MESSAGE } from '../../common/constants';
import { FORM_ERROR } from 'final-form';

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
    await userApis.createUser(values);
    history.push('/user/login');
  };

  const onSubmitLogin = async (values: UserLogin) => {
    if (userContext === null) {
      return;
    }
    try {
      await userApis.loginUser(values);
      userContext.setAction(userActions.setLoginSuccess());
      history.push('/');
    } catch (e) {
      if (e.response.status === ERROR_STATUS.UNAUTHORIZED) {
        return { [FORM_ERROR]: ERROR_MESSAGE.LOGIN_FAILED };
      }
    }
  };

  const renderBySubPath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <JoinForm onSubmit={onSubmitJoin} />;
    }
    return <LoginForm onSubmit={onSubmitLogin} />;
  };

  useEffect(() => {
    if (userContext === null) {
      return;
    }
    const { state } = userContext;
  }, [userContext]);

  return (
    <>
      <UserPageHeader subPath={params.subPath} />
      {renderBySubPath(params.subPath)}
    </>
  );
}

export default UserPage;
