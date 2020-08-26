import React from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import { UserJoin } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userApis from '../../apis/user';
import { JoinSection, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE } from '../../commons/constants';

function JoinPage({ history }: RouteComponentProps) {
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

  return (
    <>
      <UserHeader />
      <JoinSection onSubmit={onSubmitJoin} />
    </>
  );
}

export default JoinPage;
